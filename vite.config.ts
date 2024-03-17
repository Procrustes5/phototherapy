import path from 'path';
import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import FullReload from 'vite-plugin-full-reload';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 100 }),

    // vue
    vue(),
    // element-plus
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'vue/macros',
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app/frontend'),
      '@style': path.resolve(__dirname, 'app/frontend/assets/stylesheets'),
      '@config': path.resolve(__dirname, 'app/frontend/config'),
      '@view': path.resolve(__dirname, 'app/frontend/views'),
      '@app': path.resolve(__dirname, 'app/frontend/views/app'),
      '@pages': path.resolve(__dirname, 'app/frontend/views/pages'),
    },
  },
  test: {
    global: true,
    server: {
      deps: {
        inline: ['element-plus'],
      },
    },
  }
});