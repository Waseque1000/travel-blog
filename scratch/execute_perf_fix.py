import json, subprocess

with open('/Users/wasequearafat/Desktop/Wasee/Travel-blog/scratch/perf_fix.php', 'r') as f:
    code = f.read()

payload = json.dumps({'code': code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print("SUCCESS:", data.get('success'))
print("OUTPUT:", data.get('output'))
if data.get('error_message'):
    print("ERROR:", data.get('error_message'))
