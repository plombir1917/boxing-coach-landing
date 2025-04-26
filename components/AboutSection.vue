<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title animate-on-scroll">Обо мне</h2>

      <div class="about-content">
        <div class="about-image-container animate-on-scroll">
          <img
            src="/images/trainer.jpg"
            alt="Игорь Плаксин - тренер по боксу"
            class="about-image"
          />
          <div class="experience-badge">
            <span class="experience-years">10+</span>
            <span class="experience-text">лет опыта</span>
          </div>
        </div>

        <div class="about-text animate-on-scroll">
          <h3>Игорь Плаксин</h3>
          <p class="about-subtitle">Тренер по боксу, мастер спорта</p>

          <div class="about-description">
            <p>
              Приветствую вас на моём сайте! Я — Игорь Плаксин, тренер по боксу
              с более чем 10-летним опытом работы. Моя спортивная карьера
              началась ещё в юности и привела меня к званию мастера спорта и
              множеству побед на соревнованиях различного уровня.
            </p>
            <p>
              Сегодня я посвящаю свою жизнь тренерской работе, помогая как
              начинающим спортсменам, так и опытным боксёрам достигать новых
              высот. Мой подход к тренировкам сочетает классическую школу бокса
              с современными методиками, что позволяет добиваться высоких
              результатов в кратчайшие сроки.
            </p>
            <p>
              Я верю, что бокс — это не просто спорт, а образ жизни, который
              формирует дисциплину, силу воли и характер. На моих тренировках вы
              получите не только физическое развитие, но и ментальную
              подготовку, необходимую как в ринге, так и в повседневной жизни.
            </p>
          </div>

          <div class="stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Учеников</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15</div>
              <div class="stat-label">Чемпионов</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Лет опыта</div>
            </div>
          </div>

          <div class="about-cta">
            <NuxtLink to="#contact" class="btn btn-primary"
              >Записаться на тренировку</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Функция для анимации элементов при прокрутке
const handleScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('visible');
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Вызываем функцию один раз для элементов, которые видны при загрузке
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.about-section {
  padding: 100px 0;
  background-color: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;
}

.about-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.about-image-container:hover .about-image {
  transform: scale(1.05);
}

.experience-badge {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.experience-years {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
}

.experience-text {
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
}

.about-text h3 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.about-subtitle {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  font-weight: 500;
}

.about-description p {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  text-align: center;
}

.stat-item {
  flex: 1;
  padding: 1rem;
  border-right: 1px solid #e0e0e0;
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-family: 'Bebas Neue', sans-serif;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--secondary-color);
}

.about-cta {
  margin-top: 2rem;
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image-container {
    max-width: 500px;
    margin: 0 auto;
  }

  .stats {
    flex-wrap: wrap;
  }

  .stat-item {
    flex: 0 0 33.33%;
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 70px 0;
  }

  .stats {
    flex-direction: column;
  }

  .stat-item {
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 1rem 0;
  }

  .stat-item:last-child {
    border-bottom: none;
  }
}
</style>
