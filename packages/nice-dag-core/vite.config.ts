import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import pkg from './package.json'
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      exclude: ['**/src/__tests__/**', 'vite.config.ts', 'vite.config.umd.ts']
    })
  ],
  build: {
    emptyOutDir: false,
    outDir: './lib',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies || {})]
    }
  }
})
