/**
 * MarketPulse - Massive Local Marketing & Sales Classifieds Engine
 * 1,200+ Listings Programmatic Generator & Alpine.js Store
 */

// Preset high quality curated images by category for realistic visual catalog
const CATEGORY_IMAGES = {
  Electronics: [
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80', // MacBook
    'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=700&q=80', // Laptop
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80', // Smartwatch
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80', // Headphones
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80', // Phone
    'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=700&q=80', // Audio gear
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80', // Smartphone
    'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80', // Keyboard
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=700&q=80', // Display
    'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=700&q=80'  // Camera
  ],
  Vehicles: [
    'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=700&q=80', // Tesla Model 3
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=700&q=80', // Corvette
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80', // 4x4 SUV
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80', // BMW sedan
    'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=700&q=80', // Sports car
    'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80', // Motorcycle
    'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=700&q=80', // Truck
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=80', // Vintage car
    'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=700&q=80', // Electric EV
    'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=700&q=80'  // Supercar
  ],
  'Real Estate': [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80', // Luxury villa
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80', // Modern home
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80', // Penthouse loft
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80', // Estate mansion
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80', // Minimalist interior
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80', // Commercial building
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=700&q=80', // Apartment living
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=700&q=80', // Modern kitchen loft
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80', // Suburban home
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80'  // Corporate office
  ],
  Fashion: [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80', // Luxury watch
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80', // Smartwatch/watch
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80', // Sneakers
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80', // Jacket
    'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80', // Leather bag
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80', // Handbag
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80', // Streetwear
    'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80', // Boots
    'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80', // Sunglasses
    'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80'  // Suit tailoring
  ],
  'Home Appliances': [
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80', // Kitchen appliances
    'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=700&q=80', // Espresso machine
    'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=700&q=80', // Coffee bar
    'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=700&q=80', // Smart fridge
    'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=700&q=80', // Washer dryer
    'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=700&q=80', // Chef range oven
    'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=700&q=80', // Robot vacuum
    'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=700&q=80', // Modern pantry
    'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=700&q=80', // Blender / juicer
    'https://images.unsplash.com/photo-1570784332176-fdd73da66f03?auto=format&fit=crop&w=700&q=80'  // Air purifier
  ],
  'Business Services': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80', // Analytics marketing
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80', // Strategy meeting
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80', // Digital marketing
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=700&q=80', // Team consulting
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80', // Corporate advisory
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80', // Creative agency
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80', // B2B sales contract
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80', // Tech studio
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80', // Financial audit
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80'  // Growth workshop
  ],
  'Industrial & Tools': [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80', // CNC machining
    'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80', // Woodworking router
    'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=700&q=80', // Power drill / workshop
    'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=700&q=80', // Precision robotics
    'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=700&q=80', // Industrial assembly
    'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=700&q=80', // Hand tools kit
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80', // Construction forklift
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80'  // Laser cutter
  ],
  'Furniture & Living': [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80', // Velvet sofa
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=700&q=80', // Minimal chair
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=700&q=80', // Dining table
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80', // King bed setup
    'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=700&q=80', // Walnut desk
    'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=700&q=80'  // Lounge armchair
  ]
};

