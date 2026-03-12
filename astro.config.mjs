import { defineConfig } from 'astro/config';
import { fileURLToPath } from "node:url"

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://slargat.dev',
  base: '/',
  output: 'static',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@cv': fileURLToPath(new URL("./src/data/cv.json", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      }
    }
  },
});