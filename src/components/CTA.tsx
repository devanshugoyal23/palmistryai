import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Ready to discover
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                your destiny?
              </span>
            </h2>
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-bounce" />
          </div>
          
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Upload your palm, get an AI-powered reading, and share your cosmic vibe with the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/reader" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-full font-bold text-xl hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 text-center">
              Try Your Palm Reading Now 🔮
            </Link>
            <button className="border-2 border-purple-400 text-purple-200 px-10 py-5 rounded-full font-semibold text-xl hover:bg-purple-400/10 transition-colors">
              Share With a Friend →
            </button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-black" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500K+</div>
            <div className="text-purple-200">Palm readings generated</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2M+</div>
            <div className="text-purple-200">Social shares</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-purple-200">Accuracy rate</div>
          </div>
        </div>
        
        {/* Secondary CTA */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 p-12 rounded-3xl border border-purple-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Limited Time: Free Pro Features! 🎉
          </h3>
          <p className="text-purple-200 mb-6 text-lg max-w-2xl mx-auto">
            Get unlimited readings, compatibility mode, and exclusive templates. 
            Usually $9.99/month - FREE for early users!
          </p>
          <Link to="/reader" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 inline-block">
            Claim Free Pro Access
          </Link>
          <p className="text-purple-300 text-sm mt-4">
            No credit card required • Cancel anytime • Join 50k+ users
          </p>
        </div>
      </div>
    </section>
  );
}