import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: "https://ananiahfox.github.io",
  base: "/dist",
  vite: {
    resolve: {
      alias: {
        "@components/*": ["src/components/*"],
        "@assets/*": ["src/assets/*"],
      },
    },
  },
  markdown: {
    // 应用于 .md 和 .mdx 文件
    remarkPlugins: [remarkToc],
  },
});
