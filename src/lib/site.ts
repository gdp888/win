/**
 * Глобальные данные сайта.
 * Меняешь здесь — обновляется везде (header, footer, SEO, schema.org).
 */

export const site = {
  brand: 'Алюминиевые конструкции',
  brandShort: 'АК',
  tagline: 'Алюминиевые светопрозрачные конструкции в Москве и МО',
  description:
    'Проектируем, производим и монтируем алюминиевые окна, двери, раздвижные системы, фасады и перголы. Сертифицированные профильные системы Алюмарк, Алютех, Татпроф.',
  // После деплоя на прод-хостинг заменим на боевой домен.
  url: 'https://okna888.com',
  locale: 'ru-RU',
  language: 'ru',

  // Контакты — заглушки, заменишь на реальные
  phone: '+7 (495) 000-00-00',
  phoneHref: '+74950000000',
  email: 'info@okna888.com',
  address: {
    locality: 'Москва',
    region: 'Московская область',
    street: 'ул. Примерная, 1',
    postalCode: '000000',
    country: 'RU',
  },
  workHours: 'Пн–Пт 09:00–20:00 · Сб 10:00–18:00 · Вс — выходной',

  // Профильные системы, с которыми работаем
  profileSystems: ['Алюмарк', 'Алютех', 'Татпроф'],

  // Соцсети — заглушки
  social: {
    telegram: 'https://t.me/',
    whatsapp: 'https://wa.me/',
    youtube: '',
  },
} as const;

export type Site = typeof site;

/** Основная навигация */
export const nav = [
  { href: '/', label: 'Главная' },
  { href: '/services/', label: 'Услуги' },
  { href: '/about/', label: 'О компании' },
  { href: '/contacts/', label: 'Контакты' },
] as const;

export type NavItem = (typeof nav)[number];
