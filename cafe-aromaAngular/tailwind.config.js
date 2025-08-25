/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts,scss}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF',     // azul personalizado
          secondary: '#F59E0B',   // naranja personalizado
          accent: '#10B981',      // verde
          danger: '#EF4444',      // rojo
        },
      },
    },
    plugins: [],
  }
  