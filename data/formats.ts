export interface Format {
  id: string;
  emoji: string;
  title: string;
  description?: string;
}

export const formats: Format[] = [
  { id: 'expert',        emoji: '🎓', title: 'Экспертный контент' },
  { id: 'talking-heads', emoji: '🗣', title: 'Говорящие головы',     description: 'Истории из вашего бизнеса.' },
  { id: 'production',    emoji: '🏭', title: 'Видео для производств' },
  { id: 'cases',         emoji: '📦', title: 'Кейсы применения продукта' },
  { id: 'education',     emoji: '📚', title: 'Обучающий контент' },
  { id: 'fun',           emoji: '🎉', title: 'Развлекательные ролики' },
];
