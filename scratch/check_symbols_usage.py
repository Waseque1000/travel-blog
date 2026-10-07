import json, subprocess

php_code = """
$custom_css = wp_get_custom_css();
preg_match_all('/@import[^;]+;|https?:[^\\s"\'\\)]+Material\\+Symbols[^\\s"\'\\)]*/', $custom_css, $matches);
echo "Custom CSS Matches:\\n";
print_r($matches[0]);

$t35 = get_post(35);
$t35_data = get_post_meta(35, '_elementor_data', true);
echo "\\nTemplate 35 occurrences:\\n";
if (preg_match_all('/https?:[^"\'\\\\\\s]+Material[+\\w\\.,:=@-]*|@import[^"\'\\\\\\s;]+/', $t35_data . $t35->post_content, $m2)) {
    print_r($m2[0]);
}

// Check where material-symbols class or icons are used in HTML
$front_data = get_post_meta(13, '_elementor_data', true);
preg_match_all('/material-symbols[\\w-]*/', $front_data . $custom_css . $t35_data, $m3);
echo "\\nUsed material icon classes:\\n";
print_r(array_unique($m3[0]));

preg_match_all('/<span[^>]*material-symbols[^>]*>([^<]+)<\\/span>/', $front_data . $t35_data, $m4);
echo "\\nIcon texts inside span:\\n";
print_r(array_unique($m4[1]));
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
try:
    data = json.loads(res.stdout)
    print(data.get('output'))
except Exception as e:
    print(res.stdout)
