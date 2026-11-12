import type { PostItem, WisataItem, PotensiItem, PerangkatDesa, DusunInfo, PortalSettings } from '../types/index.ts';

export const VILLAGE_INFO = {
  name: "Desa Bonto Somba",
  lontara: "ᨅᨚᨈᨚ ᨔᨚᨅ",
  district: "Kecamatan Tompobulu",
  regency: "Kabupaten Maros",
  province: "Sulawesi Selatan",
  postalCode: "90565",
  villageCode: "73.09.11.2004",
  elevation: "± 800 mdpl",
  area: "32,13 km²",
  population: "1.335 Jiwa",
  density: "41 jiwa/km²",
  kadesName: "Suparman",
  kadesPeriod: "2019 – 2027",
  kadesTitle: "Kepala Desa Bonto Somba",
  etymology: "Berasal dari bahasa Makassar: 'Bonto' berarti daratan tinggi/bukit, dan 'Somba' berarti panutan atau pemimpin yang dihormati.",
  history: "Dimekarkan dari Desa Tompobulu pada tahun 1989 sebagai desa persiapan di bawah Kecamatan Tanralili, kemudian resmi menjadi desa definitif pada tahun 1992 bersama pembentukan Kecamatan Tompobulu.",
  geology: "Dataran tinggi berbukit dengan formasi batuan karst Tonasa serta lanskap hutan pinus dan hutan hujan pegunungan."
};

export const BATAS_WILAYAH = [
  { arah: "Utara", berbatasan: "Desa Laiya", kecamatan: "Kecamatan Cenrana, Kab. Maros" },
  { arah: "Selatan", berbatasan: "Desa Bonto Manurung", kecamatan: "Kecamatan Tompobulu, Kab. Maros" },
  { arah: "Timur", berbatasan: "Desa Erelembang", kecamatan: "Kecamatan Tombolo Pao, Kab. Gowa" },
  { arah: "Barat", berbatasan: "Desa Bonto Manai, Bonto Manurung & Bonto Matinggi", kecamatan: "Kecamatan Tompobulu, Kab. Maros" },
];

export const PERANGKAT_DESA: PerangkatDesa[] = [
  { nama: "Suparman", jabatan: "Kepala Desa", tugas: "Penanggung jawab utama penyelenggaraan pemerintahan, pembangunan, dan pemberdayaan masyarakat desa (Periode 2019–2027)." },
  { nama: "Sekretaris Desa", jabatan: "Sekretariat Desa", tugas: "Koordinasi tata usaha, administrasi kependudukan, perencanaan RPJMDes, dan pelaporan desa." },
  { nama: "Kaur Keuangan", jabatan: "Urusan Keuangan", tugas: "Penatausahaan APBDes, verifikasi administrasi keuangan, dan laporan realisasi anggaran." },
  { nama: "Kepala Dusun Bonto-Bonto", jabatan: "Pelaksana Kewilayahan", tugas: "Pembinaan kemasyarakatan Dusun Bonto-Bonto, fasilitas pendidikan, dan kawasan wisata pinus." },
  { nama: "Kepala Dusun Bara", jabatan: "Pelaksana Kewilayahan", tugas: "Pembinaan warga Dusun Bara serta koordinasi kelompok tani perkebunan kopi dan aren." },
  { nama: "Kepala Dusun Cindakko", jabatan: "Pelaksana Kewilayahan", tugas: "Pembinaan wilayah pedalaman Dusun Cindakko dan sinergi bersama Lembaga Pengelola Hutan Desa (LPHD)." },
];

export const DAFTAR_DUSUN: DusunInfo[] = [
  {
    nama: "Dusun Bonto-Bonto",
    karakter: "Berperan sebagai pintu masuk utama desa dan pusat layanan pendidikan dasar (UPTD SDN 246 Bonto-bonto). Dikelilingi tegakan pohon pinus yang sejuk.",
    kepalaDusun: "Pelaksana Wilayah Bonto-Bonto",
    komoditas: "Wisata Hutan Pinus, getah pinus, tanaman hortikultura"
  },
  {
    nama: "Dusun Bara",
    karakter: "Wilayah lereng perbukitan tempat warga membudidayakan tanaman perkebunan dataran tinggi dan mengolah nira aren secara turun-temurun.",
    kepalaDusun: "Pelaksana Wilayah Bara",
    komoditas: "Gula aren cetak tradisional, kopi arabika/robusta, jagung"
  },
  {
    nama: "Dusun Cindakko",
    karakter: "Dusun terjauh yang berbatasan langsung dengan Kab. Gowa dan Kab. Bone. Dihuni komunitas adat yang menjaga kelestarian hutan melalui skema Hutan Desa (LPHD Cindakko).",
    kepalaDusun: "Pelaksana Wilayah Cindakko",
    komoditas: "Madu lebah hutan liar (Apis dorsata), gula aren murni, padi ladang terasering"
  }
];

