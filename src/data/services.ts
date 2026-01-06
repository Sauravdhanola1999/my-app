import {
  Paintbrush,
  Droplets,
  Wallpaper,
  Sofa,
  Brush,
  Hammer,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  features: string[];
  process: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "home-painting",
    title: "Home Painting",
    shortDescription: "Interior & exterior painting with premium finishes.",
    icon: Paintbrush,
    description: "At Colourfull Homes, we believe your home deserves more than just paint — it deserves personality, protection, and perfection. Our professional home painting services are designed to transform your interiors and exteriors with flawless finishes, vibrant colors, and long-lasting results.",
    features: [
      "Interior Home Painting - Refresh your living spaces with smooth finishes and modern color combinations that enhance comfort and style",
      "Exterior Home Painting - Protect your home from weather damage while improving curb appeal with durable, weather-resistant paints",
      "Wall Preparation & Finishing - We ensure proper surface cleaning, crack filling, sanding, and priming for a perfect and long-lasting finish",
      "Color Consultation - Not sure which shade suits your home? Our experts help you choose the right colors to match your taste and lighting"
    ],
    process: [
      "Site inspection & consultation",
      "Surface preparation",
      "Primer application",
      "Final paint coats",
      "Cleanup & quality check"
    ],
    benefits: [
      "Skilled & experienced painters",
      "Premium quality paints & materials",
      "Clean, safe, and dust-free process",
      "On-time project completion",
      "Transparent pricing with no hidden costs"
    ],
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    shortDescription: "Protect your home from leaks and dampness.",
    icon: Droplets,
    description: "Waterproofing is one of the most critical yet often overlooked aspects of home protection. At Colourfull Homes, we provide professional waterproofing solutions designed to safeguard your property from water seepage, dampness, leakage, and long-term structural damage. With changing weather conditions and heavy monsoons, especially in India, proper waterproofing is not a luxury—it's a necessity.",
    features: [
      "Terrace & Roof Waterproofing – Prevents rainwater leakage and protects slabs from cracks and weather damage",
      "Bathroom & Kitchen Waterproofing – Stops water seepage that causes damp patches and damage to adjacent walls",
      "External Wall Waterproofing – Shields exterior surfaces from rain, humidity, and pollution",
      "Basement & Foundation Waterproofing – Protects the core structure from groundwater seepage",
      "Crack Filling & Leakage Repair – Targets problem areas with precision treatment"
    ],
    process: [
      "Detailed site inspection to identify root cause",
      "Assessment and recommendation of effective solution",
      "Surface preparation and cleaning",
      "Application of waterproofing materials",
      "Curing process and quality verification"
    ],
    benefits: [
      "Trained and experienced waterproofing professionals",
      "Customized solutions for each problem area",
      "High-quality materials and modern techniques",
      "Clean, safe, and timely execution",
      "Long-term protection and peace of mind"
    ],
  },
  {
    slug: "wall-textures",
    title: "Wall Textures",
    shortDescription: "Stylish textures to elevate your interiors.",
    icon: Brush,
    description: "Walls play a major role in defining the personality of a home. Plain painted walls can look elegant, but textured walls add depth, character, and a designer touch that instantly elevates your interiors. At Colourfull Homes, our Wall Texture Services are crafted to transform ordinary walls into stunning visual features that reflect your style and enhance your living spaces.",
    features: [
      "Modern and contemporary textures for stylish interiors",
      "Classic and subtle textures for elegant, timeless looks",
      "Concrete and rustic textures for industrial-style homes",
      "Designer accent wall textures for feature walls"
    ],
    process: [
      "Design consultation and texture selection",
      "Surface preparation and leveling",
      "Texture application by skilled professionals",
      "Final finishing and sealing",
      "Quality inspection",
      "Final touch-ups and handover"
    ],
    benefits: [
      "Hide minor wall imperfections and uneven surfaces",
      "Enhance wall durability and resistance to wear",
      "Add depth and luxury to interiors",
      "Easy to maintain compared to frequent repainting",
      "Textured walls work beautifully with lighting"
    ],
  },
  {
    slug: "wallpapers-panels",
    title: "Wallpapers & Panels",
    shortDescription: "Elegant wall coverings for modern homes.",
    icon: Wallpaper,
    description: "Walls are more than just boundaries—they are a canvas that defines the mood and style of your home. If you want to add elegance, warmth, or a bold design statement to your interiors, Wallpaper & Wall Panel Services by Colourfull Homes offer the perfect solution. With a wide range of designs, textures, and finishes, we help you transform ordinary walls into stunning focal points.",
    features: [
      "Designer wallpapers for living rooms and bedrooms",
      "Minimal and textured wallpapers for modern interiors",
      "Floral, geometric, and artistic patterns for feature walls",
      "Washable and durable wallpapers suitable for long-term use",
      "PVC and MDF wall panels for durability and style",
      "3D wall panels for dramatic and modern effects",
      "Wooden and laminate panels for warmth and elegance",
      "Decorative panels for TV units, bedrooms, and accent walls"
    ],
    process: [
      "Design consultation and selection",
      "Wall measurement and preparation",
      "Pattern matching and cutting",
      "Professional installation with proper alignment",
      "Seam finishing and trimming",
      "Final inspection and cleanup"
    ],
    benefits: [
      "Enhance the visual appeal of interiors instantly",
      "Hide minor wall imperfections and uneven surfaces",
      "Durable, long-lasting, and easy to maintain",
      "Create unique feature walls without heavy renovation",
      "Offer a premium finish compared to regular paint"
    ],
  },
  {
    slug: "wood-polish",
    title: "Wood Polish",
    shortDescription: "Restore and protect wooden surfaces.",
    icon: Sofa,
    description: "Wooden furniture and interiors bring warmth, elegance, and timeless charm to any home. Over time, however, wood can lose its natural shine due to dust, moisture, scratches, and daily wear. At Colourfull Homes, our professional Wood Polish Services are designed to restore, protect, and enhance the beauty of your wooden surfaces—making them look as good as new.",
    features: [
      "Natural wood finish polishing to retain the original grain and texture",
      "Gloss and semi-gloss polishing for a rich, luxurious look",
      "Matte finish polishing for modern and minimal interiors",
      "Restoration polishing for old, dull, or scratched furniture"
    ],
    process: [
      "Assessment of wood condition",
      "Surface preparation and sanding",
      "Polish type recommendation and selection",
      "Polish and finish application",
      "Buffing and polishing",
      "Final inspection and handover"
    ],
    benefits: [
      "Experienced professionals with attention to detail",
      "Top-quality materials for long-lasting results",
      "On-time completion with minimal disruption",
      "Furniture safety with proper covering and handling",
      "Post-service cleanup for a neat finish"
    ],
  },
  {
    slug: "furniture-design",
    title: "Furniture Design",
    shortDescription: "Custom furniture made for your space.",
    icon: Hammer,
    description: "Furniture is more than just functional—it defines comfort, style, and the way you experience your living space. At Colourfull Homes, our Furniture Designing & Manufacturing Services are tailored to create custom-made furniture that perfectly matches your lifestyle, interior design, and space requirements. From concept to completion, we deliver furniture that blends aesthetics, durability, and craftsmanship.",
    features: [
      "Living room furniture (sofas, TV units, coffee tables)",
      "Bedroom furniture (beds, wardrobes, side tables)",
      "Dining tables and storage units",
      "Modular and custom cabinets",
      "Office and commercial furniture"
    ],
    process: [
      "Design consultation and space measurement",
      "Custom design creation and 3D visualization",
      "Material selection and approval",
      "Precision manufacturing with quality materials",
      "Professional installation and assembly",
      "Final inspection and quality check"
    ],
    benefits: [
      "Customized designs tailored to your needs",
      "Skilled designers and craftsmen",
      "Premium-quality materials and finishes",
      "Transparent pricing with no hidden costs",
      "On-time delivery and professional installation"
    ],
  },
];
