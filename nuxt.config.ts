// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-06-11',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Игорь Плаксин - Тренер по боксу в Липецке',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Игорь Плаксин - тренер по боксу в Липецке. Индивидуальные и групповые тренировки, подготовка к соревнованиям для начинающих и профессионалов. Запишитесь на первое занятие!',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Игорь Плаксин' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Игорь Плаксин - Тренер по боксу в Липецке',
        },
        {
          property: 'og:description',
          content:
            'Тренировки по боксу для всех уровней подготовки. Индивидуальные и групповые занятия с тренером в Липецке.',
        },
        { property: 'og:image', content: '/images/og-image.jpg' },
        { property: 'og:url', content: 'https://igor-plaxin.ru' },
        {
          property: 'og:site_name',
          content: 'Игорь Плаксин - Тренер по боксу',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Игорь Плаксин - Тренер по боксу в Липецке',
        },
        {
          name: 'twitter:description',
          content:
            'Тренировки по боксу для всех уровней подготовки в Липецке. Запишитесь на тренировку прямо сейчас!',
        },
        { name: 'twitter:image', content: '/images/og-image.jpg' },
        {
          name: 'keywords',
          content:
            'тренер по боксу, бокс Липецк, индивидуальные тренировки бокс, групповые тренировки бокс, Игорь Плаксин, тренировки бокс для начинающих, подготовка к соревнованиям, занятия боксом',
        },
        { name: 'msapplication-TileColor', content: '#e63946' },
        { name: 'theme-color', content: '#e63946' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/images/boxing-glove.svg',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/images/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/images/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/images/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://igor-plaxin.ru' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/css/main.css'],
  devServer: {
    port: 3003,
  },
});
