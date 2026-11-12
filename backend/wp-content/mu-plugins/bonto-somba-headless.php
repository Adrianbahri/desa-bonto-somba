<?php
/**
 * Plugin Name: Bonto Somba Headless CMS Core
 * Description: Penyedia REST API, Custom Admin Page "Pengaturan Portal Desa", Custom Post Types (Wisata, Potensi, Perangkat Desa), Meta Boxes, CORS, dan Auto-Seeder untuk Portal Resmi Desa Bonto Somba.
 * Version: 2.0.0
 * Author: Pemerintah Desa Bonto Somba
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default Konfigurasi Lengkap Portal Desa Bonto Somba
 */
function bonto_somba_default_settings() {
	return [
		// 1. Identitas & Administrasi Desa
		'name'                  => 'Desa Bonto Somba',
		'lontara'               => 'ᨅᨚᨈᨚ ᨔᨚᨅ',
		'district'              => 'Kecamatan Tompobulu',
		'regency'               => 'Kabupaten Maros',
		'province'              => 'Sulawesi Selatan',
		'postalCode'            => '90565',
		'villageCode'           => '73.09.11.2004',
		'elevation'             => '± 800 mdpl',
		'area'                  => '32,13 km²',
		'population'            => '1.335 Jiwa',
		'density'               => '41 jiwa/km²',
		'mapsUrl'               => 'https://www.google.com/maps/search/Bonto+Somba+Tompobulu+Maros',

		// 2. Kepala Desa & Sambutan / Ucapan Kepala Desa
		'kadesName'             => 'Suparman',
		'kadesPeriod'           => '2019 – 2027',
		'kadesTitle'            => 'Kepala Desa Bonto Somba',
		'kadesPhoto'            => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
		'kadesGreetingTitle'    => 'Sambutan Kepala Desa Bonto Somba',
		'kadesGreetingSubtitle' => 'Membangun Desa Pegunungan yang Mandiri, Lestari, dan Bermartabat',
		'kadesGreetingBody'     => "Assalamu’alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera bagi kita semua.\n\nSelamat datang di Portal Resmi Pemerintah Desa Bonto Somba, Kecamatan Tompobulu, Kabupaten Maros. Melalui laman digital ini, kami berkomitmen menghadirkan keterbukaan informasi publik, memperkenalkan kearifan masyarakat adat Dusun Cindakko, sentra perkebunan Dusun Bara, serta keindahan ekowisata Hutan Pinus Dusun Bonto-Bonto.\n\nMari bersama-sama menjaga kelestarian hutan lindung dan memajukan kesejahteraan warga Desa Bonto Somba.",

		// 3. Gambar & Teks Banner (Hero, Wilayah Desa, Info, Berita, Wisata)
		'heroTitle'             => 'Bonto Somba',
		'heroSubtitle'          => 'Antara pegunungan dan tradisi adat, selamat datang di Bonto Somba.',
		'heroImage'             => 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=90',
		'wilayahTitle'          => 'Wilayah Desa',
		'wilayahImage'          => 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85',
		'wilayahDesc1'          => 'Terletak di dataran tinggi Kecamatan Tompobulu pada ketinggian ± 800 mdpl dengan luas 32,13 km², Desa Bonto Somba memadukan keasrian perbukitan karst Tonasa dan hutan lindung yang terjaga.',
		'wilayahDesc2'          => 'Melalui peta wilayah dan struktur pemerintahan desa, kenali tiga dusun utama kami—Dusun Bonto-Bonto, Dusun Bara, dan Dusun Cindakko—beserta batas administratif dan layanan sekolah dasar UPTD SDN 246 Bonto-bonto.',
		'wilayahDesc3'          => 'Cara sederhana dan informatif untuk mengenal lebih dekat tata ruang serta perangkat Desa Bonto Somba.',
		'infoBannerTitle'       => 'Info & Wilayah Desa',
		'infoBannerSubtitle'    => 'Sejarah, perangkat pemerintahan, batas administratif, dan profil tiga dusun Bonto Somba.',
		'infoBannerImage'       => 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85',
		'beritaBannerTitle'     => 'Kabar & Berita Desa',
		'beritaBannerSubtitle'  => 'Informasi kegiatan warga, pembangunan infrastruktur, dan pengelolaan hutan adat Bonto Somba.',
		'beritaBannerImage'     => 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85',
		'potensiBannerTitle'    => 'Potensi & Wisata Desa',
		'potensiBannerSubtitle' => 'Keindahan Hutan Pinus Bonto-Bonto, kearifan adat Cindakko, serta komoditas madu hutan, aren, dan kopi.',
		'potensiBannerImage'    => 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85',

		// 4. Sejarah, Etimologi & Geologi
		'historyTitle'          => 'Asal-usul Bonto Somba',
		'etymology'             => "Berasal dari bahasa Makassar: 'Bonto' berarti daratan tinggi/bukit, dan 'Somba' berarti panutan atau pemimpin yang dihormati.",
		'history'               => 'Dimekarkan dari Desa Tompobulu pada tahun 1989 sebagai desa persiapan di bawah Kecamatan Tanralili, kemudian resmi menjadi desa definitif pada tahun 1992 bersama pembentukan Kecamatan Tompobulu.',
		'geology'               => 'Dataran tinggi berbukit dengan formasi batuan karst Tonasa serta lanskap hutan pinus dan hutan hujan pegunungan. Di bidang pendidikan dasar, masyarakat dilayani oleh UPTD SDN 246 Bonto-bonto serta layanan poskesdes desa.',

		// 5. Tiga Wilayah Dusun
		'dusun'                 => [
			[
				'nama'        => 'Dusun Bonto-Bonto',
				'kepalaDusun' => 'Pelaksana Wilayah Bonto-Bonto',
				'karakter'    => 'Berperan sebagai pintu masuk utama desa dan pusat layanan pendidikan dasar (UPTD SDN 246 Bonto-bonto). Dikelilingi tegakan pohon pinus yang sejuk.',
				'komoditas'   => 'Wisata Hutan Pinus, getah pinus, tanaman hortikultura',
			],
			[
				'nama'        => 'Dusun Bara',
				'kepalaDusun' => 'Pelaksana Wilayah Bara',
				'karakter'    => 'Wilayah lereng perbukitan tempat warga membudidayakan tanaman perkebunan dataran tinggi dan mengolah nira aren secara turun-temurun.',
				'komoditas'   => 'Gula aren cetak tradisional, kopi arabika/robusta, jagung',
			],
			[
				'nama'        => 'Dusun Cindakko',
				'kepalaDusun' => 'Pelaksana Wilayah Cindakko',
				'karakter'    => 'Dusun terjauh yang berbatasan langsung dengan Kab. Gowa dan Kab. Bone. Dihuni komunitas adat yang menjaga kelestarian hutan melalui skema Hutan Desa (LPHD Cindakko).',
				'komoditas'   => 'Madu lebah hutan liar (Apis dorsata), gula aren murni, padi ladang terasering',
			],
		],

		// 6. Batas Wilayah 4 Penjuru Mata Angin
		'batas'                 => [
			[ 'arah' => 'Utara', 'berbatasan' => 'Desa Laiya', 'kecamatan' => 'Kecamatan Cenrana, Kab. Maros' ],
			[ 'arah' => 'Selatan', 'berbatasan' => 'Desa Bonto Manurung', 'kecamatan' => 'Kecamatan Tompobulu, Kab. Maros' ],
			[ 'arah' => 'Timur', 'berbatasan' => 'Desa Erelembang', 'kecamatan' => 'Kecamatan Tombolo Pao, Kab. Gowa' ],
			[ 'arah' => 'Barat', 'berbatasan' => 'Desa Bonto Manai, Bonto Manurung & Bonto Matinggi', 'kecamatan' => 'Kecamatan Tompobulu, Kab. Maros' ],
		],

		// 7. Kontak, Ikon Hero (Search, Email, Telepon, Maps) & Jam Pelayanan Footer
		'contactEmail'          => 'pemdes@bontosomba.desa.id',
		'contactPhone'          => '0812-4100-9056',
		'heroSearchTarget'      => 'berita',
		'officeAddress'         => 'Dusun Bonto-Bonto, Kec. Tompobulu',
		'serviceHoursWeekday'   => 'Senin – Kamis : 08.00 s/d 15.00 WITA',
		'serviceHoursFriday'    => 'Jumat : 08.00 s/d 11.30 WITA',

		// 8. Bagan / Gambar Struktur Organisasi Desa (Dinamis: Struktur Desa, PKK, BPD, LPM, dll)
		'strukturOrganisasi'    => [
			[
				'judul'  => 'Struktur Pemerintah Desa Bonto Somba',
				'gambar' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85',
			],
			[
				'judul'  => 'Struktur TP-PKK Desa Bonto Somba',
				'gambar' => 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85',
			],
			[
				'judul'  => 'Struktur BPD & Lembaga Kemasyarakatan Desa',
				'gambar' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85',
			],
		],
	];
}

