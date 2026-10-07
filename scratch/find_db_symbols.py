import json, subprocess

php_code = """
global $wpdb;
$res = $wpdb->get_results("SELECT ID, post_title, post_type FROM {$wpdb->posts} WHERE post_content LIKE '%Material+Symbols%' OR post_content LIKE '%Material Symbols%'");
echo "Posts with Material Symbols:\\n";
foreach ($res as $r) {
    echo "ID: {$r->ID}, Title: {$r->post_title}, Type: {$r->post_type}\\n";
}

$meta = $wpdb->get_results("SELECT post_id, meta_key FROM {$wpdb->postmeta} WHERE meta_value LIKE '%Material+Symbols%' OR meta_value LIKE '%Material Symbols%'");
echo "\\nPostmeta with Material Symbols:\\n";
foreach ($meta as $m) {
    echo "Post ID: {$m->post_id}, Meta Key: {$m->meta_key}\\n";
}

$opts = $wpdb->get_results("SELECT option_name FROM {$wpdb->options} WHERE option_value LIKE '%Material+Symbols%' OR option_value LIKE '%Material Symbols%'");
echo "\\nOptions with Material Symbols:\\n";
foreach ($opts as $o) {
    echo "Option: {$o->option_name}\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
