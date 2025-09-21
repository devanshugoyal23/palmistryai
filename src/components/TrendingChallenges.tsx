import React from 'react';
import { TrendingUp, Users, Zap, Crown } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: "Palm Roast Challenge",
    description: "Get roasted by AI and share the funniest reading",
    participants: "2.3M",
    trending: true,
    emoji: "🔥",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 2,
    title: "2026 Future Reveal",
    description: "Share your 2026 prediction and manifest it",
    participants: "1.8M",
    trending: true,
    emoji: "🔮",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Couple Compatibility",
    description: "Test your relationship with palm compatibility",
    participants: "956K",
    trending: false,
    emoji: "💕",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 4,
    title: "Squad Palm Battle",
    description: "Who has the strongest career line in your group?",
    participants: "743K",
    trending: false,
    emoji: "👑",
    color: "from-yellow-500 to-amber-500"
  }
];

export default function TrendingChallenges() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold text-white">Trending Challenges</h2>
            <Zap className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-xl text-purple-200">
            Join millions creating viral palm content daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="group relative bg-gradient-to-br from-purple-900/40 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20 hover:border-yellow-400/40 transition-all hover:scale-105 cursor-pointer"
            >
              {challenge.trending && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  TRENDING
                </div>
              )}

              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${challenge.color} rounded-full flex items-center justify-center text-3xl`}>
                  {challenge.emoji}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {challenge.title}
                </h3>

                <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                  {challenge.description}
                </p>

                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Users className="w-4 h-4 text-purple-300" />
                  <span className="text-purple-300 text-sm font-semibold">
                    {challenge.participants} participants
                  </span>
                </div>

                <button className={`w-full py-3 bg-gradient-to-r ${challenge.color} text-white rounded-full font-semibold hover:shadow-lg transition-all group-hover:scale-105`}>
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 p-8 rounded-3xl border border-purple-500/30 max-w-2xl mx-auto">
            <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Create Your Own Challenge
            </h3>
            <p className="text-purple-200 mb-6">
              Start a viral trend and get featured on our homepage!
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105">
              Start Challenge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}