<?php
function portfolio_enqueues() {
    wp_enqueue_style(
        'portfolio-style',
        get_stylesheet_uri(),
        array(),
        wp_get_theme()->get('Version'),
        'all'
    );

    wp_enqueue_style(
        'mindset-normalize',
        'https://unpkg.com/@csstools/normalize.css',
        array(),
        '12.1.0'
    );
}
add_action('wp_enqueue_scripts', 'portfolio_enqueues');

function portfolio_setup() {
    add_editor_style( get_stylesheet_uri() );
}
add_action('after_setup_theme', 'portfolio_setup');

// Custom Post Types & Taxonomies
require get_template_directory() . '/inc/post-types-taxonomies.php';

add_filter('show_admin_bar', '__return_false');