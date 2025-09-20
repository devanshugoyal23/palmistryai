import React, { useState } from 'react';
import { Share2, Download, Heart, Briefcase, Star, Zap, Copy } from 'lucide-react';
import { PalmReading } from '../types';
import { generateShareCard } from '../utils/cardGenerator';

interface ReadingResultProps {
  reading: PalmReading;
  onNewReading: () => void;
}

export default function ReadingResult({ reading, onNewReading }: ReadingResultProps) {
  const [activeTab, setActiveTab] = useState<'love' | 'career' | 'personality' | 'future'>('love');
  const [isGeneratingCard, setIsGeneratingCard] = useState(false);

  const tabs = [
    { id: 'love' as const, name: 'Love Life', icon: Heart, emoji: '❤️', gradient: 'from-pink-500 to-rose-500' },
    { id: 'career' as const, name: 'Career', icon: Briefcase, emoji: '💼', gradient: 'from-green-500 to-emerald-500' },
    { id: 'personality' as const, name: 'Personality', icon: Star, emoji: '✨', gradient: 'from-purple-500 to-violet-500' },
    { id: 'future' as const, name: 'Future 2026', icon: Zap, emoji: '🔮', gradient: 'from-yellow-500 to-orange-500' }
  ];

  const handleShareCard = async (type: typeof activeTab) => {
    setIsGeneratingCard(true);
    try {
      const cardData = reading.analysis[type === 'future' ? 'future2026' : type];
      const cardUrl = await generateShareCard(type, cardData, reading.imageUrl);
      
      // Create download link
      const link = document.createElement('a');
      link.download = `palmistry-${type}-${Date.now()}.png`;
      link.href = cardUrl;
      link.click();
    } catch (error) {
      console.error('Failed to generate card:', error);
    } finally {
      setIsGeneratingCard(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getActiveContent = () => {
    switch (activeTab) {
      case 'love':
        return reading.analysis.loveLife;
      case 'career':
        return reading.analysis.career;
      case 'personality':
        return reading.analysis.personality;
      case 'future':
        return reading.analysis.future2026;
      default:
        return reading.analysis.loveLife;
    }
  };

  const activeContent = getActiveContent();
  const activeTabInfo = tabs.find(tab => tab.id === activeTab)!;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Your Palm Reading is Ready! ✨
        </h2>
        <p className="text-purple-200 text-lg">
          Generated with {reading.tone} vibes • {reading.timestamp.toLocaleDateString()}
        </p>
      </div>

      {/* Palm Image */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <img 
            src={reading.imageUrl} 
            alt="Your palm" 
            className="w-48 h-64 object-cover rounded-2xl border-4 border-purple-400/30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-2xl blur-sm"></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-all ${
                isActive 
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg` 
                  : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/40'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-semibold">{tab.name}</span>
              <span>{tab.emoji}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className={`bg-gradient-to-br ${activeTabInfo.gradient}/10 p-8 rounded-3xl border border-purple-500/20 mb-8`}>
        <div className="text-center">
          <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${activeTabInfo.gradient} rounded-full flex items-center justify-center`}>
            <activeTabInfo.icon className="w-8 h-8 text-white" />
          </div>
          
          {'score' in activeContent && (
            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-2">{activeContent.score}/100</div>
              <div className="w-full bg-purple-900/30 rounded-full h-3">
                <div 
                  className={`h-3 bg-gradient-to-r ${activeTabInfo.gradient} rounded-full transition-all duration-1000`}
                  style={{ width: `${activeContent.score}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="text-xl text-white mb-4 leading-relaxed">
            {activeContent.description}
          </div>
          
          {'prediction' in activeContent && (
            <div className="text-lg text-purple-200 mb-4">
              <strong>Prediction:</strong> {activeContent.prediction}
            </div>
          )}
          
          {'traits' in activeContent && (
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {activeContent.traits.map((trait, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 text-purple-200 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          )}
          
          {'keyEvents' in activeContent && (
            <div className="text-left max-w-md mx-auto">
              <h4 className="text-white font-semibold mb-3">Key Events Coming:</h4>
              <ul className="space-y-2">
                {activeContent.keyEvents.map((event, index) => (
                  <li key={index} className="flex items-center space-x-2 text-purple-200">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={() => handleShareCard(activeTab)}
          disabled={isGeneratingCard}
          className={`flex items-center space-x-2 bg-gradient-to-r ${activeTabInfo.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all ${
            isGeneratingCard ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          {isGeneratingCard ? (
            <>
              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download {activeTabInfo.name} Card</span>
            </>
          )}
        </button>
        
        <button
          onClick={() => copyToClipboard(activeContent.description)}
          className="flex items-center space-x-2 border-2 border-purple-400 text-purple-200 px-6 py-3 rounded-full font-semibold hover:bg-purple-400/10 transition-colors"
        >
          <Copy className="w-5 h-5" />
          <span>Copy Text</span>
        </button>
        
        <button
          onClick={onNewReading}
          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span>New Reading</span>
        </button>
      </div>
    </div>
  );
}