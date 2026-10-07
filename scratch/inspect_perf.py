import json, subprocess

php_code = """
// 1. Check active plugins
$plugins = get_option('active_plugins');
echo "ACTIVE PLUGINS:\\n";
print_r($plugins);

// 2. Check LiteSpeed Cache options
$litespeed_opts = get_option('litespeed.conf.optm-css_min');
echo "\\nLITESPEED CSS MIN: " . var_export($litespeed_opts, true) . "\\n";
$litespeed_all = get_option('litespeed.conf.optm-css_comb');
echo "LITESPEED CSS COMB: " . var_export($litespeed_all, true) . "\\n";

// 3. Search where 'Material Symbols Outlined' is registered
global $wp_styles;
echo "\\nREGISTERED STYLES WITH GOOGLE OR SYMBOLS:\\n";
if (!empty($wp_styles->registered)) {
    foreach ($wp_styles->registered as $handle => $data) {
        if (strpos($data->src, 'fonts.googleapis') !== false || strpos($data->src, 'symbols') !== false || strpos($data->src, 'material') !== false) {
            echo "$handle => " . $data->src . "\\n";
        }
    }
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
try:
    data = json.loads(res.stdout)
    print(data.get('output'))
    if 'data' in data:
        print(data['data'])
except Exception as e:
    print("STDOUT:", res.stdout)
    print("STDERR:", res.stderr)
