/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        // Add extra paths here
    ],
    theme: {
        fontFamily: {
            roboto: 'Roboto, Oswald',
            varela: 'Varela Round',
            inter: 'Inter',
            solway: 'Solway',
            manrope: 'Manrope',
            mono: 'ui-monospace, SFMono-Regular',
        },

        extend: {},
    },
    plugins: [],
}
