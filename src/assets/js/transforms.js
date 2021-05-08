const htmlmin = require("html-minifier");

exports.htmlMinifier = (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
        const minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
        });
        return minified;
    }
    return content;
};
