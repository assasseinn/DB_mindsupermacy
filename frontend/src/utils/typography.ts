// Typography utility for MindSupremacy

export const typography = {
  fontFamily: {
    // Using system fonts that closely match our desired fonts
    heading: '"Montserrat", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
    quote: '"Playfair Display", Georgia, serif'
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  fontSize: {
    headline: 'text-5xl md:text-6xl lg:text-7xl',
    subheading: 'text-xl md:text-2xl lg:text-3xl',
    body: 'text-base md:text-lg',
    quote: 'text-xl md:text-2xl italic',
    cta: 'text-base md:text-lg font-semibold'
  }
};

export const colors = {
  primary: '#0D0F18', // Deep background
  secondary: '#1A1D2D', // Secondary background
  accent: '#B38D4D', // Gold accent
  text: {
    primary: '#FFFFFF',
    secondary: '#D0D0D8',
    accent: '#B38D4D'
  },
  glow: {
    primary: '#B38D4D33', // Gold glow with transparency
    secondary: '#5038CE33' // Purple glow with transparency
  }
};
