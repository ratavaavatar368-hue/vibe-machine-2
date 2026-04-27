import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elev': 'var(--bg-elev)',
        'bg-elev-2': 'var(--bg-elev-2)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        text: 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-mute': 'var(--text-mute)',
        accent: 'var(--accent)',
        'accent-warn': 'var(--accent-warn)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        DEFAULT: '12px',
        btn: '8px',
      },
      transitionTimingFunction: {
        'ease-out-quart': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
