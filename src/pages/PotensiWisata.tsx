import React, { useState } from 'react';
import { Plus, MapPin } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import type { WisataItem, PotensiItem, PortalSettings } from '../types/index.ts';

interface PotensiWisataProps {
  wisata: WisataItem[];
  potensi: PotensiItem[];
  settings: PortalSettings;
}

export const PotensiWisata: React.FC<PotensiWisataProps> = ({
  wisata,
  potensi,
  settings,
}) => {
  const [filter, setFilter] = useState<'semua' | 'wisata' | 'potensi'>('semua');

  return (
    <div className="w-full bg-white text-navy overflow-x-hidden">
      <PageBanner
        title={settings.potensiBannerTitle}
        subtitle={settings.potensiBannerSubtitle}
        image={settings.potensiBannerImage}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-10 py-10 sm:py-14 space-y-12 sm:space-y-16">
        {/* Filter Pill Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: 'semua', label: 'SEMUA POTENSI' },
            { id: 'wisata', label: 'DESTINASI WISATA' },
            { id: 'potensi', label: 'HASIL BUMI & HUTAN' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as 'semua' | 'wisata' | 'potensi')}
              className={`cursor-pointer px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all touch-manipulation active:scale-95 ${
                filter === tab.id
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-ochre-cream text-navy hover:bg-ochre/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. Destinasi Wisata Alam & Budaya */}
        {(filter === 'semua' || filter === 'wisata') && (
          <section>
            <div className="mb-8">
              <span className="inline-block bg-terracotta text-white text-[10px] font-semibold px-3 py-1 rounded-full mb-2">
                {settings.district} • {settings.elevation}
              </span>
              <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-navy">
                Destinasi Ekowisata &amp; Adat
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wisata.map((item) => (
                <div key={item.id} className="group flex flex-col">
                  <div className="h-56 w-full rounded-lg overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 bg-white rounded-xl shadow-[0_10px_28px_rgba(26,46,68,0.07)] p-6 -mt-12 mx-2 border border-stone-100 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-ochre text-navy text-[10px] font-bold px-3 py-1 rounded-full -mt-9 mb-3 shadow-xs">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-base text-navy group-hover:text-terracotta transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-navy/70 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="font-bold text-terracotta flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      <span className="text-[11px] font-semibold text-navy/70">{item.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. Komoditas & Hasil Bumi */}
        {(filter === 'semua' || filter === 'potensi') && (
          <section>
            <div className="mb-8">
              <span className="inline-block bg-ochre text-navy text-[10px] font-bold px-3 py-1 rounded-full mb-2">
                Produk Masyarakat Desa
              </span>
              <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-navy">
                Hasil Hutan &amp; Perkebunan Rakyat
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {potensi.map((item) => (
                <div key={item.id} className="group flex flex-col">
                  <div className="h-56 w-full rounded-lg overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="relative z-10 bg-white rounded-xl shadow-[0_10px_28px_rgba(26,46,68,0.07)] p-6 -mt-12 mx-2 border border-stone-100 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-terracotta text-white text-[10px] font-semibold px-3 py-1 rounded-full -mt-9 mb-3 shadow-xs">
                        {item.dusun}
                      </span>
                      <h3 className="font-bold text-base text-navy group-hover:text-terracotta transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-navy/70 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 inline-flex items-center gap-2 text-xs font-bold text-navy">
                      <span className="w-4 h-4 rounded-full bg-ochre text-navy flex items-center justify-center">
                        <Plus className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
