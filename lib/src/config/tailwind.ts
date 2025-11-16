import type { Config } from 'tailwindcss'

export const createTailwindConfig = (
  overrides: Partial<Config> = {}
): Config => {
  const base: Config = {
    presets: [require('nativewind/preset')],
    content: [],
    theme: {
      extend: {
        colors: {
          primary: '#A41845',
          secondary: '#F6F6F6',
          muted: '#C3C4BF',
          foreground: '#FFF7F9',
          background: '#ffffff',
          defaultBlack: '#292A27',
          subBlack: '#4E4E4E'
        }
      }
    },
    plugins: []
  }

  return {
    ...base,
    ...overrides
  }
}
