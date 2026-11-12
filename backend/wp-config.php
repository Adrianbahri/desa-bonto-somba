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

// URL Dinamis dengan validasi Host agar aman dari Host-Header Injection
$protocol = ( ! empty( $_SERVER['HTTPS'] ) && $_SERVER['HTTPS'] !== 'off' ) ? 'https://' : 'http://';
$raw_host = $_SERVER['HTTP_HOST'] ?? 'localhost:8080';
$host     = preg_match( '/^(localhost|127\.0\.0\.1)(:\d+)?$/', $raw_host ) ? $raw_host : ( getenv( 'WP_PUBLIC_HOST' ) ?: 'localhost:8080' );
define( 'WP_HOME', $protocol . $host );
define( 'WP_SITEURL', $protocol . $host );

define( 'WP_DEBUG', false );
define( 'FS_METHOD', 'direct' );

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

require_once ABSPATH . 'wp-settings.php';
