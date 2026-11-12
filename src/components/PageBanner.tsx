import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle: string;
  image: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, image }) => (
  <section className="relative h-[360px] sm:h-[400px] w-full overflow-hidden bg-navy">
    <img src={image} alt={title} className="w-full h-full object-cover object-center" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#071A12]/75 via-[#0F2E22]/45 to-[#071A12]/60" />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-8">
      <h1 className="font-serif italic font-bold text-4xl sm:text-6xl text-white drop-shadow">
        {title}
      </h1>
      <p className="mt-2.5 text-xs sm:text-base text-white/90 font-medium max-w-xl">
        {subtitle}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
      <svg viewBox="0 0 1440 100" className="w-full h-[55px] sm:h-[85px]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="emeraldWaveBanner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10C960" />
            <stop offset="52%" stopColor="#098A42" />
            <stop offset="100%" stopColor="#065227" />
          </linearGradient>
        </defs>
        <path d="M0,10 Q720,95 1440,10 L1440,100 L0,100 Z" fill="url(#emeraldWaveBanner)" />
        <path d="M0,30 Q720,110 1440,30 L1440,100 L0,100 Z" fill="#FFFFFF" />
      </svg>
    </div>
  </section>
);
