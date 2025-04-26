<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <h2 class="section-title animate-on-scroll">Галерея</h2>
      <p class="section-subtitle animate-on-scroll">
        Фотографии с тренировок и соревнований
      </p>

      <div class="gallery-filter animate-on-scroll">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="activeCategory = category.id"
          :class="{ active: activeCategory === category.id }"
          class="filter-btn"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(image, index) in filteredImages"
          :key="index"
          class="gallery-item animate-on-scroll"
          @click="openLightbox(index)"
        >
          <div class="gallery-image-container">
            <img :src="image.src" :alt="image.alt" class="gallery-image" />
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <div class="gallery-zoom">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 21L16.65 16.65"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 8V14"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 11H14"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p class="gallery-caption">{{ image.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Лайтбокс для просмотра фотографий -->
      <div class="lightbox" v-if="lightboxOpen" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
          <img
            :src="currentImage.src"
            :alt="currentImage.alt"
            class="lightbox-image"
          />
          <div class="lightbox-caption">{{ currentImage.caption }}</div>
          <button class="lightbox-close" @click="closeLightbox">×</button>
          <button
            class="lightbox-prev"
            @click.stop="prevImage"
            v-if="lightboxIndex > 0"
          >
            ❮
          </button>
          <button
            class="lightbox-next"
            @click.stop="nextImage"
            v-if="lightboxIndex < filteredImages.length - 1"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Категории изображений
const categories = [
  { id: 'all', name: 'Все' },
  { id: 'training', name: 'Тренировки' },
  { id: 'competition', name: 'Соревнования' },
  { id: 'kids', name: 'Детские группы' },
];

// Изображения для галереи
const images = [
  {
    src: '/images/gallery/training1.jpg',
    alt: 'Индивидуальная тренировка',
    caption: 'Индивидуальное занятие по отработке техники',
    category: 'training',
  },
  {
    src: '/images/gallery/training2.jpg',
    alt: 'Групповая тренировка',
    caption: 'Групповое занятие по физической подготовке',
    category: 'training',
  },
  {
    src: '/images/gallery/competition1.jpg',
    alt: 'Соревнование по боксу',

    caption: 'Чемпионат города, финальный бой',
    category: 'competition',
  },
  {
    src: '/images/gallery/kids1.jpg',
    alt: 'Детская тренировка',
    caption: 'Занятие в детской группе для начинающих',
    category: 'kids',
  },
  {
    src: '/images/gallery/training3.jpg',
    alt: 'Отработка ударов',
    caption: 'Тренировка на боксерских мешках',
    category: 'training',
  },
  {
    src: '/images/gallery/competition2.jpg',
    alt: 'Победа на соревновании',
    caption: 'Награждение победителей регионального турнира',
    category: 'competition',
  },
  {
    src: '/images/gallery/kids2.jpg',
    alt: 'Детская группа',
    caption: 'Групповое фото юных боксеров',
    category: 'kids',
  },
  {
    src: '/images/gallery/training4.jpg',
    alt: 'Спарринг',
    caption: 'Тренировочный спарринг для подготовки к соревнованиям',
    category: 'training',
  },
];

// Активная категория фильтра
const activeCategory = ref('all');

// Отфильтрованные изображения
const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return images;
  }
  return images.filter((image) => image.category === activeCategory.value);
});

// Управление лайтбоксом
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);
const currentImage = computed(() => filteredImages.value[lightboxIndex.value]);

const openLightbox = (index) => {
  lightboxIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

const nextImage = () => {
  if (lightboxIndex.value < filteredImages.value.length - 1) {
    lightboxIndex.value++;
  }
};

const prevImage = () => {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--;
  }
};

// Обработка клавиш при открытом лайтбоксе
if (process.client) {
  window.addEventListener('keydown', (e) => {
    if (!lightboxOpen.value) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  });
}
</script>

<style scoped>
.gallery-section {
  padding: 100px 0;
  background-color: white;
}

.section-subtitle {
  text-align: center;
  max-width: 700px;
  margin: -30px auto 40px;
  font-size: 1.1rem;
  color: var(--secondary-color);
}

.gallery-filter {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-btn {
  background: none;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: var(--secondary-color);
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.gallery-item {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: scale(1.03);
}

.gallery-image-container {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(29, 53, 87, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay-content {
  text-align: center;
  color: white;
  padding: 20px;
}

.gallery-zoom {
  background-color: var(--primary-color);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
}

.gallery-caption {
  font-size: 0.9rem;
  margin-top: 10px;
}

/* Лайтбокс */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.lightbox-caption {
  color: white;
  text-align: center;
  margin-top: 20px;
  font-size: 1rem;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  font-size: 30px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
}

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  font-size: 30px;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-prev {
  left: -80px;
}

.lightbox-next {
  right: -80px;
}

@media (max-width: 992px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  .lightbox-prev {
    left: -50px;
  }

  .lightbox-next {
    right: -50px;
  }
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 70px 0;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  .lightbox-prev,
  .lightbox-next {
    font-size: 24px;
    width: 40px;
    height: 40px;
  }

  .lightbox-prev {
    left: -30px;
  }

  .lightbox-next {
    right: -30px;
  }
}
</style>
