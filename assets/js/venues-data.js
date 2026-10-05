/**
 * Crumb & Table - Mock Datasets
 * Local Dining & Bakery Discovery Data
 */

const VENUES_DATA = [
  {
    id: "maison-creme",
    name: "Maison Crème Patisserie",
    tagline: "Haute French pastry & slow-roasted single-origin espresso",
    category: "Patisseries",
    categorySlug: "patisseries",
    rating: 4.9,
    reviewCount: 342,
    priceRange: "₹₹₹",
    priceLevel: 3,
    distance: "0.8 km",
    address: "42 Boulevard Saint-Honoré, Arts Quarter, Central City",
    neighborhood: "Arts Quarter",
    coordinates: [12.9716, 77.5946], // Demo lat/lng
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 08:00 AM – 09:00 PM",
      schedule: [
        { day: "Monday - Thursday", hours: "08:00 AM - 08:30 PM" },
        { day: "Friday - Saturday", hours: "08:00 AM - 10:00 PM" },
        { day: "Sunday", hours: "08:30 AM - 09:00 PM" }
      ]
    },
    phone: "+1 (555) 234-8901",
    website: "https://maisoncreme.example.com",
    email: "bonjour@maisoncreme.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Editor's Choice",
    trendingScore: 98,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    dietary: ["Vegetarian Friendly", "Eggless Options", "Artisanal"],
    amenities: ["Outdoor Terrace", "Specialty Coffee", "Wi-Fi", "Takeaway", "Wheelchair Accessible", "Pet Friendly"],
    description: "Maison Crème is a sanctuary of classic French viennoiserie and avant-garde plated entremets. Hand-laminated 72-layer croissants, organic Madagascar vanilla bean mille-feuille, and curated single-origin roasts in an elegant sunlit brass and marble space.",
    story: "Founded by Master Pastry Chef Julien Laurent after a decade at Paris's top Michelin pastry laboratories, Maison Crème brings meticulous artisanal lamination technique and uncompromised butter quality to our historic arts district.",
    signatureDishes: [
      { name: "Signature 72-Layer Golden Croissant", price: "$4.80", desc: "Isigny Sainte-Mère AOP French cultured butter, flaked Brittany sea salt." },
      { name: "Tahitian Vanilla & Caramel Mille-Feuille", price: "$8.50", desc: "Caramelized inverted puff pastry, silky diplomat cream, salted butter caramel." },
      { name: "Pistachio Raspberry Tartlet", price: "$9.00", desc: "Bronte pistachio frangipane, fresh raspberry gelée, whipped ganache." },
      { name: "Valrhona Guanaja Pain au Chocolat", price: "$5.50", desc: "Double batons of 70% dark chocolate encased in shatteringly crisp layers." }
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Camille Dubois",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        date: "2 days ago",
        title: "The closest you'll get to Paris viennoiserie outside of France",
        comment: "The honeycomb structure inside the butter croissant is sheer perfection. Crispy golden exterior that shatters on first bite. Paired with their flat white, it was transcendental.",
        likes: 24
      },
      {
        id: "rev-2",
        author: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        date: "1 week ago",
        title: "Unmatched Mille-Feuille and atmosphere",
        comment: "The interior alone makes you want to stay all morning. The Tahitian vanilla cream in the mille-feuille is fragrant and perfectly balanced, not overly sweet.",
        likes: 18
      },
      {
        id: "rev-3",
        author: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
        rating: 4,
        date: "2 weeks ago",
        title: "Spectacular pastries, come early on weekends!",
        comment: "Queues start forming around 8:30 AM on Saturdays. Get the pistachio tart before it sells out by noon!",
        likes: 12
      }
    ]
  },
  {
    id: "flour-heirloom",
    name: "Flour & Heirloom Artisan Bakery",
    tagline: "Heritage stoneground sourdoughs & wood-fired morning buns",
    category: "Artisan Bread",
    categorySlug: "artisan-bread",
    rating: 4.8,
    reviewCount: 289,
    priceRange: "₹₹",
    priceLevel: 2,
    distance: "1.4 km",
    address: "18 Mill Creek Lane, Old Foundry District",
    neighborhood: "Old Foundry",
    coordinates: [12.9780, 77.5990],
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 07:00 AM – 06:00 PM",
      schedule: [
        { day: "Tuesday - Saturday", hours: "07:00 AM - 06:00 PM" },
        { day: "Sunday", hours: "08:00 AM - 04:00 PM" },
        { day: "Monday", hours: "Closed for Dough Fermentation" }
      ]
    },
    phone: "+1 (555) 890-3412",
    website: "https://flourandheirloom.example.com",
    email: "hello@flourandheirloom.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511018556340-d16986a1c194?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Heritage Craft",
    trendingScore: 94,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    dietary: ["Vegan Friendly", "Organic Grains", "Naturally Leavened"],
    amenities: ["Open Bakery View", "Takeaway Window", "Card Only", "Seating Counter", "Bicycle Parking"],
    description: "Flour & Heirloom mills ancient whole grains in-house daily. Utilizing a 14-year-old sourdough mother yeast, their 36-hour cold-fermented rustic boules boast deep blistered crusts, open custardy crumbs, and unmatched digestibility.",
    story: "Started by agrarian bread scholar Samuel Ward, Flour & Heirloom collaborates with regenerative family farms in the surrounding valley to preserve heirloom wheat strains like Red Fife and Einkorn.",
    signatureDishes: [
      { name: "Country Hearth Sourdough Boule", price: "$8.00", desc: "Stoneground heirloom wheat, 36-hour wild ferment, blistered dark crust." },
      { name: "Toasted Sesame & Sea Salt Loaf", price: "$9.50", desc: "High hydration sourdough rolled in toasted white and black sesame." },
      { name: "Cardamom Orange Morning Bun", price: "$4.50", desc: "Laminated brioche dough rolled in crushed green cardamom and orange sugar." },
      { name: "Rosemary Kalamata Focaccia Slab", price: "$6.00", desc: "Cold pressed extra virgin olive oil, fresh garden rosemary, whole brine olives." }
    ],
    reviews: [
      {
        id: "rev-4",
        author: "Devon Clark",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        date: "3 days ago",
        title: "Best sourdough in the entire state",
        comment: "The crust crackles like firewood and the crumb has that glorious custardy shine. Keep a loaf on the counter and toast thick slices with good butter.",
        likes: 31
      }
    ]
  },
  {
    id: "l-atelier-cacao",
    name: "L'Atelier du Cacao & Dessert Bar",
    tagline: "Single-origin bean-to-bar chocolates & nocturnal dessert tasting flights",
    category: "Chocolatiers",
    categorySlug: "chocolatiers",
    rating: 4.95,
    reviewCount: 412,
    priceRange: "₹₹₹₹",
    priceLevel: 4,
    distance: "2.1 km",
    address: "7 Royal Mews, Golden Triangle District",
    neighborhood: "Golden Triangle",
    coordinates: [12.9680, 77.6050],
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 11:00 AM – 11:00 PM",
      schedule: [
        { day: "Wednesday - Friday", hours: "11:00 AM - 10:30 PM" },
        { day: "Saturday - Sunday", hours: "10:00 AM - 11:30 PM" },
        { day: "Monday - Tuesday", hours: "Closed for Tempering" }
      ]
    },
    phone: "+1 (555) 774-9021",
    website: "https://latelierducacao.example.com",
    email: "tasting@latelierducacao.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Master Chocolatier",
    trendingScore: 99,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    dietary: ["Vegetarian", "Gluten-Free Options", "Dairy-Free Truffles"],
    amenities: ["Dessert Bar Counter", "Reservations Recommended", "Sommelier Wine Pairing", "Air Conditioned", "Valet Parking"],
    description: "An intimate, moody velvet dessert lounge and chocolate laboratory specializing in rare estate cocoa from Madagascar, Ecuador, and Vietnam. Experience five-course plated dessert pairings, botanical bonbons, and smoked chocolate fountains.",
    story: "Created by Swiss-trained Maître Chocolatier Henri Moreau, L'Atelier roast and stone-grinds fair-trade heirloom cacao beans over 72 hours to yield unmatched aromatic clarity.",
    signatureDishes: [
      { name: "Smoked Porcelana 75% Tasting Sphere", price: "$16.00", desc: "Single-estate Venezuelan cocoa sphere, cherry wood smoke, tonka bean gelato." },
      { name: "Botanical Bonbon Collection (9 pcs)", price: "$28.00", desc: "Bergamot earl grey, saffron honey, yuzu salt, smoked rosemary ganache." },
      { name: "Liquid Velvet Dark Drinking Chocolate", price: "$7.50", desc: "Chuncho Peruvian 70% melted chocolate, steamed Jersey cream, cinnamon bark." },
      { name: "Warm Molten Gianduja Soufflé", price: "$14.50", desc: "Piedmont hazelnut praline core, baked to order, served with crème anglaise." }
    ],
    reviews: [
      {
        id: "rev-5",
        author: "Sophia Sterling",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        date: "5 days ago",
        title: "The chocolate tasting flight is an unforgettable experience",
        comment: "Book the 8:00 PM evening seating. The pairing of the Madagascar single-origin sphere with port wine was pure culinary poetry. The bonbons are gems.",
        likes: 45
      }
    ]
  },
  {
    id: "velvet-crumb",
    name: "The Velvet Crumb Cake Studio",
    tagline: "Bespoke celebration tiers, floral botanicals & velvet layer cakes",
    category: "Cake Shops",
    categorySlug: "cake-shops",
    rating: 4.85,
    reviewCount: 198,
    priceRange: "₹₹₹",
    priceLevel: 3,
    distance: "1.9 km",
    address: "104 Rosewood Walk, Westside Gardens",
    neighborhood: "Westside Gardens",
    coordinates: [12.9640, 77.5880],
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 09:30 AM – 07:30 PM",
      schedule: [
        { day: "Tuesday - Sunday", hours: "09:30 AM - 07:30 PM" },
        { day: "Monday", hours: "Consultations Only" }
      ]
    },
    phone: "+1 (555) 438-2291",
    website: "https://thevelvetcrumb.example.com",
    email: "custom@thevelvetcrumb.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Trending Cake Studio",
    trendingScore: 92,
    isFeatured: true,
    isTrending: false,
    isNew: true,
    dietary: ["Eggless Options Available", "Gluten-Free Sponge Available", "Organic Dairy"],
    amenities: ["Cake Slice Tasting Bar", "Consultation Lounge", "Custom Orders", "Takeaway Box", "Wi-Fi"],
    description: "An airy, minimalist cake sanctuary known for sculpted botanical tiered cakes, chiffon cloud slices, and delicate fruit curds. Every cake is adorned with pressed edible blooms and textured Swiss meringue buttercream.",
    story: "Artist turned pastry innovator Clara Evans crafts cakes that double as contemporary sculpture without sacrificing tender, melt-in-mouth textures.",
    signatureDishes: [
      { name: "Elderflower Berry Velvet Cake Slice", price: "$7.50", desc: "Vanilla bean sponge infused with St-Germain liqueur, lemon curd, wild blackberries." },
      { name: "Burnt Basque Caramelized Cheesecake", price: "$8.00", desc: "Custardy molten center, dark caramelized top, flaked Maldon salt." },
      { name: "Earl Grey & Lavender Chiffon Slice", price: "$7.00", desc: "Ultra-light tea sponge, whipped French cream, fresh lavender blossoms." },
      { name: "Dark Chocolate Salted Espresso Fudge Layer", price: "$8.50", desc: "72% dark cocoa layers, whipped espresso ganache, crushed hazelnut crunch." }
    ],
    reviews: [
      {
        id: "rev-6",
        author: "Aria Thorne",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        date: "4 days ago",
        title: "The Basque cheesecake was perfection in every way",
        comment: "Creamy, gooey in the center and the burnt top gives this caramel undertone. We also ordered our engagement cake here and guests wouldn't stop raving.",
        likes: 27
      }
    ]
  },
  {
    id: "fika-botanica",
    name: "Fika & Botanica Coffee Bakery",
    tagline: "Nordic cardamom knots, sourdough pastries & Nordic light-roast filter",
    category: "Coffee & Bakery",
    categorySlug: "coffee-bakery",
    rating: 4.78,
    reviewCount: 310,
    priceRange: "₹₹",
    priceLevel: 2,
    distance: "0.6 km",
    address: "24 Greenleaf Passage, Botanical Quarter",
    neighborhood: "Botanical Quarter",
    coordinates: [12.9735, 77.5910],
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 07:30 AM – 07:00 PM",
      schedule: [
        { day: "Monday - Saturday", hours: "07:30 AM - 07:00 PM" },
        { day: "Sunday", hours: "08:00 AM - 06:00 PM" }
      ]
    },
    phone: "+1 (555) 612-4490",
    website: "https://fikabotanica.example.com",
    email: "hej@fikabotanica.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Neighborhood Gem",
    trendingScore: 91,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    dietary: ["Vegetarian", "Oat Milk Standards", "Nut-Free Options"],
    amenities: ["Outdoor Garden Courtyard", "Laptop Friendly", "Single-Origin Pour Over", "Dog Friendly", "Free Fast Wi-Fi"],
    description: "Embodying the Swedish tradition of Fika—a mindful moment to slow down with coffee and warm baked goods. Renowned for its twisted cardamom knots (Kardemummabullar), cinnamon brioche buns, and Nordic light-roast specialty coffees.",
    story: "Bringing Scandinavian coffee bar aesthetics and slow sourdough fermentation together in a verdant glasshouse oasis surrounded by lush monsteras and olive trees.",
    signatureDishes: [
      { name: "Traditional Swedish Cardamom Knot (Kardemummabulle)", price: "$4.50", desc: "Buttery twisted brioche infused with fresh cracked green cardamom, pearl sugar." },
      { name: "Cinnamon & Brown Butter Bun (Kanelbulle)", price: "$4.25", desc: "Caramelized Ceylon cinnamon swirl, browned butter glaze." },
      { name: "Nordic Pour Over (Ethiopian Geisha)", price: "$6.50", desc: "Floral notes of jasmine, bergamot and peach, extracted on Kalita Wave." },
      { name: "Spelt & Lingonberry Scone", price: "$4.00", desc: "Crumbly organic spelt scone served with house-made wild lingonberry jam." }
    ],
    reviews: [
      {
        id: "rev-7",
        author: "Lucas Lindqvist",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        date: "1 week ago",
        title: "Tastes exactly like the best bakeries in Stockholm",
        comment: "Cardamom knots are warm, sticky, fragrant and full of real cracked seeds. The garden courtyard is the most peaceful spot in the city.",
        likes: 38
      }
    ]
  },
  {
    id: "sweet-alchemy",
    name: "Sweet Alchemy Dessert Destination",
    tagline: "Experimental plated desserts, liquid nitrogen sorbets & dessert pairing",
    category: "Dessert Shops",
    categorySlug: "dessert-shops",
    rating: 4.88,
    reviewCount: 265,
    priceRange: "₹₹₹",
    priceLevel: 3,
    distance: "2.8 km",
    address: "55 Innovation Pier, Harborfront",
    neighborhood: "Harborfront",
    coordinates: [12.9820, 77.6120],
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 01:00 PM – 11:30 PM",
      schedule: [
        { day: "Tuesday - Thursday", hours: "01:00 PM - 10:30 PM" },
        { day: "Friday - Sunday", hours: "12:00 PM - 11:30 PM" },
        { day: "Monday", hours: "Closed" }
      ]
    },
    phone: "+1 (555) 901-7643",
    website: "https://sweetalchemy.example.com",
    email: "tables@sweetalchemy.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Avant-Garde",
    trendingScore: 96,
    isFeatured: true,
    isTrending: true,
    isNew: false,
    dietary: ["Vegetarian", "Dairy-Free Sorbet", "Modern Molecular"],
    amenities: ["Waterfront Views", "Chef's Counter", "Cocktail & Mocktail Pairings", "Late Night Dining", "Reservations"],
    description: "Where modern gastronomy meets nostalgic dessert cravings. Expect edible chocolate terrariums, smoked apple yuzu tartlets, and tableside nitrogen ice creams in a sleek harbor-view venue.",
    story: "Conceived by molecular pastry chef Kaito Mori, Sweet Alchemy reimagines dessert as an immersive theater of temperatures, textures, and sensory surprises.",
    signatureDishes: [
      { name: "The Forest Floor Terrarium", price: "$15.00", desc: "Matcha moss sponge, dark chocolate bark, wild blackberry coulis, mushroom meringues." },
      { name: "Smoked Apple & Calvados Sphere", price: "$14.00", desc: "Apple cider mousse, caramelized spiced apples, smoked cinnamon glass." },
      { name: "Nitro Dragonfruit Rose Sorbet", price: "$11.00", desc: "Tableside liquid nitrogen churned sorbet with Damascus rose water and lychee pearls." },
      { name: "Deconstructed Meyer Lemon Meringue", price: "$13.50", desc: "Yuzu curd drops, torched Italian meringue shards, graham shortbread crumb." }
    ],
    reviews: [
      {
        id: "rev-8",
        author: "Zoe Chen",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
        rating: 5,
        date: "6 days ago",
        title: "Mind-blowing dessert art with stunning waterfront views",
        comment: "The Forest Floor Terrarium is not just a dessert, it's a masterpiece. Delicious and deeply balanced without the sugar overload.",
        likes: 29
      }
    ]
  },
  {
    id: "la-confiserie-royale",
    name: "La Confiserie Royale",
    tagline: "Old-world French confectionery, fruit pastes, calissons & nougat",
    category: "Confectionery",
    categorySlug: "confectionery",
    rating: 4.75,
    reviewCount: 176,
    priceRange: "₹₹₹",
    priceLevel: 3,
    distance: "1.7 km",
    address: "89 Heritage Arcade, Old Quarter",
    neighborhood: "Old Quarter",
    coordinates: [12.9690, 77.5970],
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 10:00 AM – 08:00 PM",
      schedule: [
        { day: "Monday - Saturday", hours: "10:00 AM - 08:00 PM" },
        { day: "Sunday", hours: "11:00 AM - 06:00 PM" }
      ]
    },
    phone: "+1 (555) 321-9874",
    website: "https://confiserieroyale.example.com",
    email: "contact@confiserieroyale.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Artisanal Heritage",
    trendingScore: 88,
    isFeatured: false,
    isTrending: false,
    isNew: false,
    dietary: ["Vegetarian", "Naturally Gluten-Free Confections"],
    amenities: ["Gift Wrapping", "Tasting Samples", "Historical Architecture", "Takeaway"],
    description: "Step into a 19th-century jewel-box confectionery adorned with crystal chandeliers and antique glass jars filled with Montélimar soft nougat, Provence calissons, hand-pulled barley sugars, and ruby pâtes de fruits.",
    story: "Curated by three generations of confectioners preserving ancestral French copper-kettle boiling techniques.",
    signatureDishes: [
      { name: "Artisanal Pâtes de Fruits (Box of 16)", price: "$22.00", desc: "Pure fruit purée jellies: Passionfruit, Blood Orange, Blackcurrant, Raspberry." },
      { name: "Montélimar Almond & Pistachio Soft Nougat", price: "$14.00", desc: "Lavender honey, roasted Mediterranean almonds, Sicilian pistachios." },
      { name: "Aix-en-Provence Royal Calissons", price: "$18.00", desc: "Candied melon, ground sweet almonds, royal icing glaze." }
    ],
    reviews: []
  },
  {
    id: "petite-tartine",
    name: "Petite Tartine & Bread Co.",
    tagline: "Wood-fired sourdough baguettes, tartines & morning brioche",
    category: "Bakeries",
    categorySlug: "bakeries",
    rating: 4.82,
    reviewCount: 220,
    priceRange: "₹₹",
    priceLevel: 2,
    distance: "3.2 km",
    address: "12 Pine Street, Upper Meadows",
    neighborhood: "Upper Meadows",
    coordinates: [12.9850, 77.5850],
    openingHours: {
      status: "Open Now",
      isOpen: true,
      text: "Open today 06:30 AM – 05:00 PM",
      schedule: [
        { day: "Tuesday - Sunday", hours: "06:30 AM - 05:00 PM" },
        { day: "Monday", hours: "Closed" }
      ]
    },
    phone: "+1 (555) 782-1144",
    website: "https://petitetartine.example.com",
    email: "info@petitetartine.example.com",
    images: {
      cover: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1400&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
      ]
    },
    badge: "Fresh Baked Daily",
    trendingScore: 90,
    isFeatured: false,
    isTrending: true,
    isNew: true,
    dietary: ["Vegan Bread Options", "Organic Flour"],
    amenities: ["Outdoor Seating", "Fresh Sliced Bread", "Takeaway", "Breakfast Bar"],
    description: "A cozy neighborhood micro-bakery baking fresh baguettes every two hours straight from their deck ovens. Signature open-faced tartines, morning croissants, and cultured salted butter.",
    story: "Started by friends and passionate bakers who wanted to bring warm, honest village bread to the morning commute.",
    signatureDishes: [
      { name: "Traditional French Sourdough Baguette", price: "$3.75", desc: "Golden caramelized crust, irregular airy crumb, tangy finish." },
      { name: "Avocado & Chive Ricotta Tartine", price: "$9.50", desc: "Thick slice of country loaf, house whipped ricotta, ripe avocado, chili flakes." },
      { name: "Almond Frangipane Twice-Baked Croissant", price: "$5.25", desc: "Filled and topped with roasted almond cream and toasted flaked almonds." }
    ],
    reviews: []
  }
];

