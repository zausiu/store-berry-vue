import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
server: {
	host: '0.0.0.0',
},
  plugins: [
    vue(),
    // Pages({
    //   pagesDir: '/',
    //   extensions: ['html']
    // })
  ],
})
