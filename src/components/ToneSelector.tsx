import React from 'react';
import { Smile, Heart, Zap, Moon } from 'lucide-react';
import { PalmReading } from '../types';

interface ToneSelectorProps {
  selectedTone: PalmReading['tone'];
  onToneChange: (tone: PalmReading['tone']) => void;
}

const tones = [
  {
    id: 'funny' as const,
    name: 'Funny',
    icon: Smile,
    description: 'Roast me with humor',
    emoji: '😂',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'romantic' as const,
    name: 'Romantic',
    icon: Heart,
    description: 'Love & connection vibes',
    emoji: '💕',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'motivational' as const,
    name: 'Motivational',
    icon: Zap,
    description: 'Inspire & empower me',
    emoji: '⚡',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'dark' as const,
    name: 'Mysterious',
    icon: Moon,
    description: 'Deep & mystical',
    emoji: '🌙',
    gradient: 'from-purple-500 to-indigo-500'
  }
];

export default function ToneSelector({ selectedTone, onToneChange }: ToneSelectorProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Choose Your Reading Vibe</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tones.map((tone) => {
          const IconComponent = tone.icon;
          const isSelected = selectedTone === tone.id;
          
          return (
            <button
              key={tone.id}
              onClick={() => onToneChange(tone.id)}
              className={`p-4 rounded-2xl border-2 transition-all ${
                isSelected 
                  ? 'border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-500/20' 
                  : 'border-purple-400/30 bg-purple-900/20 hover:border-purple-400/50'
              }`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${tone.gradient} rounded-full flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <span className="font-semibold text-white">{tone.name}</span>
                  <span>{tone.emoji}</span>
                </div>
                <p className="text-purple-200 text-sm">{tone.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}