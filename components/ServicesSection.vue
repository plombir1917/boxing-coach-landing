<template>
  <section id="services" class="services-section bg-light">
    <div class="container">
      <h2 class="section-title animate-on-scroll">Мои услуги</h2>
      <p class="section-subtitle animate-on-scroll">
        Выберите тренировку, которая подходит именно вам
      </p>

      <div class="services-grid">
        <div class="service-card animate-on-scroll">
          <div class="service-icon">
            <img src="/images/individual.svg" alt="Индивидуальные тренировки" />
          </div>
          <h3>Индивидуальные тренировки</h3>
          <p>
            Персональные занятия один на один с тренером. Максимальное внимание
            к вашей технике, физической форме и индивидуальным особенностям.
          </p>
          <ul class="service-features">
            <li>Разработка персональной программы</li>
            <li>Гибкий график занятий</li>
            <li>Интенсивный прогресс</li>
            <li>Постоянный контроль техники</li>
          </ul>
          <div class="service-price">от 1300₽ / занятие</div>
          <NuxtLink to="#contact" class="btn btn-outline service-btn"
            >Записаться</NuxtLink
          >
        </div>

        <div class="service-card animate-on-scroll">
          <div class="service-icon primary">
            <img src="/images/group.svg" alt="Групповые тренировки" />
          </div>
          <h3>Групповые тренировки</h3>
          <p>
            Тренировки в группе до 20 человек. Отличный вариант для тех, кто
            предпочитает заниматься в компании единомышленников.
          </p>
          <ul class="service-features">
            <li>Доступная стоимость</li>
            <li>Командный дух</li>
            <li>Спарринги с разными партнерами</li>
            <li>Мотивирующая атмосфера</li>
          </ul>
          <div class="service-price">от 2300₽ / месяц</div>
          <NuxtLink to="#contact" class="btn btn-outline service-btn"
            >Записаться</NuxtLink
          >
        </div>

        <div class="service-card animate-on-scroll">
          <div class="service-icon">
            <img src="/images/kids.svg" alt="Детские группы" />
          </div>
          <h3>Детские группы</h3>
          <p>
            Специальные тренировки для детей от 7 лет. Обучение основам бокса в
            игровой форме с акцентом на общее физическое развитие.
          </p>
          <ul class="service-features">
            <li>Безопасные условия</li>
            <li>Развитие координации</li>
            <li>Укрепление здоровья</li>
            <li>Воспитание дисциплины</li>
          </ul>
          <div class="service-price">от 2000₽ / месяц</div>
          <NuxtLink to="#contact" class="btn btn-outline service-btn"
            >Записаться</NuxtLink
          >
        </div>
      </div>

      <div class="cta-block animate-on-scroll">
        <h3>Нужна консультация по выбору программы?</h3>
        <p>
          Свяжитесь со мной, и я помогу подобрать оптимальный вариант тренировок
          именно для вас.
        </p>
        <NuxtLink to="#contact" class="btn btn-primary"
          >Получить консультацию</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script setup>
// Используется общая функция для анимации прокрутки из компонента AboutSection
</script>

<style scoped>
.services-section {
  padding: 100px 0;
}

.section-subtitle {
  text-align: center;
  max-width: 700px;
  margin: -30px auto 50px;
  font-size: 1.1rem;
  color: var(--secondary-color);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgba(230, 57, 70, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.service-icon.primary {
  background-color: rgba(29, 53, 87, 0.1);
}

.service-icon.secondary {
  background-color: rgba(241, 250, 238, 0.7);
}

.service-icon img {
  width: 35px;
  height: 35px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.service-card p {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
}

.service-features li {
  padding-left: 25px;
  position: relative;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.service-price {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 20px;
  margin-top: auto;
}

.service-btn {
  width: 100%;
  text-align: center;
}

.cta-block {
  background-color: var(--secondary-color);
  color: white;
  padding: 50px;
  border-radius: 8px;
  text-align: center;
  margin-top: 60px;
}

.cta-block h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: white;
}

.cta-block p {
  margin-bottom: 25px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-block .btn {
  background-color: var(--primary-color);
  border: none;
  color: white;
}

.cta-block .btn:hover {
  background-color: #d12836;
}

@media (max-width: 768px) {
  .services-section {
    padding: 70px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .cta-block {
    padding: 30px 20px;
  }
}
</style>
