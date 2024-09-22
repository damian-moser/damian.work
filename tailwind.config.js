/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        black: ['Poppins Black'],
        bold: ['Poppins Bold'],
        medium: ['Poppins Medium'],
        regular: ['Poppins Regular'],
        light: ['Poppins Light'],
        thin: ['Poppins Thin'],
        logo: ['Norican Regular']
      },
      colors: {
        bg: '#fafafa',
        secondary: '#000000',
        primary: '#004fff',
        'primary-hover': '#001a4f',
        error: '#ff0101',
        'header-nav-hover': '#eee',
        'header-nav': '#f5f5f5',
        input: '#eee',
        'input-hover': '#fafafa',
        popup: '#00000052',
        'font-primary': '#202020',
        'font-primary-hover': '#666666',
        'font-secondary': '#ffffff'
      },
      maxWidth: {
        size: '1330px'
      },
      width: {
        size: '1330px'
      },
      borderColor: {
        border: '#dfdfdf'
      },
      boxShadow: {
        normal: '0 0 2rem rgba(0, 0, 0, 0.35)'
      },
      animation: {
        'fade-in-top-slow': 'fadeInTop 1s ease-out forwards',
        'fade-in-top-fast': 'fadeInTop 0.5s ease-out forwards',
        'fade-in-left-slow': 'fadeInLeft 1.25s ease-out forwards',
        'fade-in-left-mid': 'fadeInLeft 1s ease-out forwards',
        'fade-in-left-fast': 'fadeInLeft 0.75s ease-out forwards',
        'fade-in-right-slow': 'fadeInRight 1s ease-out forwards',
        'fade-in-right-fast': 'fadeInRight 0.5s ease-out forwards',
        'fade-in-top-right': 'fadeInTopRight 0.75s ease-out forwards',
        'fade-out-top-right': 'fadeOutTopRight 0.75s ease-out forwards'
      },
      keyframes: {
        fadeInTop: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-100%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        fadeInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(100%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadeInTopRight: {
          '0%': {
            opacity: 0,
            transform: 'translate(100%, -100%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translate(0, 0)'
          }
        },
        fadeOutTopRight: {
          '0%': {
            opacity: 1,
            transform: 'translate(0, 0)'
          },
          '100%': {
            opacity: 0,
            transform: 'translate(100%, -100%)'
          }
        }
      }
    }
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          display: 'inline-block',
          padding: '1rem 2rem',
          backgroundColor: theme('colors.primary'),
          color: '#ffffff',
          fontSize: '1rem',
          borderRadius: '999px',
          fontFamily: theme('fontFamily.medium'),
          boxShadow: theme('boxShadow.normal'),
          userSelect: 'none',
          '-webkit-user-select': 'none',
          '-moz-user-select': 'none',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer',
          border: 'none',
          outline: 'none',

          '&:hover': {
            backgroundColor: theme('colors.primary-hover')
          }
        },
        '.hover-text': {
          color: theme('colors.font-primary'),
          transition: 'color 0.3s ease',

          '&:hover': {
            color: theme('colors.font-primary-hover')
          }
        }
      })
    }
  ]
}
