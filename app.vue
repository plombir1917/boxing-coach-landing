<template>
  <div class="app">
    <header-section />
    <hero-section />
    <about-section />
    <services-section />
    <gallery-section />
    <contact-section />
    <footer-section />
  </div>
</template>

<script setup>
// Компоненты подключаются автоматически благодаря Nuxt
import { onMounted, useHead } from '#imports';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Игорь Плаксин - Тренер по боксу',
  description:
    'Индивидуальные и групповые тренировки по боксу в Липецке для начинающих и профессионалов.',
  url: 'https://igor-plaxin.ru',
  telephone: '+79042811490',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Звёздная, д. 6',
    addressLocality: 'Липецк',
    postalCode: '398902',
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.603377,
    longitude: 39.598916,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '15:00',
    },
  ],
  image: 'https://igor-plaksin.ru/images/trainer.jpg',
  sameAs: [
    'https://vk.com/igor_plaxin',
    'https://www.instagram.com/igor_boxingcoach',
    'https://t.me/igor_boxingcoach',
  ],
  priceRange: 'от 1300₽',
  offers: {
    '@type': 'Offer',
    description: 'Индивидуальные тренировки по боксу',
    price: '1300',
    priceCurrency: 'RUB',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://igor-plaksin.ru',
  },
};

// Добавляем структурированные данные в head через Nuxt API
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
});
</script>

<style>
:root {
  --primary-color: #e63946;
  --secondary-color: #1d3557;
  --accent-color: #f1faee;
  --text-color: #333;
  --light-gray: #f8f9fa;
  --dark-gray: #343a40;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #d12836;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