// Catalogs of templates by category for programmatically generating 1,200+ distinct listings
const ITEM_TEMPLATES = {
  Electronics: [
    { title: 'Apple MacBook Pro 16" M3 Max (36GB RAM, 1TB SSD)', basePrice: 2850, tags: 'Laptop' },
    { title: 'Sony Alpha A7 IV Full-Frame Camera Body (Shutter count: 1.2k)', basePrice: 1950, tags: 'Camera' },
    { title: 'Apple iPhone 15 Pro Max 256GB - Titanium Natural (Unlocked)', basePrice: 980, tags: 'Phone' },
    { title: 'Dell UltraSharp 32" 4K USB-C Hub Monitor (U3223QE)', basePrice: 620, tags: 'Monitor' },
    { title: 'Bose QuietComfort Ultra Noise-Cancelling Headphones', basePrice: 280, tags: 'Audio' },
    { title: 'Apple iPad Pro 12.9" M2 256GB Wi-Fi + Magic Keyboard', basePrice: 1050, tags: 'Tablet' },
    { title: 'DJI Mini 4 Pro Drone Fly More Combo + RC 2 Controller', basePrice: 850, tags: 'Drone' },
    { title: 'Sony PlayStation 5 Slim Console + 2 DualSense Controllers', basePrice: 420, tags: 'Gaming' },
    { title: 'Keychron Q1 Pro Custom Mechanical Keyboard (Wireless/RGB)', basePrice: 175, tags: 'Keyboard' },
    { title: 'LG C3 55" OLED evo 4K Smart TV with Dolby Vision', basePrice: 990, tags: 'TV' },
    { title: 'Canon RF 24-70mm f/2.8 L IS USM Zoom Lens (Like New)', basePrice: 1650, tags: 'Lens' },
    { title: 'Sonos Arc Premium Smart Soundbar with Dolby Atmos', basePrice: 640, tags: 'Audio' },
    { title: 'Samsung Galaxy S24 Ultra 512GB (Titanium Gray - Factory Unlocked)', basePrice: 950, tags: 'Phone' },
    { title: 'Elgato Stream Deck XL + Wave:3 USB Microphone Studio Kit', basePrice: 290, tags: 'Streaming' },
    { title: 'Apple Watch Ultra 2 49mm Titanium GPS + Cellular with Alpine Loop', basePrice: 640, tags: 'Wearable' }
  ],
  Vehicles: [
    { title: '2022 Tesla Model 3 Long Range Dual Motor AWD - FSD Capable', basePrice: 28900, tags: 'EV' },
    { title: '2021 BMW M340i xDrive Sedan - Mineral Grey Metallic (38k mi)', basePrice: 41500, tags: 'Sedan' },
    { title: '2020 Porsche Macan GTS - Carrera White / Red Leather', basePrice: 53900, tags: 'SUV' },
    { title: '2023 Ford F-150 Lightning Lariat 4WD SuperCrew (Ext Battery)', basePrice: 51000, tags: 'Truck' },
    { title: '2019 Toyota 4Runner TRD Pro - Clean Title, 1 Owner (Voodoo Blue)', basePrice: 37500, tags: 'SUV' },
    { title: '2022 Chevrolet Corvette Stingray 2LT Coupe (Z51 Package)', basePrice: 66900, tags: 'Sports' },
    { title: '2021 Ducati Panigale V2 - Akrapovič Exhaust System', basePrice: 13800, tags: 'Motorcycle' },
    { title: '2020 Audi RS5 Sportback Quattro - Nardo Gray (Dynamic Package)', basePrice: 58500, tags: 'Sports' },
    { title: '2023 Rivian R1T Adventure Edition Quad-Motor AWD', basePrice: 64900, tags: 'Truck' },
    { title: '2018 Mercedes-AMG C63 S Coupe - BiTurbo V8 (Obsidian Black)', basePrice: 46000, tags: 'Performance' },
    { title: '2022 Honda Civic Type R (FL5) - Championship White', basePrice: 42900, tags: 'Hatchback' },
    { title: '2021 Jeep Wrangler Rubicon 392 V8 - Sky One-Touch Top', basePrice: 61500, tags: '4x4' }
  ],
  'Real Estate': [
    { title: 'Luxury 3-Bed Penthouse Loft with Panoramic Skyline Terrace', basePrice: 785000, tags: 'Penthouse' },
    { title: 'Modern 2-Bed 2-Bath Condo in Tech Corridor with EV Parking', basePrice: 425000, tags: 'Condo' },
    { title: 'Architectural Mid-Century 4-Bed Home on Private 0.5 Acre Lot', basePrice: 890000, tags: 'Single Family' },
    { title: 'Turnkey Boutique Retail / Office Commercial Space (1,850 sq ft)', basePrice: 550000, tags: 'Commercial' },
    { title: 'Waterfront 1-Bedroom Luxury Studio with Marina Berth Slip', basePrice: 345000, tags: 'Waterfront' },
    { title: 'Modern Industrial Flex Warehouse with 20ft Clear Ceilings & Loading Dock', basePrice: 620000, tags: 'Warehouse' },
    { title: 'Renovated Historic Brownstone 5-Bed Townhome with Private Garden', basePrice: 1250000, tags: 'Townhome' },
    { title: 'Executive Golf Community Villa with Heated Saltwater Pool', basePrice: 940000, tags: 'Villa' },
    { title: 'Sunny Open-Concept Live/Work Artist Loft in Historic District', basePrice: 395000, tags: 'Loft' },
    { title: 'Prime Downtown Creative Agency Office Suite (Fully Furnished)', basePrice: 480000, tags: 'Office' }
  ],
  Fashion: [
    { title: 'Rolex Submariner Date 126610LN - Box & Papers (Mint 2023)', basePrice: 12400, tags: 'Watch' },
    { title: 'Omega Speedmaster Professional Moonwatch Co-Axial Master', basePrice: 5800, tags: 'Watch' },
    { title: 'Hermès Birkin 30 Togo Leather in Gold with Palladium Hardware', basePrice: 18500, tags: 'Luxury' },
    { title: 'Chanel Classic Double Flap Bag Medium - Black Caviar Leather', basePrice: 7900, tags: 'Handbag' },
    { title: 'Louis Vuitton Keepall Bandoulière 55 Monogram Canvas Duffel', basePrice: 1650, tags: 'Luggage' },
    { title: 'Cartier Santos de Cartier Medium Stainless Steel (Extra Strap)', basePrice: 5900, tags: 'Watch' },
    { title: 'Tom Ford Shelton Cut Two-Piece Tuxedo - Midnight Navy Wool', basePrice: 2100, tags: 'Apparel' },
    { title: 'Jordan 1 Retro High OG "Chicago" 1985 Re-imagined (Size 10.5)', basePrice: 420, tags: 'Sneakers' },
    { title: 'Bottega Veneta Cassette Intrecciato Crossbody Bag in Parakeet', basePrice: 2300, tags: 'Handbag' },
    { title: 'Vintage Schott NYC Perfecto 618 Leather Motorcycle Jacket', basePrice: 580, tags: 'Outerwear' }
  ],
  'Home Appliances': [
    { title: 'La Marzocco Linea Mini Commercial-Grade Espresso Machine', basePrice: 4600, tags: 'Coffee' },
    { title: 'Sub-Zero 36" Built-In French Door Refrigerator (Stainless Steel)', basePrice: 6800, tags: 'Kitchen' },
    { title: 'Miele W1 / T1 Front Load Washer & Heat Pump Dryer Pair', basePrice: 2400, tags: 'Laundry' },
    { title: 'Wolf 36" Dual-Fuel Pro Range with 6 Dual-Stacked Burners', basePrice: 7200, tags: 'Cooking' },
    { title: 'Dyson V15 Detect Absolute Cordless Vacuum Cleaner (All Attachments)', basePrice: 480, tags: 'Cleaning' },
    { title: 'Breville the Barista Touch Impress Espresso Machine', basePrice: 950, tags: 'Coffee' },
    { title: 'Roborock S8 Pro Ultra Robot Vacuum and Sonic Mop with Auto Dock', basePrice: 890, tags: 'Smart Home' },
    { title: 'Vitamix Professional Series 750 Blender with Wet/Dry Jars', basePrice: 380, tags: 'Kitchen' },
    { title: 'Ooni Karu 16 Multi-Fuel Outdoor Pizza Oven + Cast Iron Accessories', basePrice: 620, tags: 'Outdoor' },
    { title: 'LG PuriCare AeroTower Air Purifying Fan with True HEPA', basePrice: 320, tags: 'Air Quality' }
  ],
  'Business Services': [
    { title: 'Full-Service Performance Marketing & B2B Lead Gen Retainer (Monthly)', basePrice: 3500, tags: 'Marketing' },
    { title: 'Custom Corporate Brand Identity Design, UI Kit & Guidelines Package', basePrice: 4200, tags: 'Design' },
    { title: 'Certified Public Accountant (CPA) Corporate Tax & Audit Consulting', basePrice: 2400, tags: 'Finance' },
    { title: 'Enterprise Web Application Full-Stack Architecture & Code Audit', basePrice: 5000, tags: 'Software' },
    { title: 'Executive SEO & Technical Content Scaling Retainer (3 Metro Regions)', basePrice: 2800, tags: 'SEO' },
    { title: 'Commercial Real Estate Drone 4K Videography & Virtual Tour Package', basePrice: 1200, tags: 'Video' },
    { title: 'ISO 27001 & SOC-2 Compliance Readiness Advisory for Startups', basePrice: 6500, tags: 'Cybersecurity' },
    { title: 'Turnkey Local Direct Mail & Targeted Geo-Fence Ad Campaign', basePrice: 1800, tags: 'Advertising' }
  ],
  'Industrial & Tools': [
    { title: 'AVID CNC Pro 48x96 Industrial CNC Router with 4HP Spindle', basePrice: 7800, tags: 'CNC' },
    { title: 'SawStop 10" Industrial Cabinet Table Saw (3HP Professional)', basePrice: 2950, tags: 'Woodworking' },
    { title: 'Miller Multimatic 220 AC/DC Multiprocess Welder Complete Kit', basePrice: 2800, tags: 'Welding' },
    { title: 'Festool Domino Joiner DF 500 Q-Set with Systainer Case & Cutters', basePrice: 1150, tags: 'Power Tools' },
    { title: 'Toyota 5,000 lb Cushion Tire Warehouse Forklift (Low Hours)', basePrice: 12500, tags: 'Forklift' },
    { title: 'Epilog Zing 24 Laser Engraver and Cutter (40W CO2 Laser)', basePrice: 5400, tags: 'Laser' },
    { title: 'DeWalt 20V MAX XR 9-Tool Cordless Combo Kit with 4x Batteries', basePrice: 580, tags: 'Handheld' },
    { title: 'Industrial 80-Gallon 2-Stage Air Compressor (5HP Cast Iron)', basePrice: 1650, tags: 'Compressor' }
  ],
  'Furniture & Living': [
    { title: 'Restoration Hardware Cloud Modular 4-Piece Sofa in Belgian Linen', basePrice: 4800, tags: 'Living Room' },
    { title: 'Herman Miller Eames Lounge Chair & Ottoman (Santos Palisander)', basePrice: 4900, tags: 'Chair' },
    { title: 'Custom Solid Live Edge Walnut Dining Table (8-10 Seater, 9ft)', basePrice: 2400, tags: 'Dining' },
    { title: 'Artemide Tolomeo Mega Floor Lamp with Parchment Shade', basePrice: 720, tags: 'Lighting' },
    { title: 'CB2 Dondra Teak Queen Bed with Integrated Nightstands', basePrice: 1100, tags: 'Bedroom' },
    { title: 'Knoll Barcelona Chair by Mies van der Rohe (Authentic Black Leather)', basePrice: 3400, tags: 'Mid-Century' }
  ]
};

