$t35 = get_post(35);
$meta = get_post_meta(35, '_elementor_data', true);
if (strpos($meta, 'arrow_upward') !== false) {
    $meta_new = str_replace(
        '<span class=\"material-symbols-outlined\" style=\"font-size:14px;\">arrow_upward</span>',
        '<span style=\"font-size:14px;display:inline-block;font-family:sans-serif;font-weight:bold;\">&#8593;</span>',
        $meta
    );
    update_post_meta(35, '_elementor_data', $meta_new);
    echo "1. Replaced arrow_upward in Template 35\n";
} else {
    echo "1. arrow_upward already cleaned in Template 35\n";
}

$css = wp_get_custom_css();
$orig_len = strlen($css);

// Line by line filter to safely remove imports and symbol classes
$lines = explode("\n", $css);
$filtered = [];
$skip_block = false;
foreach ($lines as $line) {
    if (strpos($line, 'Material Symbols') !== false || strpos($line, 'Material+Symbols') !== false) {
        continue;
    }
    if (strpos($line, '@import') !== false && strpos($line, 'fonts.googleapis.com') !== false) {
        continue;
    }
    if (strpos($line, '.material-symbols-outlined') !== false) {
        $skip_block = true;
        continue;
    }
    if ($skip_block && strpos($line, '}') !== false) {
        $skip_block = false;
        continue;
    }
    if (!$skip_block) {
        $filtered[] = $line;
    }
}
$new_css = implode("\n", $filtered);
wp_update_custom_css_post($new_css);
$new_len = strlen($new_css);
echo "2. Cleaned Custom CSS: $orig_len -> $new_len bytes\n";

do_action('litespeed_purge_all');
echo "3. Purged cache\n";
