# Автотесты для Automation Exercise (Playwright + TypeScript)

Проект содержит автоматизированные тесты для проверки UI и API учебного сайта [Automation Exercise](https://automationexercise.com).

## 🛠 Технологии
- **TypeScript** — строгая типизация
- **Playwright Test** — современный фреймворк для сквозного тестирования (UI + API)
- **Page Object Model (POM)** — организация архитектуры страниц
- **Fixtures (Playwright)** — изолированная подготовка и гарантированная очистка (teardown) тестовых данных

---

## 📋 Покрытые сценарии (по ТЗ)
1. **UI: Поиск товара** — открытие каталога, поиск товара, проверка отображения результатов и соответствия найденных товаров поисковому запросу.
2. **UI: Корзина** — добавление товара в корзину из каталога, переход в Cart, проверка названия товара, цены, количества и итоговой суммы.
3. **API: Список товаров** — отправка `GET /api/productsList`, проверка статус-кода `200 OK`, наличия списка товаров и валидация структуры одного товара (`id`, `name`, `price`, `brand`, `category`).
4. **UI + API: Пользователь** — создание пользователя через API, авторизация через UI, проверка состояния «Logged in as» и автоматическое удаление пользователя после теста (Teardown).

---

## 🚀 Инструкция по установке и запуску

### 1. Установка зависимостей
Убедитесь, что у вас установлен [Node.js](https://nodejs.org/), затем выполните:
```bash
npm install
```

### 2. Установка браузеров Playwright
```bash
npx playwright install
```

---

### 3. Запуск тестов

#### 🔹 Запуск всех тестов:
```bash
npx playwright test
```

#### 🔹 Запуск только UI-тестов:
```bash
npx playwright test tests/ui-*.spec.ts tests/auth.spec.ts
```

#### 🔹 Запуск только API-тестов:
```bash
npx playwright test tests/api.spec.ts
```

#### 🔹 Интерактивный UI-режим (Playwright UI Runner):
```bash
npx playwright test --ui
```

#### 🔹 Запуск с отображением браузера (Headed mode):
```bash
npx playwright test --headed
```

---

### 4. Переопределение Base URL

По умолчанию тесты выполняются на сайте `https://automationexercise.com`. При необходимости переопределить адрес используйте переменную окружения `BASE_URL`:

* **Bash / macOS / Linux:**
  ```bash
  BASE_URL=https://automationexercise.com npx playwright test
  ```
* **PowerShell (Windows):**
  ```powershell
  $env:BASE_URL="https://automationexercise.com"; npx playwright test
  ```
* **CMD (Windows):**
  ```cmd
  set BASE_URL=https://automationexercise.com && npx playwright test
  ```

---

### 5. Просмотр отчета о прохождении тестов
После завершения тестов откройте сгенерированный HTML-отчет:
```bash
npx playwright show-report
```