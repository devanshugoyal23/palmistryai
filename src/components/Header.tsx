import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <div className="absolute inset-0 animate-pulse bg-yellow-400/30 rounded-full blur-sm"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              Palmistry AI
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-purple-200 hover:text-yellow-400 transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-purple-200 hover:text-yellow-400 transition-colors">
              Features
            </a>
            <a href="#samples" className="text-purple-200 hover:text-yellow-400 transition-colors">
              Samples
            </a>
            <Link to="/reader" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all">
              Try Free Now
            </Link>
          </nav>
          
          <button className="md:hidden text-purple-200">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}