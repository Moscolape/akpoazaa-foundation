/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          header: {
            logoText: '#586261',
          },
          primary: {
            DEFAULT: '#be202f',
            secondary: '#a6cc39',
            tertiary: '#f69223',
            last: '#02a69d'
          },
        },
        backgroundImage: {},
        screens: {
          'mo': '320px',
        }
      },
    },
    plugins: [],
  };
  