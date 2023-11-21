import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";

export default defineConfig({
  server: {
    port: 4173,
    host: true, // This ensures the server listens on all network interfaces
  },
  plugins: [
    svelte({
      preprocess: [preprocess()],
    }),
  ],
});
