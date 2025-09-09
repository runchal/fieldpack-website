export const siteContent = {
  // Site-wide settings
  siteName: "Nexus",
  
  // Hero Section
  hero: {
    headline: "Autonomous defense systems for contested environments",
    subtitle: "We're building the next generation of AI-powered defense technology that operates independently in denied and disrupted environments.",
    primaryButton: "Request information",
    secondaryButton: "Partnership inquiry"
  },

  // About Section  
  about: {
    title: "What we're building",
    description: [
      "Nexus develops autonomous AI systems that integrate quantum-resistant cryptography with real-time battlefield intelligence. Our technology operates independently in GPS-denied and communications-disrupted environments.",
      "Founded by former DARPA researchers and Silicon Valley veterans, we're backed by Andreessen Horowitz and strategic defense investors with $45M in Series A funding.",
      "Currently in stealth development with active contracts across SOCOM, Space Force, and classified programs."
    ],
    capabilities: {
      title: "Core capabilities",
      items: [
        "Autonomous AI for threat assessment and response coordination",
        "Post-quantum encryption built into custom silicon", 
        "Space-hardened computing for orbital platforms",
        "Multi-spectral sensor fusion with AI targeting"
      ]
    },
    stats: [
      { value: "$45M", label: "Series A funding" },
      { value: "TS/SCI", label: "Security clearance" }
    ]
  },

  // Contact Section
  contact: {
    title: "Get in touch",
    description: [
      "We're looking for strategic partners, government customers, and exceptional talent with security clearances.",
      "All inquiries are reviewed within 24 hours. For technical discussions, NDAs and ITAR compliance are required."
    ],
    email: "partnerships@nexus-systems.com",
    locations: [
      "Palo Alto, CA • SCIF-enabled facility",
      "Arlington, VA • Pentagon liaison office"
    ],
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      organizationLabel: "Organization", 
      organizationPlaceholder: "Company/Agency",
      emailLabel: "Email",
      emailPlaceholder: "your.email@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Describe your operational requirements or partnership interest...",
      submitButton: "Send secure message"
    }
  },

  // Missions Section
  missions: {
    title: "Missions we serve",
    subtitle: "Nexus delivers proven capabilities across defense, space, and critical infrastructure missions.",
    items: [
      {
        title: "Base Security",
        description: "Close base security gaps by unifying fragmented force protection systems into a cohesive network.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2940&auto=format&fit=crop"
      },
      {
        title: "Satellite Operations",
        description: "Unify legacy and next-gen satellites with standardized interfaces to enable scalable autonomy and real-time space ops.", 
        image: "https://images.unsplash.com/photo-1446776876821-1c60cbe3ffb4?q=80&w=2940&auto=format&fit=crop"
      },
      {
        title: "Naval Defense",
        description: "Unify vendor-specific naval defense assets into a fast, integrated operational picture without falling into stovepiped systems.",
        image: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=2934&auto=format&fit=crop"
      }
    ]
  },

  // Navigation
  navigation: {
    brand: "Nexus",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "#contact" }
    ]
  }
};