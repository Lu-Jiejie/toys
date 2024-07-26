import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'fixed-all': 'fixed top-0 left-0 right-0 bottom-0',
    'fixed-top': 'fixed top-0 left-0 right-0',
    'fixed-bottom': 'fixed bottom-0 left-0 right-0',
    'centered': 'fixed top-1/2 left-1/2 translate-x--1/2 translate-y--1/2',
  },
  presets: [
    presetIcons({
      // extraProperties: {
      //   'display': 'inline-block',
      //   'height': '1.2em',
      //   'width': '1.2em',
      //   'vertical-align': 'text-bottom',
      // },
    }),
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      fonts: {
        code: 'DM Mono',
        sans: 'DM Sans',
        serif: 'DM Serif Display',
      },
    }),
  ],
  safelist: [
    'i-ri-sun-line',
    'i-ri-moon-line',
  ],
})
