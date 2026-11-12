import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import type { PortalSettings } from '../types/index.ts';

interface FooterProps {
  settings: PortalSettings;
  onNavigate?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  return (
    <footer className="w-full bg-white text-navy border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Col 1: Official Logo Dark Text Variant (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <img
              src="/logo-dark.png"
              alt="Bonto Somba Kabupaten Maros"
              className="h-11 sm:h-12 w-auto object-contain"
            />
            <span className="text-xs text-terracotta font-medium mt-2">
              {settings.district} ({settings.lontara})
            </span>
          </div>

          {/* Col 2: Kantor Desa (3 cols) */}
          <div className="md:col-span-3 space-y-1.5 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-navy text-[11px] mb-2">
              KANTOR {settings.name.toUpperCase()}
            </h4>
            <p className="text-navy/75">{settings.officeAddress}</p>
            <p className="text-navy/75">{settings.postalCode} {settings.regency}, {settings.province}</p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-navy">
              <a
                href={`tel:${(settings.contactPhone || settings.villageCode).replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-terracotta transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-terracotta text-white flex items-center justify-center">
                  <Phone className="w-2.5 h-2.5" />
                </span>
                {settings.contactPhone || settings.villageCode}
              </a>
              <a
                href={`mailto:${settings.contactEmail || 'pemdes@bontosomba.desa.id'}`}
                className="inline-flex items-center gap-1.5 hover:text-terracotta transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-terracotta text-white flex items-center justify-center">
                  <Mail className="w-2.5 h-2.5" />
                </span>
                {settings.contactEmail || 'Info & Email Desa'}
              </a>
            </div>
          </div>

          {/* Col 3: Jam Pelayanan & Kades (3 cols) */}
          <div className="md:col-span-3 space-y-1.5 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-navy text-[11px] mb-2">
              JAM PELAYANAN &amp; PAMONG
            </h4>
            <p className="text-navy/75">{settings.serviceHoursWeekday}</p>
            <p className="text-navy/75">{settings.serviceHoursFriday}</p>
            <p className="text-navy/90 font-medium pt-1">
              Kepala Desa : <span className="font-bold">{settings.kadesName}</span>
            </p>
          </div>

          {/* Col 4: Regional Mini-Map Graphic (3 cols) */}
          <div className="md:col-span-3 relative flex justify-end">
            <a
              href={settings.mapsUrl || 'https://www.google.com/maps/search/Bonto+Somba+Tompobulu+Maros'}
              target="_blank"
              rel="noopener noreferrer"
              title="Buka Lokasi Desa di Google Maps"
              className="relative w-full max-w-[230px] h-28 bg-ochre-cream/70 rounded-xl overflow-hidden border border-ochre/30 flex items-center justify-center p-3 group hover:border-emerald-500/50 transition-all"
            >
              <svg
                viewBox="0 0 240 110"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="footerMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10C960" />
                    <stop offset="55%" stopColor="#098A42" />
                    <stop offset="100%" stopColor="#065227" />
                  </linearGradient>
                </defs>
                <path
                  d="M15,85 C35,65 55,40 90,30 C125,20 165,15 215,28 C225,45 230,75 210,95 C175,105 120,102 70,98 C35,95 10,92 15,85 Z"
                  fill="url(#footerMapGrad)"
                  stroke="#02260D"
                  strokeWidth="1"
                />
                <circle cx="85" cy="52" r="2.5" fill="#FFFFFF" />
                <text x="65" y="45" fill="#FFFFFF" fontSize="7" fontWeight="700">
                  MAROS
                </text>

                <circle cx="58" cy="78" r="2.5" fill="#FFFFFF" />
                <text x="35" y="90" fill="#FFFFFF" fontSize="6.5" fontWeight="600">
                  MAKASSAR
                </text>

                <circle cx="178" cy="68" r="2" fill="#FFFFFF" opacity="0.8" />
                <text x="165" y="80" fill="#FFFFFF" fontSize="6" fontWeight="600" opacity="0.85">
                  TOMBOLO PAO
                </text>

                <circle cx="132" cy="56" r="6" fill="#FFFFFF" />
                <circle cx="132" cy="56" r="2.5" fill="#00B84C" />
                <text x="72" y="69" fill="#FFFFFF" fontSize="8" fontWeight="800">
                  BONTO SOMBA
                </text>
              </svg>
              <MapPin className="w-4 h-4 text-terracotta absolute top-2.5 right-2.5 opacity-80 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
