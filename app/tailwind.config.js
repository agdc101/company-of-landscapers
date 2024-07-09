/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      inset: {
        '100': '25rem',
        '110': '30rem',
        '120': '35rem',
        '140': '45rem',
        '160': '55rem',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    clipPath: {
      'custom-shape': 'polygon(25% 10%, 75% 20%, 90% 60%, 70% 90%, 30% 80%, 10% 40%)'
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-custom-shape': {
          'clip-path': 'polygon(25% 10%, 75% 20%, 90% 60%, 70% 90%, 30% 80%, 10% 40%)'
        }
      });
    }
  ],
}

