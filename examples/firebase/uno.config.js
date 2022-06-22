import {defineConfig} from 'unocss'

import {presetUno} from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
import transformerDirective from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify()
    ],
    transformers: [
        transformerDirective(),
        transformerVariantGroup()
    ],
    theme: {
        fontFamily: {
            sans: ['Roboto Flex', 'sans-serif'],
        },
    },
})

