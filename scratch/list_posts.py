import json, subprocess

code = """
$posts = get_posts(['numberposts' => 50, 'post_status' => 'publish', 'post_type' => 'post']);
$res = [];
foreach ($posts as $p) {
    $res[] = ['id' => $p->ID, 'slug' => $p->post_name, 'title' => $p->post_title];
}
echo json_encode($res, JSON_PRETTY_PRINT);
"""

payload = json.dumps({'code': code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
