import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.d.ts'],
  },
  plugins: [
    dts({
      include: ['src/**/*.ts', 'src/**/*.d.ts'],
      exclude: ['**/*.test.ts'],
      rollupTypes: true,
      insertTypesEntry: true,
    })
  ]
});