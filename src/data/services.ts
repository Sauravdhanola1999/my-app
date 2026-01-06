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
    description: "Transform your home with professional interior and exterior painting services. We use premium quality paints and skilled professionals to give your home a fresh, beautiful look that lasts for years.",
    features: [
      "Interior wall painting with premium finishes",
      "Exterior wall painting with weather-resistant paints",
      "Ceiling painting and texture work",
      "Color consultation and selection",
      "Furniture and floor protection during work",
      "Post-service cleaning included"
    ],
    process: [
      "Free site visit and consultation",
      "Color selection and material recommendation",
      "Surface preparation and priming",
      "Professional painting application",
      "Quality inspection and touch-ups",
      "Final cleaning and handover"
    ],
    benefits: [
      "Enhanced aesthetic appeal of your home",
      "Increased property value",
      "Protection against weather and wear",
      "Long-lasting finish with premium paints",
      "Professional execution with zero mess"
    ],
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    shortDescription: "Protect your home from leaks and dampness.",
    icon: Droplets,
    description: "Comprehensive waterproofing solutions to protect your home from water damage, leaks, and dampness. Our expert team uses advanced techniques and premium materials to ensure your home stays dry and protected.",
    features: [
      "Terrace and roof waterproofing",
      "Bathroom waterproofing solutions",
      "Basement and foundation protection",
      "Wall waterproofing for dampness",
      "Crack sealing and repair",
      "Long-term warranty on work"
    ],
    process: [
      "Detailed inspection of problem areas",
      "Root cause analysis and solution design",
      "Surface preparation and cleaning",
      "Application of waterproofing membranes",
      "Quality testing and verification",
      "Post-installation support"
    ],
    benefits: [
      "Complete protection from water damage",
      "Prevents structural damage and cracks",
      "Eliminates dampness and mold growth",
      "Increases home durability and lifespan",
      "Peace of mind with professional guarantee"
    ],
  },
  {
    slug: "wall-textures",
    title: "Wall Textures",
    shortDescription: "Stylish textures to elevate your interiors.",
    icon: Brush,
    description: "Add depth and character to your walls with modern texture solutions. From smooth Venetian plaster to dramatic 3D textures, we offer a wide range of options to match your style and budget.",
    features: [
      "Venetian plaster finishes",
      "Textured paint applications",
      "3D wall panel installations",
      "Brick and stone textures",
      "Custom texture designs",
      "Color matching and blending"
    ],
    process: [
      "Design consultation and texture selection",
      "Surface preparation and priming",
      "Texture application by skilled craftsmen",
      "Finishing and sealing",
      "Quality inspection",
      "Final touch-ups and handover"
    ],
    benefits: [
      "Adds visual interest and depth to walls",
      "Hides imperfections and cracks",
      "Modern and stylish appearance",
      "Easy to maintain and clean",
      "Increases home value"
    ],
  },
  {
    slug: "wallpapers-panels",
    title: "Wallpapers & Panels",
    shortDescription: "Elegant wall coverings for modern homes.",
    icon: Wallpaper,
    description: "Transform your walls with premium wallpapers and decorative panels. Choose from thousands of designs, patterns, and materials to create stunning feature walls and complete room makeovers.",
    features: [
      "Premium wallpaper installation",
      "Decorative wall panels",
      "3D wall panels",
      "Custom design options",
      "Pattern matching and alignment",
      "Seamless installation"
    ],
    process: [
      "Design consultation and selection",
      "Wall measurement and preparation",
      "Pattern matching and cutting",
      "Professional installation",
      "Seam finishing and trimming",
      "Final inspection and cleanup"
    ],
    benefits: [
      "Quick transformation of any space",
      "Wide variety of designs and patterns",
      "Easy to replace and update",
      "Durable and long-lasting",
      "Adds personality to your home"
    ],
  },
  {
    slug: "wood-polish",
    title: "Wood Polish",
    shortDescription: "Restore and protect wooden surfaces.",
    icon: Sofa,
    description: "Professional wood polishing and finishing services to restore the natural beauty of your wooden furniture, doors, and surfaces. We use premium polishes and techniques to give your wood a like-new appearance.",
    features: [
      "Furniture polishing and restoration",
      "Wooden door and window finishing",
      "Floor polishing and refinishing",
      "Antique furniture restoration",
      "Protective coating application",
      "Scratch and damage repair"
    ],
    process: [
      "Assessment of wood condition",
      "Surface preparation and sanding",
      "Stain selection and application",
      "Polish and finish application",
      "Buffing and polishing",
      "Protective coating and handover"
    ],
    benefits: [
      "Restores natural wood beauty",
      "Protects from wear and damage",
      "Increases furniture lifespan",
      "Enhances home aesthetics",
      "Adds value to wooden items"
    ],
  },
  {
    slug: "furniture-design",
    title: "Furniture Design",
    shortDescription: "Custom furniture made for your space.",
    icon: Hammer,
    description: "Custom furniture design and manufacturing services to create pieces that perfectly fit your space and style. From concept to completion, we design and build furniture that meets your exact requirements.",
    features: [
      "Custom furniture design",
      "Modular furniture solutions",
      "Kitchen cabinets and storage",
      "Wardrobes and closets",
      "Living room furniture",
      "Complete interior furniture packages"
    ],
    process: [
      "Space measurement and consultation",
      "Design and 3D visualization",
      "Material selection and approval",
      "Manufacturing and quality control",
      "Installation and assembly",
      "Final inspection and adjustments"
    ],
    benefits: [
      "Perfect fit for your space",
      "Customized to your style",
      "High-quality materials and craftsmanship",
      "Maximizes space utilization",
      "Unique pieces designed for you"
    ],
  },
];
