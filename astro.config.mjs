import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://solobond.app',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
