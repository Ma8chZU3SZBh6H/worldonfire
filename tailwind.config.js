module.exports = {
    purge: [
        "./resources/**/*.blade.php",

        "./resources/**/*.js",

        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                "auto-auto-1fr": "auto auto 1fr",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
