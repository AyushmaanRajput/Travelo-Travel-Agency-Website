const cities = [
  {
    name: "Delhi",
    country: "India",
    population: 20000000,
    attractions: ["Red Fort", "Qutub Minar", "Lotus Temple"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "New York",
    country: "United States",
    population: 8500000,
    attractions: ["Statue of Liberty", "Central Park", "Empire State Building"],
    timezone: "EST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "San Francisco",
    country: "United States",
    population: 880000,
    attractions: ["Golden Gate Bridge", "Alcatraz Island", "Fisherman's Wharf"],
    timezone: "PST",
    // Add more properties as needed
  },
  {
    name: "Washington D.C.",
    country: "United States",
    population: 700000,
    attractions: ["White House", "National Mall", "Smithsonian Institution"],
    timezone: "EST",
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
  },
  // Add more city objects...
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
    // Add more properties as needed
  },
  {
    name: "Shanghai",
    country: "China",
    population: 27440000,
    attractions: ["The Bund", "Yu Garden", "Shanghai Disneyland"],
    timezone: "CST",
    // Add more properties as needed
  },
  {
    name: "Beijing",
    country: "China",
    population: 21710000,
    attractions: ["Great Wall of China", "Forbidden City", "Temple of Heaven"],
    timezone: "CST",
    // Add more properties as needed
  },
  {
    name: "Kolkata",
    country: "India",
    population: 14970000,
    attractions: ["Victoria Memorial", "Howrah Bridge", "Indian Museum"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Chennai",
    country: "India",
    population: 11324000,
    attractions: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Paris",
    country: "France",
    population: 2148000,
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
    timezone: "CET",
    // Add more properties as needed
  },
  {
    name: "London",
    country: "United Kingdom",
    population: 8908000,
    attractions: ["Buckingham Palace", "Tower of London", "British Museum"],
    timezone: "GMT",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Sydney",
    country: "Australia",
    population: 5312000,
    attractions: ["Sydney Opera House", "Sydney Harbour Bridge", "Bondi Beach"],
    timezone: "AEST",
    // Add more properties as needed
  },
  {
    name: "Dhaka",
    country: "Bangladesh",
    population: 21288000,
    attractions: ["Lalbagh Fort", "National Parliament House", "Ahsan Manzil"],
    timezone: "BST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Mexico City",
    country: "Mexico",
    population: 8925000,
    attractions: ["Zócalo", "Chapultepec Castle", "Xochimilco"],
    timezone: "CST",
    // Add more properties as needed
  },
  {
    name: "Cairo",
    country: "Egypt",
    population: 20076000,
    attractions: ["Pyramids of Giza", "Egyptian Museum", "Khan El Khalili"],
    timezone: "EET",
    // Add more properties as needed
  },
  {
    name: "Osaka",
    country: "Japan",
    population: 19320000,
    attractions: ["Osaka Castle", "Universal Studios Japan", "Dotonbori"],
    timezone: "JST",
    // Add more properties as needed
  },
  {
    name: "Karachi",
    country: "Pakistan",
    population: 15741000,
    attractions: ["Mazar-e-Quaid", "Clifton Beach", "Mohatta Palace"],
    timezone: "PKT",
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Istanbul",
    country: "Turkey",
    population: 15283906,
    attractions: ["Hagia Sophia", "Topkapi Palace", "Blue Mosque"],
    timezone: "TRT",
    // Add more properties as needed
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    population: 3054300,
    attractions: ["La Boca", "Recoleta Cemetery", "Plaza de Mayo"],
    timezone: "ART",
    // Add more properties as needed
  },
  {
    name: "Manila",
    country: "Philippines",
    population: 1780148,
    attractions: ["Intramuros", "Rizal Park", "Manila Ocean Park"],
    timezone: "PHT",
    // Add more properties as needed
  },
  {
    name: "Tianjin",
    country: "China",
    population: 14722100,
    attractions: ["Tianjin Eye", "Italian Style Town", "Haihe Cultural Square"],
    timezone: "CST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Moscow",
    country: "Russia",
    population: 12506468,
    attractions: ["Red Square", "Kremlin", "Saint Basil's Cathedral"],
    timezone: "MSK",
    // Add more properties as needed
  },
  {
    name: "Bogotá",
    country: "Colombia",
    population: 7878783,
    attractions: ["Monserrate", "Gold Museum", "La Candelaria"],
    timezone: "COT",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Lima",
    country: "Peru",
    population: 9127264,
    attractions: ["Machu Picchu", "Historic Centre of Lima", "Miraflores"],
    timezone: "PET",
    // Add more properties as needed
  },
  {
    name: "Bangkok",
    country: "Thailand",
    population: 8305218,
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Weekend Market"],
    timezone: "ICT",
    // Add more properties as needed
  },
  {
    name: "Hyderabad",
    country: "India",
    population: 6809970,
    attractions: ["Charminar", "Golconda Fort", "Hussain Sagar"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Seoul",
    country: "South Korea",
    population: 9715429,
    attractions: ["Gyeongbokgung Palace", "Myeongdong", "N Seoul Tower"],
    timezone: "KST",
    // Add more properties as needed
  },
  {
    name: "Tehran",
    country: "Iran",
    population: 8154051,
    attractions: ["Golestan Palace", "Milad Tower", "National Museum of Iran"],
    timezone: "IRST",
    // Add more properties as needed
  },
  {
    name: "Wuhan",
    country: "China",
    population: 8529466,
    attractions: ["Yellow Crane Tower", "East Lake", "Hubei Provincial Museum"],
    timezone: "CST",
    // Add more properties as needed
  },
  {
    name: "Ahmedabad",
    country: "India",
    population: 5577940,
    attractions: ["Sabarmati Ashram", "Kankaria Lake", "Adalaj Stepwell"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Kuala Lumpur",
    country: "Malaysia",
    population: 1808912,
    attractions: ["Petronas Twin Towers", "Batu Caves", "KLCC Park"],
    timezone: "MYT",
    // Add more properties as needed
  },
  // Add more city objects...
  {
    name: "Surat",
    country: "India",
    population: 6685361,
    attractions: ["Dutch Garden", "Surat Castle", "Sardar Patel Museum"],
    timezone: "IST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Hong Kong",
    country: "China",
    population: 7392000,
    attractions: ["Victoria Peak", "Hong Kong Disneyland", "Tsim Sha Tsui"],
    timezone: "HKT",
    // Add more properties as needed
  },
  {
    name: "Riyadh",
    country: "Saudi Arabia",
    population: 7048500,
    attractions: ["Kingdom Centre Tower", "Al-Masmak Fortress", "Diriyah"],
    timezone: "AST",
    // Add more properties as needed
  },
  {
    name: "Pune",
    country: "India",
    population: 3115431,
    attractions: ["Aga Khan Palace", "Shaniwar Wada", "Sinhagad Fort"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Santiago",
    country: "Chile",
    population: 5031477,
    attractions: ["Plaza de Armas", "Cerro San Cristobal", "Santa Lucia Hill"],
    timezone: "CLST",
    // Add more properties as needed
  },
  {
    name: "Madrid",
    country: "Spain",
    population: 3348536,
    attractions: ["Prado Museum", "Royal Palace of Madrid", "Retiro Park"],
    timezone: "CEST",
    // Add more properties as needed
  },
  {
    name: "Toronto",
    country: "Canada",
    population: 2731571,
    attractions: ["CN Tower", "Royal Ontario Museum", "Toronto Islands"],
    timezone: "EST",
    // Add more properties as needed
  },
  {
    name: "Johannesburg",
    country: "South Africa",
    population: 9574414,
    attractions: ["Apartheid Museum", "Soweto", "Lion Park"],
    timezone: "SAST",
    // Add more properties as needed
  },
  {
    name: "Singapore",
    country: "Singapore",
    population: 5612000,
    attractions: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa Island"],
    timezone: "SGT",
    // Add more properties as needed
  },
  {
    name: "Barcelona",
    country: "Spain",
    population: 1620343,
    attractions: ["Sagrada Familia", "Park Güell", "Gothic Quarter"],
    timezone: "CEST",
    // Add more properties as needed
  },
  {
    name: "Yangon",
    country: "Myanmar",
    population: 5450000,
    attractions: ["Shwedagon Pagoda", "Sule Pagoda", "Bogyoke Market"],
    timezone: "MMT",
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Ankara",
    country: "Turkey",
    population: 5270575,
    attractions: ["Anitkabir", "Kocatepe Mosque", "Ataturk Forest Farm"],
    timezone: "TRT",
    // Add more properties as needed
  },
  {
    name: "Chittagong",
    country: "Bangladesh",
    population: 2852865,
    attractions: ["Patenga Beach", "Karnaphuli River", "Ethnological Museum"],
    timezone: "BST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Hanoi",
    country: "Vietnam",
    population: 3131675,
    attractions: ["Hoan Kiem Lake", "Hoa Lo Prison", "Temple of Literature"],
    timezone: "ICT",
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Tel Aviv",
    country: "Israel",
    population: 451523,
    attractions: ["Old Jaffa", "Carmel Market", "Yitzhak Rabin Center"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Rome",
    country: "Italy",
    population: 2872800,
    attractions: ["Colosseum", "Trevi Fountain", "Vatican City"],
    timezone: "CEST",
    // Add more properties as needed
  },
  {
    name: "Lisbon",
    country: "Portugal",
    population: 547733,
    attractions: ["Belém Tower", "Jerónimos Monastery", "Rossio Square"],
    timezone: "WEST",
    // Add more properties as needed
  },
  {
    name: "Berlin",
    country: "Germany",
    population: 3669491,
    attractions: ["Brandenburg Gate", "Berlin Wall", "Museum Island"],
    timezone: "CEST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Jaipur",
    country: "India",
    population: 3073350,
    attractions: ["Amber Fort", "Hawa Mahal", "City Palace"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Lucknow",
    country: "India",
    population: 3382009,
    attractions: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza"],
    timezone: "IST",
    // Add more properties as needed
  },
  {
    name: "Kuwait City",
    country: "Kuwait",
    population: 2356584,
    attractions: ["Kuwait Towers", "The Avenues Mall", "Grand Mosque"],
    timezone: "AST",
    // Add more properties as needed
  },
  {
    name: "Indore",
    country: "India",
    population: 2465314,
    attractions: ["Rajwada Palace", "Sarafa Bazaar", "Kanch Mandir"],
    timezone: "IST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Agra",
    country: "India",
    population: 1585704,
    attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    timezone: "IST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
  {
    name: "Naples",
    country: "Italy",
    population: 967069,
    attractions: ["Pompeii", "Mount Vesuvius", "Naples Cathedral"],
    timezone: "CEST",
    // Add more properties as needed
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    population: 3199549,
    attractions: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
    timezone: "GST",
    // Add more properties as needed
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
    // Add more properties as needed
  },
];

let grid = document.getElementById("grid__destinations");

let searchQuery;
if (!searchQuery) {
  //Display Grid of recommended Cities
  grid.innerHTML = "No Data Now";
}

async function getPhotos() {
  // const searchQuery = document.getElementById('search-query').value;
  try {
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
  // const searchQuery = document.getElementById('search-query').value;

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
    grid.innerHTML = "No such city found";
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
          // console.log(el.urls.regular);
        });
      }).then(()=>{
        city.imgUrls = imgUrls;
        displayCity(city);
      })
      .catch((e) => console.log(e));
  }
}
function displayCity(city) {
  grid.innerHTML = "";
  let cityImages=city.imgUrls ;
  // console.log(cityImages);
  let collage = document.createElement("div");
  collage.setAttribute("class", "collage");
  cityImages.map((el, i) => {
    let img = document.createElement("img");
    img.setAttribute("class", `img-${i + 1}`); //so that each image of collage get an class of their respective index number. eg img-1,img-2,img-3 etc
    // console.log(city.imgUrls[i]);
    img.setAttribute("src", el);
    collage.append(img);
  });
  let h2 = document.createElement("h2");
  h2.innerText = city.name;
  let population = document.createElement("p");
  population.innerText = `The city of ${city.name} has around ${city.population} people`;
  let extraInfo = document.createElement("p");
  extraInfo.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi eos dolorum voluptate vel eaque quis amet! Ex sunt minima iusto voluptate illo praesentium, quod qui dolor, quae animi expedita?";
    
    let addToWishlist = document.createElement("button");
    addToWishlist.innerText = "Add To Wishlist";


  let touristSpots = document.createElement("div");
  touristSpots.setAttribute("class",'recommended');
  let recommended = document.createElement("h2");
  recommended.innerText = `Common Tourist Spots in ${city.name}`;
  for (let i = 0; i <= 2; i++) {
    let card = document.createElement("div");
    let spot = document.createElement("img");
    spot.setAttribute("src", city[city.attractions[i].toLowerCase()][1]);
    let spotName = document.createElement("h3");
    spotName.innerText = city[city.attractions[i].toLowerCase()][0];
    card.append(spot, spotName);
    touristSpots.append(card);
  }
  grid.append(collage, h2, population, extraInfo, addToWishlist,touristSpots);
}

// Functionality for searching for places
let form = document.getElementById("search");
let searchInput = document.getElementById("place");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = searchInput.value.toLowerCase();
  // console.log(searchQuery);
  createResult();
  // form.reset();
});
