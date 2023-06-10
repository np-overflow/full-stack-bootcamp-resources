import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Full Stack Bootcamp Resources",
  description: "By Overflow",
  outDir: 'dist/',
  srcExclude: ["examples/**", "slides/**"],
  ignoreDeadLinks: true,
  rewrites: {
    'README.md': 'index.md'
  },
  themeConfig: {
    outline: 'deep'
  }
})
