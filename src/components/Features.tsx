import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Trophy, Smartphone, Filter, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: Filter,
    title: "AI Palm Filter",
    description: "Upload and see glowing palm lines overlaid on your photo",
    emoji: "✨"
  },
  {
    icon: Sparkles,
    title: "Choose Your Vibe",
    description: "Funny roast, motivational, romantic, or dark mode readings",
    emoji: "🔮"
  },
  {
    icon: Heart,
    title: "Friend Compatibility",
    description: "Upload 2 palms and discover your friendship/relationship match",
    emoji: "💞"
  },
  {
    icon: Trophy,
    title: "Palm Leaderboards",
    description: "Who has the strongest love line in your squad?",
    emoji: "🏆"
  },
  {
    icon: Smartphone,
    title: "Instant Share Mode",
    description: "Export perfect cards for TikTok, Instagram Stories & Reels",
    emoji: "📲"
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description: "Earn badges, maintain streaks, unlock rare palm predictions",
    emoji: "🎮"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Viral <span className="bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Everything you need to create shareable, meme-worthy palm readings
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/20 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group-hover:scale-105 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 mb-3">
                        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        <span className="text-lg">{feature.emoji}</span>
                      </div>
                      <p className="text-purple-200 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 p-8 rounded-3xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to go viral? 🚀
            </h3>
            <p className="text-purple-200 mb-6 text-lg">
              Join thousands creating shareable palm content daily
            </p>
            <Link to="/reader" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 inline-block">
              Start Creating Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}