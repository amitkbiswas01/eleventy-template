module.exports = {
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        process.env.ELEVENTY_ENV === "prod"
            ? require("cssnano")({ preset: "default" })
            : null,
    ],
};
