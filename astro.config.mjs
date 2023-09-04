import { defineConfig } from "astro/config";
import path from "path";
import remarkToc from "remark-toc";

const __dirname = path.resolve();

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: "https://ananiahfox.github.io",
  base: "/",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "src/components"),
        assets: path.resolve(__dirname, "src/assets"),
      },
    },
  },
  markdown: {
    // 应用于 .md 和 .mdx 文件
    remarkPlugins: [remarkToc],
  },
});
