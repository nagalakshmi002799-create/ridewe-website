export const exploreByState = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    image: "destination-tamilnadu.png",
    title: "Where Heritage Comes Alive",
    description:
      "Explore ancient temples, vibrant traditions, scenic landscapes, and timeless experiences.",
  },
  {
    id: "kerala",
    name: "Kerala",
    image: "destination-kerala.png",
    title: "Where Nature Meets Serenity",
    description:
      "Cruise through peaceful backwaters, misty hills, lush greenery, and refreshing escapes.",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    image: "destination-karnataka.png",
    title: "Where History Meets Adventure",
    description:
      "Discover rich heritage, scenic mountains, and unforgettable journeys.",
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    image: "destination-andhra-pradesh.png",
    title: "Where Heritage Meets Horizon",
    description:
      "Ancient temples, golden beaches, and scenic coastal beauty.",
  },
  {
    id: "telangana",
    name: "Telangana",
    image: "destination-telangana.png",
    title: "Where Culture Comes Alive",
    description:
      "Historic forts, vibrant cities, and rich cultural heritage.",
  },
  {
    id: "north-india",
    name: "North India",
    image: "destination-north-india.png",
    title: "Where Heritage Meets Himalayas",
    description:
      "Majestic mountains, royal palaces, and sacred destinations.",
  },
];

export const destinationGalleries = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    directory: "tamil_nadu",
    destinations: [
      ["chennai", "Explore a lively coastal capital and its historic streets."],
      ["kanyakumari", "Watch the shoreline meet at India's southern tip."],
      ["kodaikanal", "Find cool mountain air and quiet lakeside paths."],
      ["madurai", "Discover temple heritage in a city alive with tradition."],
      ["mahabalipuram", "See ancient stonework beside the Bay of Bengal."],
      ["ooty", "Wander through the green slopes of the Nilgiris."],
      ["rameswaram", "Experience island shores and revered pilgrimage sites."],
      ["thanjavur", "Admire celebrated temples and the art of the Chola era."],
      ["tiruchirappalli", "Take in riverside views and hilltop temple landmarks."],
      ["yercaud", "Enjoy wooded hills and peaceful viewpoints."],
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    directory: "kerala",
    destinations: [
      ["alleppey", "Glide past palm-lined canals and tranquil backwaters."],
      ["kanthallor", "Discover a highland retreat among orchards and hills."],
      ["kochi", "Explore a harbour city shaped by many cultures."],
      ["kovalam", "Relax along a crescent of sunlit Arabian Sea beaches."],
      ["munnar", "Take in rolling tea gardens and misty mountain views."],
      ["thekkady", "Explore forested hills and spice-scented trails."],
      ["thiruvananthapuram", "Visit Kerala's capital and its coastal landmarks."],
      ["varkala", "Follow dramatic cliff paths above the Arabian Sea."],
      ["vattavada", "Enjoy cool mountain scenery and quiet village roads."],
      ["wayanad", "Find green valleys, waterfalls, and Western Ghats trails."],
    ],
  },
  {
    id: "karnataka",
    name: "Karnataka",
    directory: "karnataka",
    destinations: [
      ["bengaluru", "Discover garden corners and the energy of a modern city."],
      ["chikmagalur", "Journey through coffee country in the Western Ghats."],
      ["coorg", "Unwind among forested hills and aromatic coffee estates."],
      ["gokarna", "Explore laid-back beaches and coastal walking trails."],
      ["hampi", "Walk among monumental ruins in a striking boulder landscape."],
      ["kodagu", "Take in misty highlands and the region's coffee country."],
      ["madikeri", "Enjoy hilltop views and the charm of Coorg's main town."],
      ["mysore", "Experience grand palace architecture and local heritage."],
    ],
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    directory: "andhra_pradesh",
    destinations: [
      ["amaravati", "Explore the banks of the Krishna and a historic capital."],
      ["araku_valley", "Ride into green hill country and coffee-growing valleys."],
      ["nellore", "Discover coastal landscapes and the banks of the Pennar."],
      ["srisailam", "Visit a revered temple amid forested Nallamala hills."],
      ["thirumala", "Make your way to the hilltop temple of Tirumala."],
      ["tirupati", "Explore a pilgrimage city at the foot of the Tirumala hills."],
      ["vijayawada", "See riverfront views and landmarks along the Krishna."],
      ["vizag", "Enjoy a coastal city framed by beaches and green hills."],
    ],
  },
  {
    id: "telangana",
    name: "Telangana",
    directory: "telangana",
    destinations: [
      ["adilabad", "Discover waterfalls and forest scenery in the north."],
      ["charminar", "Meet Hyderabad's iconic landmark in the old city."],
      ["golconda", "Explore the ramparts and stories of a storied fort."],
      ["hyderabad", "Take in historic quarters, lively streets, and city flavours."],
      ["karimnagar", "Explore riverside surroundings and regional heritage."],
      ["khammam", "Discover a gateway to forts, forests, and temple towns."],
      ["ramappa", "Admire the detailed stonework of a Kakatiya-era temple."],
      ["warangal", "Follow the legacy of Kakatiya forts and gateways."],
    ],
  },
  {
    id: "north-india",
    name: "North India",
    directory: "north_india",
    destinations: [
      ["agra", "See the Taj Mahal and the city's Mughal-era landmarks."],
      ["darjeeling", "Look out across tea gardens toward Himalayan peaks."],
      ["delhi", "Explore grand monuments and layers of capital-city history."],
      ["goa", "Enjoy sunlit beaches and a distinctive coastal heritage."],
      ["jaipur", "Discover pink-hued streets, forts, and royal architecture."],
      ["kashmir", "Take in mountain scenery and the calm of Dal Lake."],
      ["ladakh", "Travel through high-altitude valleys and mountain passes."],
      ["manali", "Find forest trails and Himalayan views in the Beas valley."],
      ["meghalaya", "Explore cloud-covered hills and living-root-bridge country."],
      ["punjab", "Experience vibrant heritage and the spirit of Amritsar."],
      ["rajasthan", "Journey through desert landscapes and historic cities."],
      ["rishikesh", "Discover riverside ghats beneath the Himalayan foothills."],
      ["shimla", "Stroll along a historic hill town's ridge and promenades."],
      ["srinagar", "Enjoy lakeside gardens and the landscapes of Kashmir."],
      ["udaipur", "Take in lakeside palaces and the old city's winding lanes."],
      ["varanasi", "Witness sacred riverside traditions on the Ganges."],
    ],
  },
].map((gallery) => ({
  ...gallery,
  destinations: gallery.destinations.map(([filename, caption]) => ({
    filename: `${filename}.jpg`,
    name: filename
      .split(/[_-]/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" "),
    caption,
  })),
}));
