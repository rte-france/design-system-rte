import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  resolve: {
    alias: {
      '@design-system-rte/core': resolve(__dirname, '../core')
    },
  },
  plugins: [
    react(),
    dts({
      include: ['src/index.ts', 'src/components'],
      exclude: ['**/*.stories.*', '**/*.styled.ts'],
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'react-package',
      formats: ['es', 'cjs'],
      cssFileName: 'style',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
    },
  },
});