function bonto_somba_get_settings() {
	$saved    = get_option( 'bonto_somba_portal_settings', [] );
	$defaults = bonto_somba_default_settings();
	if ( ! is_array( $saved ) ) {
		return $defaults;
	}
	$merged = array_replace( $defaults, $saved );
	if ( isset( $saved['dusun'] ) && is_array( $saved['dusun'] ) ) {
		$merged['dusun'] = array_values( $saved['dusun'] );
	}
	if ( isset( $saved['batas'] ) && is_array( $saved['batas'] ) ) {
		$merged['batas'] = array_values( $saved['batas'] );
	}
	if ( isset( $saved['strukturOrganisasi'] ) && is_array( $saved['strukturOrganisasi'] ) ) {
		$merged['strukturOrganisasi'] = array_values( $saved['strukturOrganisasi'] );
	}
	return $merged;
}

/**
 * 1. Aktifkan CORS untuk Headless Frontend (Vite localhost:5173)
 *    & Aktifkan Classic Editor (TinyMCE + Tambahkan Media) seperti tampilan CMS klasik
 */
add_filter( 'use_block_editor_for_post', '__return_false', 100 );
add_filter( 'use_block_editor_for_post_type', '__return_false', 100 );
add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );
add_filter( 'use_widgets_block_editor', '__return_false' );
add_action( 'after_setup_theme', function() {
	add_theme_support( 'post-thumbnails' );
} );

add_action( 'rest_api_init', function() {
	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
	add_filter( 'rest_pre_serve_request', function( $value ) {
		header( 'Access-Control-Allow-Origin: *' );
		header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE' );
		header( 'Access-Control-Allow-Headers: Authorization, Content-Type, X-WP-Nonce' );
		return $value;
	} );
}, 15 );

/**
 * 2. Registrasi Custom Post Types (Wisata, Potensi, Perangkat Desa)
 */
