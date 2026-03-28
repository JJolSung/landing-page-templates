export interface Template {
  slug: string;
  name: string;
  category:
    | "SaaS"
    | "Restaurant"
    | "Fitness"
    | "Real Estate"
    | "Medical"
    | "E-commerce"
    | "Education"
    | "Mobile App";
  description: string;
  designStyle: string;
  colors: {
    primary: string;
    accent: string;
    bg: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  features: string[];
  sectionCount: number;
}

export const templates: Template[] = [
  {
    slug: "saas",
    name: "SaaS Product",
    category: "SaaS",
    description:
      "Modern dark-themed landing page for SaaS products and developer tools. Inspired by Linear, Vercel, and Raycast.",
    designStyle: "Modern Dark Tech",
    colors: {
      primary: "#8b5cf6",
      accent: "#a78bfa",
      bg: "#09090b",
    },
    fonts: {
      heading: "Space Grotesk",
      body: "DM Sans",
    },
    features: [
      "Responsive design",
      "Scroll animations",
      "Interactive pricing table",
      "FAQ accordion",
      "CSS dashboard mockup",
      "Logo scroll banner",
    ],
    sectionCount: 9,
  },
  {
    slug: "restaurant",
    name: "Restaurant & Café",
    category: "Restaurant",
    description:
      "Warm and luxurious landing page for fine dining restaurants and cafés. Michelin-guide inspired elegance.",
    designStyle: "Warm Luxury Dining",
    colors: {
      primary: "#1a3a2a",
      accent: "#c8a55a",
      bg: "#fef7ed",
    },
    fonts: {
      heading: "Playfair Display",
      body: "Lato",
    },
    features: [
      "Responsive design",
      "Menu with category tabs",
      "Reservation form",
      "Decorative CSS borders",
      "Elegant gallery grid",
      "Scroll animations",
    ],
    sectionCount: 8,
  },
  {
    slug: "fitness",
    name: "Fitness & Gym",
    category: "Fitness",
    description:
      "High-energy bold landing page for gyms and fitness studios. Nike and CrossFit inspired design.",
    designStyle: "Bold Sports Energy",
    colors: {
      primary: "#000000",
      accent: "#39ff14",
      bg: "#000000",
    },
    fonts: {
      heading: "Oswald",
      body: "Roboto",
    },
    features: [
      "Responsive design",
      "Diagonal section dividers",
      "Weekly schedule table",
      "Membership pricing",
      "Trainer profiles",
      "Scroll animations",
    ],
    sectionCount: 9,
  },
  {
    slug: "realestate",
    name: "Real Estate",
    category: "Real Estate",
    description:
      "Luxury minimalist landing page for high-end real estate agencies. Elegant serif typography with champagne gold accents.",
    designStyle: "Luxury Modern Minimal",
    colors: {
      primary: "#2d2d2d",
      accent: "#c9a96e",
      bg: "#ffffff",
    },
    fonts: {
      heading: "Cormorant Garamond",
      body: "Outfit",
    },
    features: [
      "Responsive design",
      "Property search bar",
      "Horizontal scroll listings",
      "Count-up statistics",
      "Testimonial slider",
      "Newsletter signup",
    ],
    sectionCount: 8,
  },
  {
    slug: "medical",
    name: "Medical Clinic",
    category: "Medical",
    description:
      "Clean, trust-focused landing page for healthcare clinics and telehealth services. Calming teal tones with clinical precision.",
    designStyle: "Clean Clinical Trust",
    colors: {
      primary: "#0d9488",
      accent: "#14b8a6",
      bg: "#f0fdfa",
    },
    fonts: {
      heading: "Poppins",
      body: "Source Sans 3",
    },
    features: [
      "Responsive design",
      "Department/service cards",
      "Doctor profiles",
      "Appointment booking form",
      "Trust badges & certifications",
      "Scroll animations",
    ],
    sectionCount: 8,
  },
  {
    slug: "ecommerce",
    name: "E-commerce Product",
    category: "E-commerce",
    description:
      "Vibrant product launch page for DTC brands and e-commerce stores. Conversion-focused with bold visuals.",
    designStyle: "Vibrant DTC Brand",
    colors: {
      primary: "#f43f5e",
      accent: "#fb7185",
      bg: "#fffbf5",
    },
    fonts: {
      heading: "Sora",
      body: "Libre Franklin",
    },
    features: [
      "Responsive design",
      "Product showcase with features",
      "Social proof section",
      "Before/after comparison",
      "FAQ accordion",
      "Limited-time offer banner",
    ],
    sectionCount: 8,
  },
  {
    slug: "course",
    name: "Online Course",
    category: "Education",
    description:
      "Inspiring landing page for online courses, coaching programs, and webinars. Warm and approachable design.",
    designStyle: "Warm Educational",
    colors: {
      primary: "#312e81",
      accent: "#f59e0b",
      bg: "#fefce8",
    },
    fonts: {
      heading: "Plus Jakarta Sans",
      body: "Nunito",
    },
    features: [
      "Responsive design",
      "Curriculum/module outline",
      "Instructor profile",
      "Student testimonials",
      "Pricing with guarantee",
      "Enrollment countdown",
    ],
    sectionCount: 8,
  },
  {
    slug: "app",
    name: "Mobile App",
    category: "Mobile App",
    description:
      "Fresh, gradient-rich landing page for mobile apps and startups. Modern and playful with app store integration.",
    designStyle: "Fresh Startup Gradient",
    colors: {
      primary: "#6366f1",
      accent: "#a855f7",
      bg: "#0f172a",
    },
    fonts: {
      heading: "Manrope",
      body: "Inter",
    },
    features: [
      "Responsive design",
      "App store download buttons",
      "Feature showcase with phone mockup",
      "Animated statistics",
      "User testimonials",
      "Waitlist signup form",
    ],
    sectionCount: 8,
  },
];
