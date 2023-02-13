const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                'site': {
                    800: '#BF001F',
                    700: '#CF0223',
                    600: '#DD0225',
                    500: '#EB0328',
                    400: '#F10F33',
                    300: '#F9193C',
                    200: '#FF2648',
                    100: '#FF3655',
                }
            },
            fontFamily: {
                'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
                'open-sans': ['OpenSans', ...defaultTheme.fontFamily.sans],
                'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans]
            },
        },
    },

    plugins: [],
};
