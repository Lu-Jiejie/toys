import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
  plugins: [
    UnoCSS(),

    VueRouter({
      extensions: ['.vue'],
      routesFolder: 'src/pages',
    }),

    vue(),

    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
      ],
    }),

    Components(),
  ],
})
