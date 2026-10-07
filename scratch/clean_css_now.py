import json, subprocess, base64

php_file = """
$t35 = get_post(35);
$meta = get_post_meta(35, '_elementor_data', true);
if (strpos($meta, 'arrow_upward') !== false) {
    $meta_new = str_replace(
        '<span class=\\"material-symbols-outlined\\" style=\\"font-size:14px;\\">arrow_upward<\\/span>',
        '<span style=\\"font-size:14px;display:inline-block;font-family:sans-serif;font-weight:bold;\\">&#8593;<\\/span>',
        $meta
    );
    update_post_meta(35, '_elementor_data', $meta_new);
    echo "1. Replaced arrow_upward in Template 35\\n";
} else {
    echo "1. arrow_upward already cleaned in Template 35\\n";
}

$css = wp_get_custom_css();
$orig_len = strlen($css);
$css = preg_replace('/@import\\s+url\\([\'"][^\'"]*Material\\+Symbols[^\'"]*[\'"]\\);?\\s*/i', '', $css);
$css = preg_replace('/@import\\s+url\\([\'"][^\'"]*fonts\\.googleapis\\.com[^\'"]*[\'"]\\);?\\s*/i', '', $css);
$css = preg_replace('/\\.material-symbols-outlined\\s*\\{[^\\}]*\\}\\s*/i', '', $css);
$new_len = strlen($css);
wp_update_custom_css_post($css);
echo "2. Cleaned Custom CSS: $orig_len -> $new_len bytes\\n";

if (function_exists('litespeed_purge_all')) {
    litespeed_purge_all();
    echo "3. litespeed_purge_all() called\\n";
} else {
    do_action('litespeed_purge_all');
    echo "3. do_action('litespeed_purge_all') called\\n";
}
"""

payload = json.dumps({'code': php_file})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
