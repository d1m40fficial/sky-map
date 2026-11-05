import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sky-map/',
  server: { port: 5183, strictPort: false },
  build: {
    target: 'es2022',
    outDir: 'docs',
    emptyOutDir: true,
  },
});
