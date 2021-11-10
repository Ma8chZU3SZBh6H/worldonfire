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
                "auto-1fr-1fr": "auto 1fr 1fr",
                "auto-1fr-10fr": "auto 1fr 10fr",
                "auto-1fr-5fr": "auto 1fr 5fr",
                "auto-1fr-4fr": "auto 1fr 4fr",
                "auto-1fr-3fr": "auto 1fr 3fr",
                "auto-1fr-2fr": "auto 1fr 2fr",
                "auto-1fr-2fr-home": "auto minmax(300px, 600px) 2fr",
                "1fr-2fr-home": "minmax(300px, 600px) 2fr",
                "auto-1fr": "auto 1fr",
                "1fr-auto": "1fr auto",
                "1fr-1fr": "1fr 1fr",
                "1fr-10fr": "1fr 10fr",
                "1fr-5fr": "1fr 5fr",
                auto: "auto",
                "1fr": "1fr",
            },
            backgroundImage: {
                test: "url('https://coolmaterial.com/wp-content/uploads/2021/11/Zipcharge-Go-4.jpg')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
