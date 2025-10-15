/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // --- Tus colores originales (se conservan) ---
        'fondo': '#6EC1C4',
        'borde': '#3B8A90',
        'amarillo': '#FBE480',
        'crema': '#F7F5EE',
        'rosa': '#F5B6C1',
        'negro': '#000000',
        'gris': '#444444',
        'detalles': '#B5E8F0',

        // --- Colores del nuevo diseño (añadidos para compatibilidad con el HTML) ---
        'sus-blue': '#A0DDEE',    // <-- AÑADIDO
        'sus-cream': '#F7F3E3',   // <-- AÑADIDO
        'sus-yellow': '#FBF2A3',  // <-- AÑADIDO
        'sus-pink': '#F5C5D4',    // <-- AÑADIDO
        'sus-dark': '#2C2A2A',    // <-- AÑADIDO
      },
      fontFamily: {
        // --- Tu fuente original (se conserva) ---
        'sans': ['Montserrat', 'sans-serif'],
        // --- Fuente para títulos del nuevo diseño ---
        'fancy': ['Playfair Display', 'serif'], // <-- AÑADIDO
        'handwritten': ['Dancing Script', 'cursive'], // <-- AÑADIDO
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/background.png')",
        'contacto-pattern': "url('../assets/contacto-bg.png')",
      },

      keyframes: {
        // --- Tus animaciones originales (se conservan) ---
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeftSubtle: {
          '0%': { transform: 'translateX(-2rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRightSubtle: {
          '0%': { transform: 'translateX(2rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeOutDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        // --- Nuevas animaciones para el carrusel ---
        'fade-down-in': {                                       // <-- AÑADIDO
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down-out': {                                      // <-- AÑADIDO
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        }
      },
      animation: {
        // --- Tus utilidades de animación (se conservan) ---
        'zoom-in': 'zoomIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-left-subtle': 'slideInLeftSubtle 0.8s ease-out forwards',
        'slide-in-right-subtle': 'slideInRightSubtle 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-in-out forwards',
        'fade-out-down': 'fadeOutDown 0.5s ease-in-out forwards',
        // --- Nuevas utilidades para el carrusel ---
        'fade-down-in': 'fade-down-in 0.6s ease-in-out forwards',   // <-- AÑADIDO
        'fade-down-out': 'fade-down-out 0.6s ease-in-out forwards', // <-- AÑADIDO
      },

      dropShadow: {
        'xl': '0 10px 15px rgba(0, 0, 0, 0.3)',
        '2xl': '0 20px 25px rgba(27, 20, 15, 0.4)',
        'white-sm': '0 1px 2px rgba(255, 255, 255, 0.7)',
        'white-md': '0 2px 4px rgba(255, 255, 255, 0.5)',
        'white-lg': '0 5px 10px rgba(255, 255, 255, 0.4)'
      }
    },
  },
  plugins: [
    require('@midudev/tailwind-animations'),
    require('tailwindcss-animate'),
  ],
}