<template>
  <section class="hero-section">
    <div class="overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="fade-in">
          <span class="heading-primary">ИГОРЬ ПЛАКСИН</span>
          <span class="heading-sub">ТРЕНЕР ПО БОКСУ</span>
        </h1>
        <p class="hero-description fade-in">
          Тренировки для начинающих и профессионалов. Индивидуальный подход к
          каждому ученику.
        </p>
        <div class="hero-cta fade-in">
          <NuxtLink
            to="#contact"
            class="btn btn-primary btn-pulse"
            @click="smoothScroll"
            >Записаться на тренировку</NuxtLink
          >
          <NuxtLink to="#about" class="btn btn-outline" @click="smoothScroll"
            >Узнать больше</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="scroll-down">
      <NuxtLink to="#about" @click="smoothScroll">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
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
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding-top: 80px; /* Для компенсации высоты хедера */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(29, 53, 87, 0.8) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.heading-primary {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.5rem;
}

.heading-sub {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--primary-color);
  letter-spacing: 3px;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
}

.scroll-down a {
  display: block;
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.scroll-down a:hover {
  opacity: 0.7;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-20px) translateX(-50%);
  }
  60% {
    transform: translateY(-10px) translateX(-50%);
  }
}

/* Анимация при загрузке */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

.fade-in:nth-child(1) {
  animation-delay: 0.2s;
}

.fade-in:nth-child(2) {
  animation-delay: 0.4s;
}

.fade-in:nth-child(3) {
  animation-delay: 0.6s;
}

@media (max-width: 768px) {
  .heading-primary {
    font-size: 2.5rem;
  }

  .heading-sub {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
    padding: 0 10px;
  }

  .hero-cta {
    flex-direction: column;
    padding: 0 20px;
  }
}
</style>
