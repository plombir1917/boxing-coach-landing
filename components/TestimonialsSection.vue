<template>
  <section id="testimonials" class="testimonials-section bg-light">
    <div class="container">
      <h2 class="section-title animate-on-scroll">Отзывы</h2>
      <p class="section-subtitle animate-on-scroll">Что говорят мои ученики</p>

      <div class="testimonial-slider" ref="sliderRef">
        <div
          class="testimonial-track"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-slide"
          >
            <div class="testimonial-card animate-on-scroll">
              <div class="testimonial-avatar">
                <img
                  :src="testimonial.avatar"
                  :alt="`Фото ${testimonial.name}`"
                />
              </div>
              <div class="testimonial-content">
                <div class="testimonial-rating">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="star"
                    :class="{ active: star <= testimonial.rating }"
                    >★</span
                  >
                </div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-author">
                  <div class="testimonial-name">{{ testimonial.name }}</div>
                  <div class="testimonial-info">{{ testimonial.info }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-controls">
          <button
            class="testimonial-arrow prev"
            @click="prevSlide"
            :disabled="currentSlide === 0"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="testimonial-dots">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="goToSlide(index)"
              class="testimonial-dot"
              :class="{ active: currentSlide === index }"
            ></button>
          </div>
          <button
            class="testimonial-arrow next"
            @click="nextSlide"
            :disabled="currentSlide === testimonials.length - 1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="testimonial-cta animate-on-scroll">
        <p>Присоединяйтесь к моим довольным ученикам уже сегодня!</p>
        <NuxtLink to="#contact" class="btn btn-primary" @click="smoothScroll"
          >Записаться на тренировку</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const smoothScroll = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Данные отзывов
const testimonials = [
  {
    name: 'Александр Петров',
    avatar: '/images/testimonials/person1.jpg',
    rating: 5,
    text: 'Тренируюсь у Игоря уже более года. За это время значительно улучшил свою технику и физическую форму. Тренер всегда внимателен к деталям и умеет мотивировать на результат. Очень доволен тренировками!',
    info: 'Занимается 1 год',
  },
  {
    name: 'Елена Смирнова',
    avatar: '/images/testimonials/person2.jpg',
    rating: 5,
    text: 'Никогда не думала, что бокс может быть таким увлекательным для женщины. Благодаря Игорю полюбила этот вид спорта. Тренировки всегда разнообразные, интересные и эффективные. Чувствую себя увереннее и сильнее.',
    info: 'Занимается 8 месяцев',
  },
  {
    name: 'Дмитрий Козлов',
    avatar: '/images/testimonials/person3.jpg',
    rating: 5,
    text: 'Игорь – настоящий профессионал. Под его руководством я смог подготовиться к региональным соревнованиям и занять призовое место. Ценю его индивидуальный подход и внимание к каждому ученику.',
    info: 'Занимается 2 года',
  },
  {
    name: 'Максим Иванов',
    avatar: '/images/testimonials/person4.jpg',
    rating: 4,
    text: 'Привел своего сына на тренировки к Игорю. Через полгода занятий ребенок стал более дисциплинированным, окреп физически. Тренер находит подход к детям, умеет заинтересовать их. Рекомендую для детских тренировок!',
    info: 'Сын занимается 6 месяцев',
  },
];

// Управление слайдером
const currentSlide = ref(0);
const autoplayInterval = ref(null);
const sliderRef = ref(null);

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Зацикливаем слайдер
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = testimonials.length - 1; // Зацикливаем слайдер
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetAutoplay();
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide();
  }, 6000);
};

const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    startAutoplay();
  }
};

// Обработка свайпов для мобильных устройств
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  const minSwipeDistance = 50;

  if (touchEndX < touchStartX - minSwipeDistance) {
    nextSlide(); // Свайп влево
  }

  if (touchEndX > touchStartX + minSwipeDistance) {
    prevSlide(); // Свайп вправо
  }

  resetAutoplay();
};

onMounted(() => {
  startAutoplay();

  if (sliderRef.value) {
    sliderRef.value.addEventListener('touchstart', handleTouchStart, false);
    sliderRef.value.addEventListener('touchend', handleTouchEnd, false);
  }
});

onBeforeUnmount(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
  }

  if (sliderRef.value) {
    sliderRef.value.removeEventListener('touchstart', handleTouchStart);
    sliderRef.value.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>

<style scoped>
.testimonials-section {
  padding: 100px 0;
}

.section-subtitle {
  text-align: center;
  max-width: 700px;
  margin: -30px auto 50px;
  font-size: 1.1rem;
  color: var(--secondary-color);
}

.testimonial-slider {
  position: relative;
  max-width: 900px;
  margin: 0 auto 60px;
  overflow: hidden;
}

.testimonial-track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slide {
  min-width: 100%;
  padding: 0 15px;
}

.testimonial-card {
  display: flex;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  gap: 30px;
  height: 100%;
}

.testimonial-avatar {
  flex: 0 0 100px;
}

.testimonial-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
}

.testimonial-content {
  flex: 1;
}

.testimonial-rating {
  margin-bottom: 15px;
}

.star {
  font-size: 1.2rem;
  color: #ddd;
}

.star.active {
  color: #ffd700;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  font-size: 60px;
  font-family: serif;
  color: rgba(230, 57, 70, 0.1);
  position: absolute;
  top: -20px;
  left: -10px;
  z-index: 0;
}

.testimonial-author {
  border-top: 1px solid #eee;
  padding-top: 15px;
}

.testimonial-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin-bottom: 5px;
}

.testimonial-info {
  font-size: 0.9rem;
  color: #666;
}

.testimonial-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.testimonial-arrow {
  background: none;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonial-arrow:hover {
  background-color: var(--secondary-color);
  color: white;
}

.testimonial-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.testimonial-dots {
  display: flex;
  gap: 8px;
  margin: 0 20px;
}

.testimonial-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonial-dot.active {
  background-color: var(--primary-color);
  transform: scale(1.2);
}

.testimonial-cta {
  text-align: center;
  margin-top: 50px;
}

.testimonial-cta p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: var(--secondary-color);
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 70px 0;
  }

  .testimonial-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }

  .testimonial-text::before {
    left: 50%;
    transform: translateX(-50%);
  }

  .testimonial-rating {
    display: flex;
    justify-content: center;
  }

  .testimonial-slide {
    padding: 0;
  }
}
</style>
