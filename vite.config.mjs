// This file should be renamed to vite.config.mjs for ESM compatibility
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
});
