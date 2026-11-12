import React from 'react';
import { Home, Info, Newspaper, Sparkles } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: 'beranda', label: 'Beranda', icon: Home },
    { id: 'info', label: 'Info Desa', icon: Info },
    { id: 'berita', label: 'Berita', icon: Newspaper },
    { id: 'potensi', label: 'Potensi', icon: Sparkles },
  ];

  return (
    <nav
      aria-label="Navigasi Bawah Mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-lg border-t border-stone-200/90 shadow-[0_-4px_24px_rgba(6,82,39,0.08)] px-2 py-1.5 transition-all"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 6px)' }}
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`cursor-pointer flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all duration-200 select-none ${
                isActive
                  ? 'text-terracotta font-bold'
                  : 'text-navy/65 hover:text-navy active:scale-95'
              }`}
            >
              <div
                className={`relative flex items-center justify-center w-10 h-7 rounded-full transition-all ${
                  isActive ? 'bg-terracotta/12' : ''
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'
                  }`}
                />
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta absolute -bottom-0.5" />
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 leading-tight font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
