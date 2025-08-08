import React from 'react';

export default function Logo({ height = 32 }: { height?: number }) {
  const h = height;
  const w = Math.round(h * 5);
  return (
    <svg width={w} height={h} viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Legacy Tuning">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {/* Rocket/Turbo mark */}
      <g transform="translate(10,10)">
        <path d="M30 40c0-22 18-40 40-40 22 0 40 18 40 40s-18 40-40 40c-8 0-15-2-22-6l-26 6 8-24c-0-5 0-10 0-16z" fill="url(#g)" opacity="0.9" />
        <circle cx="70" cy="40" r="18" fill="#0B0F14" stroke="#22D3EE" strokeWidth="6" />
        <path d="M16 52 L6 78 L34 68" fill="none" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* Wordmark */}
      <g transform="translate(140,75)" fill="#E5E7EB">
        <text x="0" y="0" fontFamily="Inter, system-ui, sans-serif" fontSize="44" fontWeight="800" letterSpacing="1">Legacy</text>
        <text x="220" y="0" fontFamily="Inter, system-ui, sans-serif" fontSize="44" fontWeight="700" fill="url(#g)">Tuning</text>
      </g>
    </svg>
  );
}