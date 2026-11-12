import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import type { PortalSettings } from '../types/index.ts';

interface FooterProps {
  settings: PortalSettings;
  onNavigate?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  const mapHref =
    settings.mapsUrl ||
    'https://www.google.com/maps/place/Bonto+Somba,+Tompobulu,+Maros+Regency,+South+Sulawesi';
  const embedSrc =
    settings.mapsUrl && settings.mapsUrl.includes('/maps/embed')
      ? settings.mapsUrl
      : 'https://maps.google.com/maps?q=Bonto+Somba,+Tompobulu,+Maros+Regency,+South+Sulawesi&hl=id&z=12&output=embed';

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

          {/* Col 4: Real Interactive Google Map of Desa Bonto Somba (3 cols) */}
          <div className="md:col-span-3 relative flex justify-end">
            <div className="relative w-full max-w-[260px] h-32 rounded-xl overflow-hidden border border-emerald-500/30 shadow-xs bg-stone-100 group">
              <iframe
                title="Peta Lokasi Desa Bonto Somba"
                src={embedSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                title="Buka di Google Maps"
                className="absolute bottom-1.5 right-1.5 inline-flex items-center gap-1 bg-terracotta text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm opacity-95 hover:opacity-100 transition-opacity"
              >
                <span>Buka Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
