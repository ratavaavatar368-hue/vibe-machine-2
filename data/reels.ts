export interface Reel {
  id: string;
  poster: string;
  src: string;
  title: string;
}

/**
 * 6 placeholder cards. Currently 2 unique source videos copied from the
 * existing vibemachine site, cycled across the slots — replace `src` and
 * `poster` paths to use real reels.
 */
export const reels: Reel[] = [
  { id: 'reel-1', poster: '/videos/reel-1.jpg', src: '/videos/reel-1.mp4', title: 'Ролик 1' },
  { id: 'reel-2', poster: '/videos/reel-2.jpg', src: '/videos/reel-2.mp4', title: 'Ролик 2' },
  { id: 'reel-3', poster: '/videos/reel-1.jpg', src: '/videos/reel-1.mp4', title: 'Ролик 3' },
  { id: 'reel-4', poster: '/videos/reel-2.jpg', src: '/videos/reel-2.mp4', title: 'Ролик 4' },
  { id: 'reel-5', poster: '/videos/reel-1.jpg', src: '/videos/reel-1.mp4', title: 'Ролик 5' },
  { id: 'reel-6', poster: '/videos/reel-2.jpg', src: '/videos/reel-2.mp4', title: 'Ролик 6' },
];
