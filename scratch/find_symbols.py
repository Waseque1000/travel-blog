import json, subprocess

php_code = """
$front_id = get_option('page_on_front');
echo "Front Page ID: " . $front_id . "\\n";
$content = get_post_field('post_content', $front_id);
if (strpos($content, 'Material Symbols') !== false) {
    echo "Found Material Symbols in front page post_content!\\n";
} else {
    echo "Not in front page post_content.\\n";
}

// Check elementor data
$el_data = get_post_meta($front_id, '_elementor_data', true);
if (strpos($el_data, 'Material Symbols') !== false || strpos($el_data, 'material') !== false) {
    echo "Found Material Symbols in _elementor_data!\\n";
}

// Check custom HTML blocks, header/footer templates
$templates = get_posts(['post_type' => ['elementor_library', 'xpro_template', 'wp_block', 'wp_navigation'], 'posts_per_page' => -1]);
foreach ($templates as $t) {
    $t_content = $t->post_content . get_post_meta($t->ID, '_elementor_data', true);
    if (strpos($t_content, 'Material Symbols') !== false || strpos($t_content, 'material-symbols') !== false) {
        echo "Found in template ID: " . $t->ID . " (" . $t->post_title . ", type=" . $t->post_type . ")\\n";
    }
}

// Check custom css / scripts in options or astra
$custom_css = wp_get_custom_css();
if (strpos($custom_css, 'Material Symbols') !== false) {
    echo "Found in wp_get_custom_css()!\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
try:
    data = json.loads(res.stdout)
    print(data.get('output'))
except Exception as e:
    print(res.stdout)
