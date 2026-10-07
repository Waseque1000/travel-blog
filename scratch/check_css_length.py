import json, subprocess

php_code = """
$css = wp_get_custom_css();
echo "Total CSS length: " . strlen($css) . "\\n";
echo "First 500 chars:\\n" . substr($css, 0, 500) . "\\n";
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
