module.exports = {
    content: ["./src/**/*.{html,js}", "./*.{html,js}"],
    theme: {
        colors: {
            'white': '#fffcf2ff',
            'silver': '#bdccb9',
            'olive': '#403d39ff',
            'black': '#252422ff',
            'blue': 'rgba(0, 0, 255, 0.2)',
            'green': 'rgba(179, 255, 160, 0.2)',
            'yellow': 'rgba(255, 241, 160, 0.2)',
            'purple': 'rgba(188, 160, 255, 0.2)',
        }
        ,
        fontFamily: {
            serif: ['Newsreader', 'serif']
        },
        extend: {
            translate: {
                'a': '80%',
                'b': '150%',
                'c': '240%',
                'd': '380%',
            }
        },
    },
    plugins: [],
}
