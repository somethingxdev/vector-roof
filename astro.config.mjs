import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import robots from 'astro-robots';
// https://astro.build/config
export default defineConfig({
  site: 'https://vektor-roof.ru/',
  output: 'server',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
  }),
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    robots(),
    react(),
    sitemap(),
    icon(),
  ],
});
