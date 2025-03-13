# Webpack Mastery: Від препроцесорів до аналізатора

## **Опис проєкту**

Цей проєкт демонструє розширене налаштування Webpack для сучасного процесу розробки. Він підтримує автоматичне оновлення змін, компіляцію TypeScript, транспіляцію JavaScript, аналіз бандлів та перевірку коду.

---

## **Функціональні можливості**

Проєкт містить наступні налаштування Webpack:

✅ **DevServer** – автоматичне перезавантаження сторінки при зміні коду.  
✅ **Обробка CSS-файлів** – підключення зовнішніх стилів із підтримкою `.css`, `.less`, `.scss`.  
✅ **Підтримка препроцесорів** – компіляція **LESS та Sass/SCSS** у стандартний CSS.  
✅ **Компіляція TypeScript** – підтримка `.ts` та `.tsx`.  
✅ **Транспіляція JavaScript** – через Babel (`@babel/preset-env`).  
✅ **Перевірка коду ESLint** – автоматична перевірка відповідно до налаштувань `.eslintrc.js`.  
✅ **Webpack Bundle Analyzer** – візуалізація розміру пакетів для оптимізації продуктивності.

---

## **Структура проєкту**

```
📁 webpack-project
│── 📁 src
│   ├── 📁 css
│   ├── 📁 less
│   ├── 📁 sass
│   ├── 📁 models
│   ├── 📁 assets
│   ├── index.tsx
│   ├── statistics.ts
│   ├── index.html
│── 📁 dist (згенеровані файли)
│── webpack.config.js
│── eslint.config.js
│── package.json
│── .gitignore
│── README.md
```

---

## **Встановлення та запуск**

### 1️⃣ **Склонуйте репозиторій:**

```sh
git clone <ваше-посилання-на-репозиторій>
cd webpack-project
```

### 2️⃣ **Встановіть залежності:**

```sh
npm install
```

### 3️⃣ **Режим розробки (Dev Server):**

```sh
npm run dev
```

📌 Відкриється локальний сервер на `http://localhost:4200/`.

### 4️⃣ **Збірка проєкту для продакшну:**

```sh
npm run build
```

📌 Файли будуть згенеровані в папці `dist/`.

### 5️⃣ **Перевірка ESLint**

```sh
npm run lint
```

📌 Запускає ESLint для перевірки коду.

---

## **Основні залежності**

📌 **Webpack та плагіни**:

- `webpack`, `webpack-cli`, `webpack-dev-server`
- `html-webpack-plugin` (автоматичне створення HTML)
- `clean-webpack-plugin` (очищення `dist/` перед новою збіркою)
- `mini-css-extract-plugin` (виділення CSS у окремий файл)
- `css-loader`, `style-loader`, `less-loader`, `sass-loader` (обробка стилів)
- `babel-loader`, `@babel/core`, `@babel/preset-env`, `@babel/preset-react` (транспіляція JavaScript)
- `ts-loader` (компіляція TypeScript)
- `eslint-webpack-plugin`, `eslint` (перевірка коду)
- `webpack-bundle-analyzer` (аналіз бандлів)

---

## **Команди для запуску**

| Команда           | Опис                              |
| ----------------- | --------------------------------- |
| `npm run dev`     | Запуск Webpack DevServer          |
| `npm run build`   | Збірка проєкту в `dist/`          |
| `npm run lint`    | Запуск ESLint для перевірки коду  |
| `npm run analyze` | Відкриває Webpack Bundle Analyzer |

---
