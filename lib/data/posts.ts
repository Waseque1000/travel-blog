export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: {
    name: string;
    slug: string;
  };
  tags: string[];
  region: "bangladesh" | "international";
  country: string;
  location: string;
  cityOrDistrict: string;
  division: string;
  readingTime: number; // in minutes
  views: number;
  featured: boolean;
  status: "published" | "draft";
  publishedAt: string;
  excerpt: string;
  coverImage: string;
  gallery: string[];
  author: {
    name: string;
    role: string;
    initials: string;
    avatar?: string;
  };
  coordinates?: string;
  elevation?: string;
  bestTime?: string;
  permits?: string;
  content: string;
}

export const bangladeshPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Cox's Bazar: A Practical Guide to Bangladesh's Beach Capital",
    slug: "coxs-bazar-beach-guide",
    category: {
      name: "Beach",
      slug: "beach",
    },
    tags: ["beach", "sea", "seafood", "family travel"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Chattogram Division, Cox's Bazar",
    cityOrDistrict: "Cox's Bazar",
    division: "Chattogram",
    readingTime: 4,
    views: 18420,
    featured: true,
    status: "published",
    publishedAt: "2026-03-15",
    coordinates: "21°26'N 91°59'E",
    elevation: "Sea Level",
    bestTime: "November to March",
    permits: "None required for main beach & Marine Drive",
    excerpt: "The main beach runs for about 120 km along the Bay of Bengal. Here is how to skip the crowds, get there, and time your visit.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5L-2aKDmvpKbN1FtVhzYWzzC4_hcpUj-t1FBGitSIxvAYY5buhtTR7GRgNqspjjLX4AnzcTRczKDF1hmOA39fQ4PY7b85zOGseOJ-mQ13-TACCVo-gIXQwZl2IKm6ySZFRHSCJ5YKlYfyNRWCXhzN9E4tfMfND9zk5ODNaiYSKYdJLBpJExDRcx-R2x06Bhaa2LuqQMgBloc07n1pYdAWhTRRo02QMrcm_FSz2LhBQUc7VeeGt5w",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
    ],
    author: {
      name: "Tanvir Ahmed",
      role: "Lead Coastal Explorer",
      initials: "TA",
    },
    content: `
      <p class="lead">Cox's Bazar has one of the longest unbroken natural sea beaches in the world, roughly 120 km of sand facing the Bay of Bengal. Most visitors never see more than a few kilometres of it. The hotels, food stalls and horse riders cluster around Laboni and Sugandha points, and that stretch is busy from morning until well after sunset.</p>

      <h3>Where to go beyond the main beach</h3>
      <p>To truly experience the soul of this coast, leave the hotel zone and explore the pristine stretches heading south:</p>
      <ul>
        <li><strong>Inani Beach:</strong> About 30 km south of town, has flat rocks and coral stones that show at low tide. It is quieter and better for photography.</li>
        <li><strong>Himchari:</strong> Combines a small hill viewpoint, a waterfall that flows mainly after the rains, and a beach below.</li>
        <li><strong>Marine Drive:</strong> The coastal road running south toward Teknaf. The road is the attraction, so hire a motorbike or car and stop where the view is good.</li>
        <li><strong>Maheshkhali Island:</strong> A short boat ride away, has the Adinath Temple, salt fields and dried-fish yards.</li>
        <li><strong>Ramu:</strong> Inland from town, has several Buddhist temples and a working handicraft tradition.</li>
      </ul>

      <h3>Getting there</h3>
      <p>Flights from Dhaka take about an hour to Cox's Bazar Airport (CXB). Overnight AC buses take roughly nine to twelve hours depending on highway traffic. A dedicated rail line to Cox's Bazar opened in late 2022, and modern trains from Dhaka run on it daily, so check the current schedule and book early for holiday weekends.</p>

      <h3>Best time to visit</h3>
      <p>November to March is the reliable window. The sea is calmer, days are dry and evenings are cool. During the monsoon the waves are rough, red warning flags go up, and swimming can be dangerous because of strong undertow currents. If you visit then, treat the beach as a place to watch the sea rather than swim in it.</p>

      <div class="dispatch-callout">
        <h4>Tips before you book</h4>
        <ul>
          <li>Reserve hotels well ahead for December, January and public holidays, when prices rise sharply.</li>
          <li>Swim only where lifeguards are posted and follow the flag warnings strictly.</li>
          <li>Ask the price of fresh fish and crab before you order, since seafood is usually sold by weight.</li>
          <li>Carry some cash, because card machines are unreliable outside the main hotels.</li>
        </ul>
      </div>
    `
  },
  {
    id: "post-2",
    title: "Sajek Valley: Clouds, Hills and Tribal Villages in Rangamati",
    slug: "sajek-valley-travel-guide",
    category: {
      name: "Mountain",
      slug: "mountain",
    },
    tags: ["hills", "clouds", "camping", "Chittagong Hill Tracts"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Chattogram Division, Rangamati",
    cityOrDistrict: "Rangamati",
    division: "Chattogram",
    readingTime: 4,
    views: 24190,
    featured: true,
    status: "published",
    publishedAt: "2026-03-20",
    coordinates: "23°23'N 92°17'E",
    elevation: "1,800 ft",
    bestTime: "October to February",
    permits: "Local escort convoy schedule applies from Khagrachhari",
    excerpt: "A hill ridge above the clouds, home to Lushai, Pangkhua and Chakma communities. What to expect on the road and in the villages.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBId_INVaDFA0n9xplmGUmZvmTX726opQZqHo1dY8O6oipc5lUcIHwSBfbg0OTfTushYP865EgBcGvF76c7_AQuYa7u50wDzPXwOQCYdwWVhtYNPeen52HWqxgcGvXLsxanSWuXQvuzMwdNX3t_PrM6lzTul6cKaW81goGobjtRzi7Ly-1ZRG11YE4lL792MKLoaEBTkeeUByxE2dMXUQPQ9XamYujP6LiU70S8Ja4_pyNNkojHgEU",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80"
    ],
    author: {
      name: "Nabila Rahman",
      role: "Highland & Indigenous Route Specialist",
      initials: "NR",
    },
    content: `
      <p class="lead">Sajek Valley sits in Baghaichhari upazila of Rangamati district, on a ridge at roughly 1,800 feet. On a clear morning the valley fills with cloud, and the hills show above it. That view is why people make the long trip, and the best time to see it is early, before the sun burns the cloud off.</p>

      <h3>The road up</h3>
      <p>Most travellers reach Sajek from Khagrachhari town or Dighinala. The last stretch is steep, so visitors ride in the open Chander Gari jeeps run by local drivers. Movement on this road has at times been limited to set convoy times, so ask your hotel or the local administration what applies on the day you travel, and plan to arrive with daylight left.</p>

      <h3>What to see</h3>
      <ul>
        <li><strong>Konglak Para:</strong> The highest point, has a viewing deck and a small village of the Pangkhua community.</li>
        <li><strong>Ruilui Para:</strong> Known for the cottages and sunrise views along the ridge.</li>
        <li><strong>Kashlong and Machalong:</strong> Areas offer smaller waterfalls and short walks when the water is up.</li>
        <li><strong>Village walks:</strong> Let you see traditional bamboo houses and local weaving, if you go with respect and ask before taking photographs.</li>
      </ul>

      <h3>Best time</h3>
      <p>October to February brings clear skies and cool nights. The rainy season, roughly June to September, gives the most dramatic cloud and greenery, but road conditions worsen and landslides can close routes. Check the forecast before you leave.</p>

      <div class="dispatch-callout">
        <h4>Stay and food</h4>
        <p>Accommodation is mostly small resorts and cottages. Book ahead on weekends and Eid holidays. Food is simple: rice, fish, chicken and bamboo-shoot dishes. Carry your own drinking water and a warm layer, because nights are colder than the plains.</p>
      </div>
    `
  },
  {
    id: "post-3",
    title: "The Sundarbans: Into the World's Largest Mangrove Forest",
    slug: "sundarbans-mangrove-forest-guide",
    category: {
      name: "Adventure",
      slug: "adventure",
    },
    tags: ["mangrove", "wildlife", "Royal Bengal tiger", "UNESCO"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Khulna Division, Khulna and Bagerhat",
    cityOrDistrict: "Khulna & Bagerhat",
    division: "Khulna",
    readingTime: 5,
    views: 31200,
    featured: true,
    status: "published",
    publishedAt: "2026-03-10",
    coordinates: "21°56'N 89°11'E",
    elevation: "0 - 3 meters",
    bestTime: "November to February",
    permits: "Mandatory Forest Department permit & armed escort",
    excerpt: "A UNESCO World Heritage Site and the home of the Royal Bengal tiger. How a Sundarbans boat trip works and what you can realistically see.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbVvMpUKP9P7jxNatdf7qmOGFl8uw-yIJs_sa9c6tbYr3iOvRUtzTZ51GvPFjpxkMmRKYfIfaB3QSHHGW3d87IQ1qbYCUfclLHGkyl9g2y8WCRatnqDb_Q7wjR-9zVhLQcQVe9dpcwo0vzt3Tj4jt2jlGtgXQSxG0sEiR_AljIct3E1YhL1swNqkSykyeG7C912aTHAY2zC-MbAaHHZkBiWOaI3m6QCeka-r5Oj8tHw539c9IY37Q",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
    ],
    author: {
      name: "Tanvir Ahmed",
      role: "Lead Conservation Correspondent",
      initials: "TA",
    },
    content: `
      <p class="lead">The Sundarbans is the largest mangrove forest in the world, spread across the delta of the Ganges, Brahmaputra and Meghna rivers. Bangladesh holds the larger share, and UNESCO listed the Bangladeshi part as a World Heritage Site in 1997. Water is the road here. Tidal channels wind between tall stands of sundari trees, and the forest is visited by boat.</p>

      <h3>What you can expect to see</h3>
      <p>The Royal Bengal tiger lives here, but sightings are rare and you should not plan a trip around one. Spotted deer, rhesus macaques, wild boar, monitor lizards, estuarine crocodiles and many birds, including kingfishers and sea eagles, are far more likely. Pugmarks on the mud banks are a common sign that a tiger has passed.</p>

      <h3>Main visiting spots</h3>
      <ul>
        <li><strong>Karamjol:</strong> Wildlife breeding centre where you can see deer and crocodiles up close.</li>
        <li><strong>Hiron Point (Nilkamal):</strong> Renowned for its wildlife watchtower and spotted deer herds.</li>
        <li><strong>Kotka and Kachikhali:</strong> Used for wild beach walks, birding, and wildlife viewing.</li>
        <li><strong>Tin Kona Island & Dublar Char:</strong> Associated with fishing communities and seasonal dried-fish camps.</li>
      </ul>

      <h3>How to visit</h3>
      <p>Most trips start from Khulna or Mongla and run two to four days on a chartered launch with a guide, sleeping on the boat. Entry needs a forest permit and fees, and the forest department requires that a licensed guide and armed escort go with visitors. Book through a licensed operator. Entering the forest independently is not allowed.</p>

      <div class="dispatch-callout">
        <h4>Best time & expedition preparation</h4>
        <p>November to February is the usual season, with dry weather and calmer rivers. Parts of the forest are closed or restricted in the monsoon and during fishing bans, so confirm the dates with your operator before paying a deposit. Bring insect repellent, sun protection and a light rain jacket.</p>
      </div>
    `
  },
  {
    id: "post-4",
    title: "Srimangal: Tea Gardens and Rainforest in the Tea Capital",
    slug: "srimangal-tea-capital-guide",
    category: {
      name: "Nature",
      slug: "nature",
    },
    tags: ["tea", "Lawachara", "wildlife", "Sylhet Division"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Sylhet Division, Moulvibazar",
    cityOrDistrict: "Moulvibazar",
    division: "Sylhet",
    readingTime: 4,
    views: 19800,
    featured: true,
    status: "published",
    publishedAt: "2026-03-12",
    coordinates: "24°18'N 91°44'E",
    elevation: "65 ft",
    bestTime: "November to February (Cool) or June to September (Lush Green)",
    permits: "Lawachara entry ticket at park counter",
    excerpt: "Rolling tea estates, a rainforest with hoolock gibbons, and the famous seven-layer tea. A slow weekend from Dhaka.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGYPg9s8__7Ze0oncrPUz5NRp-4HFMQpaI_6UCXSUTEUCpShZLP7hDyQfh2Bu5phu6xsibq1pWIzV97JEqRry94cEVpxCwO9y4yRa6382bXfVF4PO-4yaeVFCxeTEXUotvYPAHCfihBpZ9ml7aLUQjmZLQ0H6Xv777Wkf4OA_X9kGlYdcnUeX9MvMnWifTVQpaCgXASgXS6rMKbQO_DIGt2QX1cuPQAaBTttjRjiMnWfPA0bryDg",
    gallery: [
      "https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=1200&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&q=80",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&q=80"
    ],
    author: {
      name: "Dr. Rafiqul Karim",
      role: "Botanical Heritage Researcher",
      initials: "RK",
    },
    content: `
      <p class="lead">Srimangal, in Moulvibazar district, is called the tea capital of Bangladesh. The town is surrounded by estates whose rows of low bushes follow the hills, and it is an easy weekend trip from Dhaka by train. The pace is slower than in the big beach and hill destinations, which is a reason to go.</p>

      <h3>Things to do</h3>
      <ul>
        <li><strong>Walk through a working tea estate:</strong> In the early morning, pickers are out in the emerald rows. Ask permission at the gate of private estates.</li>
        <li><strong>Visit Lawachara National Park:</strong> A protected evergreen rainforest on the edge of town. Its best-known resident is the rare hoolock gibbon, and early morning walks with a park guide give you the best chance of hearing or seeing one.</li>
        <li><strong>Try the seven-layer tea at Nilkantha Tea Cabin:</strong> Each layer of the drink is prepared with varying syrup density and poured separately into transparent glass.</li>
        <li><strong>Visit Madhabpur Lake:</strong> Where water lilies float among tea slopes and dense woodland.</li>
        <li><strong>Khasi and Manipuri villages:</strong> Located nearby, explore traditional handloom weaving, betel-leaf farming, and dance traditions.</li>
      </ul>

      <h3>Getting there</h3>
      <p>Intercity trains from Dhaka to Srimangal (such as the Parabat or Jayantika Express) take roughly four to five hours, and several services run daily. Buses are cheaper but slower. Once you arrive, rent a CNG auto-rickshaw for the day to move between the estates and the park.</p>

      <div class="dispatch-callout">
        <h4>Best time & packing advice</h4>
        <p>The gardens are green through the rainy season, roughly June to September, and the air is clear and cool from November to February. The tea flush is strongest in the warmer months. Bring mosquito repellent and shoes with grip for the forest trails.</p>
      </div>
    `
  },
  {
    id: "post-5",
    title: "Bandarban: Trekking Bangladesh's Highest Hills",
    slug: "bandarban-hill-trekking-guide",
    category: {
      name: "Adventure",
      slug: "adventure",
    },
    tags: ["trekking", "waterfall", "Nilgiri", "Boga Lake"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Chattogram Division, Bandarban",
    cityOrDistrict: "Bandarban",
    division: "Chattogram",
    readingTime: 5,
    views: 16750,
    featured: false,
    status: "published",
    publishedAt: "2026-03-08",
    coordinates: "22°11'N 92°13'E",
    elevation: "Up to 3,172 ft (Keokradong)",
    bestTime: "November to February",
    permits: "Local administration & police registration required",
    excerpt: "Waterfalls, cloud-level viewpoints and treks to Boga Lake and Keokradong. What to arrange before you go.",
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80"
    ],
    author: {
      name: "Nabila Rahman",
      role: "Highland & Indigenous Route Specialist",
      initials: "NR",
    },
    content: `
      <p class="lead">Bandarban is the most mountainous district in Bangladesh. Steep hills, river gorges and the homes of the Marma, Bawm, Tripura and other communities give it a different character from the rest of the country. Some sights are reachable by car, and others require multi-day treks.</p>

      <h3>Easy sights</h3>
      <ul>
        <li><strong>Nilgiri:</strong> At about 2,200 feet, this hilltop resort commands sweeping 360-degree cloud views, reachable directly by road.</li>
        <li><strong>The Golden Temple (Buddha Dhatu Jadi):</strong> One of the largest and most ornate Theravada Buddhist temples in the country.</li>
        <li><strong>Shoilo Propat:</strong> A natural waterfall close to town, spectacular after the rains.</li>
        <li><strong>Nafakhum:</strong> On the pristine Sangu river, a wide cascading waterfall and a beloved stop on expedition journeys into Remakri.</li>
      </ul>

      <h3>Trekking routes</h3>
      <p><strong>Boga Lake</strong> is a legendary mountain crater lake reached by a hard day of walking or a four-wheel-drive Chander Gari jeep ride to the nearest road-head followed by a steep climb. <strong>Keokradong</strong>, one of the country's highest peaks, is usually reached by a multi-day route with overnight stays in Bawm tribal villages. Do not trek alone. Hire a licensed local guide and check that your planned trail is open.</p>

      <h3>Permits and rules</h3>
      <p>Some areas of Bandarban require permission from the local administration, and rules have changed several times in recent years. Ask at the Bandarban tourism office or through a licensed operator before you set out. Carry multiple photocopies of your national ID or passport.</p>

      <div class="dispatch-callout">
        <h4>Best time & equipment</h4>
        <p>November to February is the best window for trekking, with dry trails and clear views. Waterfalls are strongest in the rainy season, but roads and river crossings become risky. Pack sturdy shoes, a torch, water purification tablets and rain protection.</p>
      </div>
    `
  },
  {
    id: "post-6",
    title: "Saint Martin's Island: Bangladesh's Only Coral Island",
    slug: "saint-martins-island-guide",
    category: {
      name: "Beach",
      slug: "beach",
    },
    tags: ["island", "coral", "coconut", "Bay of Bengal"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Chattogram Division, Cox's Bazar (Teknaf)",
    cityOrDistrict: "Teknaf / St. Martin's",
    division: "Chattogram",
    readingTime: 4,
    views: 22800,
    featured: false,
    status: "published",
    publishedAt: "2026-03-05",
    coordinates: "20°37'N 92°19'E",
    elevation: "Sea Level",
    bestTime: "December to February",
    permits: "Eco-tax pass & ship booking required",
    excerpt: "Clear water, coconut palms and a small island community. How to reach it and the rules that now apply to visitors.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
    ],
    author: {
      name: "Tanvir Ahmed",
      role: "Lead Coastal Explorer",
      initials: "TA",
    },
    content: `
      <p class="lead">Saint Martin's Island lies in the Bay of Bengal, a few kilometres south of the Teknaf peninsula and close to the coast of Myanmar. It is about eight square kilometres in area and is the only coral island in Bangladesh. Locals call it Narikel Jinjira, the coconut island, and the name suits it.</p>

      <h3>How to get there</h3>
      <p>Ships leave from Teknaf and, in peak season, from Cox's Bazar. The voyage takes about two to three hours each way across the Naf river estuary into the blue sea. The ship service usually runs from about November to March and pauses during rough monsoon months. Book your seat and verify running dates in advance, because they depend on maritime weather and official notices.</p>

      <h3>What to do</h3>
      <ul>
        <li><strong>Walk the eastern beaches:</strong> Where the water is crystal clear, turquoise and gently shallow.</li>
        <li><strong>Go to Chhera Dwip:</strong> At the southern tip. At low tide it connects to the main island by a walkable strip of coral rock.</li>
        <li><strong>Sunset on the western beach:</strong> Watch the fiery sun dip directly into the open Bay of Bengal.</li>
        <li><strong>Seafood & refreshments:</strong> Eat fresh grilled coral fish and sweet green coconut water from island stalls.</li>
      </ul>

      <h3>Rules that affect your plans</h3>
      <p>Authorities have limited visitor numbers and overnight stays in recent seasons to protect the fragile coral reef and sea turtle nesting grounds. Rules on day trips, night stays and ship passenger caps change, so check the latest environmental directives before booking. Do not collect shells or coral, avoid single-use plastic, and bring your rubbish back to the mainland.</p>

      <div class="dispatch-callout">
        <h4>Best season window</h4>
        <p>December to February is the calmest and driest period. The sea turns rough from late spring through the monsoon, during which ship services cease completely.</p>
      </div>
    `
  },
  {
    id: "post-7",
    title: "Sylhet: Ratargul, Jaflong and Bisnakandi in One Trip",
    slug: "sylhet-ratargul-jaflong-bisnakandi",
    category: {
      name: "Nature",
      slug: "nature",
    },
    tags: ["swamp forest", "river", "hills", "Sylhet"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Sylhet Division, Sylhet",
    cityOrDistrict: "Sylhet",
    division: "Sylhet",
    readingTime: 5,
    views: 20500,
    featured: false,
    status: "published",
    publishedAt: "2026-03-01",
    coordinates: "25°00'N 91°58'E",
    elevation: "115 ft",
    bestTime: "June to September (Water) or November to February (Clear)",
    permits: "Local boat hire fee",
    excerpt: "A freshwater swamp forest, a border river beneath the Khasi hills and a stone-strewn stream. A three-day Sylhet route.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEwzasUKPLVDarjCmOo8IpGHSP7zxhfimyjliZJuZiX60vll9uJKB4KhoNp71C_h4g6gT-KpzLrL9wOgiqeslP00seVImazu7RED1_PJNW6nv5oGg5xXOULKay8lmapnHFrjJZu85eIki8lD9yTp8072hfKw5-6B2sA1CaM51waOK4fCNRnMe0hHgSduG3JcU6QAQ7qK-N7DhFdF3IgnHBy8-yBQLLGoavzCfwm8V9mQzzBSeAg0Y",
    gallery: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80"
    ],
    author: {
      name: "Dr. Rafiqul Karim",
      role: "Botanical Heritage Researcher",
      initials: "RK",
    },
    content: `
      <p class="lead">Sylhet is Bangladesh's greenest division, and much of its best scenery is within a two-hour drive of the city. Three stops fit together well: Ratargul, Jaflong and Bisnakandi, all in or near Gowainghat upazila. The route shows how different the landscape can be within a small area.</p>

      <h3>Ratargul Swamp Forest</h3>
      <p>Ratargul is a freshwater swamp forest, and among the few of its kind in the region. In the rainy season, roughly June to September, the water rises and covers the forest floor, so you travel by small wooden boat between the trunks of hijal and koroch trees. The water level falls in the dry months and the boat routes shorten. Go early in the morning to avoid the crowd of boats in the middle of the day.</p>

      <h3>Jaflong</h3>
      <p>Jaflong lies at the edge of the Meghalaya hills near the Dawki border with India. The Piyain river runs through, and tea gardens and Khasi villages sit on the slopes. The riverbed is known for stone collection and the piles of rocks at the water's edge. Look for the Khasi punji, the village market, and try the paan leaf sold by local growers.</p>

      <h3>Bisnakandi</h3>
      <p>Bisnakandi is a riverbank of smooth stones with water flowing down from the Meghalaya hills on the far side. The water turns blue-green after rain, and the setting is calm compared with Jaflong. It is easiest to reach by hiring a car or CNG for the day from Sylhet town.</p>

      <div class="dispatch-callout">
        <h4>Practical notes</h4>
        <p>Trains and buses connect Dhaka and Sylhet. In town, the shrine of Hazrat Shah Jalal is the best-known landmark. Rain can make the roads and boat access uncertain, so check conditions with your hotel. Carry a raincoat and waterproof cover for your phone or camera.</p>
      </div>
    `
  },
  {
    id: "post-8",
    title: "Kuakata: Watching the Sun Rise and Set from the Same Beach",
    slug: "kuakata-sunrise-sunset-guide",
    category: {
      name: "Beach",
      slug: "beach",
    },
    tags: ["beach", "sunrise", "sunset", "Patuakhali"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Barishal Division, Patuakhali",
    cityOrDistrict: "Patuakhali",
    division: "Barishal",
    readingTime: 4,
    views: 14300,
    featured: false,
    status: "published",
    publishedAt: "2026-02-24",
    coordinates: "21°49'N 90°07'E",
    elevation: "Sea Level",
    bestTime: "November to February",
    permits: "None",
    excerpt: "A wide southern beach in Patuakhali with views of both sunrise and sunset over the Bay of Bengal, plus Rakhine village culture.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWSUBpy-9m2ugmNBatAuyMD03wsNPuyjfRJLclqxWrHd0sQTXNFm7UWidbOMdqymLqb4zUgXpN2Sz-gFxCTSigu2Fly6UbQiBbtvSZR6ayLch4orHSGODGqV15Bfeko37cp8nYTmS4EaRFzDi6lfkHOWJW5XPDV2zUycyutVERKMWZq5MIJmGlaATmx4RqwOjjwMPawnVqv_AksfT3OV5YFiA42NOcH3AesGe8ryRMYZHPxjztN4",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80"
    ],
    author: {
      name: "Tanvir Ahmed",
      role: "Lead Coastal Explorer",
      initials: "TA",
    },
    content: `
      <p class="lead">Kuakata, in Kalapara upazila of Patuakhali district, is a broad sandy beach on the southern coast. It is sometimes called the Daughter of the Sea (Sagor Kannya). Its shoreline faces south, which lets you see the sun rise over the water in the morning and set into it in the evening. Few beaches in Bangladesh offer both from the same spot.</p>

      <h3>What to see</h3>
      <ul>
        <li><strong>The main beach:</strong> Wide and gently sloping, with an expansive stretch of shallow water ideal for walks.</li>
        <li><strong>Gangamati Forest:</strong> At the eastern end, an evergreen mangrove grove that can be visited on foot or by motorboat.</li>
        <li><strong>Fatrar Char:</strong> A mangrove-covered island on the coast, associated with the local fishing economy.</li>
        <li><strong>The Rakhine Community:</strong> Lives around Kuakata. Visit their villages to see timber architecture, handloom textiles, and historic Buddhist temples with giant bronze Buddha statues.</li>
        <li><strong>Local fish markets:</strong> Show the daily catch and the traditional dried-fish trade at close range.</li>
      </ul>

      <h3>Getting there</h3>
      <p>The classic route is by river launch from Dhaka's Sadarghat to Patuakhali or Barishal overnight, then a road transfer for the last leg. Direct buses run from Dhaka through the Padma Bridge and Payra Bridge route, making the overland journey faster than it used to be. Confirm the current timetable, because services have shifted since the bridge opened.</p>

      <div class="dispatch-callout">
        <h4>Best time & accommodation tip</h4>
        <p>November to February is best. The sea is calm, mornings are clear and the sunrise is easy to watch. In the monsoon, storms and high tides make the beach less pleasant and sometimes unsafe. Book a room on the beachfront if you want to see the sunrise without getting up in the dark to travel. The sun rises early, often before 6 a.m. in winter.</p>
      </div>
    `
  },
  {
    id: "post-9",
    title: "Paharpur and Bagerhat: Bangladesh's UNESCO Heritage Sites",
    slug: "paharpur-bagerhat-heritage-guide",
    category: {
      name: "Heritage",
      slug: "heritage",
    },
    tags: ["heritage", "UNESCO", "Buddhist ruins", "mosque"],
    region: "bangladesh",
    country: "Bangladesh",
    location: "Rajshahi Division (Naogaon) and Khulna Division (Bagerhat)",
    cityOrDistrict: "Naogaon & Bagerhat",
    division: "Rajshahi",
    readingTime: 4,
    views: 11900,
    featured: false,
    status: "published",
    publishedAt: "2026-02-18",
    coordinates: "25°01'N 88°58'E",
    elevation: "55 ft",
    bestTime: "November to February",
    permits: "Archaeological Department ticket counters",
    excerpt: "A Buddhist monastery from the eighth century and a medieval mosque city. Two UNESCO sites that show a different side of Bangladesh.",
    coverImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80",
      "https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=1200&q=80"
    ],
    author: {
      name: "Dr. Rafiqul Karim",
      role: "Botanical Heritage Researcher",
      initials: "RK",
    },
    content: `
      <p class="lead">Bangladesh has three UNESCO World Heritage Sites. One is the Sundarbans. The other two are historic monuments that date back centuries, and both were listed in 1985. They are far from the beach circuit, but they reward the effort.</p>

      <h3>Somapura Mahavihara, Paharpur</h3>
      <p>Somapura Mahavihara in Naogaon district is a colossal Buddhist monastery from the Pala period, dating from around the eighth century. The main structure is a cruciform temple at the centre of a square courtyard lined with 177 monks' cells. Terracotta plaques on the base show scenes from daily life, fauna, and mythology. The site museum holds sculptures and terracotta pieces found on the grounds. It is a flat, open site, so bring a hat and water.</p>

      <h3>Mosque City of Bagerhat</h3>
      <p>The Historic Mosque City of Bagerhat was built in the fifteenth century under Khan Jahan Ali, a Muslim saint and governor. Its best-known building is the Sixty Dome Mosque (Shait Gumbad Masjid), which actually has 77 domes and 60 stone pillars, one of the largest surviving medieval brick mosques in the subcontinent. The brick buildings stand in a quiet rural landscape close to the Sundarbans, and the Khan Jahan Ali tomb sits beside a sacred reservoir with crocodiles. Bagerhat combines easily with a Sundarbans trip.</p>

      <div class="dispatch-callout">
        <h4>Visiting details & cultural etiquette</h4>
        <p>Paharpur is about five to six hours from Dhaka by road, and is commonly visited from Rajshahi or Bogura. Bagerhat is reached from Khulna in about an hour. Both sites have entry fees, and foreign visitors pay more than locals. Winter, from November to February, is the most comfortable time for walking the sites. Dress modestly at active mosques and remove your shoes when asked.</p>
      </div>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return bangladeshPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return bangladeshPosts;
}

export function getFeaturedPosts(): BlogPost[] {
  return bangladeshPosts.filter((p) => p.featured);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return bangladeshPosts.filter(
    (p) => p.category.slug.toLowerCase() === categorySlug.toLowerCase()
  );
}

export function getPostsByDivision(divisionName: string): BlogPost[] {
  return bangladeshPosts.filter(
    (p) => p.division.toLowerCase() === divisionName.toLowerCase()
  );
}