const CATEGORIES_DATA = [
  {
    id: "bakeries",
    name: "Bakeries",
    slug: "bakeries",
    tagline: "Artisan ovens, daily fresh loaves & golden crusts",
    description: "Discover local artisan bakeries crafting golden sourdoughs, warm baguettes, flaky morning rolls, and heritage grain loaves baked fresh at dawn.",
    count: 24,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    color: "#C86D51",
    featuredDishes: ["Sourdough Boules", "Country Loaves", "Baguettes", "Brioche"]
  },
  {
    id: "patisseries",
    name: "Patisseries",
    slug: "patisseries",
    tagline: "French viennoiserie, delicate entremets & mille-feuilles",
    description: "Explore refined French pastry boutiques and modern patisseries perfecting multi-layered croissants, mirror-glazed entremets, and choux au craquelin.",
    count: 18,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    color: "#D4A359",
    featuredDishes: ["Mille-Feuille", "72-Layer Croissant", "Paris-Brest", "Éclairs"]
  },
  {
    id: "cake-shops",
    name: "Cake Shops & Studios",
    slug: "cake-shops",
    tagline: "Celebration tiers, Basque cheesecakes & velvet layers",
    description: "From custom sculptural wedding tiers to burnt Basque cheesecakes and chiffon clouds, find the premier cake designers in your neighborhood.",
    count: 15,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
    color: "#8A9A86",
    featuredDishes: ["Burnt Basque Cheesecake", "Botanical Layer Cakes", "Earl Grey Chiffon", "Berry Sponge"]
  },
  {
    id: "dessert-shops",
    name: "Dessert Destinations",
    slug: "dessert-shops",
    tagline: "Avant-garde plated creations & late-night sweet spots",
    description: "Immersive dessert lounges, nitro sorbet labs, and tasting counters offering multi-course sweet tasting menus and tableside drama.",
    count: 12,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    color: "#5B3E31",
    featuredDishes: ["Plated Terrariums", "Molten Soufflés", "Nitro Gelato", "Deconstructed Tarts"]
  },
  {
    id: "chocolatiers",
    name: "Chocolatiers",
    slug: "chocolatiers",
    tagline: "Bean-to-bar craftsmanship, hand-painted truffles & praline",
    description: "Artisanal chocolate ateliers roasting rare single-origin cacao, hand-dipping velvet ganache truffles, and pouring rich sipping chocolates.",
    count: 9,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
    color: "#382319",
    featuredDishes: ["Single Origin Truffles", "Botanical Bonbons", "Drinking Chocolate", "Hazelnut Gianduja"]
  },
  {
    id: "artisan-bread",
    name: "Artisan Bread",
    slug: "artisan-bread",
    tagline: "Wild yeast fermentation, ancient grains & stoneground flours",
    description: "Specialty bread studios dedicated to slow 48-hour cold fermentation, stone-milled whole grains, seeded rye, and blistering wood-fired hearths.",
    count: 14,
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=800&auto=format&fit=crop",
    color: "#A26C4E",
    featuredDishes: ["Einkorn Sourdough", "Dark Rye", "Focaccia Slabs", "Seeded Boule"]
  },
  {
    id: "coffee-bakery",
    name: "Coffee & Bakery Cafés",
    slug: "coffee-bakery",
    tagline: "Nordic cardamom knots, pour-overs & sunlit morning vibes",
    description: "The sweetest pairings of specialty third-wave coffees, flat whites, and warm Swedish cinnamon buns in airy botanical café spaces.",
    count: 22,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    color: "#6F8269",
    featuredDishes: ["Cardamom Buns", "Flat White & Croissant", "Single Origin Filter", "Spelt Scones"]
  },
  {
    id: "confectionery",
    name: "Confectionery",
    slug: "confectionery",
    tagline: "Old-world fruit pâtes, honeycomb, calissons & soft caramels",
    description: "Nostalgic sweet shops and artisanal candy makers cooking pure fruit jellies, honey nougat, salted butter caramels, and traditional dragees.",
    count: 8,
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=800&auto=format&fit=crop",
    color: "#C27B66",
    featuredDishes: ["Pâtes de Fruits", "Honey Nougat", "Salted Caramels", "Provence Calissons"]
  }
];

