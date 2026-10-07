$mu_file = WPMU_PLUGIN_DIR . '/wotg-speed-optimizer.php';

$code = <<<'PHP'
<?php
/**
 * Plugin Name: WaseeOnTheGo - Speed & Core Web Vitals Optimizer
 * Description: Eliminates render-blocking fonts, preconnects origins, preloads hero LCP image, disables emoji scripts, and forces swap on fonts.
 * Version: 1.1.0
 * Author: WaseeOnTheGo
 */

if (!defined('ABSPATH')) exit;

// Disable WP core emojis (saves HTTP request + JS execution)
add_action('init', function() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
});

// Resource hints: Preconnect & Preload LCP Hero Image
add_action('wp_head', function() {
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">' . "\n";
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
    echo '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" media="print" onload="this.media=\'all\'">' . "\n";
    echo '<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"></noscript>' . "\n";
    if (is_front_page()) {
        echo '<link rel="preload" as="image" href="https://waseeonthego.com/wp-content/uploads/2026/10/japan-kyoto-temple-guide.jpg" fetchpriority="high">' . "\n";
    }
}, 1);

// Add display=swap to any registered Google font styles
add_filter('style_loader_src', function($src, $handle) {
    if (strpos($src, 'fonts.googleapis.com') !== false && strpos($src, 'display=') === false) {
        $src = add_query_arg('display', 'swap', $src);
    }
    return $src;
}, 10, 2);

// Add decoding=async to all images
add_filter('wp_get_attachment_image_attributes', function($attr) {
    $attr['decoding'] = 'async';
    return $attr;
});
PHP;

file_put_contents($mu_file, $code);
echo "Successfully created " . $mu_file . " (" . strlen($code) . " bytes)\n";
do_action('litespeed_purge_all');
