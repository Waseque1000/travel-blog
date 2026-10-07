<?php
$mapping = [
  '10-day-japan-itinerary' => ['Top tourist attractions', 'Local food exploration', 'Cultural tourism', 'Airport hacks and tips', 'Solo travel spots'],
  'bali-itinerary' => ['Budget travel destinations', 'Romantic getaways', 'Adventure travel', 'Summer vacation spots'],
  'switzerland-guide' => ['Winter wonderland travel', 'Luxury travel guides', 'Road trip itineraries', 'Travel photography tips'],
  'thailand-itinerary' => ['Street food guide', 'Backpacking guide', 'Travel on a budget', 'Hidden gems travel', 'Budget travel destinations'],
  'paris-itinerary' => ['Romantic getaways', 'Top tourist attractions', 'Local food exploration', 'Weekend getaways', 'Cultural tourism'],
  'iceland-itinerary' => ['Adventure travel', 'Road trip itineraries', 'Best travel camera', 'Essential travel gear'],
  'italy-itinerary' => ['Romantic getaways', 'Local food exploration', 'Top tourist attractions', 'Cultural tourism'],
  'spain-guide' => ['Local food exploration', 'Street food guide', 'Weekend getaways', 'Best travel destinations'],
  'greece-guide' => ['Romantic getaways', 'Summer vacation spots', 'Top tourist attractions', 'Cultural tourism'],
  'turkey-guide' => ['Cultural tourism', 'Hidden gems travel', 'Backpacking guide', 'Street food guide'],
  'morocco-itinerary' => ['Adventure travel', 'Cultural tourism', 'Hidden gems travel', 'Backpacking guide'],
  'egypt-itinerary' => ['Top tourist attractions', 'Cultural tourism', 'Travel safety tips', 'Travel tips for beginners'],
  'vietnam-guide' => ['Street food guide', 'Travel on a budget', 'Backpacking guide', 'Budget travel destinations'],
  'portugal-guide' => ['Budget travel destinations', 'Local food exploration', 'Road trip itineraries', 'Weekend getaways'],
  'norway-itinerary' => ['Adventure travel', 'Road trip itineraries', 'Travel photography tips', 'Winter wonderland travel'],
  'uk-guide' => ['Top tourist attractions', 'Weekend getaways', 'Cultural tourism', 'Travel tips for beginners'],
  'new-zealand-itinerary' => ['Adventure travel', 'Road trip itineraries', 'Essential travel gear', 'Best travel backpack'],
  'canada-itinerary' => ['Adventure travel', 'Road trip itineraries', 'Travel photography tips', 'Winter wonderland travel'],
  'australia-guide' => ['Adventure travel', 'Road trip itineraries', 'Summer vacation spots', 'Airport hacks and tips'],
  'dubai-itinerary' => ['Luxury travel guides', 'Top tourist attractions', 'Airport hacks and tips', 'Family vacation ideas']
];

$applied = 0;
foreach ($mapping as $slug => $tags) {
  $post = get_page_by_path($slug, OBJECT, 'post');
  if (!$post) {
    // Try searching by name/slug in get_posts
    $posts = get_posts(['name' => $slug, 'post_type' => 'post', 'numberposts' => 1]);
    if (!empty($posts)) {
      $post = $posts[0];
    }
  }
  if ($post) {
    wp_set_post_terms($post->ID, $tags, 'post_tag', true);
    echo "Post {$post->ID} ($slug): Added " . count($tags) . " tags\n";
    $applied++;
  } else {
    echo "Post not found for slug: $slug\n";
  }
}
echo "Total posts updated: $applied\n";
