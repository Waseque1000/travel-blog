import json, subprocess

php_code = """
$dir = WP_CONTENT_DIR;
$output = shell_exec("grep -rn 'Material Symbols' " . escapeshellarg($dir) . " 2>/dev/null | head -n 30");
echo "Grep result:\\n" . $output;
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
