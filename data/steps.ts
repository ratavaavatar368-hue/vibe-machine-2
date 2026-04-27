export interface Step {
  id: string;
  number: string;
  title: string;
  description?: string;
}

export const steps: Step[] = [
  { id: '01', number: '01', title: 'Изучаем вашу нишу' },
  { id: '02', number: '02', title: 'Парсим актуальные темы и идеи' },
  { id: '03', number: '03', title: 'Адаптируем под ваш бренд' },
  { id: '04', number: '04', title: 'Отдаём пробные 10 роликов', description: 'Через 2–3 дня после старта.' },
  { id: '05', number: '05', title: 'Выстраиваем поток', description: '50–100 роликов в месяц.' },
];
