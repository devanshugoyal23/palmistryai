import { PalmReading, PalmLines } from '../types';

// Simulate AI palm analysis
export const analyzePalmImage = async (imageFile: File, tone: PalmReading['tone'] = 'funny'): Promise<PalmReading> => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate random but realistic palm analysis
  const palmLines = generatePalmLines();
  const analysis = generateAnalysis(palmLines, tone);
  
  return {
    id: generateId(),
    timestamp: new Date(),
    imageUrl: URL.createObjectURL(imageFile),
    analysis,
    tone
  };
};

const generatePalmLines = (): PalmLines => ({
  heartLine: {
    strength: Math.random() * 100,
    length: Math.random() * 100
  },
  headLine: {
    strength: Math.random() * 100,
    clarity: Math.random() * 100
  },
  lifeLine: {
    strength: Math.random() * 100,
    length: Math.random() * 100
  },
  fateLine: {
    present: Math.random() > 0.3,
    strength: Math.random() * 100
  }
});

const generateAnalysis = (lines: PalmLines, tone: PalmReading['tone']) => {
  const loveScore = Math.round(lines.heartLine.strength);
  const careerScore = Math.round((lines.headLine.strength + lines.fateLine.strength) / 2);
  
  const toneVariations = {
    funny: {
      loveLife: {
        score: loveScore,
        description: loveScore > 70 ? "Your heart line is longer than a CVS receipt! 💕" : "Your heart line said 'it's complicated' 😅",
        prediction: loveScore > 70 ? "2026 is giving main character energy in love ✨" : "Plot twist incoming in your love story 🎬"
      },
      career: {
        score: careerScore,
        description: careerScore > 70 ? "Your success line is GLOWING bestie! 💼✨" : "Your career line is taking the scenic route 🛤️",
        prediction: careerScore > 70 ? "Boss moves incoming in 2026 👑" : "Time to manifest that dream job energy 🔮"
      },
      personality: {
        traits: ["Main character energy", "Chaotic good vibes", "Secretly wise"],
        description: "You're giving mysterious but approachable energy 🌟"
      },
      future2026: {
        prediction: "Major glow-up era incoming! ✨",
        keyEvents: ["Career breakthrough", "New connections", "Personal transformation"]
      }
    },
    romantic: {
      loveLife: {
        score: loveScore,
        description: loveScore > 70 ? "Your heart line whispers of deep, passionate love 💕" : "Your heart is preparing for something beautiful 🌹",
        prediction: "A soulful connection awaits in 2026 💫"
      },
      career: {
        score: careerScore,
        description: "Your path leads to fulfilling work that feeds your soul ✨",
        prediction: "Creative abundance flows to you in 2026 🎨"
      },
      personality: {
        traits: ["Deeply intuitive", "Naturally magnetic", "Emotionally wise"],
        description: "You possess an enchanting aura that draws others to you 🌙"
      },
      future2026: {
        prediction: "Love and creativity intertwine beautifully in your future 💖",
        keyEvents: ["Romantic awakening", "Artistic breakthrough", "Spiritual growth"]
      }
    },
    motivational: {
      loveLife: {
        score: loveScore,
        description: "Your heart line shows incredible capacity for love and connection! 💪",
        prediction: "You're manifesting your ideal relationship in 2026! 🎯"
      },
      career: {
        score: careerScore,
        description: "Your success line indicates natural leadership abilities! 🚀",
        prediction: "2026 brings the career breakthrough you've been working toward! 📈"
      },
      personality: {
        traits: ["Natural leader", "Resilient spirit", "Inspiring presence"],
        description: "You have the power to achieve anything you set your mind to! ⚡"
      },
      future2026: {
        prediction: "This is your year to shine and inspire others! 🌟",
        keyEvents: ["Leadership opportunity", "Personal victory", "Positive impact"]
      }
    },
    dark: {
      loveLife: {
        score: loveScore,
        description: loveScore > 70 ? "Your heart line reveals intense, transformative love 🖤" : "Your heart guards ancient secrets 🔮",
        prediction: "A mysterious connection will change everything in 2026 🌙"
      },
      career: {
        score: careerScore,
        description: "Your path winds through shadows toward hidden power 🗝️",
        prediction: "2026 unveils your true calling from the depths 🌑"
      },
      personality: {
        traits: ["Mysteriously magnetic", "Deeply intuitive", "Transformative presence"],
        description: "You carry the wisdom of shadows and the power of rebirth 🦋"
      },
      future2026: {
        prediction: "From darkness comes your greatest transformation 🌑➡️🌟",
        keyEvents: ["Shadow work completion", "Hidden truth revealed", "Phoenix rising"]
      }
    }
  };
  
  return toneVariations[tone];
};

const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const generateCompatibilityReading = async (image1: File, image2: File) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const score = Math.round(Math.random() * 100);
  
  return {
    score,
    description: score > 80 ? "Cosmic soulmate energy! ✨" : 
                 score > 60 ? "Strong connection with growth potential 💫" :
                 score > 40 ? "Opposites attract - interesting dynamic! 🔄" :
                 "Friendship vibes stronger than romance 👫",
    strengths: [
      "Complementary life paths",
      "Shared creative energy", 
      "Mutual growth potential"
    ],
    challenges: [
      "Different communication styles",
      "Timing considerations",
      "Balance needed"
    ]
  };
};