import { defineConfig } from 'astro/config';
import { fileURLToPath } from "node:url"
import path from 'path';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  base: '/',
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@cv': fileURLToPath(new URL("./src/data/cv.json", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      }
    }
  },

  adapter: cloudflare({
    mode: 'directory',
    imageService: 'cloudflare',
  }),
});