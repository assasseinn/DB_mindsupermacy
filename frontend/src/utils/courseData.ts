// Detailed content for the 7 Forbidden Principles

export interface ChapterData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyTakeaways: string[];
  realWorldExample: string;
  implementationSteps: string[];
  practiceExercise: string;
  audioLength: string; // in format "00:00:00"
  iconType: string;
  timestamp: string; // Timestamp in the full audio
}

// Total course duration
export const totalCourseDuration = "03:30:00";

export const chapters: ChapterData[] = [
  {
    id: "three-feet",
    title: "3 Feet from Gold Principle",
    shortDescription: "Many give up just before breakthrough. Discover how to recognize when you're closest to success and develop the persistence to push through.",
    fullDescription: "This principle is based on the famous story of a gold miner who gave up his claim after months of work, just three feet away from a major gold vein. The new owner made millions simply by persisting a little longer. This principle teaches you how to recognize the signs that you're on the verge of breakthrough, even when all external evidence suggests otherwise. It reveals the psychological mechanisms that cause most people to give up at the 90% mark and provides mental frameworks to push through those final barriers to success.",
    keyTakeaways: [
      "The psychological reason why people tend to quit right before breakthrough",
      "The 4 telltale signs that indicate you're on the verge of major success",
      "How to distinguish between genuine obstacles and final resistance tests",
      "The counterintuitive benefit of increased opposition near the finish line"
    ],
    realWorldExample: "Thomas Edison conducted over 10,000 experiments before successfully creating the light bulb. When asked about his failures, he famously said he hadn't failed—he had successfully found 10,000 ways that didn't work. This persistent mindset, refusing to quit despite thousands of apparent failures, led to one of the most transformative inventions in human history. The final breakthrough came after years of consistent effort, when most would have long abandoned the pursuit.",
    implementationSteps: [
      "Document your major goal and establish clear success criteria",
      "Identify patterns of past abandonment in your life and career",
      "Create a 'signs of breakthrough' checklist specific to your goal",
      "Establish an accountability structure with weekly resistance reviews",
      "Implement the 'just one more attempt' protocol when facing obstacles"
    ],
    practiceExercise: "Think of a project or goal you abandoned in the past. Trace the timeline of events and mark the point where you decided to quit. Now analyze: what would have happened if you had persisted for just one more week, month, or year? Create a detailed visualization of the potential breakthrough that might have occurred, then apply these insights to your current major goal.",
    audioLength: "00:30:00",
    iconType: "mine",
    timestamp: "00:00:00"
  },
  {
    id: "two-selves",
    title: "Taming Your Two Selves",
    shortDescription: "Learn to recognize and control the constant battle between your higher and lower self, allowing you to make decisions aligned with your true goals.",
    fullDescription: "This principle explores the ancient understanding that within each person exist two competing selves—a higher self that pulls you toward growth, achievement and contribution, and a lower self that pulls toward comfort, immediate gratification, and protection from risk. Most people are unaware of this internal battle, leaving them at the mercy of whichever self happens to be stronger in any given moment. This audio session teaches you to recognize when each self is in control and provides practical techniques to strengthen your higher self while compassionately managing your lower self, putting you in conscious control of your decisions rather than being unconsciously driven by them.",
    keyTakeaways: [
      "The biological and psychological roots of your two competing selves",
      "How to instantly recognize which self is driving your decisions",
      "The 3-step intervention process to shift control to your higher self",
      "Why strengthening your higher self paradoxically requires accepting your lower self"
    ],
    realWorldExample: "Warren Buffett, one of the world's greatest investors, attributes much of his success to mastering his two selves. When markets crash and most investors panic-sell (lower self in control), Buffett remains calm and often buys more stock (higher self in control). He famously advised to 'be fearful when others are greedy and greedy when others are fearful.' This principle of contrarian thinking requires recognizing and overriding your lower self's instincts, especially when external circumstances trigger fear or greed responses.",
    implementationSteps: [
      "Create a personal inventory of your higher and lower self characteristics",
      "Begin daily journaling to document which self was in control during key decisions",
      "Implement pattern interruption techniques when your lower self takes control",
      "Practice the 'what would my future self advise?' visualization exercise",
      "Establish environmental controls that reduce lower self triggers"
    ],
    practiceExercise: "For the next week, set an hourly reminder on your phone. Each time it alerts, pause and ask: 'Which self is in control right now?' Document the answer along with what you're doing, thinking, and feeling. At the end of the week, analyze your patterns to identify specific triggers that activate each self, then create a personalized strategy to strengthen your higher self's control.",
    audioLength: "00:28:00",
    iconType: "duality",
    timestamp: "00:30:00"
  },
  {
    id: "hypnotic-rhythm",
    title: "Hypnotic Rhythm of Success",
    shortDescription: "Master the hidden frequency patterns that govern all achievement and learn to synchronize your actions with universal success principles.",
    fullDescription: "This principle reveals that all human achievement follows specific rhythmic patterns, creating momentum that either works for or against you. Most people unknowingly establish negative rhythms that make success nearly impossible, regardless of their conscious intentions or occasional motivated actions. This session teaches you to recognize your current life rhythms, disrupt negative patterns, and deliberately establish positive hypnotic rhythms that make achievement almost automatic. You'll learn how ancient wisdom traditions understood these principles millennia before modern neuroscience confirmed them through research on neural entrainment and habit formation.",
    keyTakeaways: [
      "The science behind how rhythmic actions create neurological momentum",
      "Why willpower always fails against established negative rhythms",
      "The precise timing requirements for establishing new positive rhythms",
      "How to harness 'rhythm stacking' to accelerate your results exponentially"
    ],
    realWorldExample: "Kobe Bryant, one of basketball's greatest players, dominated the sport through his famous 'Mamba Mentality'—a rhythm-based approach to excellence. What separated him wasn't just talent but his rhythmic training approach. He famously began training at 4:00 AM each day, performing the same shooting drills hundreds of times with meticulous precision. This created such powerful neural patterns that his excellence became automatic, even under intense pressure. What appeared to others as superhuman performance was actually the result of deeply established positive rhythms.",
    implementationSteps: [
      "Conduct a 'rhythm audit' to identify current positive and negative patterns",
      "Select one keystone habit to transform using the 66-day rhythm protocol",
      "Implement environmental triggers that reinforce your desired rhythms",
      "Create the 'rhythm bridge' to connect difficult activities to established positive patterns",
      "Establish a weekly rhythm review and adjustment process"
    ],
    practiceExercise: "Choose one small but significant action related to your most important goal. Commit to performing this action at exactly the same time each day for the next 21 days. Set three daily alarms—5 minutes before, at the exact time, and 5 minutes after—to ensure perfect consistency. Document your experience, paying special attention to how the resistance diminishes and momentum builds over the three-week period.",
    audioLength: "00:32:00",
    iconType: "rhythm",
    timestamp: "00:58:00"
  },
  {
    id: "definiteness",
    title: "Definiteness of Purpose Formula",
    shortDescription: "Discover the exact template for crafting goals with such clarity and emotional potency that their achievement becomes inevitable.",
    fullDescription: "While most people understand the concept of goal-setting, few understand the critical difference between vague aspirations and true Definiteness of Purpose. This principle reveals why most goals fail before they begin and provides a precise formula for creating goals with such clarity, emotional intensity, and aligned action that their achievement becomes virtually inevitable. You'll learn why definiteness must include not just the what, but also the why, when, how, and who of your objective—and how to infuse your purpose with the emotional energy required to overcome all obstacles.",
    keyTakeaways: [
      "The neurological difference between vague goals and definite purposes",
      "The 5 essential components that make a purpose genuinely 'definite'",
      "How to create psychologically effective deadlines that drive action",
      "The method for properly aligning resources, actions and alliances with your purpose"
    ],
    realWorldExample: "In 1961, President John F. Kennedy demonstrated the power of Definiteness of Purpose when he declared, 'We choose to go to the moon in this decade.' This statement contained all elements of the formula: specific outcome (moon landing), clear timeframe (this decade), emotional fuel (national pride), action plan (NASA program), and aligned resources (unprecedented funding). While Kennedy didn't live to see it, this definite purpose was achieved in 1969, demonstrating how proper formulation creates momentum that persists even when the originator is no longer present.",
    implementationSteps: [
      "Apply the Purpose Clarity Protocol to your primary objective",
      "Develop a comprehensive resource inventory aligned with your purpose",
      "Create a purpose statement using the exact template provided",
      "Implement the daily purpose reinforcement ritual",
      "Establish the purpose-aligned decision framework for all major choices"
    ],
    practiceExercise: "Take your most important current goal and put it through the Definiteness Formula. Write out detailed answers to: What exactly will you achieve? By when precisely? Why is this deeply meaningful? What resources and allies will you need? What specific actions will you take? Once complete, condense this into a one-paragraph Definite Purpose Statement and recite it aloud each morning and evening for the next week, observing how your clarity and motivation transform.",
    audioLength: "00:25:00",
    iconType: "target",
    timestamp: "01:30:00"
  },
  {
    id: "adversity-alchemy",
    title: "Adversity Alchemy System",
    shortDescription: "Transform every obstacle and failure into fuel for your success through this ancient process of mental transmutation.",
    fullDescription: "This principle reveals the counterintuitive truth that adversity, properly harnessed, becomes your greatest advantage. While most people are diminished by obstacles and setbacks, those who master Adversity Alchemy learn to transmute these experiences into fuel for unprecedented growth. This session provides a systematic approach to this mental transmutation process, showing how to extract the growth opportunity from any challenge, convert negative emotions into motivation, and develop the adversity resilience that characterizes all exceptional achievers. You'll discover why those who face and overcome significant adversity often outperform those with easier paths.",
    keyTakeaways: [
      "The psychological mechanism that determines whether adversity strengthens or weakens you",
      "How to perform real-time reframing during challenging situations",
      "The 5-step Adversity Alchemy protocol for processing major setbacks",
      "Why certain types of failures contain more transformative potential than others"
    ],
    realWorldExample: "J.K. Rowling's journey exemplifies Adversity Alchemy at work. Before Harry Potter became a global phenomenon, Rowling experienced divorce, single parenthood, poverty, and twelve publisher rejections. Rather than being defeated, she used these experiences as material for her writing. The dementors in her books were inspired by her depression, and themes of found family emerged from her own losses. Her estimated $1 billion net worth came not despite her adversity, but partly because she mastered the alchemical process of transforming painful experiences into creative gold.",
    implementationSteps: [
      "Create an Adversity Inventory of past challenges and their hidden benefits",
      "Implement the Immediate Reframe Protocol for current obstacles",
      "Develop a personalized resilience statement based on past transformations",
      "Practice the Future-Self Perspective technique for current challenges",
      "Establish a weekly Adversity Alchemy review process"
    ],
    practiceExercise: "Select your most painful recent setback or failure. Using the Adversity Alchemy worksheet, document: 1) The specific challenge you faced, 2) The initial emotions and thoughts it triggered, 3) The hidden opportunity within this challenge, 4) The skills or strengths this adversity helped you develop, and 5) How you can leverage this growth for future success. Complete this exercise with ruthless honesty and as much detail as possible.",
    audioLength: "00:25:00",
    iconType: "alchemy",
    timestamp: "01:55:00"
  },
  {
    id: "time-wealth",
    title: "Time Wealth Framework",
    shortDescription: "Break free from the time-money trap and discover how to create exponential results while reclaiming your most precious resource.",
    fullDescription: "This principle challenges the conventional understanding of time and reveals why most people remain trapped in the linear time-for-money exchange that guarantees they'll never achieve true wealth or freedom. You'll discover the four types of time investments and learn how to shift your activities from linear to exponential returns. This session provides a practical framework for escaping the time-money trap, reclaiming your life's most precious non-renewable resource, and creating results that multiply rather than simply accumulate. Most importantly, you'll learn how to measure and increase your true net worth—not just financially, but in terms of Time Wealth.",
    keyTakeaways: [
      "The fundamental flaw in how most people conceptualize and invest their time",
      "The four types of time investments and their dramatically different returns",
      "How to identify and eliminate 'time debts' that silently drain your productivity",
      "The Time Wealth Multiplication system used by the world's most accomplished people"
    ],
    realWorldExample: "Bill Gates exemplifies the Time Wealth principle through his approach to leverage and multiplication. Early in Microsoft's development, Gates focused on creating operating systems that could be installed on millions of computers rather than building individual computers themselves. This exponential thinking created returns far beyond what linear effort could achieve. Now, through his foundation, he applies the same principle—investing time in systemic leverage points rather than direct service—allowing his limited time to impact millions of lives worldwide.",
    implementationSteps: [
      "Conduct a Time Wealth Audit to categorize your current time investments",
      "Identify and eliminate your three biggest time debt activities",
      "Implement the Time Leverage Protocol for your primary value-creation activities",
      "Create your Exponential Action Plan using the template provided",
      "Establish weekly Time Wealth review and adjustment sessions"
    ],
    practiceExercise: "For the next three days, track every 30-minute block of your time and categorize each activity as: Time Debt (produces negative returns), Time Expense (necessary but no future return), Time Investment (linear returns in the future), or Time Multiplication (potential exponential returns). At the end of the tracking period, calculate the percentage of time spent in each category and create a specific plan to increase your Time Multiplication activities by at least 20% in the coming week.",
    audioLength: "00:28:00",
    iconType: "hourglass",
    timestamp: "02:20:00"
  },
  {
    id: "decision-immunity",
    title: "Decision Immunity Training",
    shortDescription: "Develop the rare ability to make powerful decisions without being swayed by external influences, fear, or the need for approval.",
    fullDescription: "This principle addresses what may be the most important factor in determining life outcomes: the quality of your decisions. Most people's decisions are unconsciously influenced by social pressure, fear of criticism, desire for approval, and other external factors—resulting in a life directed by others rather than themselves. This session provides a comprehensive system for developing Decision Immunity—the ability to make clear, powerful choices based on your authentic values and objectives rather than external pressures. You'll learn to recognize the subtle influences corrupting your decisions and develop the mental sovereignty that characterizes history's most impactful individuals.",
    keyTakeaways: [
      "The 7 most common decision corruptions and how to neutralize each one",
      "How to distinguish between intuitive guidance and fear disguised as intuition",
      "The Decision Immunity Protocol for making major life and business choices",
      "Why developing this skill dramatically increases your leadership capacity"
    ],
    realWorldExample: "Steve Jobs demonstrated exceptional Decision Immunity throughout his career. When he returned to Apple in 1997, the company had over 350 products. Against tremendous opposition, he made the radical decision to eliminate almost all product lines and focus on just 4 core offerings. This decision, immune to the prevailing business wisdom and internal resistance, saved Apple from bankruptcy and set the foundation for it to become one of the world's most valuable companies. Jobs consistently made decisions based on his vision rather than market testing or conventional wisdom.",
    implementationSteps: [
      "Complete the Decision Influence Inventory to identify your specific vulnerabilities",
      "Practice the Influence Deprivation Exercise for 7 consecutive days",
      "Implement the Values Alignment Test for all significant decisions",
      "Create your Personal Constitution as a decision-making framework",
      "Establish the 72-Hour Rule for all major decisions"
    ],
    practiceExercise: "Identify one significant decision you're currently facing. Before making your choice, complete the Decision Immunity Worksheet by answering: 1) What would I decide if no one would ever know my choice? 2) What would I decide if I couldn't ask for anyone's input? 3) What would I decide if I knew with certainty I would be criticized for this decision? 4) What does my future self advise about this decision? Compare these answers to your initial inclination to see where external influences may be corrupting your authentic choice.",
    audioLength: "00:32:00",
    iconType: "shield",
    timestamp: "02:48:00"
  },
];
