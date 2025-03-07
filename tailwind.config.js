const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        kodchasan: ['Kodchasan', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        purple: '#D37FFC',
        green: '#00E275',
        gray: '#9AA3B4',
        red: '#9AA3B4',
        blue: '#44A7FF',
        pink: '#FF66B8',

        lightGray: '#F9FAFC',
        mediumGray: '#E3E4E6',
        darkGray: '#73727A',

        paleGreen: '#EFFDFC',
        mediumGreen: '#00D8C3',
        darkGreen: '#007771',
        brightGreen: '#21BA6A',

        mediumBlue: '#00D9EF',

        lightPurple: '#CB82FF',
        mediumPurple: '#7E8CFF',

        palePink: '#FFF6FB',
        mediumPink: '#FF69BD',
        darkPink: '#FF6884',

        mediumOrange: '#FFBA00',
        darkOrange: '#FF8D00',

        mediumBlue: '#40CFFF',
      },
    },
  },
  plugins: [],
};
