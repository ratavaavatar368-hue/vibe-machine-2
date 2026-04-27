export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    id: '01',
    number: '01',
    title: 'Изучаем нишу',
    description:
      'Анализ конкурентов, тон-оф-войс, аудитория, форматы, которые работают именно у вас.',
  },
  {
    id: '02',
    number: '02',
    title: 'Парсим темы и тренды',
    description: 'Собираем актуальные хуки и нарративы из ниши на момент запуска.',
  },
  {
    id: '03',
    number: '03',
    title: 'Адаптируем под бренд',
    description: 'Тестим архетипы, голос, визуал. Утверждаем стиль.',
  },
  {
    id: '04',
    number: '04',
    title: 'Пробные 10 роликов',
    description: 'Отдаём через 2–3 дня после старта. Корректируем по фидбеку.',
  },
  {
    id: '05',
    number: '05',
    title: 'Поток 50–150 в месяц',
    description:
      'Стабильный конвейер. Аналитика. Пересмотр стратегии каждые 100 роликов.',
  },
];

export interface KpiBlock {
  value: string;
  label: string;
}

export const kpis: KpiBlock[] = [
  { value: '2–3 дня', label: 'до первых роликов' },
  { value: '50–150 роликов', label: 'в месяц на потоке' },
];
