import json, subprocess

mapping = {
    74: ["Top tourist attractions", "Local food exploration", "Cultural tourism", "Airport hacks and tips", "Solo travel spots"],
    75: ["Travel on a budget", "Save money on travel", "Budget travel destinations", "Backpacking guide", "Affordable hotels booking"],
    76: ["Solo travel spots", "Travel safety tips", "Best travel destinations", "Travel tips for beginners"],
    77: ["How to pack light", "Essential travel gear", "Best travel backpack", "Backpacking guide"],
    78: ["Adventure travel", "Road trip itineraries", "Best travel camera", "Essential travel gear", "Winter wonderland travel"],
    79: ["Cheap flights finder", "Airport hacks and tips", "Save money on travel", "Travel on a budget"],
    80: ["Hidden gems travel", "Local food exploration", "Cultural tourism", "Romantic getaways", "Best travel destinations"],
    81: ["Budget travel destinations", "Travel on a budget", "Affordable hotels booking", "Solo travel spots"],
    82: ["Adventure travel", "Winter wonderland travel", "Luxury travel guides", "Travel photography tips"],
    83: ["Street food guide", "Local food exploration", "Cultural tourism", "Travel safety tips"],
    84: ["Romantic getaways", "Summer vacation spots", "Top tourist attractions", "Cultural tourism", "Best travel destinations"],
    85: ["Adventure travel", "Road trip itineraries", "Essential travel gear", "Best travel backpack", "Travel photography tips"],
    86: ["Airport hacks and tips", "Essential travel gear", "Travel tips for beginners", "Travel safety tips"],
    87: ["Best travel credit cards", "Save money on travel", "Travel on a budget", "Affordable hotels booking"],
    88: ["Adventure travel", "Road trip itineraries", "Travel photography tips", "Winter wonderland travel", "Best travel destinations"],
    89: ["Adventure travel", "Family vacation ideas", "Hidden gems travel", "Travel photography tips"],
    90: ["Cultural tourism", "Local food exploration", "Weekend getaways", "Travel tips for beginners"],
    91: ["Hidden gems travel", "Cultural tourism", "Budget travel destinations", "Romantic getaways", "Local food exploration"],
    92: ["Travel tips for beginners", "Travel safety tips", "Best travel destinations", "Weekend getaways"],
    93: ["Adventure travel", "Road trip itineraries", "Cultural tourism", "Hidden gems travel", "Backpacking guide"]
}

json_str = json.dumps(mapping).replace("'", "\\'")
php_code = f"""
$mapping = json_decode('{json_str}', true);
$total = 0;
foreach ($mapping as $post_id => $tags) {{
    $res = wp_set_post_terms(intval($post_id), $tags, 'post_tag', true);
    if (!is_wp_error($res)) {{
        echo "Post $post_id: Successfully attached " . count($tags) . " tags.\\n";
        $total++;
    }} else {{
        echo "Error on post $post_id: " . $res->get_error_message() . "\\n";
    }}
}}
echo "Done! Total posts tagged: $total\\n";
"""

payload = json.dumps({'code': php_code})
cmd = ['novamira', 'run', 'novamira/execute-php', '--yes', '--input', payload]
res = subprocess.run(cmd, capture_output=True, text=True)
data = json.loads(res.stdout)
print(data.get('output'))
