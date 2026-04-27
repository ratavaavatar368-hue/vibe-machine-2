import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Vibe Machine — фабрика вертикального видео';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          color: '#ffffff',
          padding: '72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.025em',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -150,
            width: 700,
            height: 700,
            background: 'radial-gradient(circle, rgba(255,204,0,0.35) 0%, transparent 65%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontSize: 22,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#ffcc00',
            zIndex: 1,
          }}
        >
          ⚡ VIBE MACHINE
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 1.0,
            fontWeight: 800,
            maxWidth: 1000,
            zIndex: 1,
          }}
        >
          50–100 вертикальных роликов в&nbsp;месяц.{' '}
          <span style={{ color: '#ffcc00' }}>Без вашего участия.</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#b4b4b4',
            zIndex: 1,
          }}
        >
          <span>Reels · Shorts · TikTok · ВК Видео</span>
          <span style={{ color: '#ffcc00' }}>vebemachine_bot →</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