add_action( 'init', function() {
	register_post_type( 'wisata', [
		'labels' => [
			'name'          => 'Destinasi Wisata',
			'singular_name' => 'Wisata',
			'add_new_item'  => 'Tambah Destinasi Wisata',
			'edit_item'     => 'Edit Destinasi Wisata',
		],
		'public'       => true,
		'show_in_rest' => true,
		'menu_icon'    => 'dashicons-palmtree',
		'supports'     => [ 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields' ],
	] );

	register_post_type( 'potensi', [
		'labels' => [
			'name'          => 'Potensi Desa',
			'singular_name' => 'Potensi',
			'add_new_item'  => 'Tambah Potensi Desa',
			'edit_item'     => 'Edit Potensi Desa',
		],
		'public'       => true,
		'show_in_rest' => true,
		'menu_icon'    => 'dashicons-carrot',
		'supports'     => [ 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields' ],
	] );
} );

/**
 * 3. Meta Boxes di WP-Admin untuk Post, Wisata, dan Potensi Desa
 */
add_action( 'add_meta_boxes', function() {
	add_meta_box( 'bs_post_meta', 'Pengaturan Gambar Portal Desa', function( $post ) {
		$img = get_post_meta( $post->ID, 'featured_image_url', true );
		?>
		<p><label><strong>URL Gambar Artikel (atau pilih Featured Image di kanan):</strong></label></p>
		<div style="display:flex; gap:10px; align-items:center;">
			<input type="text" id="bs_featured_image_url" name="bs_featured_image_url" value="<?php echo esc_attr( $img ); ?>" style="width:78%;" placeholder="https://..." />
			<button type="button" class="button bs-meta-upload-btn" data-target="bs_featured_image_url">Pilih / Upload Gambar</button>
		</div>
		<?php
	}, 'post', 'normal', 'high' );

	add_meta_box( 'bs_wisata_meta', 'Detail Destinasi Wisata', function( $post ) {
		$kat = get_post_meta( $post->ID, 'kategori_wisata', true );
		$lok = get_post_meta( $post->ID, 'lokasi', true );
		$hig = get_post_meta( $post->ID, 'highlight', true );
		$img = get_post_meta( $post->ID, 'featured_image_url', true );
		?>
		<table class="form-table">
			<tr><th>Kategori Wisata</th><td><input type="text" name="bs_kategori_wisata" value="<?php echo esc_attr( $kat ); ?>" class="regular-text" placeholder="Ekowisata Alam" /></td></tr>
			<tr><th>Lokasi Dusun</th><td><input type="text" name="bs_lokasi" value="<?php echo esc_attr( $lok ); ?>" class="regular-text" placeholder="Dusun Bonto-Bonto" /></td></tr>
			<tr><th>Highlight Singkat</th><td><input type="text" name="bs_highlight" value="<?php echo esc_attr( $hig ); ?>" class="regular-text" placeholder="Area Kemah & Hutan Pinus" /></td></tr>
			<tr>
				<th>URL Gambar</th>
				<td>
					<div style="display:flex; gap:10px; align-items:center;">
						<input type="text" id="bs_featured_image_url" name="bs_featured_image_url" value="<?php echo esc_attr( $img ); ?>" style="width:78%;" />
						<button type="button" class="button bs-meta-upload-btn" data-target="bs_featured_image_url">Pilih / Upload Gambar</button>
					</div>
				</td>
			</tr>
		</table>
		<?php
	}, 'wisata', 'normal', 'high' );

	add_meta_box( 'bs_potensi_meta', 'Detail Potensi & Hasil Bumi', function( $post ) {
		$kat   = get_post_meta( $post->ID, 'kategori_potensi', true );
		$dusun = get_post_meta( $post->ID, 'dusun', true );
		$badge = get_post_meta( $post->ID, 'badge', true );
		$img   = get_post_meta( $post->ID, 'featured_image_url', true );
		?>
		<table class="form-table">
			<tr><th>Kategori Komoditas</th><td><input type="text" name="bs_kategori_potensi" value="<?php echo esc_attr( $kat ); ?>" class="regular-text" placeholder="Hasil Hutan Bukan Kayu" /></td></tr>
			<tr><th>Dusun Penghasil</th><td><input type="text" name="bs_dusun" value="<?php echo esc_attr( $dusun ); ?>" class="regular-text" placeholder="Dusun Cindakko" /></td></tr>
			<tr><th>Badge Label</th><td><input type="text" name="bs_badge" value="<?php echo esc_attr( $badge ); ?>" class="regular-text" placeholder="Komoditas Utama" /></td></tr>
			<tr>
				<th>URL Gambar</th>
				<td>
					<div style="display:flex; gap:10px; align-items:center;">
						<input type="text" id="bs_featured_image_url" name="bs_featured_image_url" value="<?php echo esc_attr( $img ); ?>" style="width:78%;" />
						<button type="button" class="button bs-meta-upload-btn" data-target="bs_featured_image_url">Pilih / Upload Gambar</button>
					</div>
				</td>
			</tr>
		</table>
		<?php
	}, 'potensi', 'normal', 'high' );
} );

add_action( 'admin_footer-post.php', 'bonto_somba_meta_upload_script' );
add_action( 'admin_footer-post-new.php', 'bonto_somba_meta_upload_script' );
function bonto_somba_meta_upload_script() {
	?>
	<script>
	jQuery(document).ready(function($){
		$(document).on('click', '.bs-meta-upload-btn', function(e){
			e.preventDefault();
			var targetId = $(this).data('target');
			var frame = wp.media({
				title: 'Pilih atau Upload Gambar',
				button: { text: 'Gunakan Gambar Ini' },
				multiple: false
			});
			frame.on('select', function(){
				var attachment = frame.state().get('selection').first().toJSON();
				var $input = $('#' + targetId);
				$input.val(attachment.url);
				var $preview = $input.closest('td, .bs-struktur-item').find('img').first();
				if ($preview.length) {
					$preview.attr('src', attachment.url);
				} else {
					$input.parent().after('<img src="' + attachment.url + '" style="margin-top:10px; max-height:110px; border-radius:8px; border:2px solid #098A42; display:block;" />');
				}
			});
			frame.open();
		});
	});
	</script>
	<?php
}

add_action( 'save_post', function( $post_id ) {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}
	$map = [
		'bs_featured_image_url' => 'featured_image_url',
		'bs_kategori_wisata'    => 'kategori_wisata',
		'bs_lokasi'             => 'lokasi',
		'bs_highlight'          => 'highlight',
		'bs_kategori_potensi'   => 'kategori_potensi',
		'bs_dusun'              => 'dusun',
		'bs_badge'              => 'badge',
		'bs_jabatan'            => 'jabatan',
		'bs_tugas'              => 'tugas',
	];
	foreach ( $map as $input_key => $meta_key ) {
		if ( isset( $_POST[ $input_key ] ) ) {
			update_post_meta( $post_id, $meta_key, sanitize_textarea_field( wp_unslash( $_POST[ $input_key ] ) ) );
		}
	}
} );

/**
 * 4. Tambahkan Custom Fields & Custom Endpoint Pengaturan ke REST API
 */
add_action( 'rest_api_init', function() {
	$meta_fields = [
		'featured_image_url',
		'kategori_wisata',
		'lokasi',
		'highlight',
		'kategori_potensi',
		'dusun',
		'badge',
		'jabatan',
		'tugas',
	];

	foreach ( $meta_fields as $field ) {
		register_rest_field( [ 'post', 'wisata', 'potensi' ], $field, [
			'get_callback'    => function( $object ) use ( $field ) {
				if ( 'featured_image_url' === $field ) {
					$thumb = get_the_post_thumbnail_url( $object['id'], 'full' );
					if ( $thumb ) {
						return $thumb;
					}
				}
				return get_post_meta( $object['id'], $field, true );
			},
			'update_callback' => function( $value, $object ) use ( $field ) {
				return update_post_meta( $object->ID, $field, sanitize_textarea_field( $value ) );
			},
			'schema'          => null,
		] );
	}

	register_rest_field( 'post', 'category_name', [
		'get_callback' => function( $object ) {
			$cats = get_the_category( $object['id'] );
			return ! empty( $cats ) ? $cats[0]->name : 'Kabar Desa';
		},
		'schema'       => null,
	] );

	// Endpoint Utama: /wp-json/bonto-somba/v1/settings
	register_rest_route( 'bonto-somba/v1', '/settings', [
		'methods'             => 'GET',
		'callback'            => function() {
			return rest_ensure_response( [
				'settings'  => bonto_somba_get_settings(),
				'perangkat' => [],
			] );
		},
		'permission_callback' => '__return_true',
	] );
} );

/**
 * 5. Halaman Admin Custom: "Pengaturan Portal Desa" di Dashboard WordPress
 */
add_action( 'admin_menu', function() {
	add_menu_page(
		'Pengaturan Portal Desa Bonto Somba',
		'Pengaturan Portal Desa',
		'manage_options',
		'bonto-somba-portal',
		'bonto_somba_render_admin_page',
		'dashicons-admin-home',
		2
	);
} );

add_action( 'admin_enqueue_scripts', function( $hook ) {
	if ( in_array( $hook, [ 'toplevel_page_bonto-somba-portal', 'post.php', 'post-new.php' ], true ) ) {
		wp_enqueue_media();
		wp_enqueue_editor();
	}
} );

function bonto_somba_render_admin_page() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}

	$updated = false;
	if ( isset( $_POST['bonto_somba_save_nonce'] ) && wp_verify_nonce( $_POST['bonto_somba_save_nonce'], 'bonto_somba_save_settings' ) ) {
		$current = bonto_somba_get_settings();
		$text_fields = [
			'name', 'lontara', 'district', 'regency', 'province', 'postalCode', 'villageCode',
			'elevation', 'area', 'population', 'density', 'mapsUrl',
			'contactEmail', 'contactPhone', 'heroSearchTarget',
			'kadesName', 'kadesPeriod', 'kadesTitle', 'kadesPhoto', 'kadesGreetingTitle', 'kadesGreetingSubtitle',
			'heroTitle', 'heroSubtitle', 'heroImage',
			'wilayahTitle', 'wilayahImage',
			'infoBannerTitle', 'infoBannerSubtitle', 'infoBannerImage',
			'beritaBannerTitle', 'beritaBannerSubtitle', 'beritaBannerImage',
			'potensiBannerTitle', 'potensiBannerSubtitle', 'potensiBannerImage',
			'historyTitle', 'officeAddress', 'serviceHoursWeekday', 'serviceHoursFriday',
		];
		foreach ( $text_fields as $f ) {
			if ( isset( $_POST[ $f ] ) ) {
				$current[ $f ] = sanitize_text_field( wp_unslash( $_POST[ $f ] ) );
			}
		}

		$textarea_fields = [
			'wilayahDesc1', 'wilayahDesc2', 'wilayahDesc3',
			'etymology', 'history', 'geology',
		];
		foreach ( $textarea_fields as $tf ) {
			if ( isset( $_POST[ $tf ] ) ) {
				$current[ $tf ] = sanitize_textarea_field( wp_unslash( $_POST[ $tf ] ) );
			}
		}

		if ( isset( $_POST['kadesGreetingBody'] ) ) {
			$current['kadesGreetingBody'] = wp_strip_all_tags( wp_unslash( $_POST['kadesGreetingBody'] ) );
		}

		// Dusun (3 Dusun)
		if ( isset( $_POST['dusun'] ) && is_array( $_POST['dusun'] ) ) {
			$dusun_clean = [];
			foreach ( $_POST['dusun'] as $d ) {
				$dusun_clean[] = [
					'nama'        => sanitize_text_field( wp_unslash( $d['nama'] ?? '' ) ),
					'kepalaDusun' => sanitize_text_field( wp_unslash( $d['kepalaDusun'] ?? '' ) ),
					'karakter'    => sanitize_textarea_field( wp_unslash( $d['karakter'] ?? '' ) ),
					'komoditas'   => sanitize_text_field( wp_unslash( $d['komoditas'] ?? '' ) ),
				];
			}
			$current['dusun'] = $dusun_clean;
		}

		// Batas Wilayah (4 Arah)
		if ( isset( $_POST['batas'] ) && is_array( $_POST['batas'] ) ) {
			$batas_clean = [];
			foreach ( $_POST['batas'] as $b ) {
				$batas_clean[] = [
					'arah'       => sanitize_text_field( wp_unslash( $b['arah'] ?? '' ) ),
					'berbatasan' => sanitize_text_field( wp_unslash( $b['berbatasan'] ?? '' ) ),
					'kecamatan'  => sanitize_text_field( wp_unslash( $b['kecamatan'] ?? '' ) ),
				];
			}
			$current['batas'] = $batas_clean;
		}

		// Bagan / Foto Struktur Organisasi Dinamis (Struktur Desa, Struktur PKK, BPD, dll)
		if ( isset( $_POST['strukturOrganisasi'] ) && is_array( $_POST['strukturOrganisasi'] ) ) {
			$struktur_clean = [];
			foreach ( $_POST['strukturOrganisasi'] as $st ) {
				$judul  = sanitize_text_field( wp_unslash( $st['judul'] ?? '' ) );
				$gambar = sanitize_text_field( wp_unslash( $st['gambar'] ?? '' ) );
				if ( '' !== $judul || '' !== $gambar ) {
					$struktur_clean[] = [
						'judul'  => $judul ?: 'Struktur Organisasi Desa',
						'gambar' => $gambar,
					];
				}
			}
			$current['strukturOrganisasi'] = $struktur_clean;
		} else {
			$current['strukturOrganisasi'] = [];
		}

		update_option( 'bonto_somba_portal_settings', $current );
		$updated = true;
	}

	$s = bonto_somba_get_settings();
	?>
	<div class="wrap" style="max-width: 1080px;">
		<form method="post">
			<?php wp_nonce_field( 'bonto_somba_save_settings', 'bonto_somba_save_nonce' ); ?>

			<div style="background: linear-gradient(135deg, #10C960 0%, #098A42 52%, #065227 100%); color: #fff; padding: 24px 28px; border-radius: 12px; margin: 16px 0 24px; box-shadow: 0 8px 24px rgba(6,82,39,0.18); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px; position: sticky; top: 38px; z-index: 90;">
				<div style="max-width: 720px;">
					<h1 style="color: #fff; margin: 0 0 6px; font-size: 22px; font-weight: 700;">Pengaturan Portal Resmi Desa Bonto Somba</h1>
					<p style="margin: 0; opacity: 0.92; font-size: 13px;">
						Kelola seluruh tampilan website: <strong>Gambar Hero</strong>, <strong>Gambar Wilayah Desa</strong>, <strong>Sambutan &amp; Foto Kepala Desa</strong>, <strong>Bagan Struktur Organisasi</strong>, <strong>Identitas Desa</strong>, <strong>3 Dusun</strong>, dan <strong>Batas Wilayah</strong>.
					</p>
				</div>
				<button type="submit" class="button button-hero" style="background:#fff; color:#065227; border:none; font-weight:700; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">Simpan Semua Pengaturan</button>
			</div>

			<?php if ( $updated ) : ?>
				<div class="notice notice-success is-dismissible"><p><strong>Berhasil!</strong> Seluruh perubahan informasi &amp; gambar portal Desa Bonto Somba telah disimpan dan langsung aktif di website.</p></div>
			<?php endif; ?>

			<!-- 1. GAMBAR HERO & GAMBAR WILAYAH DESA -->
			<div style="background:#fff; padding:22px 26px; border-radius:10px; border:1px solid #dcdcde; margin-bottom:22px;">
				<h2 style="margin-top:0; color:#065227; border-bottom:2px solid #10C960; padding-bottom:10px;">1. Gambar Hero Beranda &amp; Banner Wilayah Desa</h2>
				<table class="form-table">
					<tr>
						<th>Judul Hero Beranda</th>
						<td><input type="text" name="heroTitle" value="<?php echo esc_attr( $s['heroTitle'] ); ?>" class="regular-text" /></td>
					</tr>
					<tr>
						<th>Subjudul Hero Beranda</th>
						<td><input type="text" name="heroSubtitle" value="<?php echo esc_attr( $s['heroSubtitle'] ); ?>" style="width:100%;" /></td>
					</tr>
					<tr>
						<th>Tombol Ikon Kontak &amp; Aksi Cepat di Hero (Search, Email, Telepon &amp; Google Maps)</th>
						<td>
							<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:#f9fafb; padding:14px; border-radius:8px; border:1px solid #e5e7eb;">
								<div>
									<label style="font-weight:600; display:block; margin-bottom:4px;">Target Tombol Search (Ikon Kaca Pembesar):</label>
									<select name="heroSearchTarget" style="width:100%;">
										<option value="berita" <?php selected( $s['heroSearchTarget'] ?? 'berita', 'berita' ); ?>>Buka Pencarian Berita &amp; Kabar Desa</option>
										<option value="potensi" <?php selected( $s['heroSearchTarget'] ?? '', 'potensi' ); ?>>Buka Potensi &amp; Wisata Desa</option>
										<option value="info" <?php selected( $s['heroSearchTarget'] ?? '', 'info' ); ?>>Buka Info &amp; Wilayah Desa</option>
									</select>
								</div>
								<div>
									<label style="font-weight:600; display:block; margin-bottom:4px;">Alamat Email Desa (Ikon Amplop):</label>
									<input type="text" name="contactEmail" value="<?php echo esc_attr( $s['contactEmail'] ); ?>" style="width:100%;" placeholder="pemdes@bontosomba.desa.id" />
								</div>
								<div>
									<label style="font-weight:600; display:block; margin-bottom:4px;">Nomor Telepon / WhatsApp Desa (Ikon Telepon):</label>
									<input type="text" name="contactPhone" value="<?php echo esc_attr( $s['contactPhone'] ); ?>" style="width:100%;" placeholder="0812-4100-9056 / +6281241009056" />
								</div>
								<div>
									<label style="font-weight:600; display:block; margin-bottom:4px;">Link Lokasi Google Maps (Ikon Lokasi &amp; Peta):</label>
									<input type="text" name="mapsUrl" value="<?php echo esc_attr( $s['mapsUrl'] ); ?>" style="width:100%;" placeholder="https://maps.google.com/..." />
								</div>
							</div>
						</td>
					</tr>
					<tr>
						<th>Gambar Background Hero Utama</th>
						<td>
							<div style="display:flex; gap:10px; align-items:center;">
								<input type="text" id="heroImage" name="heroImage" value="<?php echo esc_attr( $s['heroImage'] ); ?>" style="width:75%;" />
								<button type="button" class="button bs-upload-btn" data-target="heroImage">Pilih / Upload Gambar</button>
							</div>
							<?php if ( ! empty( $s['heroImage'] ) ) : ?>
								<img src="<?php echo esc_url( $s['heroImage'] ); ?>" style="margin-top:10px; max-height:110px; border-radius:8px; border:1px solid #ddd;" />
							<?php endif; ?>
						</td>
					</tr>
					<tr>
						<th>Judul Seksi Wilayah Desa</th>
						<td><input type="text" name="wilayahTitle" value="<?php echo esc_attr( $s['wilayahTitle'] ); ?>" class="regular-text" /></td>
					</tr>
					<tr>
						<th>Gambar Background "Wilayah Desa" (Seksi Peta Beranda)</th>
						<td>
							<div style="display:flex; gap:10px; align-items:center;">
								<input type="text" id="wilayahImage" name="wilayahImage" value="<?php echo esc_attr( $s['wilayahImage'] ); ?>" style="width:75%;" />
								<button type="button" class="button bs-upload-btn" data-target="wilayahImage">Pilih / Upload Gambar</button>
							</div>
							<?php if ( ! empty( $s['wilayahImage'] ) ) : ?>
								<img src="<?php echo esc_url( $s['wilayahImage'] ); ?>" style="margin-top:10px; max-height:110px; border-radius:8px; border:1px solid #ddd;" />
							<?php endif; ?>
						</td>
					</tr>
					<tr>
						<th>Paragraf 1 Wilayah Desa</th>
						<td><textarea name="wilayahDesc1" rows="2" style="width:100%;"><?php echo esc_textarea( $s['wilayahDesc1'] ); ?></textarea></td>
					</tr>
					<tr>
						<th>Paragraf 2 Wilayah Desa</th>
						<td><textarea name="wilayahDesc2" rows="2" style="width:100%;"><?php echo esc_textarea( $s['wilayahDesc2'] ); ?></textarea></td>
					</tr>
					<tr>
						<th>Paragraf 3 Wilayah Desa</th>
						<td><textarea name="wilayahDesc3" rows="2" style="width:100%;"><?php echo esc_textarea( $s['wilayahDesc3'] ); ?></textarea></td>
					</tr>
				</table>
			</div>

			<!-- 2. KEPALA DESA & SAMBUTAN / UCAPAN KEPALA DESA -->
			<div style="background:#fff; padding:22px 26px; border-radius:10px; border:1px solid #dcdcde; margin-bottom:22px;">
				<h2 style="margin-top:0; color:#065227; border-bottom:2px solid #10C960; padding-bottom:10px;">2. Profil &amp; Ucapan Sambutan Kepala Desa</h2>
				<table class="form-table">
					<tr>
						<th>Nama Kepala Desa</th>
						<td><input type="text" name="kadesName" value="<?php echo esc_attr( $s['kadesName'] ); ?>" class="regular-text" /></td>
					</tr>
					<tr>
						<th>Jabatan &amp; Periode</th>
						<td>
							<input type="text" name="kadesTitle" value="<?php echo esc_attr( $s['kadesTitle'] ); ?>" class="regular-text" placeholder="Kepala Desa Bonto Somba" />
							<input type="text" name="kadesPeriod" value="<?php echo esc_attr( $s['kadesPeriod'] ); ?>" class="regular-text" placeholder="2019 – 2027" />
						</td>
					</tr>
					<tr>
						<th>Foto Kepala Desa</th>
						<td>
							<div style="display:flex; gap:10px; align-items:center;">
								<input type="text" id="kadesPhoto" name="kadesPhoto" value="<?php echo esc_attr( $s['kadesPhoto'] ); ?>" style="width:75%;" />
								<button type="button" class="button bs-upload-btn" data-target="kadesPhoto">Pilih / Upload Foto</button>
							</div>
							<?php if ( ! empty( $s['kadesPhoto'] ) ) : ?>
								<img src="<?php echo esc_url( $s['kadesPhoto'] ); ?>" style="margin-top:10px; height:90px; width:90px; object-fit:cover; border-radius:50%; border:2px solid #098A42;" />
							<?php endif; ?>
						</td>
					</tr>
					<tr>
						<th>Judul Sambutan Kepala Desa</th>
						<td><input type="text" name="kadesGreetingTitle" value="<?php echo esc_attr( $s['kadesGreetingTitle'] ); ?>" style="width:100%;" /></td>
					</tr>
					<tr>
						<th>Subjudul / Slogan Sambutan</th>
						<td><input type="text" name="kadesGreetingSubtitle" value="<?php echo esc_attr( $s['kadesGreetingSubtitle'] ); ?>" style="width:100%;" /></td>
					</tr>
					<tr>
						<th>Isi Ucapan / Sambutan Kepala Desa</th>
						<td>
							<?php
							wp_editor(
								$s['kadesGreetingBody'],
								'kadesGreetingBody',
								[
									'textarea_name' => 'kadesGreetingBody',
									'textarea_rows' => 8,
									'media_buttons' => true,
									'teeny'         => false,
									'quicktags'     => true,
								]
							);
							?>
						</td>
					</tr>
				</table>
			</div>

			<!-- 2B. BAGAN / FOTO STRUKTUR ORGANISASI (BISA TAMBAH BANYaknya: STRUKTUR DESA, STRUKTUR PKK, BPD, DLL) -->
			<div style="background:#fff; padding:22px 26px; border-radius:10px; border:1px solid #dcdcde; margin-bottom:22px;">
				<div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #10C960; padding-bottom:10px; margin-bottom:14px;">
					<div>
						<h2 style="margin:0; color:#065227;">2B. Bagan &amp; Foto Struktur Organisasi (Struktur Desa, Struktur PKK, BPD, dll)</h2>
						<p style="margin:4px 0 0; font-size:12.5px; color:#555;">Anda dapat menambahkan banyak pilihan judul struktur beserta gambar/bagannya. Pengunjung dapat memilih tab judul struktur di halaman Info Desa.</p>
					</div>
					<button type="button" id="bs-add-struktur" class="button button-primary" style="background:#098A42; border-color:#065227;">+ Tambah Gambar Struktur</button>
				</div>

				<div id="bs-struktur-list">
					<?php
					$struktur_items = ! empty( $s['strukturOrganisasi'] ) && is_array( $s['strukturOrganisasi'] ) ? $s['strukturOrganisasi'] : [];
					foreach ( $struktur_items as $idx => $st ) :
						$input_id = 'struktur_img_' . (int) $idx;
						?>
						<div class="bs-struktur-item" style="background:#f9fafb; padding:16px 18px; border-radius:8px; margin-bottom:12px; border:1px solid #e5e7eb;">
							<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
								<strong style="color:#065227;">Bagan Struktur #<?php echo (int) $idx + 1; ?></strong>
								<button type="button" class="button-link-delete bs-remove-struktur" style="color:#b91c1c; text-decoration:none; font-weight:600;">Hapus Struktur Ini</button>
							</div>
							<p style="margin:0 0 6px;"><label><strong>Judul Struktur (contoh: Struktur Pemerintah Desa / Struktur TP-PKK / Struktur BPD):</strong></label></p>
							<input type="text" name="strukturOrganisasi[<?php echo (int) $idx; ?>][judul]" value="<?php echo esc_attr( $st['judul'] ?? '' ); ?>" style="width:100%; margin-bottom:10px;" placeholder="Contoh: Struktur Pemerintah Desa Bonto Somba" />
							<p style="margin:0 0 6px;"><label><strong>Foto / Gambar Bagan Struktur:</strong></label></p>
							<div style="display:flex; gap:10px; align-items:center;">
								<input type="text" id="<?php echo esc_attr( $input_id ); ?>" name="strukturOrganisasi[<?php echo (int) $idx; ?>][gambar]" value="<?php echo esc_attr( $st['gambar'] ?? '' ); ?>" style="width:78%;" placeholder="https://... atau klik Pilih / Upload Foto Struktur" />
								<button type="button" class="button bs-upload-btn" data-target="<?php echo esc_attr( $input_id ); ?>">Pilih / Upload Foto Struktur</button>
							</div>
							<?php if ( ! empty( $st['gambar'] ) ) : ?>
								<img src="<?php echo esc_url( $st['gambar'] ); ?>" style="margin-top:10px; max-height:140px; border-radius:8px; border:1px solid #ddd;" />
							<?php endif; ?>
						</div>
					<?php endforeach; ?>
				</div>
			</div>

			<!-- 3. BANNER HALAMAN INFO DESA, BERITA, DAN POTENSI WISATA -->
			<div style="background:#fff; padding:22px 26px; border-radius:10px; border:1px solid #dcdcde; margin-bottom:22px;">
				<h2 style="margin-top:0; color:#065227; border-bottom:2px solid #10C960; padding-bottom:10px;">3. Gambar Banner Halaman (Info Desa, Berita, Potensi &amp; Wisata)</h2>
				<table class="form-table">
					<tr>
						<th>Banner Halaman Info Desa</th>
						<td>
							<input type="text" name="infoBannerTitle" value="<?php echo esc_attr( $s['infoBannerTitle'] ); ?>" class="regular-text" placeholder="Judul Banner" />
							<input type="text" name="infoBannerSubtitle" value="<?php echo esc_attr( $s['infoBannerSubtitle'] ); ?>" style="width:100%; margin:6px 0;" placeholder="Subjudul Banner" />
							<div style="display:flex; gap:10px;">
								<input type="text" id="infoBannerImage" name="infoBannerImage" value="<?php echo esc_attr( $s['infoBannerImage'] ); ?>" style="width:75%;" />
								<button type="button" class="button bs-upload-btn" data-target="infoBannerImage">Pilih Gambar</button>
							</div>
						</td>
					</tr>
					<tr>
						<th>Banner Halaman Berita Desa</th>
						<td>
							<input type="text" name="beritaBannerTitle" value="<?php echo esc_attr( $s['beritaBannerTitle'] ); ?>" class="regular-text" />
							<input type="text" name="beritaBannerSubtitle" value="<?php echo esc_attr( $s['beritaBannerSubtitle'] ); ?>" style="width:100%; margin:6px 0;" />
							<div style="display:flex; gap:10px;">
								<input type="text" id="beritaBannerImage" name="beritaBannerImage" value="<?php echo esc_attr( $s['beritaBannerImage'] ); ?>" style="width:75%;" />
								<button type="button" class="button bs-upload-btn" data-target="beritaBannerImage">Pilih Gambar</button>
							</div>
						</td>
					</tr>
					<tr>
						<th>Banner Halaman Potensi &amp; Wisata</th>
						<td>
							<input type="text" name="potensiBannerTitle" value="<?php echo esc_attr( $s['potensiBannerTitle'] ); ?>" class="regular-text" />
							<input type="text" name="potensiBannerSubtitle" value="<?php echo esc_attr( $s['potensiBannerSubtitle'] ); ?>" style="width:100%; margin:6px 0;" />
							<div style="display:flex; gap:10px;">
								<input type="text" id="potensiBannerImage" name="potensiBannerImage" value="<?php echo esc_attr( $s['potensiBannerImage'] ); ?>" style="width:75%;" />
								<button type="button" class="button bs-upload-btn" data-target="potensiBannerImage">Pilih Gambar</button>
							</div>
						</td>
					</tr>
				</table>
			</div>

			<!-- 4. DATA ADMINISTRASI & SEJARAH DESA -->
			<div style="background:#fff; padding:22px 26px; border-radius:10px; border:1px solid #dcdcde; margin-bottom:22px;">
				<h2 style="margin-top:0; color:#065227; border-bottom:2px solid #10C960; padding-bottom:10px;">4. Identitas Administrasi, Sejarah &amp; Kontak Desa</h2>
				<table class="form-table">
					<tr>
						<th>Nama Desa &amp; Aksara Lontara</th>
						<td>
							<input type="text" name="name" value="<?php echo esc_attr( $s['name'] ); ?>" class="regular-text" />
							<input type="text" name="lontara" value="<?php echo esc_attr( $s['lontara'] ); ?>" class="regular-text" />
						</td>
					</tr>
					<tr>
						<th>Kode Kemendagri &amp; Kode Pos</th>
						<td>
							<input type="text" name="villageCode" value="<?php echo esc_attr( $s['villageCode'] ); ?>" class="regular-text" placeholder="73.09.11.2004" />
							<input type="text" name="postalCode" value="<?php echo esc_attr( $s['postalCode'] ); ?>" class="regular-text" placeholder="90565" />
						</td>
					</tr>
					<tr>
						<th>Luas Wilayah &amp; Ketinggian</th>
						<td>
							<input type="text" name="area" value="<?php echo esc_attr( $s['area'] ); ?>" class="regular-text" placeholder="32,13 km²" />
							<input type="text" name="elevation" value="<?php echo esc_attr( $s['elevation'] ); ?>" class="regular-text" placeholder="± 800 mdpl" />
						</td>
					</tr>
					<tr>
						<th>Jumlah Penduduk &amp; Kepadatan</th>
						<td>
							<input type="text" name="population" value="<?php echo esc_attr( $s['population'] ); ?>" class="regular-text" />
							<input type="text" name="density" value="<?php echo esc_attr( $s['density'] ); ?>" class="regular-text" />
						</td>
					</tr>
					<tr>
						<th>Judul &amp; Paragraf Sejarah Desa</th>
						<td>
							<input type="text" name="historyTitle" value="<?php echo esc_attr( $s['historyTitle'] ); ?>" style="width:100%; margin-bottom:8px;" />
							<p style="margin:4px 0;"><strong>Etimologi:</strong></p>
							<textarea name="etymology" rows="2" style="width:100%;"><?php echo esc_textarea( $s['etymology'] ); ?></textarea>
							<p style="margin:8px 0 4px;"><strong>Sejarah Pemekaran:</strong></p>
							<textarea name="history" rows="3" style="width:100%;"><?php echo esc_textarea( $s['history'] ); ?></textarea>
							<p style="margin:8px 0 4px;"><strong>Geologi &amp; Fasilitas Pendidikan:</strong></p>
							<textarea name="geology" rows="3" style="width:100%;"><?php echo esc_textarea( $s['geology'] ); ?></textarea>
						</td>
					</tr>
					<tr>
						<th>Alamat Kantor &amp; Jam Pelayanan</th>
						<td>
							<input type="text" name="officeAddress" value="<?php echo esc_attr( $s['officeAddress'] ); ?>" style="width:100%; margin-bottom:6px;" />
							<input type="text" name="serviceHoursWeekday" value="<?php echo esc_attr( $s['serviceHoursWeekday'] ); ?>" class="regular-text" />
							<input type="text" name="serviceHoursFriday" value="<?php echo esc_attr( $s['serviceHoursFriday'] ); ?>" class="regular-text" />
						</td>
					</tr>
					<tr>
						<th>Link Google Maps Desa</th>
						<td><input type="text" name="mapsUrl" value="<?php echo esc_attr( $s['mapsUrl'] ); ?>" style="width:100%;" /></td>
					</tr>
				</table>
			</div>

			<!-- 5. TIGA WILAYAH DUSUN -->
			<div style="background:#fff; padding:22px 26px; border-radius:10px; border:1px solid #dcdcde; margin-bottom:22px;">
				<h2 style="margin-top:0; color:#065227; border-bottom:2px solid #10C960; padding-bottom:10px;">5. Profil Tiga Wilayah Dusun</h2>
				<?php foreach ( $s['dusun'] as $idx => $d ) : ?>
					<div style="background:#f9fafb; padding:14px 18px; border-radius:8px; margin-bottom:12px; border:1px solid #e5e7eb;">
						<p style="margin:0 0 8px; font-weight:700; color:#065227;">Dusun #<?php echo (int) $idx + 1; ?></p>
						<input type="text" name="dusun[<?php echo (int) $idx; ?>][nama]" value="<?php echo esc_attr( $d['nama'] ); ?>" class="regular-text" placeholder="Nama Dusun" />
						<input type="text" name="dusun[<?php echo (int) $idx; ?>][kepalaDusun]" value="<?php echo esc_attr( $d['kepalaDusun'] ); ?>" class="regular-text" placeholder="Pelaksana Wilayah" />
						<textarea name="dusun[<?php echo (int) $idx; ?>][karakter]" rows="2" style="width:100%; margin:8px 0;" placeholder="Karakteristik wilayah"><?php echo esc_textarea( $d['karakter'] ); ?></textarea>
						<input type="text" name="dusun[<?php echo (int) $idx; ?>][komoditas]" value="<?php echo esc_attr( $d['komoditas'] ); ?>" style="width:100%;" placeholder="Potensi Utama" />
					</div>
				<?php endforeach; ?>
			</div>

			<!-- 6. BATAS WILAYAH 4 PENJURU -->
			<div style="background:#fff; padding:22px 26px; border-radius:10px; border:1px solid #dcdcde; margin-bottom:22px;">
				<h2 style="margin-top:0; color:#065227; border-bottom:2px solid #10C960; padding-bottom:10px;">6. Batas Wilayah Administratif (4 Mata Angin)</h2>
				<table class="form-table">
					<?php foreach ( $s['batas'] as $idx => $b ) : ?>
						<tr>
							<th>Sebelah <?php echo esc_html( $b['arah'] ); ?></th>
							<td>
								<input type="hidden" name="batas[<?php echo (int) $idx; ?>][arah]" value="<?php echo esc_attr( $b['arah'] ); ?>" />
								<input type="text" name="batas[<?php echo (int) $idx; ?>][berbatasan]" value="<?php echo esc_attr( $b['berbatasan'] ); ?>" class="regular-text" placeholder="Desa yang berbatasan" />
								<input type="text" name="batas[<?php echo (int) $idx; ?>][kecamatan]" value="<?php echo esc_attr( $b['kecamatan'] ); ?>" class="regular-text" placeholder="Kecamatan / Kabupaten" />
							</td>
						</tr>
					<?php endforeach; ?>
				</table>
			</div>

			<p class="submit">
				<button type="submit" class="button button-primary button-hero" style="background:#098A42; border-color:#065227;">Simpan Semua Pengaturan Portal Desa</button>
			</p>
		</form>
	</div>

	<script>
	jQuery(document).ready(function($){
		$(document).on('click', '.bs-upload-btn', function(e){
			e.preventDefault();
			var targetId = $(this).data('target');
			var frame = wp.media({
				title: 'Pilih atau Upload Gambar Portal Desa',
				button: { text: 'Gunakan Gambar Ini' },
				multiple: false
			});
			frame.on('select', function(){
				var attachment = frame.state().get('selection').first().toJSON();
				var $input = $('#' + targetId);
				$input.val(attachment.url);
				var $preview = $input.closest('td, .bs-struktur-item').find('img').first();
				if ($preview.length) {
					$preview.attr('src', attachment.url);
				} else {
					$input.parent().after('<img src="' + attachment.url + '" style="margin-top:10px; max-height:110px; border-radius:8px; border:2px solid #098A42; display:block;" />');
				}
			});
			frame.open();
		});

		$('#bs-add-struktur').on('click', function(e){
			e.preventDefault();
			var idx = Date.now();
			var inputId = 'struktur_img_' + idx;
			var html = '<div class="bs-struktur-item" style="background:#f9fafb; padding:16px 18px; border-radius:8px; margin-bottom:12px; border:1px solid #10C960;">' +
				'<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">' +
					'<strong style="color:#065227;">Bagan Struktur Baru</strong>' +
					'<button type="button" class="button-link-delete bs-remove-struktur" style="color:#b91c1c; text-decoration:none; font-weight:600;">Hapus Struktur Ini</button>' +
				'</div>' +
				'<p style="margin:0 0 6px;"><label><strong>Judul Struktur (contoh: Struktur Pemerintah Desa / Struktur TP-PKK / Struktur BPD):</strong></label></p>' +
				'<input type="text" name="strukturOrganisasi[' + idx + '][judul]" style="width:100%; margin-bottom:10px;" placeholder="Contoh: Struktur TP-PKK Desa Bonto Somba" />' +
				'<p style="margin:0 0 6px;"><label><strong>Foto / Gambar Bagan Struktur:</strong></label></p>' +
				'<div style="display:flex; gap:10px; align-items:center;">' +
					'<input type="text" id="' + inputId + '" name="strukturOrganisasi[' + idx + '][gambar]" style="width:78%;" placeholder="https://... atau klik Pilih / Upload Foto Struktur" />' +
					'<button type="button" class="button bs-upload-btn" data-target="' + inputId + '">Pilih / Upload Foto Struktur</button>' +
				'</div>' +
			'</div>';
			$('#bs-struktur-list').append(html);
		});

		$(document).on('click', '.bs-remove-struktur', function(e){
			e.preventDefault();
			$(this).closest('.bs-struktur-item').remove();
		});
	});
	</script>
	<?php
}

