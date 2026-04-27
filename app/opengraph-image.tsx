import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Content Factory — 50–150 вертикальных роликов в месяц';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0A',
          color: '#F5F5F5',
          padding: '72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        <div
          style={{
            fontSize: 22,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#F5F5F5',
          }}
        >
          ⚡ CONTENT FACTORY
        </div>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1.04,
            fontWeight: 600,
            maxWidth: 1000,
          }}
        >
          50–150 вертикальных роликов в месяц. Без вашего участия.
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#8A8A8A',
          }}
        >
          <span>Reels · Shorts · TikTok · VK Видео</span>
          <span style={{ color: '#F5F5F5' }}>vebemachine_bot →</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
