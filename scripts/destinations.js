const cities = [
  {
    name: "Mumbai",
    country: "India",
    population: 20000000,
    attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"],
    timezone: "IST",
    description:
      "Mumbai is the financial capital of India, known for its bustling city life, iconic landmarks, and vibrant entertainment industry.",
    price: 6200,
  },
  {
    name: "Delhi",
    country: "India",
    population: 20000000,
    attractions: ["Red Fort", "Qutub Minar", "Lotus Temple"],
    timezone: "IST",
    description:
      "Delhi is the capital city of India, known for its rich history, vibrant culture, and architectural wonders.",
    price: 5400,
  },
  {
    name: "New York",
    country: "United States",
    population: 8500000,
    attractions: ["Statue of Liberty", "Central Park", "Empire State Building"],
    timezone: "EST",
    description:
      "New York City, often referred to as the 'Big Apple,' is a global metropolis known for its iconic landmarks, diverse neighborhoods, and thriving arts scene.",
    price: 7560,
  },
  {
    name: "Los Angeles",
    country: "United States",
    population: 4000000,
    attractions: [
      "Hollywood Walk of Fame",
      "Universal Studios",
      "Griffith Observatory",
    ],
    timezone: "PST",
    description:
      "Los Angeles is a sprawling city located in Southern California, famous for its entertainment industry, beautiful beaches, and cultural diversity.",
    price: 3240,
  },
  {
    name: "San Francisco",
    country: "United States",
    population: 880000,
    attractions: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf"],
    timezone: "PST",
    description:
      "San Francisco is a vibrant city in Northern California, renowned for its iconic landmarks, foggy weather, and thriving tech industry.",
    price: 4590,
  },
  {
    name: "Washington D.C.",
    country: "United States",
    population: 700000,
    attractions: ["White House", "National Mall", "Smithsonian Institution"],
    timezone: "EST",
    description:
      "Washington D.C. is the capital of the United States and home to numerous historic monuments, museums, and government institutions.",
    price: 2120,
  },
  {
    name: "Seattle",
    country: "United States",
    population: 750000,
    attractions: [
      "Space Needle",
      "Pike Place Market",
      "Chihuly Garden and Glass",
    ],
    timezone: "PST",
    description:
      "Seattle is a city in Washington state known for its thriving tech industry, coffee culture, and stunning natural beauty.",
    price: 6480,
  },
  {
    name: "Dallas",
    country: "United States",
    population: 1400000,
    attractions: [
      "Dallas Museum of Art",
      "Sixth Floor Museum",
      "Dallas Arboretum",
    ],
    timezone: "CST",
    description:
      "Dallas is a modern metropolis in Texas, renowned for its vibrant arts district, Tex-Mex cuisine, and professional sports teams.",
    price: 8750,
  },
  {
    name: "Miami",
    country: "United States",
    population: 470000,
    attractions: [
      "South Beach",
      "Art Deco Historic District",
      "Everglades National Park",
    ],
    timezone: "EST",
    description:
      "Miami is a vibrant city located in southeastern Florida, known for its beautiful beaches, lively nightlife, and diverse cultural scene.",
    price: 3950,
  },
  {
    name: "Detroit",
    country: "United States",
    population: 670000,
    attractions: [
      "Motown Museum",
      "Detroit Institute of Arts",
      "Belle Isle Park",
    ],
    timezone: "EST",
    description:
      "Detroit is a city in Michigan, famous for its contributions to the American automotive industry, Motown music, and revitalization efforts.",
    price: 1730,
  },
  {
    name: "Tokyo",
    country: "Japan",
    population: 37390000,
    attractions: [
      "Tokyo Tower",
      "Senso-ji Temple",
      "Shinjuku Gyoen National Garden",
    ],
    timezone: "JST",
    description:
      "Tokyo, the capital of Japan, is a bustling metropolis known for its cutting-edge technology, ancient traditions, and vibrant street life.",
    price: 8350,
  },
  {
    name: "Shanghai",
    country: "China",
    population: 27440000,
    attractions: ["The Bund", "Yu Garden", "Shanghai Disneyland"],
    timezone: "CST",
    description:
      "Shanghai is a global financial hub and major city in China, renowned for its futuristic skyline, historical landmarks, and vibrant shopping districts.",
    price: 6760,
  },
  {
    name: "Beijing",
    country: "China",
    population: 21710000,
    attractions: ["Great Wall of China", "Forbidden City", "Temple of Heaven"],
    timezone: "CST",
    description:
      "Beijing, the capital of China, is a city steeped in history and culture, featuring iconic landmarks, traditional architecture, and a thriving culinary scene.",
    price: 2670,
  },
  {
    name: "Kolkata",
    country: "India",
    population: 14970000,
    attractions: ["Victoria Memorial", "Howrah Bridge", "Indian Museum"],
    timezone: "IST",
    description:
      "Kolkata, formerly known as Calcutta, is a city in India's West Bengal state, famous for its colonial architecture, cultural festivals, and intellectual heritage.",
    price: 6250,
  },
  {
    name: "Chennai",
    country: "India",
    population: 11324000,
    attractions: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
    timezone: "IST",
    description:
      "Chennai, the capital of Tamil Nadu in India, is a coastal city known for its beautiful beaches, classical music, and colonial-era architecture.",
    price: 4420,
  },
  {
    name: "Paris",
    country: "France",
    population: 2148000,
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    timezone: "CET",
    description:
      "Paris, the capital city of France, is renowned for its romantic ambiance, exquisite cuisine, and iconic landmarks.",
    price: 6840,
  },
  {
    name: "London",
    country: "United Kingdom",
    population: 8908000,
    attractions: ["Buckingham Palace", "Tower of London", "British Museum"],
    timezone: "GMT",
    description:
      "London, the capital of the United Kingdom, is a vibrant city known for its rich history, cultural diversity, and world-class theater.",
    price: 8370,
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    population: 6717000,
    attractions: [
      "Christ the Redeemer",
      "Copacabana Beach",
      "Sugarloaf Mountain",
    ],
    timezone: "BRT",
    description:
      "Rio de Janeiro is a vibrant city in Brazil, famous for its stunning beaches, samba music, and lively Carnival celebrations.",
    price: 5240,
  },
  {
    name: "Sydney",
    country: "Australia",
    population: 5312000,
    attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach"],
    timezone: "AEST",
    description:
      "Sydney is the largest city in Australia, known for its iconic landmarks, beautiful harbor, and vibrant cultural scene.",
    price: 9310,
  },
  {
    name: "Dhaka",
    country: "Bangladesh",
    population: 21288000,
    attractions: ["Lalbagh Fort", "National Parliament House", "Ahsan Manzil"],
    timezone: "BST",
    description:
      "Dhaka is the capital of Bangladesh and a bustling city with a rich history, colorful markets, and diverse culinary delights.",
    price: 2180,
  },
  {
    name: "São Paulo",
    country: "Brazil",
    population: 12252023,
    attractions: [
      "Ibirapuera Park",
      "São Paulo Museum of Art",
      "Paulista Avenue",
    ],
    timezone: "BRT",
    description:
      "São Paulo is a dynamic metropolis in Brazil, known for its vibrant cultural scene, diverse cuisine, and bustling city life.",
    price: 7490,
  },
  {
    name: "Mexico City",
    country: "Mexico",
    population: 8925000,
    attractions: ["Zócalo", "Chapultepec Castle", "Xochimilco"],
    timezone: "CST",
    description:
      "Mexico City is the capital of Mexico and a thriving cultural hub, featuring ancient ruins, colonial architecture, and vibrant street life.",
    price: 3520,
  },
  {
    name: "Cairo",
    country: "Egypt",
    population: 20076000,
    attractions: ["Pyramids of Giza", "Egyptian Museum", "Khan El Khalili"],
    timezone: "EET",
    description:
      "Cairo, the capital of Egypt, is a city steeped in ancient history, with iconic pyramids, historic mosques, and bustling markets.",
    price: 5420,
  },
  {
    name: "Osaka",
    country: "Japan",
    population: 19320000,
    attractions: ["Osaka Castle", "Universal Studios Japan", "Dotonbori"],
    timezone: "JST",
    description:
      "Osaka is a vibrant city in Japan known for its modern architecture, delicious street food, and vibrant nightlife.",
    price: 4850,
  },
  {
    name: "Karachi",
    country: "Pakistan",
    population: 15741000,
    attractions: ["Mazar-e-Quaid", "Clifton Beach", "Mohatta Palace"],
    timezone: "PKT",
    description:
      "Karachi is the largest city in Pakistan, offering a mix of stunning beaches, historical landmarks, and a vibrant urban culture.",
    price: 6970,
  },
  {
    name: "Kinshasa",
    country: "Democratic Republic of the Congo",
    population: 11860000,
    attractions: [
      "Kinkole Fish Market",
      "Musee National de Kinshasa",
      "Congo River",
    ],
    timezone: "WAT",
    description:
      "Kinshasa is the capital city of the Democratic Republic of the Congo, offering a blend of traditional African culture and modern urban life.",
    price: 2910,
  },
  {
    name: "Lagos",
    country: "Nigeria",
    population: 16060303,
    attractions: [
      "Lekki Conservation Centre",
      "National Museum Lagos",
      "Nike Art Gallery",
    ],
    timezone: "WAT",
    description:
      "Lagos is a vibrant city in Nigeria known for its bustling markets, lively music scene, and beautiful coastline.",
    price: 6160,
  },
  {
    name: "Istanbul",
    country: "Turkey",
    population: 15283906,
    attractions: ["Hagia Sophia", "Topkapi Palace", "Blue Mosque"],
    timezone: "TRT",
    description:
      "Istanbul is a historic city in Turkey that straddles Europe and Asia, offering a rich blend of cultures, stunning architecture, and vibrant markets.",
    price: 7890,
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    population: 3054300,
    attractions: ["La Boca", "Recoleta Cemetery", "Plaza de Mayo"],
    timezone: "ART",
    description:
      "Buenos Aires is the vibrant capital of Argentina, known for its tango music, passionate football culture, and European-style architecture.",
    price: 4320,
  },
  {
    name: "Manila",
    country: "Philippines",
    population: 1780148,
    attractions: ["Intramuros", "Rizal Park", "Manila Ocean Park"],
    timezone: "PHT",
    description:
      "Manila is the capital city of the Philippines, offering a mix of modern skyscrapers, historic landmarks, and a bustling street food scene.",
    price: 6250,
  },
  {
    name: "Tianjin",
    country: "China",
    population: 14722100,
    attractions: ["Tianjin Eye", "Italian Style Town", "Haihe Cultural Square"],
    timezone: "CST",
    description:
      "Tianjin is a major city in China, known for its blend of modern architecture, rich history, and vibrant street life.",
    price: 3460,
  },
  {
    name: "Bangalore",
    country: "India",
    population: 12490000,
    attractions: [
      "Bangalore Palace",
      "Cubbon Park",
      "Lalbagh Botanical Garden",
    ],
    timezone: "IST",
    description:
      "Bangalore, also known as Bengaluru, is the technology hub of India, offering a pleasant climate, beautiful gardens, and a thriving startup culture.",
    price: 7930,
  },
  {
    name: "Moscow",
    country: "Russia",
    population: 12506468,
    attractions: ["Red Square", "Kremlin", "Saint Basil's Cathedral"],
    timezone: "MSK",
    description:
      "Moscow, the capital of Russia, is a city of contrasts, with historic landmarks, vibrant nightlife, and a rich cultural heritage.",
    price: 8970,
  },
  {
    name: "Bogotá",
    country: "Colombia",
    population: 7878783,
    attractions: ["Monserrate", "Gold Museum", "La Candelaria"],
    timezone: "COT",
    description:
      "Bogotá is the capital city of Colombia, offering a mix of colonial architecture, vibrant street art, and a thriving food scene.",
    price: 4780,
  },
  {
    name: "Jakarta",
    country: "Indonesia",
    population: 10770487,
    attractions: [
      "National Monument",
      "Taman Mini Indonesia Indah",
      "Ancol Dreamland",
    ],
    timezone: "WIB",
    description:
      "Jakarta is the capital city of Indonesia, known for its bustling markets, vibrant street life, and rich cultural heritage.",
    price: 5710,
  },
  {
    name: "Lima",
    country: "Peru",
    population: 9127264,
    attractions: ["Machu Picchu", "Historic Centre of Lima", "Miraflores"],
    timezone: "PET",
    description:
      "Lima is the capital city of Peru, offering a mix of ancient ruins, colonial architecture, and a world-renowned culinary scene.",
    price: 2990,
  },
  {
    name: "Bangkok",
    country: "Thailand",
    population: 8305218,
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Weekend Market"],
    timezone: "ICT",
    description:
      "Bangkok, the capital of Thailand, is a bustling metropolis known for its ornate temples, vibrant street markets, and lively nightlife.",
    price: 6620,
  },
  {
    name: "Hyderabad",
    country: "India",
    population: 6809970,
    attractions: ["Charminar", "Golconda Fort", "Hussain Sagar"],
    timezone: "IST",
    description:
      "Hyderabad is a historic city in India, known for its iconic landmarks, delicious cuisine, and rich cultural heritage.",
    price: 5750,
  },
  {
    name: "Seoul",
    country: "South Korea",
    population: 9715429,
    attractions: ["Gyeongbokgung Palace", "Myeongdong", "N Seoul Tower"],
    timezone: "KST",
    description:
      "Seoul is the capital city of South Korea, offering a mix of ancient traditions, futuristic technology, and a vibrant K-pop culture.",
    price: 8570,
  },
  {
    name: "Tehran",
    country: "Iran",
    population: 8154051,
    attractions: ["Golestan Palace", "Milad Tower", "National Museum of Iran"],
    timezone: "IRST",
    description:
      "Tehran is the capital city of Iran, offering a mix of modern architecture, rich history, and a vibrant arts scene.",
    price: 4680,
  },
  {
    name: "Wuhan",
    country: "China",
    population: 8529466,
    attractions: ["Yellow Crane Tower", "East Lake", "Hubei Provincial Museum"],
    timezone: "CST",
    description:
      "Wuhan is a major city in China, known for its historic sites, beautiful lakes, and delicious local cuisine.",
    price: 5150,
  },
  {
    name: "Ahmedabad",
    country: "India",
    population: 5577940,
    attractions: ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
    timezone: "IST",
    description:
      "Ahmedabad is a vibrant city in India, known for its rich cultural heritage, intricate architecture, and bustling markets.",
    price: 2630,
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    population: 1808912,
    attractions: ["Petronas Twin Towers", "Batu Caves", "KLCC Park"],
    timezone: "MYT",
    description:
      "Kuala Lumpur is the capital city of Malaysia, offering a mix of modern skyscrapers, diverse cultures, and delicious street food.",
    price: 7180,
  },
  {
    name: "Surat",
    country: "India",
    population: 6685361,
    attractions: ["Dutch Garden", "Surat Castle", "Sardar Patel Museum"],
    timezone: "IST",
    description:
      "Surat is a bustling city in India, known for its textile industry, historical landmarks, and vibrant street markets.",
    price: 3940,
  },
  {
    name: "Baghdad",
    country: "Iraq",
    population: 7180889,
    attractions: [
      "Al-Mustansiriya School",
      "Baghdad Zoo",
      "National Museum of Iraq",
    ],
    timezone: "AST",
    description:
      "Baghdad is the capital city of Iraq, offering a mix of ancient history, cultural heritage, and warm hospitality.",
    price: 5730,
  },
  {
    name: "Hong Kong",
    country: "China",
    population: 7392000,
    attractions: ["Victoria Peak", "Hong Kong Disneyland", "Tsim Sha Tsui"],
    timezone: "HKT",
    description:
      "Hong Kong is a bustling metropolis known for its iconic skyline, vibrant street markets, and fusion of eastern and western cultures.",
    price: 8720,
  },
  {
    name: "Riyadh",
    country: "Saudi Arabia",
    population: 7048500,
    attractions: ["Kingdom Centre Tower", "Al-Masmak Fortress", "Diriyah"],
    timezone: "AST",
    description:
      "Riyadh is the capital city of Saudi Arabia, offering a blend of modern development, traditional architecture, and rich heritage.",
    price: 9200,
  },
  {
    name: "Pune",
    country: "India",
    population: 3115431,
    attractions: ["Aga Khan Palace", "Shaniwar Wada", "Sinhagad Fort"],
    timezone: "IST",
    description:
      "Pune is a city in India known for its educational institutions, pleasant climate, and historical landmarks.",
    price: 3030,
  },
  {
    name: "Santiago",
    country: "Chile",
    population: 5031477,
    attractions: ["Plaza de Armas", "Cerro San Cristobal", "Santa Lucia Hill"],
    timezone: "CLST",
    description:
      "Santiago is the capital city of Chile, offering a mix of colonial architecture, vibrant cultural scene, and stunning mountain views.",
    price: 7640,
  },
  {
    name: "Madrid",
    country: "Spain",
    population: 3348536,
    attractions: ["Prado Museum", "Royal Palace of Madrid", "Retiro Park"],
    timezone: "CEST",
    description:
      "Madrid is the capital city of Spain, known for its elegant boulevards, world-class museums, and lively nightlife.",
    price: 8330,
  },
  {
    name: "Toronto",
    country: "Canada",
    population: 2731571,
    attractions: ["CN Tower", "Royal Ontario Museum", "Toronto Islands"],
    timezone: "EST",
    description:
      "Toronto is a diverse city in Canada, offering a mix of stunning architecture, multicultural neighborhoods, and vibrant arts scene.",
    price: 9130,
  },
  {
    name: "Johannesburg",
    country: "South Africa",
    population: 9574414,
    attractions: ["Apartheid Museum", "Soweto", "Lion Park"],
    timezone: "SAST",
    description:
      "Johannesburg is the largest city in South Africa, known for its rich history, cultural diversity, and thriving urban arts scene.",
    price: 8270,
  },
  {
    name: "Singapore",
    country: "Singapore",
    population: 5612000,
    attractions: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Island"],
    timezone: "SGT",
    description:
      "Singapore is a modern city-state known for its futuristic architecture, pristine gardens, and diverse culinary delights.",
    price: 9850,
  },
  {
    name: "Barcelona",
    country: "Spain",
    population: 1620343,
    attractions: ["Sagrada Familia", "Park Güell", "Gothic Quarter"],
    timezone: "CEST",
    description:
      "Barcelona is a vibrant city in Spain, famous for its stunning architecture, lively street life, and beautiful Mediterranean beaches.",
    price: 6690,
  },
  {
    name: "Yangon",
    country: "Myanmar",
    population: 5450000,
    attractions: ["Shwedagon Pagoda", "Sule Pagoda", "Bogyoke Market"],
    timezone: "MMT",
    description:
      "Yangon is the largest city in Myanmar, known for its breathtaking temples, bustling markets, and rich cultural heritage.",
    price: 5830,
  },
  {
    name: "Alexandria",
    country: "Egypt",
    population: 5163750,
    attractions: [
      "Qaitbay Citadel",
      "Montaza Palace",
      "Bibliotheca Alexandrina",
    ],
    timezone: "EET",
    description:
      "Alexandria is a historic city in Egypt, offering a mix of ancient wonders, beautiful Mediterranean coastline, and vibrant cultural scene.",
    price: 6950,
  },
  {
    name: "Saint Petersburg",
    country: "Russia",
    population: 5351935,
    attractions: [
      "Hermitage Museum",
      "Peterhof Palace",
      "Church of the Savior on Blood",
    ],
    timezone: "MSK",
    description:
      "Saint Petersburg is a city known for its rich history, stunning architecture, and cultural heritage.",
    price: 2350,
  },
  {
    name: "Ankara",
    country: "Turkey",
    population: 5270575,
    attractions: ["Anitkabir", "Kocatepe Mosque", "Ataturk Forest Farm"],
    timezone: "TRT",
    description:
      "Ankara is the capital of Turkey, blending modernity with ancient ruins and vibrant Turkish culture.",
    price: 4560,
  },
  {
    name: "Chittagong",
    country: "Bangladesh",
    population: 2852865,
    attractions: ["Patenga Beach", "Karnaphuli River", "Ethnological Museum"],
    timezone: "BST",
    description:
      "Chittagong is a bustling port city in Bangladesh, offering scenic beauty and a mix of cultures.",
    price: 6810,
  },
  {
    name: "Nairobi",
    country: "Kenya",
    population: 4397073,
    attractions: [
      "Nairobi National Park",
      "David Sheldrick Wildlife Trust",
      "Giraffe Centre",
    ],
    timezone: "EAT",
    description:
      "Nairobi is the capital of Kenya, known for its wildlife, national parks, and vibrant urban life.",
    price: 3540,
  },
  {
    name: "Hanoi",
    country: "Vietnam",
    population: 3131675,
    attractions: ["Hoan Kiem Lake", "Hoa Lo Prison", "Temple of Literature"],
    timezone: "ICT",
    description:
      "Hanoi is the capital of Vietnam, offering a blend of ancient and modern attractions, bustling markets, and delicious cuisine.",
    price: 5260,
  },
  {
    name: "Melbourne",
    country: "Australia",
    population: 4936343,
    attractions: [
      "Great Ocean Road",
      "Royal Botanic Gardens",
      "Melbourne Cricket Ground",
    ],
    timezone: "AEST",
    description:
      "Melbourne is a vibrant city in Australia, known for its diverse culture, art, sports, and scenic coastal drives.",
    price: 2160,
  },
  {
    name: "Cape Town",
    country: "South Africa",
    population: 4336889,
    attractions: [
      "Table Mountain",
      "Robben Island",
      "Kirstenbosch National Botanical Garden",
    ],
    timezone: "SAST",
    description:
      "Cape Town is a stunning coastal city in South Africa, famous for its natural beauty, cultural heritage, and vibrant food scene.",
    price: 8820,
  },
  {
    name: "Brasília",
    country: "Brazil",
    population: 3055149,
    attractions: [
      "Congresso Nacional",
      "Palácio da Alvorada",
      "Cathedral of Brasília",
    ],
    timezone: "BRT",
    description:
      "Brasília is the capital of Brazil, renowned for its modernist architecture, political significance, and urban planning.",
    price: 7840,
  },
  {
    name: "Kabul",
    country: "Afghanistan",
    population: 3277000,
    attractions: [
      "Babur's Gardens",
      "Darul Aman Palace",
      "National Museum of Afghanistan",
    ],
    timezone: "AFT",
    description:
      "Kabul is the capital of Afghanistan, offering a blend of history, cultural heritage, and breathtaking mountain landscapes.",
    price: 3980,
  },
  {
    name: "Tel Aviv",
    country: "Israel",
    population: 451523,
    attractions: ["Old Jaffa", "Carmel Market", "Yitzhak Rabin Center"],
    timezone: "IST",
    description:
      "Tel Aviv is a vibrant city in Israel, known for its beaches, nightlife, modern architecture, and thriving tech scene.",
    price: 3170,
  },
  {
    name: "Rome",
    country: "Italy",
    population: 2872800,
    attractions: ["Colosseum", "Trevi Fountain", "Vatican City"],
    timezone: "CEST",
    description:
      "Rome is the capital of Italy, offering a blend of ancient ruins, world-renowned art, and mouthwatering cuisine.",
    price: 6040,
  },
  {
    name: "Lisbon",
    country: "Portugal",
    population: 547733,
    attractions: ["Belém Tower", "Jerónimos Monastery", "Rossio Square"],
    timezone: "WEST",
    description:
      "Lisbon is the capital of Portugal, known for its charming neighborhoods, historic monuments, and vibrant music scene.",
    price: 3160,
  },
  {
    name: "Berlin",
    country: "Germany",
    population: 3669491,
    attractions: ["Brandenburg Gate", "Berlin Wall", "Museum Island"],
    timezone: "CEST",
    description:
      "Berlin is the capital of Germany, offering a fascinating mix of history, vibrant arts, and vibrant nightlife.",
    price: 8190,
  },
  {
    name: "Monaco",
    country: "Monaco",
    population: 37831,
    attractions: [
      "Monte Carlo Casino",
      "Prince's Palace",
      "Oceanographic Museum",
    ],
    timezone: "CET",
    description:
      "Monaco is a glamorous city-state on the French Riviera, known for its luxury, casinos, and Formula 1 Grand Prix.",
    price: 2680,
  },
  {
    name: "Jaipur",
    country: "India",
    population: 3073350,
    attractions: ["Amber Fort", "Hawa Mahal", "City Palace"],
    timezone: "IST",
    description:
      "Jaipur is the capital of Rajasthan, India, renowned for its rich history, majestic palaces, and vibrant culture.",
    price: 2180,
  },
  {
    name: "Lucknow",
    country: "India",
    population: 3382009,
    attractions: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza"],
    timezone: "IST",
    description:
      "Lucknow is the capital of Uttar Pradesh, India, known for its architectural heritage, culinary delights, and vibrant festivals.",
    price: 3410,
  },
  {
    name: "Kuwait City",
    country: "Kuwait",
    population: 2356584,
    attractions: ["Kuwait Towers", "The Avenues Mall", "Grand Mosque"],
    timezone: "AST",
    description:
      "Kuwait City is the capital of Kuwait, offering a blend of modern architecture, cultural heritage, and Arabian hospitality.",
    price: 6490,
  },
  {
    name: "Indore",
    country: "India",
    population: 2465314,
    attractions: ["Rajwada Palace", "Sarafa Bazaar", "Kanch Mandir"],
    timezone: "IST",
    description:
      "Indore is a vibrant city in Madhya Pradesh, India, known for its royal heritage, delectable street food, and bustling markets.",
    price: 4820,
  },
  {
    name: "Gurgaon",
    country: "India",
    population: 876824,
    attractions: [
      "Kingdom of Dreams",
      "Sultanpur National Park",
      "Leisure Valley Park",
    ],
    timezone: "IST",
    description:
      "Gurgaon, officially Gurugram, is a thriving city in Haryana, India, known for its corporate offices, shopping malls, and entertainment hubs.",
    price: 2780,
  },
  {
    name: "Agra",
    country: "India",
    population: 1585704,
    attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    timezone: "IST",
    description:
      "Agra is a historic city in Uttar Pradesh, India, famous for the iconic Taj Mahal and other magnificent Mughal-era structures.",
    price: 5630,
  },
  {
    name: "Milan",
    country: "Italy",
    population: 1378689,
    attractions: [
      "Duomo di Milano",
      "Galleria Vittorio Emanuele II",
      "Sforza Castle",
    ],
    timezone: "CEST",
    description:
      "Milan is a stylish city in Italy, known for its fashion, design, art, and a rich cultural heritage.",
    price: 4470,
  },
  {
    name: "Alexandria",
    country: "Egypt",
    population: 5163750,
    attractions: [
      "Qaitbay Citadel",
      "Montaza Palace",
      "Bibliotheca Alexandrina",
    ],
    timezone: "EET",
    description:
      "Alexandria is a historic city in Egypt, offering a mix of ancient wonders, beautiful Mediterranean coastline, and vibrant cultural scene.",
    price: 6950,
  },
  {
    name: "Naples",
    country: "Italy",
    population: 967069,
    attractions: ["Pompeii", "Mount Vesuvius", "Naples Cathedral"],
    timezone: "CEST",
    description:
      "Naples is a vibrant city in Italy known for its rich history, archaeological sites, and mouthwatering cuisine, including traditional Neapolitan pizza.",
    price: 5360,
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    population: 3199549,
    attractions: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
    timezone: "GST",
    description:
      "Dubai is a modern metropolis known for its stunning skyscrapers, luxurious shopping malls, and extravagant lifestyle.",
    price: 8750,
  },
  {
    name: "Abu Dhabi",
    country: "United Arab Emirates",
    population: 1546958,
    attractions: [
      "Sheikh Zayed Grand Mosque",
      "Louvre Abu Dhabi",
      "Yas Island",
    ],
    timezone: "GST",
    description:
      "Abu Dhabi is the capital city of the United Arab Emirates, featuring magnificent architecture, pristine beaches, and a thriving cultural scene.",
    price: 6740,
  },
];

