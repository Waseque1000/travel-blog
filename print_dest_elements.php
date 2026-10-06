$meta = get_post_meta(14, '_elementor_data', true);
$data = json_decode($meta, true);
echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
