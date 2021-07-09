<?php

/**
 * Plugin Name:       SEAS-NVE Blazor Blocks
 * Description:       Gutenberg blocks written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Jess Stopa
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       seas-blazor-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function seas_blazor_blocks_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'seas_blazor_blocks_init' );

// Enqueue the Blazor scripts
function seas_blazor_blocks_include_blazor_scripts()
{
	wp_enqueue_script('blazor-main', 'https://marketb2ccomponentspoc.z16.web.core.windows.net/_framework/blazor.webassembly.js', array(), '1.0.0', true);
	wp_enqueue_script('blazor-bootstrapper', 'https://marketb2ccomponentspoc.z16.web.core.windows.net/bootstrapper.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'seas_blazor_blocks_include_blazor_scripts');

// Add extra properties to the Blazor script tags
function seas_blazor_blocks_add_type_attribute($tag, $handle, $src) {
	if ('blazor-main' === $handle) {
		$tag = '<script autostart="false" src="' . esc_url($src) . '"></script>';
	}

	if ('blazor-bootstrapper' === $handle) {
		$tag = '<script type="module" src="' . esc_url($src) . '"></script>';
	}

	return $tag;
}
add_filter('script_loader_tag', 'seas_blazor_blocks_add_type_attribute', 10, 3);