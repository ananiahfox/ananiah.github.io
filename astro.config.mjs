import { defineConfig } from "astro/config";
import path from "path";

const __dirname = path.resolve();

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind()],
  site: "https://ananiahfox.github.io",
  base: "/",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        Components: path.resolve(__dirname, "src/Components"),
        assets: path.resolve(__dirname, "src/assets"),
      },
    },
  },
});
