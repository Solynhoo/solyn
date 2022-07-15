const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  content: [
    'content/**/*.{md,yml,json,json5,csv}'
  ],
  theme: {
    extend: {
      colors: {
        // Customize the feeling of your site
        gray: colors.stone
      },
      fontFamily: {
        sans: 'Inter, ui-sans-serif, system-ui, -apple-system, Arial, Roboto, sans-serif'
      }
    }
  }
}
