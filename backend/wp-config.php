<?php
/**
 * Konfigurasi WordPress Headless — Desa Bonto Somba (SQLite Mode)
 */
define( 'DB_NAME', 'bonto_somba_db' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', '' );
define( 'DB_HOST', 'localhost' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );

// Lokasi database SQLite
define( 'DB_DIR', __DIR__ . '/wp-content/database/' );
define( 'DB_FILE', '.ht.sqlite' );
if ( ! defined( 'FQDBDIR' ) ) {
	define( 'FQDBDIR', __DIR__ . '/wp-content/database/' );
}
if ( ! defined( 'FQDB' ) ) {
	define( 'FQDB', __DIR__ . '/wp-content/database/.ht.sqlite' );
}

// Kunci keamanan unik
define( 'AUTH_KEY',         'bonto-somba-auth-key-7309112004-maros-sulsel' );
define( 'SECURE_AUTH_KEY',  'bonto-somba-secure-auth-7309112004-maros' );
define( 'LOGGED_IN_KEY',    'bonto-somba-logged-in-7309112004-tompobulu' );
define( 'NONCE_KEY',        'bonto-somba-nonce-key-7309112004-cindakko' );
define( 'AUTH_SALT',        'bonto-somba-auth-salt-7309112004-bara' );
define( 'SECURE_AUTH_SALT', 'bonto-somba-secure-salt-7309112004-pinus' );
define( 'LOGGED_IN_SALT',   'bonto-somba-logged-salt-7309112004-madu' );
define( 'NONCE_SALT',       'bonto-somba-nonce-salt-7309112004-lphd' );

$table_prefix = 'wp_';

// Deteksi protokol HTTPS (termasuk reverse proxy Nginx via X-Forwarded-Proto)
if (
	( ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' ) ||
	( ! empty( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ) ||
	( ! empty( $_SERVER['HTTP_X_FORWARDED_SSL'] ) && $_SERVER['HTTP_X_FORWARDED_SSL'] === 'on' )
) {
	$_SERVER['HTTPS'] = 'on';
	$protocol = 'https://';
} else {
	$protocol = 'http://';
}

// Gunakan host dinamis dari request (bontosomba.dri4n.com atau localhost saat development)
$raw_host = $_SERVER['HTTP_HOST'] ?? 'bontosomba.dri4n.com';
$host     = preg_match( '/^[a-zA-Z0-9.:-]+$/', $raw_host ) ? $raw_host : 'bontosomba.dri4n.com';
define( 'WP_HOME', $protocol . $host );
define( 'WP_SITEURL', $protocol . $host );

define( 'WP_DEBUG', false );
define( 'FS_METHOD', 'direct' );

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
