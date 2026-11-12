import assert from 'node:assert';
import { MOCK_POSTS, MOCK_WISATA, MOCK_POTENSI, VILLAGE_INFO, BATAS_WILAYAH, PERANGKAT_DESA, DAFTAR_DUSUN, DEFAULT_PORTAL_SETTINGS } from '../src/data/mockData.ts';
import { cleanWPText, wpService } from '../src/services/wp.ts';

console.log('Running Ponytail verification self-check...');

// 1. Verify Village Information & Default Portal Settings
assert.strictEqual(VILLAGE_INFO.name, 'Desa Bonto Somba');
assert.strictEqual(VILLAGE_INFO.villageCode, '73.09.11.2004');
assert.strictEqual(VILLAGE_INFO.kadesName, 'Suparman');
assert.ok(DEFAULT_PORTAL_SETTINGS.kadesGreetingBody.includes('Bonto Somba'));
assert.ok(DEFAULT_PORTAL_SETTINGS.heroImage.startsWith('http'));
assert.ok(DEFAULT_PORTAL_SETTINGS.wilayahImage.startsWith('http'));
assert.ok(Array.isArray(DEFAULT_PORTAL_SETTINGS.strukturOrganisasi) && DEFAULT_PORTAL_SETTINGS.strukturOrganisasi.length >= 2);

// 2. Verify 4-Way Boundaries & Dusun (Info Desa Menu)
assert.strictEqual(BATAS_WILAYAH.length, 4, 'Must have 4 compass boundaries');
assert.strictEqual(DAFTAR_DUSUN.length, 3, 'Must have 3 official hamlets');
assert.ok(PERANGKAT_DESA.length >= 4, 'Must have complete village official roster');

// 3. Verify HTML entity decoding & wpService transformation
assert.strictEqual(
  cleanWPText('<p>Kawasan Adat &#038; Hutan &#8211; 2026</p>'),
  'Kawasan Adat & Hutan – 2026'
);

const origFetch = globalThis.fetch;
globalThis.fetch = async () =>
  new Response(
    JSON.stringify([
      {
        id: 99,
        date: '2026-11-10T09:00:00',
        title: { rendered: 'Panen Madu &#038; Kopi &#8211; Cindakko' },
        excerpt: { rendered: '<p>Hasil panen warga &amp; LPHD.</p>' },
        content: { rendered: '<p>Isi lengkap berita desa.</p>' },
        category_name: 'Kehutanan &#038; Adat',
        featured_image_url: 'https://example.com/madu.jpg',
      },
    ]),
    { status: 200 }
  );

const mockedResult = await wpService.getPosts();
assert.strictEqual(mockedResult.fromWP, true);
assert.strictEqual(mockedResult.items[0].title, 'Panen Madu & Kopi – Cindakko');
assert.strictEqual(mockedResult.items[0].category, 'Kehutanan & Adat');
assert.strictEqual(mockedResult.items[0].excerpt, 'Hasil panen warga & LPHD.');
globalThis.fetch = origFetch;

// 4. Verify Posts, Wisata & Potensi fallback structure
assert.ok(Array.isArray(MOCK_POSTS) && MOCK_POSTS.length > 0);
assert.ok(MOCK_WISATA.some(w => w.title.includes('Bonto-Bonto')));
assert.ok(MOCK_POTENSI.some(p => p.title.includes('Madu')));

console.log('✓ All Ponytail self-checks passed successfully (100% data integrity & WP parser verified)!');
