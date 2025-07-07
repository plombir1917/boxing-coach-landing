<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <div class="logo">
            <span class="logo-text">Игорь Плаксин</span>
            <span class="logo-subtext">Тренер по боксу</span>
          </div>
          <p class="footer-description">
            Профессиональное обучение боксу для всех уровней подготовки.
          </p>
        </div>

        <div class="footer-links">
          <h3>Быстрые ссылки</h3>
          <ul>
            <li><NuxtLink to="#about">Обо мне</NuxtLink></li>
            <li><NuxtLink to="#services">Услуги</NuxtLink></li>
            <li><NuxtLink to="#gallery">Галерея</NuxtLink></li>
            <li><NuxtLink to="#testimonials">Отзывы</NuxtLink></li>
            <li><NuxtLink to="#contact">Контакты</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Контакты</h3>
          <ul>
            <li>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>г. Липецк, ул. Звёздная, Зал бокса</span>
            </li>
            <li>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3746C21.0391 21.7497 20.5099 21.9604 19.9595 21.96C16.4596 21.65 13.1095 20.33 10.2295 18.11C7.58031 16.06 5.35033 13.83 3.30034 11.18C1.07035 8.28999 0.750349 4.92999 0.440352 1.43C0.439884 0.880001 0.649856 0.351231 1.02388 -0.0227022C1.39791 -0.396635 1.92595 -0.606935 2.47635 -0.608003H5.47634C6.44638 -0.618004 7.28638 0.0699958 7.53638 1.01C7.72136 1.92 7.98635 2.81 8.32635 3.67C8.55635 4.23 8.41634 4.87 8.00634 5.29L6.63635 6.66C8.52635 9.44 10.8863 11.8 13.6663 13.69L15.0363 12.32C15.4563 11.91 16.0963 11.77 16.6563 12C17.5163 12.34 18.4063 12.6 19.3163 12.79C20.2693 13.04 20.9593 13.89 20.9393 14.87L22 16.92Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="tel:+79042811490">+7 (904) 281-14-90</a>
            </li>
            <li>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <a href="mailto:info@igor-plaksin.ru">info@igor-plaksin.ru</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ currentYear }} Игорь Плаксин. Все права защищены.
        </div>
        <div class="social-links">
          <a
            href="https://vk.com/igor_plaxin"
            target="_blank"
            class="social-link"
            title="ВКонтакте"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.892 18.5H15.586C15.586 18.5 16.04 18.454 16.272 18.201C16.484 17.971 16.477 17.539 16.477 17.539C16.477 17.539 16.449 15.592 17.36 15.292C18.256 14.998 19.41 17.159 20.634 18.015C21.558 18.677 22.246 18.542 22.246 18.542L25.524 18.5C25.524 18.5 27.227 18.401 26.41 17.071C26.344 16.963 25.936 16.073 23.887 14.162C21.742 12.164 22.014 12.471 24.589 9.064C26.13 7.008 26.711 5.719 26.526 5.144C26.35 4.593 25.245 4.718 25.245 4.718L21.552 4.739C21.552 4.739 21.282 4.705 21.083 4.824C20.888 4.941 20.764 5.212 20.764 5.212C20.764 5.212 20.202 6.944 19.439 8.432C17.826 11.568 17.191 11.706 16.937 11.538C16.343 11.139 16.494 9.859 16.494 8.939C16.494 5.903 16.894 4.553 15.631 4.275C15.233 4.188 14.932 4.13 13.904 4.12C12.564 4.105 11.424 4.122 10.777 4.409C10.342 4.599 10.007 5.014 10.202 5.038C10.442 5.067 10.984 5.182 11.29 5.576C11.685 6.082 11.672 7.304 11.672 7.304C11.672 7.304 11.884 11.163 11.177 11.555C10.691 11.825 10.03 11.289 8.586 8.4C7.85 6.939 7.3 5.339 7.3 5.339C7.3 5.339 7.195 5.077 7.004 4.936C6.774 4.766 6.452 4.711 6.452 4.711L2.944 4.732C2.944 4.732 2.366 4.746 2.176 4.97C2.008 5.169 2.163 5.58 2.163 5.58C2.163 5.58 5.255 12.319 8.756 15.739C11.979 18.87 15.645 18.5 15.645 18.5H13.892Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/igor_boxingcoach"
            target="_blank"
            class="social-link"
            title="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://t.me/igor_boxingcoach"
            target="_blank"
            class="social-link"
            title="Telegram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.7001 2.54L19.6001 19.64C19.6001 19.64 19.1601 20.81 17.8901 20.19L10.5701 14.75L10.5401 14.73L16.0001 9.78C16.0001 9.78 16.5401 9.29 16.0001 8.8L7.70005 13.93L3.00005 12.25C3.00005 12.25 2.08005 11.91 2.00005 11.17C1.92005 10.43 3.06005 10.01 3.06005 10.01L21.0001 2.95C21.0001 2.95 22.7001 2.19 22.7001 2.54Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';

// Текущий год для копирайта
const currentYear = computed(() => new Date().getFullYear());

// Форма подписки на новости
const newsletterEmail = ref('');
const isSubmitting = ref(false);
const subscribeSuccess = ref(false);

const subscribeNewsletter = () => {
  isSubmitting.value = true;

  // Имитация отправки данных
  setTimeout(() => {
    isSubmitting.value = false;
    subscribeSuccess.value = true;
    newsletterEmail.value = '';

    // Сброс уведомления через 3 секунды
    setTimeout(() => {
      subscribeSuccess.value = false;
    }, 3000);
  }, 1000);
};
</script>

<style scoped>
.footer-section {
  background-color: var(--secondary-color);
  color: white;
  padding: 70px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo .logo {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.footer-logo .logo-text {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem;
  color: white;
  letter-spacing: 1px;
  line-height: 1;
}

.footer-logo .logo-subtext {
  font-size: 0.9rem;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-description {
  margin-bottom: 20px;
  opacity: 0.8;
  line-height: 1.6;
  font-size: 0.95rem;
}

.footer-links h3,
.footer-contact h3,
.footer-newsletter h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-links h3::after,
.footer-contact h3::after,
.footer-newsletter h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.footer-contact li svg {
  margin-right: 10px;
  margin-top: 3px;
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: var(--primary-color);
}

.footer-newsletter p {
  margin-bottom: 20px;
  opacity: 0.8;
  font-size: 0.95rem;
}

.footer-newsletter .form-group {
  display: flex;
}

.footer-newsletter input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 0.9rem;
}

.footer-newsletter button {
  border-radius: 0 4px 4px 0;
  padding: 0 15px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.subscribe-success {
  margin-top: 10px;
  color: var(--primary-color);
  font-size: 0.9rem;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.7;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .footer-newsletter .form-group {
    flex-direction: column;
  }

  .footer-newsletter input {
    border-radius: 4px;
    margin-bottom: 10px;
  }

  .footer-newsletter button {
    border-radius: 4px;
    width: 100%;
  }
}
</style>
