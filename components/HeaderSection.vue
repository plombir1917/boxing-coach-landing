<template>
  <header class="header" :class="{ 'header-scrolled': scrolled }">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <NuxtLink to="#">
            <span class="logo-text">Игорь Плаксин</span>
            <span class="logo-subtext">Тренер по боксу</span>
          </NuxtLink>
        </div>

        <nav class="nav-desktop hide-mobile">
          <ul class="nav-list">
            <li>
              <NuxtLink to="#main" @click="smoothScroll">Главная</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#about" @click="smoothScroll">Обо мне</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services" @click="smoothScroll">Услуги</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#gallery" @click="smoothScroll">Галерея</NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="#contact"
                class="btn btn-primary"
                @click="smoothScroll"
                >Записаться</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <div class="menu-toggle hide-desktop" @click="toggleMobileMenu">
          <div class="hamburger" :class="{ active: mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-menu" :class="{ 'mobile-menu-open': mobileMenuOpen }">
      <button class="mobile-menu-close" @click="closeMobileMenu">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <ul class="mobile-nav-list">
        <li>
          <NuxtLink
            to="#main"
            @click="
              (e) => {
                smoothScroll(e);
                closeMobileMenu();
              }
            "
            >Главная</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="#about"
            @click="
              (e) => {
                smoothScroll(e);
                closeMobileMenu();
              }
            "
            >Обо мне</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="#services"
            @click="
              (e) => {
                smoothScroll(e);
                closeMobileMenu();
              }
            "
            >Услуги</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="#gallery"
            @click="
              (e) => {
                smoothScroll(e);
                closeMobileMenu();
              }
            "
            >Галерея</NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            to="#contact"
            class="btn btn-primary"
            @click="
              (e) => {
                smoothScroll(e);
                closeMobileMenu();
              }
            "
            >Записаться</NuxtLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent;
  transition: all 0.3s ease;
  padding: 20px 0;
}

.header-scrolled {
  background-color: var(--secondary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.logo-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8rem;
  color: white;
  letter-spacing: 1px;
  line-height: 1;
}

.logo-subtext {
  font-size: 0.9rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  align-items: center;
}

.nav-list li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-list li a:hover {
  color: var(--primary-color);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: white;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--secondary-color);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  padding-top: 80px;
}

.mobile-menu-open {
  transform: translateX(0);
}

.mobile-menu-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: white;
  transition: transform 0.3s ease;
}

.mobile-menu-close:hover {
  transform: rotate(90deg);
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
}

.mobile-nav-list li a {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 600;
}

.mobile-nav-list li a.btn {
  margin-top: 1rem;
  display: inline-block;
}

@media (max-width: 768px) {
  .logo-text {
    font-size: 1.5rem;
  }

  .logo-subtext {
    font-size: 0.8rem;
  }
}
</style>
