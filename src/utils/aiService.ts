import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export interface AIAnalysisRequest {
  imageData: string;
  tone: 'funny' | 'romantic' | 'motivational' | 'dark';
  userId?: string;
  previousReadings?: any[];
}

export const analyzeWithGemini = async (request: AIAnalysisRequest) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = generatePrompt(request.tone);
    
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: request.imageData.split(',')[1], // Remove data:image/jpeg;base64, prefix
          mimeType: "image/jpeg"
        }
      }
    ]);
    
    const response = await result.response;
    const text = response.text();
    
    return parseAIResponse(text, request.tone);
  } catch (error) {
    console.error('Gemini AI Error:', error);
    // Fallback to mock data if AI fails
    return generateMockReading(request.tone);
  }
};

const generatePrompt = (tone: string) => {
  const basePrompt = `Analyze this palm image and provide a detailed reading. Focus on the major palm lines (heart line, head line, life line, fate line) and palm mounts. 

Return a JSON response with this exact structure:
{
  "loveLife": {
    "score": number (0-100),
    "description": "string",
    "prediction": "string"
  },
  "career": {
    "score": number (0-100), 
    "description": "string",
    "prediction": "string"
  },
  "personality": {
    "traits": ["trait1", "trait2", "trait3"],
    "description": "string"
  },
  "future2026": {
    "prediction": "string",
    "keyEvents": ["event1", "event2", "event3"]
  }
}`;

  const toneInstructions = {
    funny: "Make it humorous and meme-worthy, use Gen Z slang and emojis. Roast them playfully but keep it positive.",
    romantic: "Focus on love, relationships, and emotional connections. Use poetic and dreamy language.",
    motivational: "Be inspiring and empowering. Focus on potential and growth opportunities.",
    dark: "Use mysterious and mystical language. Focus on deeper meanings and transformations."
  };

  return `${basePrompt}\n\nTone: ${toneInstructions[tone as keyof typeof toneInstructions]}`;
};

const parseAIResponse = (text: string, tone: string) => {
  try {
    // Try to extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (error) {
    console.error('Failed to parse AI response:', error);
  }
  
  // Fallback to mock data
  return generateMockReading(tone);
};

const generateMockReading = (tone: string) => {
  // Enhanced mock data as fallback
  const mockData = {
    funny: {
      loveLife: {
        score: Math.floor(Math.random() * 40) + 60,
        description: "Your heart line said 'it's giving main character energy' 💅✨",
        prediction: "2026 is about to be your romantic villain era (in the best way) 👑"
      },
      career: {
        score: Math.floor(Math.random() * 30) + 70,
        description: "Your success line is literally glowing bestie! CEO vibes detected 📈",
        prediction: "Plot twist: you're about to become THAT person everyone asks for career advice 🚀"
      },
      personality: {
        traits: ["Main character energy", "Chaotic good vibes", "Secret genius"],
        description: "You're giving mysterious but approachable energy - like a cool older sibling everyone wants to be friends with 🌟"
      },
      future2026: {
        prediction: "Major glow-up era incoming! The universe said 'let me cook' and you're the main dish ✨",
        keyEvents: ["Career breakthrough moment", "Unexpected collaboration", "Personal brand explosion"]
      }
    }
    // Add other tones...
  };
  
  return mockData[tone as keyof typeof mockData] || mockData.funny;
};

// Real-time palm line detection using computer vision
export const detectPalmLines = async (imageData: string) => {
  // This would integrate with a computer vision API
  // For now, return mock detection data
  return {
    heartLine: { detected: true, strength: 85, clarity: 90 },
    headLine: { detected: true, strength: 78, clarity: 85 },
    lifeLine: { detected: true, strength: 92, clarity: 88 },
    fateLine: { detected: true, strength: 65, clarity: 70 },
    confidence: 0.87
  };
};