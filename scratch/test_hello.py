import json, subprocess

cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', json.dumps({'code': 'echo "HELLO WORLD";'})]
res = subprocess.run(cmd, capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
