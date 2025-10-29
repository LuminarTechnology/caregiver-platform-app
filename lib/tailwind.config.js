const { createTailwindConfig } = require('./src/config/tailwind')

module.exports = createTailwindConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}']
})
