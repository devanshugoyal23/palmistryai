import React, { useState } from 'react';
import { Share2, Heart, MessageCircle, Users, Trophy, Flame } from 'lucide-react';

interface SocialFeaturesProps {
  reading: any;
  onShare: (platform: string) => void;
}

export default function SocialFeatures({ reading, onShare }: SocialFeaturesProps) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 1000) + 100);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const shareOptions = [
    { platform: 'TikTok', color: 'from-pink-500 to-red-500', emoji: '🎵' },
    { platform: 'Instagram', color: 'from-purple-500 to-pink-500', emoji: '📸' },
    { platform: 'Snapchat', color: 'from-yellow-400 to-yellow-500', emoji: '👻' },
    { platform: 'BeReal', color: 'from-black to-gray-800', emoji: '📷' },
    { platform: 'Discord', color: 'from-indigo-500 to-purple-500', emoji: '🎮' }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <Flame className="w-6 h-6 text-orange-400 mr-2" />
        Make It Viral
      </h3>

      {/* Engagement Stats */}
      <div className="flex items-center space-x-6 mb-6">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 transition-all ${
            isLiked ? 'text-pink-400' : 'text-purple-200 hover:text-pink-400'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          <span className="font-semibold">{likes.toLocaleString()}</span>
        </button>
        
        <div className="flex items-center space-x-2 text-purple-200">
          <MessageCircle className="w-5 h-5" />
          <span>{Math.floor(likes * 0.1)}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-purple-200">
          <Share2 className="w-5 h-5" />
          <span>{Math.floor(likes * 0.3)}</span>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        {shareOptions.map((option) => (
          <button
            key={option.platform}
            onClick={() => onShare(option.platform)}
            className={`bg-gradient-to-r ${option.color} p-3 rounded-xl text-white font-semibold text-sm hover:scale-105 transition-transform flex items-center justify-center space-x-2`}
          >
            <span>{option.emoji}</span>
            <span className="hidden lg:inline">{option.platform}</span>
          </button>
        ))}
      </div>

      {/* Trending Hashtags */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Trending Tags:</h4>
        <div className="flex flex-wrap gap-2">
          {['#PalmistryAI', '#FutureReading', '#PalmTok', '#2026Vibes', '#AIFortune'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full text-sm border border-purple-400/30 cursor-pointer hover:border-purple-400/60 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Challenge Mode */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-xl border border-yellow-400/30">
        <div className="flex items-center space-x-2 mb-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-white font-semibold">Palm Challenge</span>
        </div>
        <p className="text-purple-200 text-sm mb-3">
          Tag 3 friends to compare palm readings! Who has the strongest love line?
        </p>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
          Start Challenge
        </button>
      </div>
    </div>
  );
}