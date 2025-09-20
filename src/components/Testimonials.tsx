import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Heart, Repeat2 } from 'lucide-react';

const testimonials = [
  {
    platform: "TikTok",
    username: "@astrology.babe",
    content: "Omg my palm reading roasted me 😂🔥 why is this so accurate tho",
    likes: "12.3K",
    icon: "🔥",
    verified: true
  },
  {
    platform: "Instagram",
    username: "@mystic.vibes",
    content: "Shared this with my bestie and we DIED 🤯💞 the compatibility reading hit different",
    likes: "8.7K", 
    icon: "💀",
    verified: false
  },
  {
    platform: "Twitter",
    username: "@cosmic_queen",
    content: "Not me getting called out by an AI for my commitment issues 💀 this app is too real",
    likes: "15.2K",
    icon: "😭",
    verified: true
  },
  {
    platform: "Instagram",
    username: "@palmistry.addict",
    content: "Third reading today because I'M OBSESSED ✨ my whole feed is palm cards now",
    likes: "6.1K",
    icon: "✨",
    verified: false
  },
  {
    platform: "TikTok",
    username: "@future.reader", 
    content: "The 2026 predictions got me questioning everything 🔮 manifestation mode activated",
    likes: "20.1K",
    icon: "🔮",
    verified: true
  },
  {
    platform: "Twitter",
    username: "@palm.obsessed",
    content: "Downloaded just to roast my ex's palm... no regrets 👑 the petty energy is unmatched",
    likes: "9.8K",
    icon: "👑",
    verified: false
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What People Are <span className="bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">Saying</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Join the viral palm reading revolution spreading across social media
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-900/80 to-purple-900/40 p-6 rounded-2xl border border-purple-500/20 hover:border-yellow-400/40 transition-all hover:shadow-xl hover:shadow-purple-500/10 group-hover:scale-105">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">
                        {testimonial.platform === 'TikTok' ? 'T' : testimonial.platform === 'Instagram' ? 'I' : 'X'}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="text-white font-semibold text-sm">{testimonial.username}</span>
                        {testimonial.verified && <span className="text-blue-400 text-xs">✓</span>}
                      </div>
                      <span className="text-purple-300 text-xs">{testimonial.platform}</span>
                    </div>
                  </div>
                  <span className="text-xl">{testimonial.icon}</span>
                </div>
                
                {/* Content */}
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {testimonial.content}
                </p>
                
                {/* Actions */}
                <div className="flex items-center justify-between text-purple-300">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{testimonial.likes}</span>
                    </div>
                    <MessageCircle className="w-4 h-4" />
                    <Repeat2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-purple-400">2h</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-purple-200 mb-6 text-lg">
            Ready to create your own viral moment?
          </p>
          <Link to="/reader" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 inline-block">
            Join the Movement
          </Link>
        </div>
      </div>
    </section>
  );
}