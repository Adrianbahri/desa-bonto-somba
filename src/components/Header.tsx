import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'BERANDA' },
    { id: 'info', label: 'INFO DESA' },
    { id: 'berita', label: 'BERITA DESA' },
    { id: 'potensi', label: 'POTENSI & WISATA' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-6 pb-4 flex items-center justify-between">
        {/* Left Village Official Logo (White Text Variant for Hero Header) */}
        <button
          onClick={() => setActiveTab('beranda')}
          className="cursor-pointer flex items-center text-left group focus:outline-none"
        >
          <img
            src="/logo-light.png"
            alt="Bonto Somba Kabupaten Maros"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover:opacity-90 transition-opacity"
          />
        </button>

        {/* Center/Right Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-11">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`cursor-pointer relative py-1.5 text-xs tracking-[0.14em] uppercase transition-colors focus:outline-none ${
                  isActive
                    ? 'text-ochre font-bold'
                    : 'text-white/90 hover:text-white font-semibold'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-ochre rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-black/30 text-white hover:bg-black/50 backdrop-blur-xs focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-6 bg-navy/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/15 space-y-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs tracking-[0.14em] uppercase font-semibold flex items-center justify-between ${
                  isActive ? 'bg-ochre text-navy' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
