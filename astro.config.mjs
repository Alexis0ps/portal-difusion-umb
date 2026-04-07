// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, // <-- ESTO ES CLAVE: Permite que ngrok se conecte a Astro
    port: 4321,
    headers: {
      "ngrok-skip-browser-warning": "true"
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});