/**
 * 6. Auto-Seed Data Awal Desa Bonto Somba (Berita, Wisata, Potensi, Struktur Perangkat, Settings)
 */
add_action( 'init', function() {
	if ( get_option( 'bonto_somba_seeded_v2' ) ) {
		return;
	}
	if ( ! function_exists( 'wp_insert_post' ) || ! is_blog_installed() ) {
		return;
	}

	// Seed v1: Berita, Wisata, Potensi
	if ( ! get_option( 'bonto_somba_seeded_v1' ) ) {
		$default_post = get_page_by_path( 'hello-world', OBJECT, 'post' );
		if ( $default_post ) {
			wp_delete_post( $default_post->ID, true );
		}

		$ensure_cat = function( $name ) {
			$term = term_exists( $name, 'category' );
			if ( ! $term ) {
				$term = wp_insert_term( $name, 'category' );
			}
			return is_array( $term ) ? (int) $term['term_id'] : (int) $term;
		};

		$cat_infra = $ensure_cat( 'Infrastruktur' );
		$cat_adat  = $ensure_cat( 'Kehutanan & Adat' );
		$cat_ekon  = $ensure_cat( 'Ekonomi Desa' );

		$posts_data = [
			[
				'title'   => 'Perintisan dan Perbaikan Akses Jalan Bukit Melalui Program TMMD',
				'excerpt' => 'Kolaborasi TNI Kodim 1422/Maros bersama masyarakat Desa Bonto Somba membuka jalur penghubung antar-dusun guna memudahkan mobilitas hasil pertanian dan akses sekolah.',
				'cat'     => $cat_infra,
				'image'   => 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
				'date'    => '2026-11-10 09:00:00',
			],
			[
				'title'   => 'Penguatan Pengelolaan Hutan Desa Bersama LPHD Cindakko',
				'excerpt' => 'Masyarakat adat Dusun Cindakko melakukan pemetaan pohon sarang lebah hutan dan menetapkan aturan adat perlindungan mata air pegunungan.',
				'cat'     => $cat_adat,
				'image'   => 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
				'date'    => '2026-10-28 10:00:00',
			],
			[
				'title'   => 'Musim Panen Nira Aren dan Kopi Dataran Tinggi di Dusun Bara',
				'excerpt' => 'Kelompok pengrajin gula aren dan petani kopi di lereng Dusun Bara mulai meningkatkan produksi menjelang akhir tahun dengan kualitas olahan alami.',
				'cat'     => $cat_ekon,
				'image'   => 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
				'date'    => '2026-10-15 08:30:00',
			],
		];

		foreach ( $posts_data as $p ) {
			$post_id = wp_insert_post( [
				'post_title'    => $p['title'],
				'post_excerpt'  => $p['excerpt'],
				'post_content'  => '<p>' . $p['excerpt'] . '</p>',
				'post_status'   => 'publish',
				'post_date'     => $p['date'],
				'post_category' => [ $p['cat'] ],
			] );
			if ( $post_id ) {
				update_post_meta( $post_id, 'featured_image_url', $p['image'] );
			}
		}

		$wisata_data = [
			[
				'title'     => 'Hutan Pinus Bonto-Bonto',
				'excerpt'   => 'Lanskap barisan pohon pinus di ketinggian 800 mdpl dengan udara pegunungan yang tenang. Cocok untuk berkemah akhir pekan, kegiatan alam terbuka, dan rekreasi keluarga.',
				'kategori'  => 'Ekowisata Alam',
				'lokasi'    => 'Dusun Bonto-Bonto',
				'highlight' => 'Area Kemah & Hutan Pinus',
				'image'     => 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
			],
			[
				'title'     => 'Kawasan Adat & Hutan Desa Cindakko',
				'excerpt'   => 'Menyusuri kehidupan masyarakat adat di pedalaman Tompobulu, melihat langsung proses panen madu hutan lestari, serta hamparan sawah terasering di lereng bukit.',
				'kategori'  => 'Wisata Budaya & Konservasi',
				'lokasi'    => 'Dusun Cindakko',
				'highlight' => 'Konservasi Hutan & Budaya',
				'image'     => 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
			],
			[
				'title'     => 'Bentang Karst & Puncak Bulu Monrolo',
				'excerpt'   => 'Jalur pendakian dan pengamatan lanskap batuan formasi Tonasa dengan pemandangan lembah hijau serta kabut pagi khas pegunungan Maros bagian timur.',
				'kategori'  => 'Jalur Jelajah Alam',
				'lokasi'    => 'Pegunungan Bonto Somba',
				'highlight' => 'Geowisata & Jalur Trekking',
				'image'     => 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=900&q=80',
			],
		];

		foreach ( $wisata_data as $w ) {
			$w_id = wp_insert_post( [
				'post_type'    => 'wisata',
				'post_title'   => $w['title'],
				'post_excerpt' => $w['excerpt'],
				'post_content' => '<p>' . $w['excerpt'] . '</p>',
				'post_status'  => 'publish',
			] );
			if ( $w_id ) {
				update_post_meta( $w_id, 'kategori_wisata', $w['kategori'] );
				update_post_meta( $w_id, 'lokasi', $w['lokasi'] );
				update_post_meta( $w_id, 'highlight', $w['highlight'] );
				update_post_meta( $w_id, 'featured_image_url', $w['image'] );
			}
		}

		$potensi_data = [
			[
				'title'    => 'Madu Hutan Liar Cindakko',
				'excerpt'  => 'Madu murni dari lebah hutan raksasa Sulawesi (Apis dorsata) yang bersarang di pepohonan tinggi hutan lindung desa, dipanen secara tradisional dan berkelanjutan.',
				'kategori' => 'Hasil Hutan Bukan Kayu',
				'dusun'    => 'Dusun Cindakko',
				'badge'    => 'Komoditas Utama',
				'image'    => 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80',
			],
			[
				'title'    => 'Gula Aren Cetak Tradisional',
				'excerpt'  => 'Diolah langsung oleh kaum ibu dari sadapan nira pohon aren segar yang dimasak menggunakan tungku kayu tanpa campuran pemanis buatan maupun pengawet.',
				'kategori' => 'Olahan Rumah Tangga',
				'dusun'    => 'Dusun Bara & Cindakko',
				'badge'    => 'Olahan Murni',
				'image'    => 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=80',
			],
			[
				'title'    => 'Kopi Pegunungan Tompobulu',
				'excerpt'  => 'Tanaman kopi rakyat yang tumbuh subur di bawah naungan pohon pelindung pada ketinggian 800 mdpl dengan cita rasa bersih dan aroma rempah alami.',
				'kategori' => 'Perkebunan Rakyat',
				'dusun'    => 'Dusun Bara & Bonto-Bonto',
				'badge'    => 'Hasil Kebun',
				'image'    => 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
			],
		];

		foreach ( $potensi_data as $pt ) {
			$pt_id = wp_insert_post( [
				'post_type'    => 'potensi',
				'post_title'   => $pt['title'],
				'post_excerpt' => $pt['excerpt'],
				'post_content' => '<p>' . $pt['excerpt'] . '</p>',
				'post_status'  => 'publish',
			] );
			if ( $pt_id ) {
				update_post_meta( $pt_id, 'kategori_potensi', $pt['kategori'] );
				update_post_meta( $pt_id, 'dusun', $pt['dusun'] );
				update_post_meta( $pt_id, 'badge', $pt['badge'] );
				update_post_meta( $pt_id, 'featured_image_url', $pt['image'] );
			}
		}

		update_option( 'permalink_structure', '/%postname%/' );
		update_option( 'bonto_somba_seeded_v1', 1 );
	}

	// Seed v2: Struktur Perangkat Desa (6 Aparatur) & Default Portal Settings
	if ( ! get_option( 'bonto_somba_seeded_v2' ) ) {
		if ( ! get_option( 'bonto_somba_portal_settings' ) ) {
			update_option( 'bonto_somba_portal_settings', bonto_somba_default_settings() );
		}

		$existing_perangkat = get_posts( [ 'post_type' => 'perangkat', 'posts_per_page' => 1 ] );
		if ( empty( $existing_perangkat ) ) {
			$perangkat_seed = [
				[
					'nama'    => 'Suparman',
					'jabatan' => 'Kepala Desa',
					'tugas'   => 'Penanggung jawab utama penyelenggaraan pemerintahan, pembangunan, dan pemberdayaan masyarakat desa (Periode 2019–2027).',
					'order'   => 1,
				],
				[
					'nama'    => 'Sekretaris Desa',
					'jabatan' => 'Sekretariat Desa',
					'tugas'   => 'Koordinasi tata usaha, administrasi kependudukan, perencanaan RPJMDes, dan pelaporan desa.',
					'order'   => 2,
				],
				[
					'nama'    => 'Kaur Keuangan',
					'jabatan' => 'Urusan Keuangan',
					'tugas'   => 'Penatausahaan APBDes, verifikasi administrasi keuangan, dan laporan realisasi anggaran.',
					'order'   => 3,
				],
				[
					'nama'    => 'Kepala Dusun Bonto-Bonto',
					'jabatan' => 'Pelaksana Kewilayahan',
					'tugas'   => 'Pembinaan kemasyarakatan Dusun Bonto-Bonto, fasilitas pendidikan, dan kawasan wisata pinus.',
					'order'   => 4,
				],
				[
					'nama'    => 'Kepala Dusun Bara',
					'jabatan' => 'Pelaksana Kewilayahan',
					'tugas'   => 'Pembinaan warga Dusun Bara serta koordinasi kelompok tani perkebunan kopi dan aren.',
					'order'   => 5,
				],
				[
					'nama'    => 'Kepala Dusun Cindakko',
					'jabatan' => 'Pelaksana Kewilayahan',
					'tugas'   => 'Pembinaan wilayah pedalaman Dusun Cindakko dan sinergi bersama Lembaga Pengelola Hutan Desa (LPHD).',
					'order'   => 6,
				],
			];

			foreach ( $perangkat_seed as $pr ) {
				$pid = wp_insert_post( [
					'post_type'    => 'perangkat',
					'post_title'   => $pr['nama'],
					'post_content' => $pr['tugas'],
					'post_status'  => 'publish',
					'menu_order'   => $pr['order'],
				] );
				if ( $pid ) {
					update_post_meta( $pid, 'jabatan', $pr['jabatan'] );
					update_post_meta( $pid, 'tugas', $pr['tugas'] );
				}
			}
		}

		update_option( 'bonto_somba_seeded_v2', 1 );
	}
}, 20 );