let grid = document.getElementById("grid__destinations");
const loader = document.getElementById("loader");
let loaderContainer = document.querySelector(".loader-container");
let mostSearched = Array.from(document.querySelectorAll("#most-searched>div"));
// console.log(mostSearched);
let searchQuery;

mostSearched.forEach((el) => {
  el.addEventListener("click", () => {
    searchQuery = el.children[1].textContent.toLowerCase();
    createResult();
  });
});

async function getPhotos() {
  // const searchQuery = document.getElementById('search-query').value;
  grid.innerHTML = "";
  loaderContainer.style.height = "300px";
  try {
    loader.style.display = "block";
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=3tYuCQraI7s0B2DooME9qes1DqQKGkrF8Fm64SWdKf8&per_page=${5}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
async function findImageUrl(query) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=3tYuCQraI7s0B2DooME9qes1DqQKGkrF8Fm64SWdKf8&per_page=${1}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
// {
//   name: "Delhi",
//   country: "India",
//   population: 20000000,
//   attractions: ["Red Fort", "Qutub Minar", "Lotus Temple"],
//   timezone: "IST",
// }
function createResult() {
  let city;
  cities.forEach((cit) => {
    if (cit.name.toLowerCase() === searchQuery) city = cit;
  });
  if (!city) {
    grid.innerHTML = "<h2>No such city found</h2>";
  } else {
    let attractions = city.attractions;
    attractions.forEach(async (att) => {
      let url = findImageUrl(att);
      url
        .then((response) => {
          let link = response[0].urls.regular;
          city[att.toLowerCase()] = [att, link];
        })
        .catch((e) => console.log(e));
    });
    let urls = getPhotos(city.name.toLowerCase());
    let imgUrls = [];
    urls
      .then((response) => {
        //
        response.map((el) => {
          imgUrls.push(el.urls.regular);
          city.imgUrls = imgUrls;
          // console.log(el.urls.regular);
        });
        setTimeout(() => {
          // Display the city data in the DOM
          displayCity(city);
          // Hide the loader when data is loaded
          loaderContainer.style.height = "auto";
          loader.style.display = "none";
        }, 1200);
      })
      .catch((e) => {
        console.log(e);
        loader.style.display = "none";
      });
  }
}
function displayCity(city) {
  let cityImages = city.imgUrls;
  // console.log(cityImages);
  let collage = document.createElement("div");
  collage.setAttribute("class", "collage");
  cityImages.map((el, i) => {
    let img = document.createElement("img");
    img.setAttribute("class", `img-${i + 1}`); //so that each image of collage get an class of their respective index number. eg img-1,img-2,img-3 etc
    // console.log(city.imgUrls[i]);
    img.setAttribute("src", el);
    img.addEventListener("click", () => {
      let link = el;
      window.open(link, "_blank");
    });
    collage.append(img);
  });
  grid.append(collage);
  // collage.classList.add("fade-in");

  let cityContent = document.createElement("div");
  cityContent.setAttribute("class", "city-content");
  // cityContent.setAttribute("class",'fade-in');
  let h2 = document.createElement("h2");
  h2.innerText = city.name;
  let population = document.createElement("p");
  population.innerText = `The city of ${city.name} has around ${city.population} people`;
  let extraInfo = document.createElement("p");
  extraInfo.innerText = city.description;
  let addToWishlist = document.createElement("button");
  addToWishlist.innerText = "Add To Wishlist";
  addToWishlist.setAttribute("class", "primary-btn");
  addToWishlist.addEventListener("click", () => {
    let obj = {};
    obj["name"] = city.name;
    obj["price"] = city.price;
    if (userLogin.cart.length == 0) {
      userLogin.cart.push(obj);
      localStorage.setItem("user-login", JSON.stringify(userLogin));
      populateWishlistContent(userLogin.cart);
      displayTotal();
    } else {
      let flag = true;
      userLogin.cart.map((el) => {
        if (el.name == city.name) flag = false;
      });
      if (flag) {
        userLogin.cart.push(obj);
        localStorage.setItem("user-login", JSON.stringify(userLogin));
        updateUsers();
        console.log(users);
        populateWishlistContent(userLogin.cart);
        displayTotal();
      }
    }
  });
  cityContent.append(h2, population, extraInfo, addToWishlist);

  let touristSpots = document.createElement("div");
  touristSpots.setAttribute("class", "recommended");
  // touristSpots.setAttribute("class",'fade-in');
  let recommended = document.createElement("h2");
  recommended.style.margin = "2rem 0";
  recommended.innerText = `Common Tourist Spots in ${city.name}`;
  for (let i = 0; i <= 2; i++) {
    let card = document.createElement("div");
    let spot = document.createElement("img");
    spot.setAttribute("src", city[city.attractions[i].toLowerCase()][1]);
    let spotName = document.createElement("h3");
    spotName.innerText = city[city.attractions[i].toLowerCase()][0];
    spotName.addEventListener("click", () => {
      window.open(city[city.attractions[i].toLowerCase()][1], "_blank");
    });
    card.append(spot, spotName);
    touristSpots.append(card);
  }
  grid.append(cityContent, recommended, touristSpots);
}

// Functionality for searching for places
let form = document.getElementById("search");
let searchInput = document.getElementById("place");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = searchInput.value.toLowerCase();
  // console.log(searchQuery);
  createResult();
  form.reset();
});