const GUIDES_DATA = [
  {
    id: "best-croissants-guide",
    slug: "the-best-croissants-to-try-this-week",
    title: "The 7 Flakiest, Butteriest Croissants to Try This Week",
    subtitle: "A butter-lover's pursuit of golden honeycomb interiors and shatteringly crisp pastry layers.",
    author: {
      name: "Claire Vance",
      role: "Pastry Editor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    publishedDate: "October 3, 2026",
    readTime: "5 min read",
    category: "Bakery Guides",
    categorySlug: "bakery-guides",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
    featuredVenues: ["maison-creme", "fika-botanica", "petite-tartine"],
    excerpt: "From 72-layer Isigny butter lamination to almond-frangipane twice-baked marvels, here are the city's finest morning croissants.",
    content: `
      <p class="lead-paragraph">There is an unmistakable sound in the early morning at our city's finest bakeries: the delicate, crisp crackle of a freshly baked croissant giving way under fingertips. Inside, a warm, buttery steam escapes, carrying the caramelized aroma of cultured butter and slow-fermented dough.</p>
      
      <h3>1. The Golden Standard: Maison Crème Patisserie</h3>
      <p>Chef Julien Laurent doesn't take shortcuts. Using AOP Isigny Sainte-Mère cultured butter imported directly from Normandy, the lamination process at Maison Crème takes three full days of temperature-controlled folding and resting. The result is an open, translucent honeycomb crumb and an exterior that flakes like fine autumn leaves.</p>
      
      <div class="editorial-callout">
        <strong>Pro Tip:</strong> Arrive between 8:00 AM and 9:00 AM when the morning batch hits the display counter still warm from the deck oven. Pair with their Ethiopian single-origin flat white.
      </div>

      <h3>2. The Nordic Twist: Fika & Botanica</h3>
      <p>While known for cardamom knots, Fika & Botanica introduces an inventive sourdough croissant fermented with wild elderflower yeast. The gentle acidity perfectly cuts through the rich butter profile, giving an unforgettable depth of flavor.</p>

      <h3>3. Twice-Baked Almond Elegance: Petite Tartine</h3>
      <p>If you prefer an indulgent afternoon treat, Petite Tartine takes day-one croissants, dips them in Madagascar vanilla syrup, fills them with velvety roasted almond frangipane, and bakes them a second time until golden with toasted slivered almonds.</p>
    `
  },
  {
    id: "dessert-detours-guide",
    slug: "5-dessert-places-worth-the-detour",
    title: "5 Hidden Dessert Destinations Worth the Detour",
    subtitle: "From nocturnal chocolate lounges to secret waterfront pastry labs.",
    author: {
      name: "Henri Delaunay",
      role: "Culinary Critic",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    publishedDate: "September 28, 2026",
    readTime: "7 min read",
    category: "Dessert Trails",
    categorySlug: "dessert-trails",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    featuredVenues: ["sweet-alchemy", "l-atelier-cacao", "velvet-crumb"],
    excerpt: "Escape the ordinary with these inventive dessert spots that turn late-night sweet cravings into culinary adventures.",
    content: `
      <p class="lead-paragraph">Dessert is no longer just the concluding note of a dinner—it has rightfully claimed the spotlight as the main event. Across hidden alleys and revitalized industrial piers, innovative pastry chefs are creating spaces dedicated purely to the sweet craft.</p>
      
      <h3>The Theatrical Harborfront: Sweet Alchemy</h3>
      <p>Perched on Innovation Pier, Sweet Alchemy's tasting bar offers an interactive sensory journey. Order the Forest Floor Terrarium—a stunning edible biome made with matcha moss cake, dark cocoa twigs, and liquid nitrogen-churned blackberry sorbet.</p>

      <h3>Midnight Velvet: L'Atelier du Cacao</h3>
      <p>Tucked behind heavy velvet drapery in the Golden Triangle, this dimly lit salon pairs single-origin hot drinking chocolates with botanical bonbons infused with bergamot, yuzu, and smoked rosemary.</p>
    `
  },
  {
    id: "celebration-cakes-guide",
    slug: "where-to-find-beautiful-celebration-cakes",
    title: "Where to Find Show-Stopping Celebration Cakes",
    subtitle: "Artisanal studios redefining custom birthday tiers, Basque cheesecakes, and botanical wedding creations.",
    author: {
      name: "Sonia Patel",
      role: "Lifestyle & Food Stylist",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    },
    publishedDate: "September 20, 2026",
    readTime: "6 min read",
    category: "Celebration Cakes",
    categorySlug: "celebration-cakes",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    featuredVenues: ["velvet-crumb", "maison-creme"],
    excerpt: "Celebrate life's memorable milestones with sculptured floral cakes, Earl Grey chiffons, and molten-centered Basque marvels.",
    content: `
      <p class="lead-paragraph">A great celebration cake should be as breathtaking to look at as it is delicious to slice into. Say goodbye to heavy, cloying fondants—today's cake artists focus on botanical elegance, cloud-like chiffon layers, and natural fruit glazes.</p>
      
      <h3>The Velvet Crumb: Botanical Sculpture</h3>
      <p>Clara Evans at The Velvet Crumb creates cakes that look like they belong in a floral gallery. Fresh pressed organic pansies, textured Swiss meringue buttercream, and tender sponge soaked in elderflower cordials.</p>
    `
  }
];

const MENU_ITEMS_DATA = [
  {
    id: "menu-1",
    venueId: "maison-creme",
    venueName: "Maison Crème Patisserie",
    name: "Signature 72-Layer Butter Croissant",
    category: "Signature Pastries",
    categorySlug: "pastries",
    price: "$4.80",
    numericPrice: 4.8,
    isPopular: true,
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop",
    description: "Classic French croissant with Isigny Sainte-Mère AOP butter, 72 flaky layers, delicate honeycomb crumb."
  },
  {
    id: "menu-2",
    venueId: "maison-creme",
    venueName: "Maison Crème Patisserie",
    name: "Tahitian Vanilla Bean Mille-Feuille",
    category: "Pastries",
    categorySlug: "pastries",
    price: "$8.50",
    numericPrice: 8.5,
    isPopular: true,
    dietary: ["Vegetarian", "Eggless Option"],
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
    description: "Caramelized inverted puff pastry, silky Tahitian vanilla diplomat cream, salted butter caramel drizzle."
  },
  {
    id: "menu-3",
    venueId: "maison-creme",
    venueName: "Maison Crème Patisserie",
    name: "Valrhona Guanaja Pain au Chocolat",
    category: "Signature Pastries",
    categorySlug: "pastries",
    price: "$5.50",
    numericPrice: 5.5,
    isPopular: true,
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
    description: "Double batons of 70% dark Valrhona chocolate encased in crisp, buttery viennoiserie pastry."
  },
  {
    id: "menu-4",
    venueId: "velvet-crumb",
    venueName: "The Velvet Crumb Cake Studio",
    name: "Burnt Basque Caramelized Cheesecake",
    category: "Cakes",
    categorySlug: "cakes",
    price: "$8.00",
    numericPrice: 8.0,
    isPopular: true,
    dietary: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=600&auto=format&fit=crop",
    description: "Ultra creamy custard center, deeply caramelized charred top, finished with Maldon sea salt."
  },
  {
    id: "menu-5",
    venueId: "velvet-crumb",
    venueName: "The Velvet Crumb Cake Studio",
    name: "Elderflower Berry Velvet Cake Slice",
    category: "Cakes",
    categorySlug: "cakes",
    price: "$7.50",
    numericPrice: 7.5,
    isPopular: false,
    dietary: ["Vegetarian", "Eggless Option"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
    description: "Vanilla bean sponge with St-Germain elderflower cordial, Meyer lemon curd, and fresh wild blackberries."
  },
  {
    id: "menu-6",
    venueId: "flour-heirloom",
    venueName: "Flour & Heirloom Artisan Bakery",
    name: "Country Hearth Sourdough Boule (850g)",
    category: "Bread",
    categorySlug: "bread",
    price: "$8.00",
    numericPrice: 8.0,
    isPopular: true,
    dietary: ["Vegan", "Naturally Leavened", "Organic"],
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=600&auto=format&fit=crop",
    description: "Stoneground Red Fife heirloom flour, 36-hour wild yeast ferment, thick blistered crust."
  },
  {
    id: "menu-7",
    venueId: "fika-botanica",
    venueName: "Fika & Botanica Coffee Bakery",
    name: "Swedish Cardamom Knot (Kardemummabulle)",
    category: "Signature Pastries",
    categorySlug: "pastries",
    price: "$4.50",
    numericPrice: 4.5,
    isPopular: true,
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop",
    description: "Braided buttery dough loaded with crushed green cardamom seeds and pearl sugar crystals."
  },
  {
    id: "menu-8",
    venueId: "l-atelier-cacao",
    venueName: "L'Atelier du Cacao & Dessert Bar",
    name: "Botanical Bonbon Gift Box (9 pcs)",
    category: "Chocolates",
    categorySlug: "chocolates",
    price: "$28.00",
    numericPrice: 28.0,
    isPopular: true,
    dietary: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=600&auto=format&fit=crop",
    description: "Hand-painted truffles with flavors including Bergamot Earl Grey, Yuzu Salt, and Honey Lavender."
  },
  {
    id: "menu-9",
    venueId: "l-atelier-cacao",
    venueName: "L'Atelier du Cacao & Dessert Bar",
    name: "Velvet Dark Sipping Chocolate",
    category: "Chocolates",
    categorySlug: "chocolates",
    price: "$7.50",
    numericPrice: 7.5,
    isPopular: true,
    dietary: ["Vegetarian", "Dairy-Free Option"],
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=600&auto=format&fit=crop",
    description: "Chuncho Peruvian 70% molten chocolate whipped with steamed cream and real cinnamon bark."
  },
  {
    id: "menu-10",
    venueId: "sweet-alchemy",
    venueName: "Sweet Alchemy Dessert Destination",
    name: "The Forest Floor Plated Terrarium",
    category: "Desserts",
    categorySlug: "desserts",
    price: "$15.00",
    numericPrice: 15.0,
    isPopular: true,
    dietary: ["Vegetarian"],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop",
    description: "Matcha moss cake, 72% dark chocolate bark, wild blackberry reduction, baked meringue mushrooms."
  },
  {
    id: "menu-11",
    venueId: "fika-botanica",
    venueName: "Fika & Botanica Coffee Bakery",
    name: "Single-Origin Light Roast Pour Over",
    category: "Coffee",
    categorySlug: "coffee",
    price: "$6.50",
    numericPrice: 6.5,
    isPopular: false,
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    description: "Ethiopian Yirgacheffe with bright notes of jasmine blossom, white peach, and bergamot citrus."
  },
  {
    id: "menu-12",
    venueId: "la-confiserie-royale",
    venueName: "La Confiserie Royale",
    name: "Artisanal Provence Calissons (Box of 12)",
    category: "Confectionery",
    categorySlug: "confectionery",
    price: "$18.00",
    numericPrice: 18.0,
    isPopular: false,
    dietary: ["Vegetarian", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=600&auto=format&fit=crop",
    description: "Traditional almond paste confection flavored with candied Cavaillon melons and orange blossom."
  }
];

// Helper to get item by ID
function getVenueById(id) {
  return VENUES_DATA.find(v => v.id === id) || VENUES_DATA[0];
}

function getCategoryBySlug(slug) {
  return CATEGORIES_DATA.find(c => c.slug === slug || c.id === slug) || CATEGORIES_DATA[0];
}

function getGuideBySlug(slug) {
  return GUIDES_DATA.find(g => g.slug === slug || g.id === slug) || GUIDES_DATA[0];
}
