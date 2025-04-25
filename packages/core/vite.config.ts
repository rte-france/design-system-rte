import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import glob from 'glob';

const files = glob.sync('src/**/*.ts', {
  ignore: ['src/**/*.test.ts', 'src/**/*.stories.ts']
});

export default defineConfig({
  build: {
    lib: {
      entry: files.reduce((entries, file) => {
        const name = file.replace('src/', '');
        entries[name.replace('.ts', '')] = resolve(__dirname, file);
        return entries;
      }, {}),
      formats: ['es']
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      exclude: ['**/*.test.ts'],
      rollupTypes: true
    })
  ]
});