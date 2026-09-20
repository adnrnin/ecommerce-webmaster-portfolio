# AI Context & Project Memory: Senior E-Commerce Webmaster Portfolio

> **Назначение документа**: Этот файл служит контекстной памятью для будущих сессий с ИИ (LLM-агентами). Он содержит полную структуру проекта, метаданные автора, конфигурации репозиториев, контакты и правила разработки.

---

## 👤 1. Профиль разработчика и контакты

- **Имя**: **Niall.M**
- **Специализация**: Senior Webmaster, Principal Frontend Engineer & E-Commerce Architect
- **Официальный Email**: `niall@nialluk.com`
- **Telegram**: `@nialluk` (ссылка: https://t.me/nialluk)
- **WhatsApp**: `+44 7446317825` (прямой чат: https://wa.me/447446317825)
- **GitHub Профиль**: [https://github.com/niallmuk/](https://github.com/niallmuk/)
- **GitHub Email (для коммитов)**: `admin@gog1e.com`

---

## 🏛️ 2. Основной репозиторий портфолио

- **Репозиторий на GitHub**: [https://github.com/adnrnin/ecommerce-webmaster-portfolio](https://github.com/adnrnin/ecommerce-webmaster-portfolio)
- **Стек**: Next.js 14+ (App Router), TypeScript (strict), Tailwind CSS, Lucide React, Framer Motion
- **Деплой**: Vercel (Zero-Config)
- **Ключевой принцип**: **100% независимость от внешних изображений**. Все мокапы, графики, браузерные фреймы и превью продуктов сгенерированы процедурно на чистом CSS и inline SVG.

### Структура ключевых компонентов:
- `components/Navbar.tsx`: Закрепленный блюр-навбар, пульсирующий бейдж доступности `🟢 Available for high-impact E-com projects`, ссылки и CTA-кнопка «Hire Me / Start Project».
- `components/Hero.tsx`: Главный оффер, телеметрия Lighthouse CI (100/100 Core Web Vitals, 0.8s TTFB), KPI-тикер ($10M+ GMV, 99.99% Uptime SLA).
- `components/CaseStudies.tsx` & `CaseStudyModal.tsx`: 4 подробных кейса с процедурными мокапами и полноэкранным модальным окном Deep Dive с технической архитектурой.
- `components/TechStack.tsx`: Интерактивный переключатель 5 доменов (Frontend, Payments, Microservices, E-Com Platforms, Analytics & CRO).
- `components/PerformanceBento.tsx`: Бенто-сетка инженерных решений (AVIF/WebP, Edge Middleware, Atomic CSS, Anti-Friction чекаут).
- `components/ContactSection.tsx`: Мульти-выбор скоупа, инвестиционные тиры ($5k–$50k+), клиентская валидация, кнопки 1-click копирования (Email, Telegram, WhatsApp) и прямой переход в чат WhatsApp.
- `components/Footer.tsx`: Иконка GitHub со ссылкой на `https://github.com/niallmuk/`, системный статус и копирайт Niall.M.
- `components/DemoHeader.tsx`: Фиксированная шапка для Live Demo страниц со ссылкой возврата в портфолио, спецификациями и кнопкой перехода в репозиторий проекта.

---

## 🚀 3. 4 Интерактивных Live Demo роута (`/demo/...`)

Внутри проекта функционируют 4 полноценные интерактивные демонстрационные страницы:

| Проект | Роут | Стек | Репозиторий на GitHub |
|---|---|---|---|
| **Aura Luxury Apparel** | `/demo/aura-luxury-apparel` | Next.js 14, Shopify Storefront API, Tailwind | [niallmuk/aura-luxury-apparel](https://github.com/niallmuk/aura-luxury-apparel) |
| **Apex Gear Marketplace** | `/demo/apex-gear-marketplace` | Next.js, MedusaJS, Stripe Connect, Redis | [niallmuk/apex-gear-marketplace](https://github.com/niallmuk/apex-gear-marketplace) |
| **Nova Botanics DTC** | `/demo/nova-botanics-dtc` | React, Stripe Billing, Webhooks, Microservices | [niallmuk/nova-botanics-dtc](https://github.com/niallmuk/nova-botanics-dtc) |
| **Quantum Pay & Fraud Shield** | `/demo/quantum-pay-fraud-shield` | Next.js, Stripe Radar, Cloudflare Edge Workers | [niallmuk/quantum-pay-fraud-shield](https://github.com/niallmuk/quantum-pay-fraud-shield) |

### Описание интерактива:
1. **Aura Luxury Apparel**: Переключатель 3 ракурсов галереи (силуэт, макро-твил 480 GSM, шелковый подклад), селектор цветов и размеров со статусом склада, оптимистичная выдвижная корзина, шкала бесплатной доставки, промокоды (`VIP10`) и 1-tap Apple Pay.
2. **Apex Gear Marketplace**: Переключатель роли (B2B-покупатель с динамическими скидками vs Кабинет селлера с автоматическим расчетом сплита Stripe Connect: 85% селлеру / 15% платформе), блокировки остатков в Redis.
3. **Nova Botanics DTC**: Смена интервала доставки (30/60/90 дней) со скидкой до 27%, смена вкуса в 1 клик, пропуск/пауза доставки, 1-click upsell и монитор Stripe Smart Dunning.
4. **Quantum Pay & Fraud Shield**: Мультивалютность (USD, EUR, GBP, JPY, CAD) по реальному FX курсу, форма Stripe Elements, 3 интерактивных слайдера рисков фрода (IP, частота попыток, энтропия устройства) и живой радар рисков с динамическим 3DS 2.0 fallback.

---

## 📦 4. Автономные архивы проектов (`.zip`)

В корне проекта сформированы 4 самостоятельных `.zip` архива, каждый из которых содержит независимый Next.js App Router проект со своим `package.json`, `tsconfig.json`, Tailwind, `README.md` и главной страницей `app/page.tsx`:
- `aura-luxury-apparel.zip`
- `apex-gear-marketplace.zip`
- `nova-botanics-dtc.zip`
- `quantum-pay-fraud-shield.zip`

> **Скрипт пересборки архивов**: `node scripts/package-standalone-projects.js`  
> Архивы готовы для ручной распаковки и загрузки в отдельные репозитории GitHub с последующим деплоем на Vercel.

---

## 🎨 5. Фавикон и системные скрипты

- `app/favicon.ico` и `public/favicon.ico`: Бинарный мульти-размерный (16x16 и 32x32) значок с изумрудной e-commerce сумкой на темном фоне.
- `scripts/generate-favicon.js`: Node.js генератор чистого бинарного ICO-файла без внешних зависимостей.
- `scripts/package-standalone-projects.js`: Node.js скрипт сборки и архивации 4 независимых проектов.

---

## ⚙️ 6. Команды разработки и правила для ИИ

- **Запуск dev-сервера**: `npm run dev`
- **Продакшн сборка**: `npm run build` *(всегда должна завершаться с `0` ошибок и `0` ворнингов)*
- **Запуск продакшна**: `npm run start`
- **Линтинг**: `npm run lint`

### Правила модификации для ИИ:
1. **Имя автора строго**: `Niall.M`.
2. **Контакты строго**: `niall@nialluk.com`, Telegram `@nialluk`, WhatsApp `+44 7446317825`.
3. **Ссылки GitHub**: профиль `https://github.com/niallmuk/`, проекты `https://github.com/niallmuk/[slug]`.
4. **Никаких битых картинок**: не использовать внешние unpkg/unsplash URL без фоллбэка, все UI-элементы строить через SVG, Tailwind и Lucide Icons.
5. **Сохранение чистой сборки**: перед коммитом всегда запускать `npm run build` для подтверждения целостности статических роутов.
