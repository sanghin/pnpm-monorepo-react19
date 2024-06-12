import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'build',
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
