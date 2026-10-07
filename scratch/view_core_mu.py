import json, subprocess

php_code = """
$file = WPMU_PLUGIN_DIR . '/wotg-responsive-core.php';
if (file_exists($file)) {
    echo file_get_contents($file);
} else {
    echo "File not found.";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
