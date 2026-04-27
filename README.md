# Content Factory — Лендинг

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Тёмная тема, single-page, 5 экранов. Деплоится на Vercel.

## Команды

```bash
npm install      # установить зависимости
npm run dev      # dev-сервер на http://localhost:3000
npm run build    # production build
npm run start    # запустить production build
npm run lint     # ESLint
```

## Переменные окружения

Скопируйте `.env.example` → `.env.local` и заполните:

| Переменная             | Что задаёт                                                                 |
| ---------------------- | -------------------------------------------------------------------------- |
| `NEXT_PUBLIC_TG_LINK`  | Ссылка на Telegram-бот/чат для CTA. По умолчанию `https://t.me/vebemachine_bot`. |
| `NEXT_PUBLIC_YM_ID`    | ID счётчика Яндекс.Метрики. Если пусто — скрипт не подключается.            |

На Vercel — задать те же значения в **Project → Settings → Environment Variables**.

## Как заменить контент

| Что              | Где                               |
| ---------------- | --------------------------------- |
| Telegram-ссылка  | `NEXT_PUBLIC_TG_LINK` или [data/config.ts](data/config.ts) |
| Видео и постеры  | [data/reels.ts](data/reels.ts) + файлы в `public/videos/` |
| Карточки форматов | [data/formats.ts](data/formats.ts) |
| Шаги процесса    | [data/steps.ts](data/steps.ts)    |
| Палитра, токены  | [app/globals.css](app/globals.css) + [tailwind.config.ts](tailwind.config.ts) |
| OG-картинка      | [app/opengraph-image.tsx](app/opengraph-image.tsx) (генерится через @vercel/og) |

### Замена видео

В `public/videos/` уже лежат `reel-1.mp4`, `reel-2.mp4` + JPG-постеры (взяты со старого vibemachine-сайта). Чтобы добавить уникальные ролики:

1. Положить mp4 (H.264, 9:16, до 10 МБ) и jpg-постер (1080×1920) в `public/videos/`.
2. Обновить массив в `data/reels.ts` (поля `src`, `poster`, `title`).

## Структура

```
app/
  layout.tsx            — корневой layout, шрифты, метатеги, Я.Метрика
  page.tsx              — главный лендинг, собирает все секции
  globals.css           — токены палитры, базовые стили, утилиты h1/h2/h3
  opengraph-image.tsx   — динамическая OG-картинка 1200×630
components/
  Header.tsx, Footer.tsx
  sections/
    Hero.tsx, ReelsSlider.tsx, Formats.tsx, Process.tsx, FinalCTA.tsx
  ui/
    Button.tsx, Pill.tsx, SectionLabel.tsx
data/
  config.ts, reels.ts, formats.ts, steps.ts
public/videos/         — reel-1/2 mp4 + jpg-постеры
```

## Деплой на Vercel

```bash
# Через Vercel CLI (рекомендованный путь)
npx vercel              # связать проект
npx vercel --prod       # боевой деплой
```

Либо через GitHub-интеграцию: создать репо, запушить, добавить в Vercel-аккаунт.

После деплоя:

1. Указать `NEXT_PUBLIC_TG_LINK` и (опционально) `NEXT_PUBLIC_YM_ID` в Project Settings.
2. Триггернуть редеплой (Settings → Deployments → Redeploy).

## Аналитика

- Кнопка кидает `window.dispatchEvent(new CustomEvent('cta_click', { detail: { label } }))` — лейблы: `header`, `hero`, `final`.
- Если задан `NEXT_PUBLIC_YM_ID`, тот же клик регистрирует Я.Метрику goal `cta_<label>`.

## Адаптив

Проверено и оптимизировано на ширине 375 / 768 / 1280 / 1920. На <768px все секции в одну колонку, таймлайн процесса вертикальный.
