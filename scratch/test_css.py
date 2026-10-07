import json, subprocess

code = "$css = wp_get_custom_css(); echo 'Length: ' . strlen($css);"
payload = json.dumps({'code': code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print("Output:", data.get('output'))
print("Error:", data.get('error_message'))
