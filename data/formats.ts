export interface Format {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

export const formats: Format[] = [
  {
    id: 'expert',
    emoji: '🎓',
    title: 'Экспертный контент',
    description: 'Образовательные ролики с глубиной — для ниш, где доверие важнее охвата.',
  },
  {
    id: 'talking-heads',
    emoji: '🗣',
    title: 'Говорящие головы',
    description: 'AI-аватары рассказывают истории из вашего бизнеса. Без съёмочного дня.',
  },
  {
    id: 'production',
    emoji: '🏭',
    title: 'Видео для производств',
    description: 'Процессы, цеха, оборудование — там, где живая съёмка дорогая или невозможна.',
  },
  {
    id: 'cases',
    emoji: '📦',
    title: 'Кейсы продукта',
    description: 'Применение, сценарии, до/после. Конверсионный формат.',
  },
  {
    id: 'education',
    emoji: '📚',
    title: 'Обучающий контент',
    description: 'How-to, чек-листы, разборы. Длинный хвост охвата.',
  },
  {
    id: 'fun',
    emoji: '🎉',
    title: 'Развлекательный',
    description: 'Тренды, мемы, реакции — топливо для виральности.',
  },
];
