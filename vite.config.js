import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import unoCss from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import UnocssIcons from "@unocss/preset-icons";
// 测试修改
export default defineConfig({
  plugins: [
    vue(),
    unoCss({
      presets: [
        UnocssIcons({
          prefix: "i-",
          extraProperties: {
            display: "inline-block",
          },
        }),
        presetUno(),
        presetIcons({
          collections: {
            twemoji: () =>
              import('@iconify-json/twemoji').then((i) => i.default)
          }
        })
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
