<?php
/**
 * Router untuk PHP Built-in Web Server (mendukung Pretty Permalinks & /wp-json/)
 */
$root = $_SERVER['DOCUMENT_ROOT'];
$path = '/' . ltrim( parse_url( urldecode( $_SERVER['REQUEST_URI'] ), PHP_URL_PATH ), '/' );

// Blokir akses publik langsung ke database SQLite & file tersembunyi (.ht*)
if ( preg_match( '#^/wp-content/database(/|$)|/\.ht#i', $path ) ) {
	http_response_code( 403 );
	exit( '403 Forbidden' );
}

if ( file_exists( $root . $path ) ) {
	if ( is_dir( $root . $path ) && substr( $path, -1 ) !== '/' ) {
		header( "Location: $path/" );
		exit;
	}
	if ( strpos( $path, '.php' ) !== false ) {
		chdir( dirname( $root . $path ) );
		require_once $root . $path;
	} else {
		return false;
	}
} else {
	chdir( $root );
	require_once 'index.php';
}