const METRO_LOCATIONS = [
  'Austin, TX - Downtown',
  'Austin, TX - South Congress',
  'Austin, TX - Domain / Tech Ridge',
  'San Francisco, CA - SoMa',
  'San Francisco, CA - Mission District',
  'San Francisco, CA - Marina',
  'Miami, FL - Brickell Financial',
  'Miami, FL - Wynwood Arts',
  'Miami, FL - South Beach',
  'New York, NY - Manhattan Flatiron',
  'New York, NY - Brooklyn Williamsburg',
  'Chicago, IL - West Loop',
  'Chicago, IL - River North',
  'Seattle, WA - South Lake Union',
  'Seattle, WA - Capitol Hill',
  'Denver, CO - RiNo Arts District',
  'Denver, CO - LoDo Downtown',
  'Dallas, TX - Uptown Arts',
  'Atlanta, GA - Midtown Tech Square',
  'Boston, MA - Back Bay'
];

const SELLER_PROFILES = [
  { name: 'Apex Motors Group', phone: '+1 (512) 843-9201', verified: true, rating: 4.95, time: '< 10 mins' },
  { name: 'Skyline Real Estate Advisors', phone: '+1 (415) 692-4410', verified: true, rating: 4.98, time: '< 15 mins' },
  { name: 'TechForward Direct', phone: '+1 (786) 521-8832', verified: true, rating: 4.91, time: '< 5 mins' },
  { name: 'Elena Rostova (Private Collector)', phone: '+1 (212) 873-1944', verified: true, rating: 5.0, time: '< 25 mins' },
  { name: 'Marcus Vance Equipment Co', phone: '+1 (312) 449-3012', verified: true, rating: 4.88, time: '< 30 mins' },
  { name: 'Pacific Trade Systems', phone: '+1 (206) 714-9980', verified: true, rating: 4.92, time: '< 10 mins' },
  { name: 'Heritage Horology & Goods', phone: '+1 (303) 899-2144', verified: true, rating: 4.97, time: '< 20 mins' },
  { name: 'Vanguard Industrial Supply', phone: '+1 (214) 750-6311', verified: true, rating: 4.85, time: '< 15 mins' },
  { name: 'Sophia Chen Interiors', phone: '+1 (404) 932-1178', verified: true, rating: 4.96, time: '< 20 mins' },
  { name: 'David Miller Sales', phone: '+1 (617) 540-8821', verified: false, rating: 4.75, time: '< 45 mins' },
  { name: 'Urban Sound & Visuals', phone: '+1 (512) 402-7719', verified: true, rating: 4.90, time: '< 15 mins' },
  { name: 'Metro Commercial Brokerage', phone: '+1 (415) 320-9182', verified: true, rating: 4.99, time: '< 10 mins' }
];

