import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Beranda } from './pages/Beranda';
import { InfoDesa } from './pages/InfoDesa';
import { BeritaKabar } from './pages/BeritaKabar';
import { PotensiWisata } from './pages/PotensiWisata';
import { wpService } from './services/wp';
import {
  MOCK_POSTS,
  MOCK_WISATA,
  MOCK_POTENSI,
  DEFAULT_PORTAL_SETTINGS,
  PERANGKAT_DESA,
} from './data/mockData';
import type {
  PostItem,
  WisataItem,
  PotensiItem,
  PortalSettings,
  PerangkatDesa,
} from './types/index.ts';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [posts, setPosts] = useState<PostItem[]>(MOCK_POSTS);
  const [wisata, setWisata] = useState<WisataItem[]>(MOCK_WISATA);
  const [potensi, setPotensi] = useState<PotensiItem[]>(MOCK_POTENSI);
  const [settings, setSettings] = useState<PortalSettings>(DEFAULT_PORTAL_SETTINGS);
  const [perangkat, setPerangkat] = useState<PerangkatDesa[]>(PERANGKAT_DESA);
  const [isFromWP, setIsFromWP] = useState<boolean>(false);

  useEffect(() => {
    async function loadData() {
      const [portalConfig, postResult, fetchedWisata, fetchedPotensi] = await Promise.all([
        wpService.getPortalConfig(),
        wpService.getPosts(),
        wpService.getWisata(),
        wpService.getPotensi(),
      ]);

      setSettings(portalConfig.settings);
      setPerangkat(portalConfig.perangkat);
      setPosts(postResult.items);
      setWisata(fetchedWisata);
      setPotensi(fetchedPotensi);
      setIsFromWP(portalConfig.fromWP || postResult.fromWP);
    }

    loadData();
  }, []);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy">
      <Header activeTab={activeTab} setActiveTab={handleNavigate} />

      <main className="flex-1">
        {activeTab === 'beranda' && (
          <Beranda
            posts={posts}
            wisata={wisata}
            potensi={potensi}
            settings={settings}
            onNavigate={handleNavigate}
          />
        )}
        {activeTab === 'info' && (
          <InfoDesa settings={settings} perangkat={perangkat} />
        )}
        {activeTab === 'berita' && (
          <BeritaKabar
            posts={posts}
            settings={settings}
            isFromWordPress={isFromWP}
          />
        )}
        {activeTab === 'potensi' && (
          <PotensiWisata
            wisata={wisata}
            potensi={potensi}
            settings={settings}
          />
        )}
      </main>

      <Footer settings={settings} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
