# Используем образ Node.js
FROM node:20

# Директория внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install
RUN npm cache clean --force

# Копируем весь проект
COPY . .

# Сборка проекта
RUN npm run build

# Указываем порт
EXPOSE 3003

# run the build project with node
ENTRYPOINT ["node", ".output/server/index.mjs"]