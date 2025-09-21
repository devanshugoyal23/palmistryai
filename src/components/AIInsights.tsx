import React, { useState } from 'react';
import { Brain, Sparkles, TrendingUp, Users, Calendar, Star } from 'lucide-react';

interface AIInsightsProps {
  reading: any;
}

export default function AIInsights({ reading }: AIInsightsProps) {
  const [activeInsight, setActiveInsight] = useState(0);

  const insights = [
    {
      icon: Brain,
      title: "AI Confidence",
      value: "94%",
      description: "High accuracy based on palm line clarity",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Trending Match",
      value: "Top 15%",
      description: "Your reading matches current viral trends",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Similar Palms",
      value: "2.3K",
      description: "People with similar palm patterns",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Uniqueness",
      value: "87%",
      description: "How rare your palm pattern is",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const predictions = [
    {
      category: "Love",
      prediction: "Strong romantic connection in Q2 2026",
      confidence: 89,
      icon: "💕"
    },
    {
      category: "Career",
      prediction: "Major opportunity around September 2026",
      confidence: 76,
      icon: "🚀"
    },
    {
      category: "Personal",
      prediction: "Creative breakthrough in early 2026",
      confidence: 82,
      icon: "✨"
    }
  ];

  return (
    <div className="space-y-6">
      {/* AI Insights Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon;
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${insight.color}/10 p-4 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all cursor-pointer ${
                activeInsight === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveInsight(index)}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${insight.color} rounded-lg flex items-center justify-center mb-3`}>
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{insight.value}</div>
              <div className="text-sm font-semibold text-purple-200 mb-1">{insight.title}</div>
              <div className="text-xs text-purple-300">{insight.description}</div>
            </div>
          );
        })}
      </div>

      {/* Detailed AI Analysis */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20">
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-bold text-white">AI Deep Analysis</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {predictions.map((pred, index) => (
            <div key={index} className="bg-black/20 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">{pred.icon}</span>
                <span className="text-white font-semibold">{pred.category}</span>
              </div>
              <p className="text-purple-200 text-sm mb-3">{pred.prediction}</p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-purple-900/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${pred.confidence}%` }}
                  ></div>
                </div>
                <span className="text-purple-300 text-xs">{pred.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Predictions */}
      <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 p-6 rounded-2xl border border-purple-500/20">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-6 h-6 text-indigo-400" />
          <h3 className="text-xl font-bold text-white">2026 Timeline</h3>
        </div>

        <div className="space-y-4">
          {[
            { month: "March", event: "New creative project begins", type: "opportunity" },
            { month: "June", event: "Significant relationship development", type: "love" },
            { month: "September", event: "Career advancement opportunity", type: "career" },
            { month: "December", event: "Personal transformation complete", type: "growth" }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {item.month.slice(0, 3)}
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold">{item.event}</div>
                <div className="text-purple-300 text-sm capitalize">{item.type}</div>
              </div>
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}