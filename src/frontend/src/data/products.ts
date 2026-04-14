import type { Category, Product } from "../types";

export const products: Product[] = [
  // ── Guest Amenities ──────────────────────────────────────────────────
  {
    id: "ga-001",
    name: "Luxury Shampoo & Conditioner Set",
    sku: "ZA-GA-001",
    category: "guest-amenities",
    description:
      "Premium hotel-grade shampoo and conditioner formulated with botanical extracts. Suitable for all hair types. Elegantly packaged for 4- and 5-star properties.",
    specs: [
      { label: "Volume", value: "2 × 30 ml" },
      { label: "Fragrance", value: "Sandalwood & Jasmine" },
      { label: "MOQ", value: "500 sets" },
      { label: "Packaging", value: "Recyclable PET" },
    ],
    imageUrl: "https://placehold.co/400x300/e8e4dc/5c5146?text=Shampoo+Set",
    relatedIds: ["ga-002", "ga-003", "ga-004"],
  },
  {
    id: "ga-002",
    name: "Guest Body Lotion & Shower Gel",
    sku: "ZA-GA-002",
    category: "guest-amenities",
    description:
      "Moisturising body lotion and refreshing shower gel infused with shea butter and green tea extracts. Dermatologist-tested for sensitive skin.",
    specs: [
      { label: "Volume", value: "2 × 30 ml" },
      { label: "Fragrance", value: "Green Tea & Shea" },
      { label: "MOQ", value: "500 sets" },
      { label: "Packaging", value: "Recyclable PET" },
    ],
    imageUrl: "https://placehold.co/400x300/e8e4dc/5c5146?text=Body+Lotion",
    relatedIds: ["ga-001", "ga-003", "ga-004"],
  },
  {
    id: "ga-003",
    name: "Premium Terry Towel Set",
    sku: "ZA-GA-003",
    category: "guest-amenities",
    description:
      "500 GSM Egyptian cotton towel sets including bath towel, hand towel, and face cloth. Certified Oeko-Tex Standard 100 for guest safety.",
    specs: [
      { label: "GSM", value: "500" },
      { label: "Material", value: "100% Egyptian Cotton" },
      { label: "Set Contents", value: "Bath + Hand + Face cloth" },
      { label: "MOQ", value: "100 sets" },
    ],
    imageUrl: "https://placehold.co/400x300/e8e4dc/5c5146?text=Towel+Set",
    relatedIds: ["ga-001", "ga-002", "ga-004"],
  },
  {
    id: "ga-004",
    name: "Deluxe Amenity Kit",
    sku: "ZA-GA-004",
    category: "guest-amenities",
    description:
      "Comprehensive guest amenity kit featuring toothbrush, toothpaste, comb, shaving kit, sewing kit, and shoe polish cloth in a branded pouch.",
    specs: [
      { label: "Contents", value: "8-piece kit" },
      { label: "Pouch Material", value: "Non-woven fabric" },
      { label: "Customisation", value: "Logo printing available" },
      { label: "MOQ", value: "200 kits" },
    ],
    imageUrl: "https://placehold.co/400x300/e8e4dc/5c5146?text=Amenity+Kit",
    relatedIds: ["ga-001", "ga-002", "ga-003"],
  },
  {
    id: "ga-005",
    name: "Minibar Snack & Beverage Selection",
    sku: "ZA-GA-005",
    category: "guest-amenities",
    description:
      "Curated minibar selection including premium teas, instant coffees, mineral water, and assorted snacks. Individually wrapped and date-stamped.",
    specs: [
      { label: "Items per tray", value: "12 pieces" },
      { label: "Shelf Life", value: "12 months" },
      { label: "Dietary", value: "Vegetarian options available" },
      { label: "MOQ", value: "50 trays" },
    ],
    imageUrl: "https://placehold.co/400x300/e8e4dc/5c5146?text=Minibar+Items",
    relatedIds: ["ga-001", "ga-002", "ga-004"],
  },
  {
    id: "ga-006",
    name: "Waffle Bathrobe",
    sku: "ZA-GA-006",
    category: "guest-amenities",
    description:
      "Lightweight waffle-weave bathrobe ideal for spa and hotel use. Quick-drying, durable, and available in standard and XL sizing.",
    specs: [
      { label: "GSM", value: "300" },
      { label: "Material", value: "100% Cotton Waffle" },
      { label: "Sizes", value: "M, L, XL" },
      { label: "MOQ", value: "50 units" },
    ],
    imageUrl: "https://placehold.co/400x300/e8e4dc/5c5146?text=Bathrobe",
    relatedIds: ["ga-003", "ga-004", "ga-005"],
  },

  // ── Housekeeping Chemicals ────────────────────────────────────────────
  {
    id: "hc-001",
    name: "Multi-Surface Floor Cleaner",
    sku: "ZA-HC-001",
    category: "housekeeping-chemicals",
    description:
      "Professional-grade floor cleaner suitable for marble, tile, hardwood, and vinyl. Fast-acting formula with pleasant citrus fragrance. Safe for daily use.",
    specs: [
      { label: "Volume", value: "5 L" },
      { label: "Dilution", value: "1:20" },
      { label: "pH", value: "7.2 (neutral)" },
      { label: "Certifications", value: "ISO 9001 compliant" },
    ],
    imageUrl: "https://placehold.co/400x300/d8eadf/2d5a3d?text=Floor+Cleaner",
    relatedIds: ["hc-002", "hc-003", "hc-004"],
  },
  {
    id: "hc-002",
    name: "Concentrated Fabric Softener",
    sku: "ZA-HC-002",
    category: "housekeeping-chemicals",
    description:
      "Industrial-strength fabric softener delivering long-lasting freshness and softness to linens and towels. Compatible with all commercial laundry machines.",
    specs: [
      { label: "Volume", value: "10 L" },
      { label: "Dilution", value: "1:50" },
      { label: "Fragrance", value: "Fresh Linen" },
      { label: "MOQ", value: "20 units" },
    ],
    imageUrl: "https://placehold.co/400x300/d8eadf/2d5a3d?text=Fabric+Softener",
    relatedIds: ["hc-001", "hc-003", "hc-005"],
  },
  {
    id: "hc-003",
    name: "Hospital-Grade Disinfectant Spray",
    sku: "ZA-HC-003",
    category: "housekeeping-chemicals",
    description:
      "Broad-spectrum disinfectant effective against 99.9% of bacteria and viruses. EN 14476 certified. Ideal for high-touch surfaces in hotel rooms and public areas.",
    specs: [
      { label: "Volume", value: "5 L" },
      { label: "Contact Time", value: "30 seconds" },
      { label: "Certifications", value: "EN 14476, EN 1276" },
      { label: "MOQ", value: "20 units" },
    ],
    imageUrl: "https://placehold.co/400x300/d8eadf/2d5a3d?text=Disinfectant",
    relatedIds: ["hc-001", "hc-002", "hc-004"],
  },
  {
    id: "hc-004",
    name: "Professional Glass & Mirror Cleaner",
    sku: "ZA-HC-004",
    category: "housekeeping-chemicals",
    description:
      "Streak-free glass cleaner for windows, mirrors, and glass surfaces. Ammonia-free formulation safe for tinted glass and reflective surfaces.",
    specs: [
      { label: "Volume", value: "5 L" },
      { label: "Dilution", value: "Ready-to-use" },
      { label: "Fragrance", value: "Fragrance-free" },
      { label: "Finish", value: "Streak-free" },
    ],
    imageUrl: "https://placehold.co/400x300/d8eadf/2d5a3d?text=Glass+Cleaner",
    relatedIds: ["hc-001", "hc-003", "hc-005"],
  },
  {
    id: "hc-005",
    name: "Limescale & Descaler Solution",
    sku: "ZA-HC-005",
    category: "housekeeping-chemicals",
    description:
      "Fast-acting descaler for bathroom fixtures, kettles, and coffee machines. Removes limescale, rust, and mineral deposits without scratching surfaces.",
    specs: [
      { label: "Volume", value: "5 L" },
      { label: "Contact Time", value: "15–30 minutes" },
      { label: "pH", value: "2.0 (acidic)" },
      { label: "MOQ", value: "20 units" },
    ],
    imageUrl: "https://placehold.co/400x300/d8eadf/2d5a3d?text=Descaler",
    relatedIds: ["hc-002", "hc-003", "hc-004"],
  },

  // ── Housekeeping Tools ────────────────────────────────────────────────
  {
    id: "ht-001",
    name: "Professional Microfibre Mop Set",
    sku: "ZA-HT-001",
    category: "housekeeping-tools",
    description:
      "Heavy-duty microfibre flat mop system with telescopic handle and 5 washable mop heads. Reduces water usage by 70% vs traditional mop-and-bucket systems.",
    specs: [
      { label: "Handle Length", value: "90–150 cm (adjustable)" },
      { label: "Mop Width", value: "40 cm" },
      { label: "Washable", value: "Up to 500 washes" },
      { label: "MOQ", value: "20 sets" },
    ],
    imageUrl: "https://placehold.co/400x300/dce8f0/2b4a63?text=Mop+Set",
    relatedIds: ["ht-002", "ht-003", "ht-004"],
  },
  {
    id: "ht-002",
    name: "Lobby Broom & Dustpan Set",
    sku: "ZA-HT-002",
    category: "housekeeping-tools",
    description:
      "Ergonomic lobby broom with fine-bristle head for quiet operation on hard floors. Includes fitted dustpan with rubber lip for zero-gap sweeping.",
    specs: [
      { label: "Broom Width", value: "30 cm" },
      { label: "Handle Length", value: "120 cm" },
      { label: "Bristles", value: "Polypropylene, fine-grade" },
      { label: "MOQ", value: "10 sets" },
    ],
    imageUrl: "https://placehold.co/400x300/dce8f0/2b4a63?text=Broom+Set",
    relatedIds: ["ht-001", "ht-003", "ht-004"],
  },
  {
    id: "ht-003",
    name: "Heavy-Duty Housekeeping Trolley",
    sku: "ZA-HT-003",
    category: "housekeeping-tools",
    description:
      "Steel-frame housekeeping cart with linen bag, waste bin, and 4-shelf storage for chemicals, tools, and amenities. 360° swivel castors for effortless manoeuvrability.",
    specs: [
      { label: "Dimensions", value: "100 × 50 × 100 cm" },
      { label: "Capacity", value: "80 kg" },
      { label: "Frame", value: "Powder-coated steel" },
      { label: "MOQ", value: "5 units" },
    ],
    imageUrl:
      "https://placehold.co/400x300/dce8f0/2b4a63?text=Housekeeping+Cart",
    relatedIds: ["ht-001", "ht-002", "ht-004"],
  },
  {
    id: "ht-004",
    name: "Complete Room Cleaning Kit",
    sku: "ZA-HT-004",
    category: "housekeeping-tools",
    description:
      "All-in-one room attendant kit: colour-coded microfibre cloths (×10), toilet brush set, squeegee, spray bottles (×3), and caddy. Reduces cross-contamination risk.",
    specs: [
      { label: "Contents", value: "17-piece kit" },
      { label: "Colour Coding", value: "4 zones" },
      { label: "Caddy Material", value: "HDPE plastic" },
      { label: "MOQ", value: "10 kits" },
    ],
    imageUrl: "https://placehold.co/400x300/dce8f0/2b4a63?text=Cleaning+Kit",
    relatedIds: ["ht-001", "ht-002", "ht-003"],
  },
  {
    id: "ht-005",
    name: "Window Cleaning Kit with Telescopic Pole",
    sku: "ZA-HT-005",
    category: "housekeeping-tools",
    description:
      "Professional window cleaning set with 3-section telescopic pole (up to 5 m), squeegee, T-bar washer, and bucket. Ideal for atrium and high-rise hotel windows.",
    specs: [
      { label: "Pole Reach", value: "1.5–5 m" },
      { label: "Squeegee Width", value: "35 cm" },
      { label: "Material", value: "Aluminium pole, rubber blade" },
      { label: "MOQ", value: "10 sets" },
    ],
    imageUrl: "https://placehold.co/400x300/dce8f0/2b4a63?text=Window+Kit",
    relatedIds: ["ht-003", "ht-004", "ht-001"],
  },

  // ── Housekeeping Machines ─────────────────────────────────────────────
  {
    id: "hm-001",
    name: "Commercial Upright Vacuum Cleaner",
    sku: "ZA-HM-001",
    category: "housekeeping-machines",
    description:
      "High-performance upright vacuum with HEPA filtration for hotels and large facilities. 1400 W motor with 3-stage filtration captures 99.97% of particles ≥0.3 µm.",
    specs: [
      { label: "Motor Power", value: "1400 W" },
      { label: "Tank Capacity", value: "4.5 L" },
      { label: "Filtration", value: "HEPA H13" },
      { label: "Warranty", value: "2 years" },
    ],
    imageUrl: "https://placehold.co/400x300/e0dae8/3d2d5a?text=Vacuum+Cleaner",
    relatedIds: ["hm-002", "hm-003", "hm-004"],
  },
  {
    id: "hm-002",
    name: "Industrial Floor Scrubber",
    sku: "ZA-HM-002",
    category: "housekeeping-machines",
    description:
      "Battery-powered walk-behind floor scrubber for large-area cleaning. 45 cm disc brush covers 1,200 m²/hour. Suitable for lobbies, corridors, and banquet halls.",
    specs: [
      { label: "Working Width", value: "45 cm" },
      { label: "Productivity", value: "1,200 m²/h" },
      { label: "Battery Life", value: "2.5 hours" },
      { label: "Tank Capacity", value: "25 L (each)" },
    ],
    imageUrl: "https://placehold.co/400x300/e0dae8/3d2d5a?text=Floor+Scrubber",
    relatedIds: ["hm-001", "hm-003", "hm-004"],
  },
  {
    id: "hm-003",
    name: "Professional Steam Cleaner",
    sku: "ZA-HM-003",
    category: "housekeeping-machines",
    description:
      "Multi-function steam cleaner for deep sanitisation without chemicals. Reaches 155°C for eliminating bed bugs, dust mites, and bacteria on soft and hard surfaces.",
    specs: [
      { label: "Steam Temperature", value: "155°C" },
      { label: "Boiler Capacity", value: "1.8 L" },
      { label: "Heat-up Time", value: "8 minutes" },
      { label: "Accessories", value: "14-piece attachment set" },
    ],
    imageUrl: "https://placehold.co/400x300/e0dae8/3d2d5a?text=Steam+Cleaner",
    relatedIds: ["hm-001", "hm-002", "hm-004"],
  },
  {
    id: "hm-004",
    name: "Carpet Extraction Machine",
    sku: "ZA-HM-004",
    category: "housekeeping-machines",
    description:
      "Deep-clean carpet extractor for conference rooms, guest corridors, and restaurants. Dual-pump system delivers and recovers hot water for rapid drying.",
    specs: [
      { label: "Cleaning Width", value: "30 cm" },
      { label: "Vacuum Power", value: "1200 W" },
      { label: "Water Temperature", value: "Up to 60°C" },
      { label: "Tank Capacity", value: "10 L (each)" },
    ],
    imageUrl:
      "https://placehold.co/400x300/e0dae8/3d2d5a?text=Carpet+Extractor",
    relatedIds: ["hm-001", "hm-002", "hm-003"],
  },
  {
    id: "hm-005",
    name: "High-Speed Floor Polisher",
    sku: "ZA-HM-005",
    category: "housekeeping-machines",
    description:
      "1500 RPM burnisher for restoring high-gloss finish on marble, terrazzo, and vinyl floors. Lightweight ergonomic design reduces operator fatigue during extended use.",
    specs: [
      { label: "Speed", value: "1500 RPM" },
      { label: "Disc Size", value: "43 cm" },
      { label: "Motor", value: "1100 W" },
      { label: "Warranty", value: "2 years" },
    ],
    imageUrl: "https://placehold.co/400x300/e0dae8/3d2d5a?text=Floor+Polisher",
    relatedIds: ["hm-002", "hm-003", "hm-004"],
  },
];