export const MOCK_POSTS: PostItem[] = [
  {
    id: 1,
    title: "Perintisan dan Perbaikan Akses Jalan Bukit Melalui Program TMMD",
    excerpt: "Kolaborasi TNI Kodim 1422/Maros bersama masyarakat Desa Bonto Somba membuka jalur penghubung antar-dusun guna memudahkan mobilitas hasil pertanian dan akses sekolah.",
    date: "10 November 2026",
    category: "Infrastruktur",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    author: "Pemerintah Desa"
  },
  {
    id: 2,
    title: "Penguatan Pengelolaan Hutan Desa Bersama LPHD Cindakko",
    excerpt: "Masyarakat adat Dusun Cindakko melakukan pemetaan pohon sarang lebah hutan dan menetapkan aturan adat perlindungan mata air pegunungan.",
    date: "28 Oktober 2026",
    category: "Kehutanan & Adat",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    author: "LPHD Cindakko"
  },
  {
    id: 3,
    title: "Musim Panen Nira Aren dan Kopi Dataran Tinggi di Dusun Bara",
    excerpt: "Kelompok pengrajin gula aren dan petani kopi di lereng Dusun Bara mulai meningkatkan produksi menjelang akhir tahun dengan kualitas olahan alami.",
    date: "15 Oktober 2026",
    category: "Ekonomi Desa",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
    author: "Kelompok Tani"
  }
];

export const MOCK_WISATA: WisataItem[] = [
  {
    id: 1,
    title: "Hutan Pinus Bonto-Bonto",
    category: "Ekowisata Alam",
    location: "Dusun Bonto-Bonto",
    description: "Lanskap barisan pohon pinus di ketinggian 800 mdpl dengan udara pegunungan yang tenang. Cocok untuk berkemah akhir pekan, kegiatan alam terbuka, dan rekreasi keluarga.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    highlight: "Area Kemah & Hutan Pinus"
  },
  {
    id: 2,
    title: "Kawasan Adat & Hutan Desa Cindakko",
    category: "Wisata Budaya & Konservasi",
    location: "Dusun Cindakko",
    description: "Menyusuri kehidupan masyarakat adat di pedalaman Tompobulu, melihat langsung proses panen madu hutan lestari, serta hamparan sawah terasering di lereng bukit.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    highlight: "Konservasi Hutan & Budaya"
  },
  {
    id: 3,
    title: "Bentang Karst & Puncak Bulu Monrolo",
    category: "Jalur Jelajah Alam",
    location: "Pegunungan Bonto Somba",
    description: "Jalur pendakian dan pengamatan lanskap batuan formasi Tonasa dengan pemandangan lembah hijau serta kabut pagi khas pegunungan Maros bagian timur.",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=80",
    highlight: "Geowisata & Jalur Trekking"
  }
];

export const MOCK_POTENSI: PotensiItem[] = [
  {
    id: 1,
    title: "Madu Hutan Liar Cindakko",
    category: "Hasil Hutan Bukan Kayu",
    dusun: "Dusun Cindakko",
    description: "Madu murni dari lebah hutan raksasa Sulawesi (Apis dorsata) yang bersarang di pepohonan tinggi hutan lindung desa, dipanen secara tradisional dan berkelanjutan.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80",
    badge: "Komoditas Utama"
  },
  {
    id: 2,
    title: "Gula Aren Cetak Tradisional",
    category: "Olahan Rumah Tangga",
    dusun: "Dusun Bara & Cindakko",
    description: "Diolah langsung oleh kaum ibu dari sadapan nira pohon aren segar yang dimasak menggunakan tungku kayu tanpa campuran pemanis buatan maupun pengawet.",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=80",
    badge: "Olahan Murni"
  },
  {
    id: 3,
    title: "Kopi Pegunungan Tompobulu",
    category: "Perkebunan Rakyat",
    dusun: "Dusun Bara & Bonto-Bonto",
    description: "Tanaman kopi rakyat yang tumbuh subur di bawah naungan pohon pelindung pada ketinggian 800 mdpl dengan cita rasa bersih dan aroma rempah alami.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    badge: "Hasil Kebun"
  }
];

