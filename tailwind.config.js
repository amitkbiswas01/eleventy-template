module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ["./src/*.njk", "./src/**/*.njk", "./src/**/**/*.njk"],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