export const categories: Category[] = [
  {
    id: "guest-amenities",
    name: "Guest Amenities",
    description:
      "Luxury toiletries, premium linens, and curated minibar selections to create memorable guest experiences in 4- and 5-star properties.",
    imageUrl: "https://placehold.co/600x400/e8e4dc/5c5146?text=Guest+Amenities",
    productCount: 6,
  },
  {
    id: "housekeeping-chemicals",
    name: "Housekeeping Chemicals",
    description:
      "Professional cleaning solutions, disinfectants, and laundry chemicals for daily housekeeping operations with certified efficacy.",
    imageUrl:
      "https://placehold.co/600x400/d8eadf/2d5a3d?text=Housekeeping+Chemicals",
    productCount: 5,
  },
  {
    id: "housekeeping-tools",
    name: "Housekeeping Tools",
    description:
      "Ergonomic mops, colour-coded cleaning systems, trolleys, and equipment sets that improve efficiency and reduce cross-contamination.",
    imageUrl:
      "https://placehold.co/600x400/dce8f0/2b4a63?text=Housekeeping+Tools",
    productCount: 5,
  },
  {
    id: "housekeeping-machines",
    name: "Housekeeping Machines",
    description:
      "Industrial-grade vacuums, floor scrubbers, steam cleaners, and carpet extractors engineered for high-volume hospitality environments.",
    imageUrl:
      "https://placehold.co/600x400/e0dae8/3d2d5a?text=Housekeeping+Machines",
    productCount: 5,
  },
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.category === categoryId);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedIds
    .map((id) => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
