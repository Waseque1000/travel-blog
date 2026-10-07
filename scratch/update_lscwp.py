import json, subprocess

php_code = """
$settings = [
    'optm-css_min' => 1,
    'optm-css_comb' => 1,
    'optm-css_comb_ext_inl' => 1,
    'optm-css_async' => 1,
    'optm-css_font_display' => 1,
    'optm-js_min' => 1,
    'optm-js_comb' => 1,
    'optm-js_comb_ext_inl' => 1,
    'optm-js_defer' => 1,
    'optm-html_min' => 1,
    'optm-qs_rm' => 1,
    'optm-ggfonts_async' => 1,
    'media-lazy' => 1,
    'media-placeholder_resp' => 1,
    'media-add_missing_sizes' => 1,
    'cache-mobile' => 1,
    'cache-browser' => 1,
];

foreach ($settings as $key => $val) {
    update_option('litespeed.conf.' . $key, $val);
    echo "Updated litespeed.conf.$key to " . var_export($val, true) . "\\n";
}

// Purge LiteSpeed cache
if (class_exists('\\LiteSpeed\\Purge')) {
    \\LiteSpeed\\Purge::purge_all();
    echo "Purged all LiteSpeed cache via \\LiteSpeed\\Purge!\\n";
} else {
    do_action('litespeed_purge_all');
    echo "Purged via action litespeed_purge_all!\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
