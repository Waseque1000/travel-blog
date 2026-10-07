import json, subprocess

php_code = """
$t35 = get_post(35);
$content = $t35->post_content;
$meta = get_post_meta(35, '_elementor_data', true);

echo "Template 35 Title: " . $t35->post_title . "\\n";
if (strpos($content, 'arrow_upward') !== false) {
    echo "Found arrow_upward in post_content!\\n";
}
if (strpos($meta, 'arrow_upward') !== false) {
    echo "Found arrow_upward in _elementor_data!\\n";
    // Show snippet
    $p = strpos($meta, 'arrow_upward');
    echo substr($meta, max(0, $p - 80), 160) . "\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
