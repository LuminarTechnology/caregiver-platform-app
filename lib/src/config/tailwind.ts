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
          secondary: '#FFF7F9',
          muted: '#C3C4BF',
          foreground: '#FFF7F9',
          background: '#ffffff',
          backgroundSecondary: '#F6F6F6',
          defaultBlack: '#292A27'
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
