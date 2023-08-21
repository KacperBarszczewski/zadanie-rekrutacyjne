/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                'beige': '#DCC1AB',
                'grey': '#F5F0EC',
            },
            keyframes: {
                fad: {
                    '0%': { opacity: 0.4 },
                    '100%': { opacity: 1 }

                }
            },
            animation: {
                'fade': 'fad 1s linear',
            },
        },
    },
}