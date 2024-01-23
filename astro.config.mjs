import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),

    react(),
    sitemap(),
    icon(),
  ],
});
