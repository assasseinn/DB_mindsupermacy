/**
 * Responsive utility functions and constants for MindSupremacy
 */

// Breakpoint constants matching Tailwind CSS
export const BREAKPOINTS = {
  sm: 640,  // Small devices (landscape phones, 640px and up)
  md: 768,  // Medium devices (tablets, 768px and up)
  lg: 1024, // Large devices (desktops, 1024px and up)
  xl: 1280, // Extra large devices (large desktops, 1280px and up)
  '2xl': 1536, // 2X Extra large devices (larger desktops, 1536px and up)
} as const;

// Responsive text size utilities
export const responsiveTextSizes = {
  xs: 'text-xs sm:text-sm',
  sm: 'text-sm sm:text-base',
  base: 'text-sm sm:text-base md:text-lg',
  lg: 'text-base sm:text-lg md:text-xl',
  xl: 'text-lg sm:text-xl md:text-2xl',
  '2xl': 'text-xl sm:text-2xl md:text-3xl',
  '3xl': 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  '4xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
} as const;

// Responsive spacing utilities
export const responsiveSpacing = {
  padding: {
    container: 'px-4 md:px-6 lg:px-8',
    section: 'py-8 md:py-12 lg:py-16',
    component: 'p-4 md:p-6',
  },
  margin: {
    section: 'mb-8 md:mb-12 lg:mb-16',
    component: 'mb-4 md:mb-6',
  },
  gap: {
    grid: 'gap-4 md:gap-6 lg:gap-8',
    flex: 'space-x-2 md:space-x-4',
  },
} as const;

// Hook to detect current breakpoint (for use in React components)
export const useBreakpoint = () => {
  if (typeof window === 'undefined') return 'lg'; // Default for SSR
  
  const width = window.innerWidth;
  
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
};

// Utility function to combine responsive classes
export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Common responsive patterns
export const responsivePatterns = {
  // Grid layouts
  heroGrid: 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12',
  contentGrid: 'grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12',
  cardGrid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
  
  // Flex layouts
  centerFlex: 'flex flex-col md:flex-row items-center justify-center',
  spaceBetweenFlex: 'flex flex-col md:flex-row items-center justify-between',
  
  // Navigation
  mobileMenu: 'hidden md:flex items-center space-x-6',
  mobileMenuButton: 'md:hidden flex items-center justify-center',
  
  // Buttons
  primaryButton: 'px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg',
  secondaryButton: 'px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm',
} as const;

export default {
  BREAKPOINTS,
  responsiveTextSizes,
  responsiveSpacing,
  responsivePatterns,
  useBreakpoint,
  cn,
};