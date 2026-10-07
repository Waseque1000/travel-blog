import subprocess

res = subprocess.run(['python3', 'scratch/run_speed_opt.py'], capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