const CONDITIONS = ['Brand New', 'Like New', 'Certified Refurbished', 'Excellent', 'Commercial Grade'];

/**
 * Programmatically generate 1,250 realistic, distinct marketplace goods
 */
function generate1250Listings() {
  const listings = [];
  const categories = Object.keys(ITEM_TEMPLATES);
  const totalCount = 1250;

  // Track modifiers for generating variations
  const variants = [
    { suffix: ' - Original Packaging & Warranty', priceMul: 1.05, cond: 'Brand New' },
    { suffix: ' - Barely Used, Pristine Condition', priceMul: 0.95, cond: 'Like New' },
    { suffix: ' - Factory Certified Inspection Passed', priceMul: 0.98, cond: 'Certified Refurbished' },
    { suffix: ' - Complete Bundle with All Accessories', priceMul: 1.10, cond: 'Excellent' },
    { suffix: ' - Commercial Duty / Ready for Deployment', priceMul: 1.02, cond: 'Commercial Grade' },
    { suffix: ' - Upgraded Specifications', priceMul: 1.15, cond: 'Like New' },
    { suffix: ' - Low Hours / Single Owner History', priceMul: 0.92, cond: 'Excellent' },
    { suffix: ' - Special Edition Release', priceMul: 1.20, cond: 'Brand New' },
    { suffix: ' - Inspected & Serviced This Month', priceMul: 0.96, cond: 'Like New' },
    { suffix: ' - Immediate Delivery / Local Pickup', priceMul: 1.0, cond: 'Excellent' }
  ];

  for (let i = 0; i < totalCount; i++) {
    const catName = categories[i % categories.length];
    const templateList = ITEM_TEMPLATES[catName];
    const template = templateList[Math.floor(i / categories.length) % templateList.length];
    const imageList = CATEGORY_IMAGES[catName] || CATEGORY_IMAGES.Electronics;
    const imgUrl = imageList[i % imageList.length];
    const variant = variants[i % variants.length];
    const location = METRO_LOCATIONS[i % METRO_LOCATIONS.length];
    const seller = SELLER_PROFILES[i % SELLER_PROFILES.length];

    // Compute price with variation
    const priceVariance = 0.88 + ((i * 17) % 30) / 100;
    const computedPrice = Math.round((template.basePrice * variant.priceMul * priceVariance) / 10) * 10;

    // Relative date
    const daysAgo = (i % 28);
    const dateStr = daysAgo === 0 ? 'Today, 2 hrs ago' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`;

    const itemId = `MP-${1000 + i}`;

    listings.push({
      id: itemId,
      title: `${template.title}${i > 100 ? variant.suffix : ''}`,
      category: catName,
      price: computedPrice > 0 ? computedPrice : 150,
      negotiable: (i % 3 === 0),
      location: location,
      condition: variant.cond,
      sellerName: seller.name,
      sellerPhone: seller.phone,
      sellerVerified: seller.verified,
      sellerRating: seller.rating,
      sellerResponseTime: seller.time,
      description: `Premium listing: ${template.title}. Verified directly by ${seller.name} located in ${location}. Item has passed our 40-point verification audit and is stored in a climate-controlled secure local facility. Includes authentic paperwork, transferrable documentation, and direct test-drive/inspection privilege before final release. Contact directly for immediate purchase or scheduled on-site demonstration.`,
      image: imgUrl,
      views: 35 + ((i * 47) % 1650),
      leads: 2 + ((i * 11) % 48),
      datePosted: dateStr,
      featured: (i % 14 === 0),
      timestamp: Date.now() - daysAgo * 86400000 - ((i * 3600000) % 86400000)
    });
  }

  return listings;
}

/**
 * Main Alpine.js Reactive Marketplace Application
 */
window.marketplaceApp = function () {
  return {
    // Core data
    items: [],
    categories: [
      { name: 'Electronics' },
      { name: 'Vehicles' },
      { name: 'Real Estate' },
      { name: 'Fashion' },
      { name: 'Home Appliances' },
      { name: 'Business Services' },
      { name: 'Industrial & Tools' },
      { name: 'Furniture & Living' }
    ],
    locations: METRO_LOCATIONS,

    // Navigation & View state
    activeTab: 'browse', // 'browse' | 'inbox' | 'post-ad' | 'dashboard'
    
    // Search, Filter & Sort State
    searchQuery: '',
    selectedCategory: 'all',
    selectedLocation: 'all',
    selectedCondition: 'all',
    priceMin: null,
    priceMax: null,
    verifiedOnly: false,
    sortBy: 'newest', // 'newest' | 'price-asc' | 'price-desc' | 'popular'

    // Pagination
    currentPage: 1,
    itemsPerPage: 20,

    // Autocomplete
    autocompleteOpen: false,
    popularKeywords: [
      'MacBook Pro', 'Tesla Model 3', 'Penthouse', 'Rolex Submariner', 
      'Espresso Machine', 'CNC Router', 'BMW M340i', 'Sony A7 IV', 'Herman Miller'
    ],

    // Product Detail Modal State
    modalOpen: false,
    activeItem: null,
    activeItemPhoneRevealed: false,
    copiedPhone: false,
    inquiryMessage: '',

    // Bookmarked items
    bookmarkedIds: ['MP-1000', 'MP-1002', 'MP-1015'],

    // User Profile / Vendor State
    currentUser: {
      id: 'VEND-8821',
      name: 'Alex Mercer',
      business: 'Nexus Commercial Trading LLC',
      phone: '+1 (512) 490-1823',
      email: 'alex@nexustrading.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80'
    },
    myListings: [],

    // Live Buyer-Seller Chat Inbox
    threads: [
      {
        id: 'th-1',
        itemId: 'MP-1000',
        itemTitle: 'Apple MacBook Pro 16" M3 Max (36GB RAM, 1TB SSD)',
        itemPrice: 2850,
        itemImage: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=200&q=80',
        sellerName: 'Elena Rostova',
        sellerPhone: '+1 (212) 873-1944',
        lastUpdated: '10 mins ago',
        unread: true,
        phoneRevealed: false,
        isTyping: false,
        messages: [
          { id: 1, sender: 'buyer', text: 'Hi Elena! Is the MacBook Pro battery cycle count under 50?', time: '11:15 AM' },
          { id: 2, sender: 'seller', text: 'Hi Alex! Yes, it currently has only 23 battery cycles and AppleCare+ active until Nov 2027.', time: '11:18 AM' },
          { id: 3, sender: 'buyer', text: 'Terrific. Can we meet at the Flatiron Apple Store this afternoon for transfer?', time: '11:22 AM' },
          { id: 4, sender: 'seller', text: 'Sounds ideal! I can meet you at 3:30 PM. I will bring the original packaging and receipt.', time: '11:24 AM' }
        ]
      },
      {
        id: 'th-2',
        itemId: 'MP-1001',
        itemTitle: '2022 Tesla Model 3 Long Range Dual Motor AWD',
        itemPrice: 28900,
        itemImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=200&q=80',
        sellerName: 'Apex Motors Group',
        sellerPhone: '+1 (512) 843-9201',
        lastUpdated: '1 hour ago',
        unread: false,
        phoneRevealed: true,
        isTyping: false,
        messages: [
          { id: 1, sender: 'buyer', text: 'Good morning! Does this Model 3 include the mobile connector charging cord?', time: '09:40 AM' },
          { id: 2, sender: 'seller', text: 'Good morning! Yes, it includes the official Tesla Gen 2 Mobile Connector with both NEMA 5-15 and 14-50 adapters.', time: '09:48 AM' }
        ]
      },
      {
        id: 'th-3',
        itemId: 'MP-1004',
        itemTitle: 'La Marzocco Linea Mini Commercial Espresso Machine',
        itemPrice: 4600,
        itemImage: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=200&q=80',
        sellerName: 'Marcus Vance Equipment',
        sellerPhone: '+1 (312) 449-3012',
        lastUpdated: '3 hours ago',
        unread: false,
        phoneRevealed: false,
        isTyping: false,
        messages: [
          { id: 1, sender: 'buyer', text: 'Hello, was this machine used in a cafe or for private home use?', time: '08:20 AM' },
          { id: 2, sender: 'seller', text: 'It was strictly used in our design studio executive lounge, approximately 4 shots daily with plumbed RO water.', time: '08:35 AM' }
        ]
      }
    ],
    activeThread: null,
    chatInput: '',

    // Post Ad Form State
    postForm: {
      title: '',
      category: 'Electronics',
      condition: 'Like New',
      price: '',
      location: 'Austin, TX - Downtown',
      sellerPhone: '+1 (512) 490-1823',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=80',
      description: '',
      negotiable: true
    },

    // Toast feedback state
    toast: {
      visible: false,
      message: '',
      timer: null
    },

    /**
     * Component Lifecycle Initializer
     */
    init() {
      // 1. Programmatically generate 1,250 items on startup
      const allItems = generate1250Listings();
      this.items = allItems;

      // 2. Set default active chat thread
      this.activeThread = this.threads[0];

      // 3. Initialize user's own listings in dashboard
      this.myListings = [
        allItems[0],
        allItems[5],
        allItems[12],
        allItems[24]
      ];

      // Pre-fill inquiry message placeholder
      this.inquiryMessage = 'Hi, is this still available? I am ready to inspect it and make an offer.';

      // Keyboard navigation
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modalOpen) {
          this.modalOpen = false;
        }
      });
    },

    // ================= COMPUTED PROPERTIES & FILTERING =================

    get filteredItems() {
      const q = this.searchQuery.trim().toLowerCase();
      const cat = this.selectedCategory;
      const loc = this.selectedLocation;
      const cond = this.selectedCondition;
      const min = this.priceMin;
      const max = this.priceMax;
      const vOnly = this.verifiedOnly;

      return this.items.filter((item) => {
        // Search query filter (title, description, location, seller)
        if (q) {
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          const matchLoc = item.location.toLowerCase().includes(q);
          const matchCat = item.category.toLowerCase().includes(q);
          if (!matchTitle && !matchDesc && !matchLoc && !matchCat) return false;
        }

        // Category filter
        if (cat !== 'all' && item.category !== cat) return false;

        // Location filter
        if (loc !== 'all' && item.location !== loc) return false;

        // Condition filter
        if (cond !== 'all' && item.condition !== cond) return false;

        // Price range filter
        if (min !== null && min !== '' && item.price < min) return false;
        if (max !== null && max !== '' && item.price > max) return false;

        // Verified seller filter
        if (vOnly && !item.sellerVerified) return false;

        return true;
      }).sort((a, b) => {
        if (this.sortBy === 'newest') return b.timestamp - a.timestamp;
        if (this.sortBy === 'price-asc') return a.price - b.price;
        if (this.sortBy === 'price-desc') return b.price - a.price;
        if (this.sortBy === 'popular') return b.views - a.views;
        return 0;
      });
    },

    get totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage) || 1;
    },

    get paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredItems.slice(start, start + this.itemsPerPage);
    },

    get paginationStart() {
      if (this.filteredItems.length === 0) return 0;
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },

    get paginationEnd() {
      return Math.min(this.currentPage * this.itemsPerPage, this.filteredItems.length);
    },

    get visiblePages() {
      const total = this.totalPages;
      const cur = this.currentPage;
      const delta = 2;
      const range = [];

      for (let i = Math.max(1, cur - delta); i <= Math.min(total, cur + delta); i++) {
        range.push(i);
      }
      return range;
    },

    get hasActiveFilters() {
      return (
        this.selectedCategory !== 'all' ||
        this.selectedLocation !== 'all' ||
        this.selectedCondition !== 'all' ||
        this.priceMin !== null ||
        this.priceMax !== null ||
        this.verifiedOnly ||
        this.searchQuery !== ''
      );
    },

    get suggestedSearches() {
      if (!this.searchQuery.trim()) return [];
      const q = this.searchQuery.trim().toLowerCase();
      return this.items.filter(i => i.title.toLowerCase().includes(q)).slice(0, 5);
    },

    get unreadCount() {
      return this.threads.filter(t => t.unread).length;
    },

    get totalViewsCount() {
      return this.myListings.reduce((sum, item) => sum + (item.views || 0), 0);
    },

    get totalLeadsCount() {
      return this.myListings.reduce((sum, item) => sum + (item.leads || 0), 0);
    },

    // ================= ACTIONS & EVENT HANDLERS =================

    setActiveTab(tab) {
      this.activeTab = tab;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    goToPage(p) {
      if (p >= 1 && p <= this.totalPages) {
        this.currentPage = p;
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    },

    clearFilters() {
      this.searchQuery = '';
      this.selectedCategory = 'all';
      this.selectedLocation = 'all';
      this.selectedCondition = 'all';
      this.priceMin = null;
      this.priceMax = null;
      this.verifiedOnly = false;
      this.sortBy = 'newest';
      this.currentPage = 1;
      this.showToast('Filters reset to default.');
    },

    countByCategory(catName) {
      return this.items.filter(i => i.category === catName).length;
    },

    // --- Detail Modal Actions ---
    openDetailModal(item) {
      this.activeItem = item;
      this.activeItemPhoneRevealed = false;
      this.copiedPhone = false;
      this.inquiryMessage = `Hi ${item.sellerName}, is "${item.title}" still available? I am in ${item.location.split(' - ')[0]} and can inspect it this week.`;
      
      // Increment listing views
      item.views++;
      this.modalOpen = true;
    },

    revealItemPhone(item) {
      this.activeItemPhoneRevealed = true;
      item.leads = (item.leads || 0) + 1;
      this.showToast(`Verified Phone Unlocked for ${item.sellerName}! Lead recorded.`);
    },

    copyPhoneNumber(phone) {
      navigator.clipboard.writeText(phone).then(() => {
        this.copiedPhone = true;
        this.showToast('Phone number copied to clipboard: ' + phone);
        setTimeout(() => {
          this.copiedPhone = false;
        }, 3000);
      });
    },

    toggleBookmark(itemId) {
      const idx = this.bookmarkedIds.indexOf(itemId);
      if (idx > -1) {
        this.bookmarkedIds.splice(idx, 1);
        this.showToast('Removed from saved items.');
      } else {
        this.bookmarkedIds.push(itemId);
        this.showToast('Saved to your favorites.');
      }
    },

    isBookmarked(itemId) {
      return this.bookmarkedIds.includes(itemId);
    },

    // --- Live Buyer-Seller Chat Actions ---
    sendInquiryFromModal(item) {
      if (!this.inquiryMessage.trim()) return;

      const userMsg = this.inquiryMessage.trim();

      // Check if thread already exists for this seller and item
      let thread = this.threads.find(t => t.itemId === item.id);

      if (!thread) {
        thread = {
          id: 'th-' + Date.now(),
          itemId: item.id,
          itemTitle: item.title,
          itemPrice: item.price,
          itemImage: item.image,
          sellerName: item.sellerName,
          sellerPhone: item.sellerPhone,
          lastUpdated: 'Just now',
          unread: false,
          phoneRevealed: false,
          isTyping: false,
          messages: [
            { id: 1, sender: 'buyer', text: userMsg, time: 'Just now' }
          ]
        };
        this.threads.unshift(thread);
      } else {
        thread.messages.push({
          id: Date.now(),
          sender: 'buyer',
          text: userMsg,
          time: 'Just now'
        });
        thread.lastUpdated = 'Just now';
      }

      this.activeThread = thread;
      this.modalOpen = false;
      this.setActiveTab('inbox');
      this.showToast(`Inquiry sent to ${item.sellerName}!`);

      // Trigger realistic seller simulation reply after 1.8 seconds!
      this.simulateSellerReply(thread, item.title, item.sellerName);
    },

    selectThread(thread) {
      this.activeThread = thread;
      thread.unread = false;
      this.$nextTick(() => {
        const container = document.getElementById('chatMessagesContainer');
        if (container) container.scrollTop = container.scrollHeight;
      });
    },

    sendMessage() {
      if (!this.chatInput.trim() || !this.activeThread) return;

      const text = this.chatInput.trim();
      this.chatInput = '';

      this.activeThread.messages.push({
        id: Date.now(),
        sender: 'buyer',
        text: text,
        time: 'Just now'
      });
      this.activeThread.lastUpdated = 'Just now';

      this.$nextTick(() => {
        const container = document.getElementById('chatMessagesContainer');
        if (container) container.scrollTop = container.scrollHeight;
      });

      // Simulate seller reply
      this.simulateSellerReply(this.activeThread, this.activeThread.itemTitle, this.activeThread.sellerName);
    },

    simulateSellerReply(thread, itemTitle, sellerName) {
      thread.isTyping = true;
      this.$nextTick(() => {
        const container = document.getElementById('chatMessagesContainer');
        if (container) container.scrollTop = container.scrollHeight;
      });

      setTimeout(() => {
        thread.isTyping = false;
        
        // Smart contextual responses
        const replies = [
          `Hi Alex! Thanks for reaching out. Yes, "${itemTitle}" is still in stock and available for inspection today. Where are you located?`,
          `Hello! I can definitely do a quick video call or meet you locally. My schedule is flexible tomorrow afternoon after 2 PM.`,
          `Thanks for your interest! The price is very competitive for this condition, but I can throw in free insured delivery if you finalize today.`,
          `Verified! Everything is fully functioning with all accessories and proof of ownership ready. Feel free to call my business direct if needed.`
        ];
        const chosenReply = replies[Math.floor(Math.random() * replies.length)];

        thread.messages.push({
          id: Date.now() + 1,
          sender: 'seller',
          text: chosenReply,
          time: 'Just now'
        });
        thread.lastUpdated = 'Just now';

        if (this.activeTab !== 'inbox' || this.activeThread?.id !== thread.id) {
          thread.unread = true;
          this.showToast(`New reply from ${sellerName}!`);
        }

        this.$nextTick(() => {
          const container = document.getElementById('chatMessagesContainer');
          if (container) container.scrollTop = container.scrollHeight;
        });
      }, 1800);
    },

    viewListingFromChat(itemId) {
      const item = this.items.find(i => i.id === itemId);
      if (item) {
        this.openDetailModal(item);
      }
    },

    revealPhoneInChat(phone) {
      if (this.activeThread) {
        this.activeThread.phoneRevealed = true;
        this.copyPhoneNumber(phone);
      }
    },

    // --- Vendor Post Ad Actions ---
    useSampleImageForCategory() {
      const cat = this.postForm.category;
      const list = CATEGORY_IMAGES[cat] || CATEGORY_IMAGES.Electronics;
      this.postForm.image = list[Math.floor(Math.random() * list.length)];
      this.showToast('Updated sample photo for ' + cat);
    },

    submitPostAd() {
      const f = this.postForm;
      if (!f.title || !f.price || !f.description) return;

      const newId = `MP-NEW-${Math.floor(100 + Math.random() * 900)}`;

      const newListing = {
        id: newId,
        title: f.title,
        category: f.category,
        condition: f.condition,
        price: Number(f.price),
        negotiable: f.negotiable,
        location: f.location,
        sellerName: this.currentUser.name,
        sellerPhone: f.sellerPhone,
        sellerVerified: true,
        sellerRating: 4.95,
        sellerResponseTime: '< 5 mins',
        description: f.description,
        image: f.image || CATEGORY_IMAGES.Electronics[0],
        views: 1,
        leads: 0,
        datePosted: 'Just now',
        featured: true,
        timestamp: Date.now()
      };

      // Add to main marketplace catalog at the front
      this.items.unshift(newListing);
      this.myListings.unshift(newListing);

      // Reset form
      this.postForm.title = '';
      this.postForm.price = '';
      this.postForm.description = '';

      this.showToast(`Ad "${newListing.title}" published to live feed!`);
      this.setActiveTab('dashboard');
    },

    quickEditPrice(ad) {
      const newPrice = prompt(`Enter new price for "${ad.title}":`, ad.price);
      if (newPrice !== null && !isNaN(newPrice) && Number(newPrice) > 0) {
        ad.price = Number(newPrice);
        // Also update in main items list
        const match = this.items.find(i => i.id === ad.id);
        if (match) match.price = ad.price;
        this.showToast(`Updated price to $${ad.price.toLocaleString()}`);
      }
    },

    deleteVendorAd(adId) {
      if (confirm('Are you sure you want to remove this active listing from the marketplace?')) {
        this.myListings = this.myListings.filter(a => a.id !== adId);
        this.items = this.items.filter(a => a.id !== adId);
        this.showToast('Listing successfully archived.');
      }
    },

    // --- Toast Helper ---
    showToast(msg) {
      if (this.toast.timer) clearTimeout(this.toast.timer);
      this.toast.message = msg;
      this.toast.visible = true;
      this.toast.timer = setTimeout(() => {
        this.toast.visible = false;
      }, 3500);
    }
  };
};
