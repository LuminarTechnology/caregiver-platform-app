const { createTailwindConfig } = require('../../lib/src/config/tailwind')

module.exports = createTailwindConfig({
  content: ['./src/**/*.{js,jsx,ts,tsx}', '../../lib/src/**/*.{js,jsx,ts,tsx}']
})
