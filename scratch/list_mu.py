import json, subprocess

php_code = """
$files = scandir(WPMU_PLUGIN_DIR);
echo "MU plugins files:\\n";
print_r($files);
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
