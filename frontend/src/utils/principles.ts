// Data for the 7 Forbidden Principles

export interface Principle {
  id: string;
  title: string;
  description: string;
  iconType: string;
}

export const principles: Principle[] = [
  {
    id: "three-feet",
    title: "3 Feet from Gold Principle",
    description: "Many give up just before breakthrough. Discover how to recognize when you're closest to success and develop the persistence to push through.",
    iconType: "mine"
  },
  {
    id: "two-selves",
    title: "Taming Your Two Selves",
    description: "Learn to recognize and control the constant battle between your higher and lower self, allowing you to make decisions aligned with your true goals.",
    iconType: "duality"
  },
  {
    id: "hypnotic-rhythm",
    title: "Hypnotic Rhythm of Success",
    description: "Master the hidden frequency patterns that govern all achievement and learn to synchronize your actions with universal success principles.",
    iconType: "rhythm"
  },
  {
    id: "definiteness",
    title: "Definiteness of Purpose Formula",
    description: "Discover the exact template for crafting goals with such clarity and emotional potency that their achievement becomes inevitable.",
    iconType: "target"
  },
  {
    id: "adversity-alchemy",
    title: "Adversity Alchemy System",
    description: "Transform every obstacle and failure into fuel for your success through this ancient process of mental transmutation.",
    iconType: "alchemy"
  },
  {
    id: "time-wealth",
    title: "Time Wealth Framework",
    description: "Break free from the time-money trap and discover how to create exponential results while reclaiming your most precious resource.",
    iconType: "hourglass"
  },
  {
    id: "decision-immunity",
    title: "Decision Immunity Training",
    description: "Develop the rare ability to make powerful decisions without being swayed by external influences, fear, or the need for approval.",
    iconType: "shield"
  }
];