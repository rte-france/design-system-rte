import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { glob } from 'glob';

// Only exclude .d.ts and test files from JS build
const files = glob.sync('src/**/*.ts', {
  ignore: ['**/*.d.ts', '**/*.test.ts']
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
        assetFileNames: 'assets/[name][extname]',
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js'
      }
    }
  },
  plugins: [
    dts({
      exclude: ['**/*.test.ts'],
      compilerOptions: {
        preserveModules: true,
        rootDir: 'src',
        emitDeclarationOnly: true
      }
    })
  ],
  publicDir: 'assets'
});