export const DEFAULT_PORTAL_SETTINGS: PortalSettings = {
  ...VILLAGE_INFO,
  mapsUrl: "https://www.google.com/maps/search/Bonto+Somba+Tompobulu+Maros",
  contactEmail: "pemdes@bontosomba.desa.id",
  contactPhone: "0812-4100-9056",
  heroSearchTarget: "berita",
  kadesPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  kadesGreetingTitle: "Sambutan Kepala Desa Bonto Somba",
  kadesGreetingSubtitle: "Membangun Desa Pegunungan yang Mandiri, Lestari, dan Bermartabat",
  kadesGreetingBody: "Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi kita semua.\n\nSelamat datang di Portal Resmi Pemerintah Desa Bonto Somba, Kecamatan Tompobulu, Kabupaten Maros. Melalui laman digital ini, kami berkomitmen menghadirkan keterbukaan informasi publik, memperkenalkan kearifan masyarakat adat Dusun Cindakko, sentra perkebunan Dusun Bara, serta keindahan ekowisata Hutan Pinus Dusun Bonto-Bonto.\n\nMari bersama-sama menjaga kelestarian hutan lindung dan memajukan kesejahteraan warga Desa Bonto Somba.",
  heroTitle: "Bonto Somba",
  heroSubtitle: "Antara pegunungan dan tradisi adat, selamat datang di Bonto Somba.",
  heroImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=90",
  wilayahTitle: "Wilayah Desa",
  wilayahImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85",
  wilayahMapVectorImage: "",
  wilayahDesc1: "Terletak di dataran tinggi Kecamatan Tompobulu pada ketinggian ± 800 mdpl dengan luas 32,13 km², Desa Bonto Somba memadukan keasrian perbukitan karst Tonasa dan hutan lindung yang terjaga.",
  wilayahDesc2: "Melalui peta wilayah dan struktur pemerintahan desa, kenali tiga dusun utama kami—Dusun Bonto-Bonto, Dusun Bara, dan Dusun Cindakko—beserta batas administratif dan layanan sekolah dasar UPTD SDN 246 Bonto-bonto.",
  wilayahDesc3: "Cara sederhana dan informatif untuk mengenal lebih dekat tata ruang serta perangkat Desa Bonto Somba.",
  infoBannerTitle: "Info & Wilayah Desa",
  infoBannerSubtitle: "Sejarah, perangkat pemerintahan, batas administratif, dan profil tiga dusun Bonto Somba.",
  infoBannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
  beritaBannerTitle: "Kabar & Berita Desa",
  beritaBannerSubtitle: "Informasi kegiatan warga, pembangunan infrastruktur, dan pengelolaan hutan adat Bonto Somba.",
  beritaBannerImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85",
  potensiBannerTitle: "Potensi & Wisata Desa",
  potensiBannerSubtitle: "Keindahan Hutan Pinus Bonto-Bonto, kearifan adat Cindakko, serta komoditas madu hutan, aren, dan kopi.",
  potensiBannerImage: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85",
  historyTitle: "Asal-usul Bonto Somba",
  geology: "Dataran tinggi berbukit dengan formasi batuan karst Tonasa serta lanskap hutan pinus dan hutan hujan pegunungan. Di bidang pendidikan dasar, masyarakat dilayani oleh UPTD SDN 246 Bonto-bonto serta layanan poskesdes desa.",
  dusun: DAFTAR_DUSUN,
  batas: BATAS_WILAYAH,
  strukturOrganisasi: [
    {
      judul: "Struktur Pemerintah Desa Bonto Somba",
      gambar: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85"
    },
    {
      judul: "Struktur TP-PKK Desa Bonto Somba",
      gambar: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85"
    },
    {
      judul: "Struktur BPD & Lembaga Kemasyarakatan Desa",
      gambar: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85"
    }
  ],
  officeAddress: "Dusun Bonto-Bonto, Kec. Tompobulu",
  serviceHoursWeekday: "Senin – Kamis : 08.00 s/d 15.00 WITA",
  serviceHoursFriday: "Jumat : 08.00 s/d 11.30 WITA"
};
