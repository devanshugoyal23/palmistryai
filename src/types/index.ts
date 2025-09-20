export interface PalmReading {
  id: string;
  timestamp: Date;
  imageUrl: string;
  analysis: {
    loveLife: {
      score: number;
      description: string;
      prediction: string;
    };
    career: {
      score: number;
      description: string;
      prediction: string;
    };
    personality: {
      traits: string[];
      description: string;
    };
    future2026: {
      prediction: string;
      keyEvents: string[];
    };
  };
  tone: 'funny' | 'romantic' | 'motivational' | 'dark';
}

export interface PalmLines {
  heartLine: { strength: number; length: number };
  headLine: { strength: number; clarity: number };
  lifeLine: { strength: number; length: number };
  fateLine: { present: boolean; strength: number };
}

export interface CompatibilityResult {
  score: number;
  description: string;
  strengths: string[];
  challenges: string[];
}