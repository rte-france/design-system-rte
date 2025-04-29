import { defineConfig } from "vite";
import { resolve } from "path";
import dts from 'vite-plugin-dts';
import { glob } from 'glob';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
  plugins: [
    dts({ include: ['lib'] }),
    {
      name: 'copy-assets',
      generateBundle(options, bundle) {
        // Copy files from assets directory to dist/assets
        const assetFiles = glob.sync('assets/**/*', { nodir: true });
        assetFiles.forEach((file) => {
          this.emitFile({
            type: 'asset',
            fileName: file, // This preserves the assets/ prefix
            source: require('fs').readFileSync(resolve(__dirname, file))
          });
        });
      }
    },
    {
      name: 'copy-scss',
      generateBundle(options, bundle) {
        // Get all SCSS files from lib directory
        const scssFiles = glob.sync('lib/**/*.scss');
        
        // Copy each SCSS file to dist maintaining the directory structure
        scssFiles.forEach((file) => {
          const fileName = file.replace('lib/', '');
          this.emitFile({
            type: 'asset',
            fileName,
            source: require('fs').readFileSync(resolve(__dirname, file), 'utf-8')
          });
        });
      }
    }
  ]
});