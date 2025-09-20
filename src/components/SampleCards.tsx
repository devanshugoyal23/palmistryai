import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Briefcase, Star, Zap } from 'lucide-react';

const cards = [
  {
    type: "Love Life",
    icon: Heart,
    emoji: "❤️",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-900/30 to-rose-900/20",
    preview: "Your heart line reveals a passionate soul who loves deeply...",
    tags: ["Romantic", "Deep Connection", "2026 Love"]
  },
  {
    type: "Career",
    icon: Briefcase,
    emoji: "💼",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-900/30 to-emerald-900/20",
    preview: "Success is written in your fate line. Big moves coming...",
    tags: ["Boss Energy", "Leadership", "Money Moves"]
  },
  {
    type: "Personality",
    icon: Star,
    emoji: "✨",
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-900/30 to-violet-900/20",
    preview: "Your hand reveals a creative spirit with natural charisma...",
    tags: ["Main Character", "Creative", "Magnetic"]
  },
  {
    type: "Future in 2026",
    icon: Zap,
    emoji: "🔮",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-900/30 to-orange-900/20",
    preview: "Major transformations ahead! The universe has plans...",
    tags: ["Glow Up", "Plot Twist", "Manifestation"]
  }
];

export default function SampleCards() {
  return (
    <section id="samples" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Sample <span className="bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Palm Cards</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Get personalized readings designed for sharing. Every card is Instagram-ready!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${card.bgGradient} p-6 rounded-3xl border border-purple-500/20 hover:border-yellow-400/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 transform hover:scale-105`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-10 h-10 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-white">{card.type}</span>
                    </div>
                    <span className="text-2xl">{card.emoji}</span>
                  </div>
                  
                  {/* Content preview */}
                  <div className="mb-6">
                    <p className="text-purple-200 text-sm leading-relaxed">
                      {card.preview}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-white/10 text-purple-200 text-xs rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Share button */}
                  <button className={`w-full py-2 bg-gradient-to-r ${card.gradient} text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all opacity-80 group-hover:opacity-100`}>
                    Share to Story
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/reader" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 inline-block">
            Get Your Reading Now
          </Link>
        </div>
      </div>
    </section>
  );
}