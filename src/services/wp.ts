import type { PostItem, WisataItem, PotensiItem, PortalSettings, PerangkatDesa } from '../types/index.ts';
import { MOCK_POSTS, MOCK_WISATA, MOCK_POTENSI, DEFAULT_PORTAL_SETTINGS, PERANGKAT_DESA } from '../data/mockData.ts';

// Default langsung terhubung ke backend Headless WordPress lokal (http://localhost:8080/wp-json/wp/v2)
const envUrl = (import.meta as { env?: { VITE_WP_API_URL?: string } }).env?.VITE_WP_API_URL;
export const WP_API_URL = envUrl || 'http://localhost:8080/wp-json/wp/v2';
export const WP_ROOT_API = WP_API_URL.replace(/\/wp\/v2\/?$/, '');

export function cleanWPText(raw?: string): string {
  if (!raw) return '';
  return raw
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;|&#038;/g, '&')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&#8216;|&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&hellip;|&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

interface WPPostRaw {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  featured_image_url?: string;
  category_name?: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
    author?: Array<{ name: string }>;
  };
}

export const wpService = {
  /**
   * Mengambil seluruh pengaturan kustom portal (Hero, Gambar Wilayah, Sambutan Kades, Sejarah, 3 Dusun, Batas)
   * serta daftar Struktur Perangkat Desa dari endpoint /wp-json/bonto-somba/v1/settings
   */
  async getPortalConfig(): Promise<{
    settings: PortalSettings;
    perangkat: PerangkatDesa[];
    fromWP: boolean;
  }> {
    try {
      const response = await fetch(`${WP_ROOT_API}/bonto-somba/v1/settings`, {
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        return {
          settings: { ...DEFAULT_PORTAL_SETTINGS, ...(data.settings || {}) },
          perangkat:
            Array.isArray(data.perangkat) && data.perangkat.length > 0
              ? data.perangkat
              : PERANGKAT_DESA,
          fromWP: true,
        };
      }
    } catch {
      // Fallback ke data lokal bila server belum jalan
    }
    return {
      settings: DEFAULT_PORTAL_SETTINGS,
      perangkat: PERANGKAT_DESA,
      fromWP: false,
    };
  },

  /**
   * Mengambil daftar artikel / berita dari WordPress REST API
   * Endpoint: /wp-json/wp/v2/posts?_embed
   */
  async getPosts(): Promise<{ items: PostItem[]; fromWP: boolean }> {
    try {
      const response = await fetch(`${WP_API_URL}/posts?_embed&per_page=10`, {
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`WordPress API returned status ${response.status}`);
      }

      const data: WPPostRaw[] = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        return { items: MOCK_POSTS, fromWP: false };
      }

      const items = data.map((item) => {
        const featuredMedia =
          item.featured_image_url ||
          item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
          'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80';
        const categoryName = cleanWPText(
          item.category_name ||
            item._embedded?.['wp:term']?.[0]?.[0]?.name ||
            'Kabar Desa'
        );
        const authorName = item._embedded?.author?.[0]?.name || 'Pemerintah Desa';

        return {
          id: item.id,
          title: cleanWPText(item.title?.rendered) || 'Tanpa Judul',
          excerpt: cleanWPText(item.excerpt?.rendered),
          content: item.content?.rendered,
          date: new Date(item.date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
          category: categoryName,
          image: featuredMedia,
          author: authorName,
        };
      });

      return { items, fromWP: true };
    } catch (error) {
      console.warn('Gagal memuat dari WordPress REST API, beralih ke data lokal:', error);
      return { items: MOCK_POSTS, fromWP: false };
    }
  },

  /**
   * Mengambil destinasi wisata dari WordPress CPT 'wisata' (/wp-json/wp/v2/wisata)
   */
  async getWisata(): Promise<WisataItem[]> {
    try {
      const response = await fetch(`${WP_API_URL}/wisata?_embed&per_page=10`, {
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          return data.map((item: any) => ({
            id: item.id,
            title: cleanWPText(item.title?.rendered) || 'Destinasi Wisata',
            category: cleanWPText(item.kategori_wisata) || 'Wisata Alam',
            location: cleanWPText(item.lokasi) || 'Desa Bonto Somba',
            description: cleanWPText(item.excerpt?.rendered),
            image:
              item.featured_image_url ||
              item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              MOCK_WISATA[0].image,
            highlight: cleanWPText(item.highlight) || 'Destinasi Unggulan',
          }));
        }
      }
    } catch {
      // Fallback ke data lokal bila server belum jalan
    }
    return MOCK_WISATA;
  },

  /**
   * Mengambil potensi desa dari WordPress CPT 'potensi' (/wp-json/wp/v2/potensi)
   */
  async getPotensi(): Promise<PotensiItem[]> {
    try {
      const response = await fetch(`${WP_API_URL}/potensi?_embed&per_page=10`, {
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          return data.map((item: any) => ({
            id: item.id,
            title: cleanWPText(item.title?.rendered) || 'Potensi Desa',
            category: cleanWPText(item.kategori_potensi) || 'Hasil Bumi',
            dusun: cleanWPText(item.dusun) || 'Desa Bonto Somba',
            description: cleanWPText(item.excerpt?.rendered),
            image:
              item.featured_image_url ||
              item._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              MOCK_POTENSI[0].image,
            badge: cleanWPText(item.badge) || 'Komoditas Desa',
          }));
        }
      }
    } catch {
      // Fallback ke data lokal bila server belum jalan
    }
    return MOCK_POTENSI;
  },
};
