import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  theme: {
    extend: {
      fontFamily: {
        // Override font for geist theme
        mono: '"Jetbrains Mono", monospace !important',
      },
    },
  },
}))
