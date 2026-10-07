import json, subprocess

php_code = """
$mu_dir = WPMU_PLUGIN_DIR;
echo "MU plugins dir: " . $mu_dir . "\\n";
if (!is_dir($mu_dir)) {
    wp_mkdir_p($mu_dir);
    echo "Created MU plugins dir.\\n";
} else {
    echo "MU plugins dir already exists.\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
