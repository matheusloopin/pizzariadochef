module.exports = {
  content: [
    "./index.html", // Caminho correto para o arquivo HTML
    "./src/**/*.{html,js}", // Caminho correto para arquivos HTML e JS
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Fonte Roboto corrigida
        shadows: ['Shadows Into Light', 'cursive'], // Fonte Shadows Into Light
      },
    },
  },
  plugins: [
    require("daisyui"), // Certifique-se de que está correto
  ],
}