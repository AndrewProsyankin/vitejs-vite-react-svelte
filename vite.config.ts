import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svelte()],
  resolve: {
    alias: {
      '@': path.resolve('./src/'),
      $storybook: path.resolve('./.storybook/'),
      shared: path.resolve('./src/shared/'),
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        index: 'src/main.tsx',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
