import React, { useState } from 'react';
import { ExternalLink, Compass, Users, MapPin, BookOpen, Quote, Network } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import type { PortalSettings, PerangkatDesa } from '../types/index.ts';

interface InfoDesaProps {
  settings: PortalSettings;
  perangkat: PerangkatDesa[];
}

export const InfoDesa: React.FC<InfoDesaProps> = ({ settings, perangkat }) => {
  const [selectedStrukturIdx, setSelectedStrukturIdx] = useState<number>(0);

  const greetingParagraphs = (settings.kadesGreetingBody || '')
    .split(/\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const strukturList =
    Array.isArray(settings.strukturOrganisasi) && settings.strukturOrganisasi.length > 0
      ? settings.strukturOrganisasi
      : [];

  const activeStruktur = strukturList[selectedStrukturIdx] || strukturList[0];

  return (
    <div className="w-full bg-white text-navy overflow-x-hidden">
      <PageBanner
        title={settings.infoBannerTitle}
        subtitle={settings.infoBannerSubtitle}
        image={settings.infoBannerImage}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 space-y-20">
        {/* 1. Sejarah & Identitas Desa */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="w-64 h-64 rounded-full bg-ochre-cream absolute -left-16 -top-8 pointer-events-none" />

          <div className="relative z-10 lg:col-span-7 space-y-4">
            <span className="inline-block bg-terracotta text-white text-[11px] font-semibold px-3.5 py-1 rounded-full">
              Sejarah &amp; Etimologi ({settings.lontara})
            </span>
            <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-navy">
              {settings.historyTitle}
            </h2>
            <p className="text-sm text-navy/80 leading-relaxed">
              {settings.etymology}
            </p>
            <p className="text-sm text-navy/80 leading-relaxed">
              {settings.history}
            </p>
            <p className="text-sm text-navy/80 leading-relaxed">
              {settings.geology}
            </p>
          </div>

          {/* Tabel Identitas Resmi */}
          <div className="relative z-10 lg:col-span-5 bg-white rounded-2xl shadow-[0_10px_30px_rgba(26,46,68,0.07)] border border-stone-100 p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-100">
              <BookOpen className="w-4 h-4 text-terracotta" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-navy">
                Data Administrasi Desa
              </h3>
            </div>
            <dl className="divide-y divide-stone-100 text-xs">
              <div className="py-2.5 flex justify-between">
                <dt className="text-navy/65">Kode Wilayah Kemendagri</dt>
                <dd className="font-mono font-bold text-navy">{settings.villageCode}</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-navy/65">Kode Pos</dt>
                <dd className="font-mono font-bold text-navy">{settings.postalCode}</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-navy/65">Luas Wilayah</dt>
                <dd className="font-bold text-navy">{settings.area}</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-navy/65">Ketinggian (Elevasi)</dt>
                <dd className="font-bold text-navy">{settings.elevation}</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-navy/65">Jumlah Penduduk</dt>
                <dd className="font-bold text-navy">{settings.population} ({settings.density})</dd>
              </div>
              <div className="py-2.5 flex justify-between">
                <dt className="text-navy/65">Kepala Desa Saat Ini</dt>
                <dd className="font-bold text-terracotta">{settings.kadesName} ({settings.kadesPeriod})</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 1B. Profil & Sambutan Kepala Desa */}
        <section className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(3,43,17,0.07)] border border-stone-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-4 bg-terracotta p-8 text-white flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/90 shadow-lg mb-4 bg-white/10">
                <img
                  src={settings.kadesPhoto}
                  alt={settings.kadesName}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="inline-block bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-2">
                {settings.kadesTitle}
              </span>
              <h3 className="font-serif italic font-bold text-2xl text-white">
                {settings.kadesName}
              </h3>
              <p className="text-xs text-white/85 mt-1 font-medium">
                Periode Jabatan {settings.kadesPeriod}
              </p>
            </div>

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
            </div>
          </div>
        </section>

        {/* 2. Bagan / Foto Struktur Desa & Organisasi (Multi-Struktur: Struktur Desa, PKK, BPD, dll) */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-block bg-ochre text-white text-[10px] font-bold px-3.5 py-1 rounded-full mb-2">
                Pamong, PKK &amp; Lembaga Desa
              </span>
              <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-navy">
                Struktur Organisasi Desa
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-navy/65">
              <Users className="w-4 h-4 text-terracotta" />
              <span>{settings.district}, {settings.regency}</span>
            </div>
          </div>

          {strukturList.length > 0 && activeStruktur && (
            <div className="space-y-6 mb-10">
              {/* Pilihan Tab Judul Struktur (Struktur Desa, Struktur PKK, BPD, dll) */}
              {strukturList.length > 1 && (
                <div className="flex flex-wrap items-center gap-2.5">
                  {strukturList.map((item, idx) => {
                    const isActive = idx === selectedStrukturIdx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedStrukturIdx(idx)}
                        className={`cursor-pointer px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                          isActive
                            ? 'bg-terracotta text-white shadow-sm'
                            : 'bg-ochre-cream text-navy hover:bg-emerald-50 border border-emerald-500/20'
                        }`}
                      >
                        <Network className="w-3.5 h-3.5" />
                        <span>{item.judul}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Card Tampilan Gambar / Foto Struktur */}
              <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(3,43,17,0.08)] border border-stone-100 overflow-hidden">
                <div className="bg-terracotta px-6 py-4 flex flex-wrap items-center justify-between gap-2 text-white">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wide">
                    <Network className="w-4 h-4 shrink-0" />
                    <span>{activeStruktur.judul}</span>
                  </div>
                  <a
                    href={activeStruktur.gambar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
                  >
                    <span>Lihat Ukuran Penuh</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 sm:p-8 bg-stone-50/60 flex justify-center">
                  <img
                    src={activeStruktur.gambar}
                    alt={activeStruktur.judul}
                    className="w-full max-h-[680px] object-contain rounded-xl border border-stone-200/80 bg-white shadow-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Daftar Ringkas Jabatan Perangkat Desa (jika ada di CPT Perangkat) */}
          {perangkat.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {perangkat.map((p, idx) => {
                const isKades = idx === 0;
                return (
                  <div
                    key={p.id || idx}
                    className={`bg-white rounded-xl p-6 shadow-[0_10px_30px_rgba(15,46,34,0.06)] border flex flex-col justify-between transition-all hover:-translate-y-0.5 ${
                      isKades ? 'border-emerald-500/40 ring-1 ring-emerald-500/20' : 'border-stone-100'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="bg-terracotta text-[10px] font-semibold px-3.5 py-1 rounded-full text-white shadow-xs"
                        >
                          {p.jabatan}
                        </span>
                        <div className="flex-1 h-[1.5px] bg-terracotta/40" />
                      </div>
                      <div className="flex items-center gap-3">
                        {p.foto && (
                          <img
                            src={p.foto}
                            alt={p.nama}
                            className="w-11 h-11 rounded-full object-cover border border-emerald-500/30 shrink-0"
                          />
                        )}
                        <h3 className="font-bold text-base text-navy">{p.nama}</h3>
                      </div>
                      <p className="text-xs text-navy/70 mt-2 leading-relaxed">{p.tugas}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 3. Profil 3 Dusun & Peta Batas Wilayah */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* 3 Dusun (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-navy mb-4">
              Tiga Wilayah Dusun
            </h2>
            {(settings.dusun || []).map((d, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-[0_8px_25px_rgba(26,46,68,0.06)] border border-stone-100"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-navy flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-terracotta" />
                    {d.nama}
                  </h3>
                  <span className="bg-ochre text-navy text-[10px] font-bold px-3 py-1 rounded-full">
                    {d.kepalaDusun}
                  </span>
                </div>
                <p className="text-xs text-navy/75 leading-relaxed mb-3">{d.karakter}</p>
                <p className="text-xs font-semibold text-terracotta">
                  Potensi Utama: <span className="text-navy font-normal">{d.komoditas}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Batas Wilayah 4 Penjuru & Peta (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h2 className="font-serif italic font-bold text-3xl sm:text-4xl text-navy mb-4">
              Batas Administratif
            </h2>
            <div className="bg-white text-navy rounded-2xl shadow-[0_10px_30px_rgba(3,43,17,0.07)] border border-stone-100 overflow-hidden">
              <div className="bg-terracotta px-6 py-4 flex items-center gap-2.5 text-white text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 shrink-0" />
                <span>Empat Penjuru Mata Angin</span>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-3.5 divide-y divide-stone-100 text-xs">
                  {(settings.batas || []).map((b, idx) => (
                    <div key={idx} className="pt-3.5 first:pt-0">
                      <span className="inline-block bg-terracotta text-white text-[10px] font-semibold px-3 py-0.5 rounded-full mb-1.5 shadow-2xs">
                        Sebelah {b.arah}
                      </span>
                      <p className="font-bold text-sm text-navy">{b.berbatasan}</p>
                      <p className="text-navy/65 text-[11px] mt-0.5">{b.kecamatan}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <a
                    href={settings.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-hover text-white text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-full transition-all shadow-sm hover:shadow-md"
                  >
                    <span>Buka Peta Interaktif Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
