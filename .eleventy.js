const fs = require("fs");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const lazyImagesPlugin = require("eleventy-plugin-lazyimages");
const embedYouTube = require("eleventy-plugin-youtube-embed");

const {
    readableDate,
    htmlDateString,
    head,
    minimum,
    readTime,
} = require("./src/assets/js/filters");

const { htmlMinifier } = require("./src/assets/js/transforms");

module.exports = function (eleventyConfig) {
    // official plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(lazyImagesPlugin);
    eleventyConfig.addPlugin(embedYouTube);

    // passthrough assets
    eleventyConfig.addPassthroughCopy("src/public");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/assets/img");
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/js");

    // set human and crawler readable dates
    eleventyConfig.addFilter("readableDate", readableDate);
    eleventyConfig.addFilter("htmlDateString", htmlDateString);

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", head);
    // Get minimum elements from a collection.
    eleventyConfig.addFilter("min", minimum);
    // estimated reading time
    eleventyConfig.addFilter("readTime", readTime);
    // add md filter
    eleventyConfig.addFilter("md", function (content = "") {
        return markdownIt({ html: true }).render(content);
    });

    // minify html
    if (process.env.ELEVENTY_ENV === "prod")
        eleventyConfig.addTransform("htmlmin", htmlMinifier);

    // basic tags collections
    eleventyConfig.addCollection("tagList", function (collection) {
        let tagSet = new Set();
        collection.getAll().forEach(function (item) {
            if ("tags" in item.data) {
                let tags = item.data.tags;

                tags = tags.filter(function (item) {
                    switch (item) {
                        // this list should match the `filter` list in tags.njk
                        case "all":
                        case "nav":
                        case "post":
                        case "posts":
                            return false;
                    }
                    return true;
                });
                for (const tag of tags) {
                    tagSet.add(tag);
                }
            }
        });

        // returning an array in addCollection
        return [...tagSet];
    });

    // to link tags
    eleventyConfig.setDataDeepMerge(true);

    // To create excerpts
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        excerpt_alias: "post_excerpt",
        excerpt_separator: "<!-- excerpt -->",
    });

    // override markdown library
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
    }).use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#",
    });
    eleventyConfig.setLibrary("md", markdownLibrary);

    // BrowserSync Overrides
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, browserSync) {
                const content_404 = fs.readFileSync("dist/404.html");

                browserSync.addMiddleware("*", (req, res) => {
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.end();
                });
            },
        },
        ui: false,
        ghostMode: false,
    });

    return {
        passthroughFileCopy: true,
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",

        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist",
        },
    };
};
