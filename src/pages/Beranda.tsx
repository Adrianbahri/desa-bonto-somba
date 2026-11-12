import React from 'react';
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Landmark,
  Map,
  Trees,
  Sparkles,
  Newspaper,
  Plus,
  ChevronLeft,
  ChevronRight,
  Quote,
} from 'lucide-react';
import type { PostItem, WisataItem, PotensiItem, PortalSettings } from '../types/index.ts';

interface BerandaProps {
  posts: PostItem[];
  wisata: WisataItem[];
  potensi: PotensiItem[];
  settings: PortalSettings;
  onNavigate: (tab: string) => void;
}

export const Beranda: React.FC<BerandaProps> = ({
  posts,
  wisata,
  potensi,
  settings,
  onNavigate,
}) => {
  const quickCircles = [
    {
      label: 'Pemerintahan Desa',
      icon: Landmark,
      target: 'info',
    },
    {
      label: 'Peta & Batas Wilayah',
      icon: Map,
      target: 'info',
    },
    {
      label: 'Tiga Wilayah Dusun',
      icon: Trees,
      target: 'info',
    },
    {
      label: 'Wisata Alam & Adat',
      icon: Sparkles,
      target: 'potensi',
    },
    {
      label: 'Kabar & Pengumuman',
      icon: Newspaper,
      target: 'berita',
    },
  ];

  const featuredPost = posts[0];
  const sidePosts = [
    posts[1],
    posts[2],
    posts[3] || {
      id: 4,
      title: 'Pendataan Potensi Hasil Hutan Bukan Kayu & UMKM Desa',
      excerpt:
        'Pemerintah Desa Bonto Somba bersama kelompok tani mendata hasil panen madu hutan Cindakko, gula aren, dan kopi.',
      date: '02 Oktober 2026',
      category: 'Ekonomi Desa',
      image: '',
    },
  ].filter((item): item is PostItem => Boolean(item));

  const showcaseCards = [
    {
      badge: wisata[0]?.location || 'Dusun Bonto-Bonto',
      title: wisata[0]?.title || 'Hutan Pinus Bonto-Bonto',
      desc:
        wisata[0]?.description ||
        'Kawasan hutan pinus sejuk di ketinggian 800 mdpl untuk berkemah dan rekreasi alam keluarga.',
      image:
        wisata[0]?.image ||
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
      target: 'potensi',
    },
    {
      badge: potensi[0]?.dusun || 'Dusun Cindakko',
      title: potensi[0]?.title || 'Madu Hutan Liar Cindakko',
      desc:
        potensi[0]?.description ||
        'Komoditas madu lebah hutan murni yang dipanen lestari oleh masyarakat adat Cindakko.',
      image:
        potensi[0]?.image ||
        'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      target: 'potensi',
    },
    {
      badge: potensi[1]?.dusun || 'Dusun Bara',
      title: potensi[1]?.title || 'Gula Aren & Kopi Pegunungan',
      desc:
        potensi[1]?.description ||
        'Olahan nira aren alami tanpa pengawet serta biji kopi pilihan dari lereng bukit Tompobulu.',
      image:
        potensi[1]?.image ||
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      target: 'potensi',
    },
  ];

  const greetingParagraphs = (settings.kadesGreetingBody || '')
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="w-full bg-white text-navy overflow-x-hidden">
      {/* ================= 1. HERO SECTION (LEYCHERT STYLE) ================= */}
      <section className="relative w-full">
        <div className="relative h-[520px] sm:h-[580px] w-full overflow-hidden">
          <img
            src={settings.heroImage}
            alt={settings.heroTitle}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C2418]/70 via-[#143625]/35 to-[#0C2418]/55" />

          {/* Centered Title & Subtitle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 -mt-6">
            <h1 className="font-serif italic font-bold text-5xl sm:text-7xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] tracking-wide">
              {settings.heroTitle}
            </h1>
            <p className="mt-3 text-sm sm:text-lg text-white/95 font-medium max-w-xl drop-shadow">
              {settings.heroSubtitle}
            </p>

            {/* 4 Small Circular Action Icons: Search, Email, Telepon & Google Maps */}
            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => onNavigate(settings.heroSearchTarget || 'berita')}
                title="Cari Informasi / Berita Desa"
                className="cursor-pointer w-8 h-8 rounded-full bg-terracotta hover:bg-terracotta-hover text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
              <a
                href={
                  settings.contactEmail?.startsWith('http') || settings.contactEmail?.startsWith('mailto:')
                    ? settings.contactEmail
                    : `mailto:${settings.contactEmail || 'pemdes@bontosomba.desa.id'}`
                }
                title={`Email: ${settings.contactEmail || 'pemdes@bontosomba.desa.id'}`}
                className="cursor-pointer w-8 h-8 rounded-full bg-terracotta hover:bg-terracotta-hover text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href={
                  settings.contactPhone?.startsWith('http') || settings.contactPhone?.startsWith('tel:')
                    ? settings.contactPhone
                    : `tel:${(settings.contactPhone || '081241009056').replace(/\s+/g, '')}`
                }
                title={`Telepon / WA: ${settings.contactPhone || '0812-4100-9056'}`}
                className="cursor-pointer w-8 h-8 rounded-full bg-terracotta hover:bg-terracotta-hover text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={settings.mapsUrl || 'https://www.google.com/maps/search/Bonto+Somba+Tompobulu+Maros'}
                target="_blank"
                rel="noopener noreferrer"
                title="Lokasi Kantor & Wilayah Desa di Google Maps"
                className="cursor-pointer w-8 h-8 rounded-full bg-terracotta hover:bg-terracotta-hover text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
              >
                <MapPin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Curved Emerald & White Bottom Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
            <svg
              viewBox="0 0 1440 130"
              className="w-full h-[70px] sm:h-[110px]"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="emeraldWaveHero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10C960" />
                  <stop offset="52%" stopColor="#098A42" />
                  <stop offset="100%" stopColor="#065227" />
                </linearGradient>
              </defs>
              <path
                d="M0,15 Q720,125 1440,15 L1440,130 L0,130 Z"
                fill="url(#emeraldWaveHero)"
              />
              <path
                d="M0,38 Q720,140 1440,38 L1440,130 L0,130 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>

        {/* 5 Circular White Icon Badges Sitting Along the Curve */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 -mt-16 sm:-mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-4 justify-items-center">
            {quickCircles.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => onNavigate(item.target)}
                  className={`cursor-pointer group flex flex-col items-center text-center focus:outline-none ${
                    idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-[0_8px_28px_rgba(26,46,68,0.1)] border border-stone-100 flex items-center justify-center group-hover:-translate-y-1 transition-all duration-200">
                    <div className="relative">
                      <IconComponent
                        className="w-8 h-8 sm:w-9 sm:h-9 text-navy group-hover:text-terracotta transition-colors"
                        strokeWidth={1.5}
                      />
                      <span className="w-2 h-2 rounded-full bg-terracotta absolute -top-0.5 -right-0.5" />
                    </div>
                  </div>
                  <span className="mt-3 text-xs font-bold text-navy group-hover:text-terracotta transition-colors">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 1B. SAMBUTAN / UCAPAN KEPALA DESA ================= */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-6">
        <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(3,43,17,0.07)] border border-stone-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Card: Foto & Identitas Kepala Desa (4 cols) */}
            <div className="lg:col-span-4 bg-terracotta p-8 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/90 shadow-lg mb-4 bg-white/10">
                <img
                  src={settings.kadesPhoto}
                  alt={settings.kadesName}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-2">
                {settings.kadesTitle}
              </span>
              <h3 className="font-serif italic font-bold text-2xl text-white">
                {settings.kadesName}
              </h3>
              <p className="text-xs text-white/85 mt-1 font-medium">
                Periode Jabatan {settings.kadesPeriod}
              </p>
            </div>

            {/* Right Card: Isi Sambutan Kepala Desa (8 cols) */}
            <div className="lg:col-span-8 p-7 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="inline-block bg-terracotta text-white text-[10px] font-semibold px-3.5 py-1 rounded-full">
                    {settings.kadesGreetingTitle}
                  </span>
                  <Quote className="w-7 h-7 text-terracotta/25 shrink-0" />
                </div>

                <h2 className="font-serif italic font-bold text-2xl sm:text-3xl text-navy mb-4 leading-snug">
                  {settings.kadesGreetingSubtitle}
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-navy/80 leading-relaxed">
                  {greetingParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-navy/65">
                  Pemerintah {settings.name} • {settings.district}, {settings.regency}
                </div>
                <button
                  onClick={() => onNavigate('info')}
                  className="cursor-pointer inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-terracotta transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-terracotta text-white flex items-center justify-center">
                    <Plus className="w-2.5 h-2.5" strokeWidth={3} />
                  </span>
                  <span>Lihat Struktur Perangkat Desa</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. KABAR DESA (ACTUALITÉS SECTION) ================= */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-16">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-ochre-cream absolute -left-16 top-10 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Title + Featured News with Overlapping Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
              <h2 className="font-serif italic font-bold text-4xl sm:text-5xl text-navy">
                Kabar Desa
              </h2>
              <button
                onClick={() => onNavigate('berita')}
                className="cursor-pointer bg-navy hover:bg-navy-light text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-xs"
              >
                SEMUA BERITA
              </button>
            </div>

            {featuredPost && (
              <div
                onClick={() => onNavigate('berita')}
                className="cursor-pointer group"
              >
                <div className="overflow-hidden rounded-lg h-64 sm:h-80 w-full bg-stone-100">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Overlapping White Box Bottom-Left */}
                <div className="relative z-10 bg-white rounded-xl shadow-[0_12px_35px_rgba(26,46,68,0.08)] p-6 -mt-20 mr-4 sm:mr-16 border border-stone-100">
                  <span className="inline-block bg-terracotta text-white text-[11px] font-semibold px-3.5 py-1 rounded-full -mt-9 mb-3 shadow-xs">
                    Dipublikasikan {featuredPost.date}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-navy group-hover:text-terracotta transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>
                  <p className="text-xs text-navy/70 mt-2 leading-relaxed line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-navy group-hover:text-terracotta transition-colors">
                    <span className="w-4 h-4 rounded-full bg-terracotta text-white flex items-center justify-center">
                      <Plus className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                    <span>Baca selengkapnya</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 3 Stacked News Items (5 cols) */}
          <div className="lg:col-span-5 space-y-7 lg:pt-4">
            {sidePosts.map((post, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('berita')}
                className="cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="bg-terracotta text-white text-[10px] font-semibold px-3 py-1 rounded-full shrink-0">
                    {post.date}
                  </span>
                  <div className="flex-1 h-[1.5px] bg-terracotta/50" />
                </div>

                <h3 className="font-bold text-sm sm:text-base text-navy group-hover:text-terracotta transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-navy/70 mt-1.5 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-2.5 inline-flex items-center gap-2 text-xs font-bold text-navy group-hover:text-terracotta transition-colors">
                  <span className="w-4 h-4 rounded-full bg-terracotta text-white flex items-center justify-center">
                    <Plus className="w-2.5 h-2.5" strokeWidth={3} />
                  </span>
                  <span>Baca selengkapnya</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. POTENSI & WISATA (AGENDA SECTION) ================= */}
      <section className="relative max-w-6xl mx-auto px-6 sm:px-10 py-16">
        <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-ochre-cream absolute -right-24 top-0 pointer-events-none" />

        <div className="relative z-10 flex justify-end gap-2 mb-4">
          <button
            onClick={() => onNavigate('potensi')}
            aria-label="Sebelumnya"
            className="cursor-pointer w-9 h-9 rounded-full bg-navy hover:bg-navy-light text-white flex items-center justify-center shadow-xs transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('potensi')}
            aria-label="Selanjutnya"
            className="cursor-pointer w-9 h-9 rounded-full bg-navy hover:bg-navy-light text-white flex items-center justify-center shadow-xs transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif italic font-bold text-4xl sm:text-5xl text-navy">
              Potensi
            </h2>
            <p className="text-xs text-navy/75 leading-relaxed pt-1">
              Sepanjang tahun, {settings.name} menghadirkan keasrian ekowisata hutan pinus pegunungan, budaya masyarakat adat Cindakko, serta hasil bumi organik.
            </p>
            <p className="text-xs text-navy/75 leading-relaxed">
              Temukan destinasi wisata alam dan komoditas unggulan dari tiga dusun kami.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('potensi')}
                className="cursor-pointer bg-navy hover:bg-navy-light text-white text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-colors shadow-xs"
              >
                SEMUA POTENSI
              </button>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(card.target)}
                className="cursor-pointer group flex flex-col"
              >
                <div className="h-52 w-full rounded-lg overflow-hidden bg-stone-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="relative z-10 bg-white rounded-xl shadow-[0_10px_28px_rgba(26,46,68,0.07)] p-5 -mt-10 mx-2 border border-stone-100 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-ochre text-navy text-[10px] font-bold px-3 py-1 rounded-full -mt-8 mb-2.5 shadow-xs">
                      {card.badge}
                    </span>
                    <h3 className="font-bold text-sm sm:text-base text-navy group-hover:text-terracotta transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-navy/70 mt-1.5 leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 inline-flex items-center gap-2 text-xs font-bold text-navy group-hover:text-terracotta transition-colors">
                    <span className="w-4 h-4 rounded-full bg-ochre text-navy flex items-center justify-center">
                      <Plus className="w-2.5 h-2.5" strokeWidth={3} />
                    </span>
                    <span>Lihat selengkapnya</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. WILAYAH DESA (LE TERRITOIRE SECTION) ================= */}
      <section className="relative w-full min-h-[520px] flex items-center overflow-hidden mt-8 py-20">
        {/* Customisable Scenic Mountain Background via WordPress */}
        <img
          src={settings.wilayahImage}
          alt={settings.wilayahTitle}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/30" />

        <div className="relative z-10 max-w-6xl w-full mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description (6 cols) */}
            <div className="lg:col-span-6 space-y-4 text-white">
              <h2 className="font-serif italic font-bold text-4xl sm:text-5xl text-white">
                {settings.wilayahTitle}
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-1">
                {settings.wilayahDesc1}
              </p>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                {settings.wilayahDesc2}
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {settings.wilayahDesc3}
              </p>
              <div className="pt-3">
                <button
                  onClick={() => onNavigate('info')}
                  className="cursor-pointer bg-terracotta hover:bg-terracotta-hover text-white text-[11px] font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-lg transition-all hover:scale-105"
                >
                  LIHAT PETA &amp; PERANGKAT DESA
                </button>
              </div>
            </div>

            {/* Right Territory Map Silhouette Graphic (6 cols) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div
                onClick={() => onNavigate('info')}
                className="cursor-pointer relative w-full max-w-[380px] aspect-square flex items-center justify-center group"
              >
                <svg
                  viewBox="0 0 360 360"
                  className="w-full h-full drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)] group-hover:scale-[1.02] transition-transform duration-300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10C960" />
                      <stop offset="52%" stopColor="#098A42" />
                      <stop offset="100%" stopColor="#065227" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M65,80 L155,40 L190,65 L245,55 L295,95 L285,155 L240,180 L235,245 L210,320 L165,335 L155,280 L175,230 L135,155 L85,115 Z"
                    fill="url(#mapGrad)"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M145,165 Q195,180 245,175 M195,178 L185,285"
                    stroke="#86EFAC"
                    strokeWidth="2"
                  />

                  <circle cx="195" cy="162" r="9" fill="#00B84C" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="195" cy="162" r="3" fill="#FFFFFF" />

                  <rect x="130" y="198" width="58" height="16" rx="3" fill="#FFFFFF" />
                  <text x="159" y="209" textAnchor="middle" fill="#02260D" fontSize="7.5" fontWeight="800">
                    BONTO-BONTO
                  </text>

                  <rect x="220" y="188" width="46" height="16" rx="3" fill="#FFFFFF" />
                  <text x="243" y="199" textAnchor="middle" fill="#02260D" fontSize="7.5" fontWeight="800">
                    BARA
                  </text>

                  <rect x="172" y="268" width="52" height="16" rx="3" fill="#FFFFFF" />
                  <text x="198" y="279" textAnchor="middle" fill="#02260D" fontSize="7.5" fontWeight="800">
                    CINDAKKO
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
