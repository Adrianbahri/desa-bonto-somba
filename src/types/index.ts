export interface PostItem {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  image: string;
  author?: string;
}

export interface WisataItem {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  highlight: string;
}

export interface PotensiItem {
  id: number;
  title: string;
  category: string;
  dusun: string;
  description: string;
  image: string;
  badge: string;
}

export interface PerangkatDesa {
  id?: number;
  nama: string;
  jabatan: string;
  foto?: string;
  tugas: string;
}

export interface DusunInfo {
  nama: string;
  karakter: string;
  kepalaDusun: string;
  komoditas: string;
}

export interface BatasWilayahItem {
  arah: string;
  berbatasan: string;
  kecamatan: string;
}

export interface StrukturOrganisasiItem {
  judul: string;
  gambar: string;
}

export interface PortalSettings {
  name: string;
  lontara: string;
  district: string;
  regency: string;
  province: string;
  postalCode: string;
  villageCode: string;
  elevation: string;
  area: string;
  population: string;
  density: string;
  mapsUrl: string;
  contactEmail?: string;
  contactPhone?: string;
  heroSearchTarget?: string;

  kadesName: string;
  kadesPeriod: string;
  kadesTitle: string;
  kadesPhoto: string;
  kadesGreetingTitle: string;
  kadesGreetingSubtitle: string;
  kadesGreetingBody: string;

  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  wilayahTitle: string;
  wilayahImage: string;
  wilayahDesc1: string;
  wilayahDesc2: string;
  wilayahDesc3: string;

  infoBannerTitle: string;
  infoBannerSubtitle: string;
  infoBannerImage: string;
  beritaBannerTitle: string;
  beritaBannerSubtitle: string;
  beritaBannerImage: string;
  potensiBannerTitle: string;
  potensiBannerSubtitle: string;
  potensiBannerImage: string;

  historyTitle: string;
  etymology: string;
  history: string;
  geology: string;

  dusun: DusunInfo[];
  batas: BatasWilayahItem[];
  strukturOrganisasi?: StrukturOrganisasiItem[];

  officeAddress: string;
  serviceHoursWeekday: string;
  serviceHoursFriday: string;
}
