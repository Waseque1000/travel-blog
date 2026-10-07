import json, subprocess

php_code = """
// 1. Update Template 35 (Global Footer)
$t35 = get_post(35);
$meta = get_post_meta(35, '_elementor_data', true);
if (strpos($meta, 'arrow_upward') !== false) {
    $meta_new = str_replace(
        '<span class=\\"material-symbols-outlined\\" style=\\"font-size:14px;\\">arrow_upward<\\/span>',
        '<span style=\\"font-size:14px;display:inline-block;font-family:sans-serif;font-weight:bold;\\">&#8593;<\\/span>',
        $meta
    );
    update_post_meta(35, '_elementor_data', $meta_new);
    echo "Template 35 updated: replaced arrow_upward icon!\\n";
} else {
    echo "arrow_upward not found in Template 35 _elementor_data.\\n";
}

// 2. Clean Custom CSS (remove @imports and material symbols)
$css = wp_get_custom_css();
$orig_len = strlen($css);

// Remove the two @import lines at top
$css = preg_replace('/@import\\s+url\\([\'"][^\'"]*Material\\+Symbols[^\'"]*[\'"]\\);?\\s*/i', '', $css);
$css = preg_replace('/@import\\s+url\\([\'"][^\'"]*fonts\\.googleapis\\.com[^\'"]*[\'"]\\);?\\s*/i', '', $css);
// Remove .material-symbols-outlined class definition
$css = preg_replace('/\\.material-symbols-outlined\\s*\\{[^\\}]*\\}\\s*/i', '', $css);

$new_len = strlen($css);
wp_update_custom_css_post($css);
echo "Custom CSS updated: length changed from $orig_len to $new_len bytes.\\n";

// 3. Create MU-Plugin wotg-speed-optimizer.php
$mu_code = <<<'PHP'
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
    ?>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"></noscript>
    <?php
    if (is_front_page()) {
        ?>
        <link rel="preload" as="image" href="https://waseeonthego.com/wp-content/uploads/2026/10/japan-kyoto-temple-guide.jpg" fetchpriority="high">
        <?php
    }
}, 1);

// Add display=swap to any registered Google font styles
add_filter('style_loader_src', function($src, $handle) {
    if (strpos($src, 'fonts.googleapis.com') !== false && strpos($src, 'display=') === false) {
        $src = add_query_arg('display', 'swap', $src);
    }
    return $src;
}, 10, 2);

// Add decoding=async and loading=lazy to content images
add_filter('wp_get_attachment_image_attributes', function($attr) {
    $attr['decoding'] = 'async';
    return $attr;
});
PHP;

file_put_contents(WPMU_PLUGIN_DIR . '/wotg-speed-optimizer.php', $mu_code);
echo "Created " . WPMU_PLUGIN_DIR . "/wotg-speed-optimizer.php successfully!\\n";

// 4. Purge LiteSpeed Cache
if (class_exists('\\LiteSpeed\\Purge')) {
    \\LiteSpeed\\Purge::purge_all();
    echo "Purged all LiteSpeed cache.\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
