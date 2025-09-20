import React from 'react';
import { Sparkles, Instagram, MessageCircle, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <div className="absolute inset-0 animate-pulse bg-yellow-400/30 rounded-full blur-sm"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                Palmistry AI
              </span>
            </div>
            <p className="text-purple-200 mb-6 max-w-md">
              Upload your palm. Discover your future. Share the vibe. 
              The most fun way to explore what's written in your lines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">AI Palm Reading</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Compatibility Mode</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Share Cards</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Leaderboards</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Daily Fortune</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm">
              © 2025 Palmistry AI. All rights reserved. Made with cosmic energy ✨
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-purple-300 text-sm">Powered by</span>
              <span className="text-yellow-400 font-semibold text-sm">AI Magic</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}