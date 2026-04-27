/**
 * Single source of truth for shared config.
 *
 * To replace the Telegram link without editing components:
 *  - set NEXT_PUBLIC_TG_LINK in .env / Vercel env
 * To enable Yandex.Metrika:
 *  - set NEXT_PUBLIC_YM_ID in .env / Vercel env
 */
export const siteConfig = {
  name: 'Content Factory',
  brand: '⚡ CONTENT FACTORY',
  tgLink: process.env.NEXT_PUBLIC_TG_LINK || 'https://t.me/vebemachine_bot',
  ymId: process.env.NEXT_PUBLIC_YM_ID || '',
  url: 'https://vibe-machine-2.vercel.app',
  description:
    'Reels, Shorts, TikTok без вашего участия. AI-видео без метаданных, неотличимые от съёмки.',
} as const;

export type SiteConfig = typeof siteConfig;
