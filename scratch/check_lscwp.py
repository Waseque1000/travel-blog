import json, subprocess

php_code = """
if (class_exists('LiteSpeed\\Control')) {
    echo "LiteSpeed Control class exists!\\n";
} elseif (defined('LSCWP_V')) {
    echo "LiteSpeed Cache version: " . LSCWP_V . "\\n";
} else {
    echo "Checking LiteSpeed Cache options...\\n";
}

// Check LiteSpeed options in database
global $wpdb;
$options = $wpdb->get_results("SELECT option_name, option_value FROM {$wpdb->options} WHERE option_name LIKE 'litespeed.%'");
echo "Total litespeed options in DB: " . count($options) . "\\n";
foreach ($options as $o) {
    echo $o->option_name . " => " . substr($o->option_value, 0, 80) . "\\n";
}
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
