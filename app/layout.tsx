import type { Metadata, Viewport } from 'next';
import { Unbounded, Manrope, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { siteConfig } from '@/data/config';

const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Контент-завод — 50–150 вертикальных роликов в месяц',
  description: 'Reels, Shorts, TikTok без вашего участия. AI-видео без метаданных, неотличимые от реальных съёмок.',
  openGraph: {
    title: 'Контент-завод — 50–150 вертикальных роликов в месяц',
    description: 'Reels, Shorts, TikTok без вашего участия. AI-видео без метаданных, неотличимые от реальных съёмок.',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контент-завод — 50–150 вертикальных роликов в месяц',
    description: 'Reels, Shorts, TikTok без вашего участия. AI-видео без метаданных, неотличимые от реальных съёмок.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ymId = process.env.NEXT_PUBLIC_YM_ID;

  return (
    <html
      lang="ru"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="grain">
        {children}

        {ymId && (
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${ymId}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
