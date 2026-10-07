import json, subprocess

php_code = """
$custom_css = wp_get_custom_css();
$pos = strpos($custom_css, 'Material Symbols');
if ($pos !== false) {
    echo "Found in Custom CSS around pos $pos:\\n";
    echo substr($custom_css, max(0, $pos - 100), 300) . "\\n";
}

$t35 = get_post(35);
$t35_content = $t35->post_content;
$t35_meta = get_post_meta(35, '_elementor_data', true);
$pos2 = strpos($t35_content . $t35_meta, 'Material');
if ($pos2 !== false) {
    echo "Found in Template 35 around pos $pos2:\\n";
    $combined = $t35_content . $t35_meta;
    echo substr($combined, max(0, $pos2 - 100), 300) . "\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
print("STDOUT:", res.stdout)
