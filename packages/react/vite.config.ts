import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';

const isCI = process.env.CI === 'true';

export default defineConfig({
  resolve: {
    alias: isCI ? {
      '@design-system-rte/core': resolve(__dirname, '../core/lib')
    } : {
      '@design-system-rte/core': resolve(__dirname, './node_modules/@design-system-rte/core')
    }
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
      external: [
        'react', 
        'react/jsx-runtime', 
        'react-dom',
      ],
    },
  },
});
