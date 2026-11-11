// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Сайт понадобится для sitemap, canonical и OG-ссылок.
  // Пока ставим заглушку — после деплоя на прод-хостинг заменим на реальный домен.
  site: 'https://okna888.com',
  // Статический output — обязателен для российского хостинга (Timeweb/Beget/Reg.ru),
  // где нет Node-рантайма. Превью на Vercel/Cloudflare Pages тоже работает со статикой.
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ru',
        locales: { ru: 'ru-RU' },
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
