# Алюминиевые конструкции — каркас сайта на Astro

Алюминиевые светопрозрачные конструкции в Москве и МО.
Профильные системы: Алюмарк, Алютех, Татпроф.

## Стек

- **Astro 7** — статический output (работает на любом российском хостинге: Timeweb, Beget, Reg.ru)
- **Tailwind CSS v4** — через `@tailwindcss/vite` (конфиг в `src/styles/global.css` через `@theme`)
- **TypeScript** — strict
- **@astrojs/sitemap** — автогенерация `sitemap-index.xml`
- **@astrojs/mdx** — на будущее для блога/статей

## Структура

```
win/
├── astro.config.mjs          ← Astro + Tailwind v4 + sitemap + mdx
├── src/
│   ├── lib/site.ts           ← все данные сайта (контакты, навигация, профильные системы)
│   ├── styles/global.css     ← дизайн-система: цвета, типографика, базовые стили
│   ├── layouts/Base.astro    ← HTML-каркас, head, meta, schema.org LocalBusiness
│   ├── components/
│   │   ├── Header.astro      ← sticky header + мобильное меню
│   │   ├── Footer.astro      ← 3-колоночный футер с контактами
│   │   ├── Hero.astro        ← главная hero-секция + trust strip
│   │   ├── Services.astro    ← сетка услуг (6 шт.)
│   │   ├── Process.astro     ← этапы работы (5 шагов)
│   │   ├── CTA.astro         ← призыв к действию
│   │   ├── Button.astro      ← кнопка (4 варианта)
│   │   ├── Section.astro     ← секция-обёртка с вариантами фона
│   │   ├── Container.astro   ← max-width контейнер
│   │   ├── ProfileBadges.astro ← Алюмарк · Алютех · Татпроф
│   │   └── Logo.astro        ← SVG-логотип
│   └── pages/
│       ├── index.astro       ← /
│       ├── services.astro    ← /services/ — 6 направлений с подробностями
│       ├── about.astro       ← /about/
│       ├── contacts.astro    ← /contacts/ + форма заявки
│       ├── privacy.astro     ← /privacy/ — 152-ФЗ
│       └── 404.astro
└── public/
    ├── favicon.svg
    ├── og.svg                ← OG-картинка для соцсетей
    └── robots.txt            ← разрешает Yandex, Mail.RU, ссылается на sitemap
```

## Дизайн-система

Палитра (Western premium, anodized aluminum):

| Токен | Цвет | Назначение |
|---|---|---|
| `anthracite` | `#0e0e10` | основной тёмный, текст |
| `bronze` | `#b8865b` | акцент (тёплая бронза) |
| `bronze-light` | `#d4a574` | акцент на тёмном |
| `paper` | `#ffffff` | фон |
| `cream` | `#f7f6f3` | тёплый off-white для секций |
| `mist` | `#eeede9` | границы |
| `graphite` | `#5c5a55` | вторичный текст |

Шрифт: **Inter** (400/500/600/700) с поддержкой кириллицы.

## Команды

```bash
npm install              # установка зависимостей
npm run dev              # дев-сервер http://localhost:4321
npm run build            # сборка → dist/ (статика)
npm run preview          # предпросмотр собранного dist/
```

## Что нужно заменить перед продакшеном

1. **`src/lib/site.ts`** — реальный телефон, e-mail, адрес, ссылки на соцсети
2. **`astro.config.mjs`** → `site` — боевой домен (после деплоя на прод-хостинг)
3. **`src/pages/contacts.astro`** → `action="https://qform.ru/your-form-id"` — подключить qform.ru / Formspree / Cloudflare Worker → Telegram-бот
4. **`src/pages/privacy.astro`** — заменить заглушку на юридически корректный текст от специалиста
5. **Изображения** — сейчас в hero и услугах CSS-плейсхолдеры. Добавить фото реальных объектов

## Деплой

### Превью
- **Cloudflare Pages** (рекомендуется) — `npm run build` → output `dist/` → Cloudflare Pages подключит GitHub-репо и будет собирать автоматически. Российским юзерам Cloudflare CDN доставляется через ближайший PoP (Stockholm/Helsinki — латентность низкая).
- **Vercel** — `vercel` CLI, preset `astro`. В России Vercel глушится, поэтому Vercel НЕ для прод-хостинга, только для dev/preview.

### Продакшен (Россия)
- **Timeweb Cloud** — статический хостинг или VPS, deploys через git
- **Beget** — статический хостинг
- **Reg.ru** — обычный shared-хостинг с поддержкой статики
- **VPS (Timeweb/Hetzner Finland)** + **nginx** — для максимального контроля. Просто копируете `dist/` и обслуживаете nginx'ом.

Все варианты работают с одинаковым билдом — `npm run build` и заливаете папку `dist/`.

## TODO (после MVP-каркаса)

- [ ] Калькулятор стоимости (остров на React через `client:visible`)
- [ ] Галерея работ (Content Collections — Astro-нативный markdown-каталог)
- [ ] Блог для SEO (MDX уже установлен)
- [ ] Страницы отдельных услуг `/services/windows/` и т.д.
- [ ] Яндекс.Метрика + Google Analytics
- [ ] Карта (Яндекс.Карты / 2GIS embed на /contacts/)
- [ ] Тест PageSpeed, корректировка Core Web Vitals
