import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mapaCamas: resolve(__dirname, 'mapa-camas.html'),
        hojaMedicacion: resolve(__dirname, 'hoja-medicacion.html'),
      },
    },
  },
})