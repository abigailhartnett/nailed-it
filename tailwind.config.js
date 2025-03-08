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
        brown: '#904A00',

        lightGray: '#F9FAFC',
        mediumGray: '#E3E4E6',
        darkGray: '#73727A',

        paleGreen: '#EFFDFC',
        lightGreen: '#D4FDE5',
        mediumGreen: '#00D8C3',
        darkGreen: '#006728',
        brightGreen: '#21BA6A',

        paleBlue: '#F9FAFC',
        lightBlue: '#D8EAFF',
        mediumBlue: '#40CFFF',
        darkBlue: '#0A42B5',

        lightPurple: '#CB82FF',
        mediumPurple: '#7E8CFF',

        palePink: '#FFF6FB',
        mediumPink: '#FF69BD',
        darkPink: '#FF6884',

        mediumOrange: '#FFBA00',
        lightOrange: '#FFECD3',
        darkOrange: '#FF8D00',
        darkestOrange: '#A12E05',

        lightYellow: '#FFF9BC',
      },
    },
  },
  plugins: [],
};
