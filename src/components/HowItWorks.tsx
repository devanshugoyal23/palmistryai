import React from 'react';
import { Camera, Search, Sparkles, Share2 } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Snap/Upload your palm",
    description: "Take a clear photo of your palm or upload from gallery",
    emoji: "📸"
  },
  {
    icon: Search,
    title: "AI scans your lines",
    description: "Our AI analyzes your palm lines, mounts, and patterns",
    emoji: "🔍"
  },
  {
    icon: Sparkles,
    title: "Get your fun, personalized reading",
    description: "Receive insights about love, career, personality & future",
    emoji: "🔮"
  },
  {
    icon: Share2,
    title: "Share your Palm Card on socials",
    description: "Export beautiful cards perfect for Instagram & TikTok",
    emoji: "🚀"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How It <span className="bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Four simple steps to unlock the secrets written in your palm
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
                )}
                
                <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/20 p-8 rounded-2xl border border-purple-500/20 hover:border-yellow-400/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group-hover:scale-105">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-lg"></div>
                      <span className="absolute -top-2 -right-2 text-2xl">{step.emoji}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-purple-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}