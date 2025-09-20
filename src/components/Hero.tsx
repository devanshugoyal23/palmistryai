import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Hand, Sparkles } from 'lucide-react';

export default function Hero() {
  const [dragOver, setDragOver] = useState(false);

  return (
    <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your palm
              </span>
              <br />
              <span className="text-white">has secrets.</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                AI will reveal them.
              </span>
            </h1>
            
            <p className="text-xl text-purple-200 mb-8 max-w-lg">
              Upload your palm. Discover your future. Share the vibe. 
              The most fun way to explore what's written in your lines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/reader" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all transform hover:scale-105 text-center">
                Try Free Now →
              </Link>
              <button className="border-2 border-purple-400 text-purple-200 px-8 py-4 rounded-full font-semibold hover:bg-purple-400/10 transition-colors">
                See Sample Reading
              </button>
            </div>
          </div>
          
          {/* Right - Upload area */}
          <div className="relative">
            <div 
              className={`relative border-2 border-dashed rounded-3xl p-8 lg:p-12 transition-all ${
                dragOver 
                  ? 'border-yellow-400 bg-yellow-400/5 shadow-xl shadow-yellow-500/20' 
                  : 'border-purple-400/50 bg-purple-900/20'
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
              }}
            >
              {/* Glowing hand mockup */}
              <div className="relative mb-8">
                <div className="w-48 h-64 mx-auto bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-3xl flex items-center justify-center">
                  <Hand className="w-24 h-24 text-purple-300" />
                  {/* Glowing palm lines overlay */}
                  <div className="absolute inset-8 border-2 border-yellow-400/60 rounded-2xl">
                    <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent opacity-80"></div>
                    <div className="absolute top-8 left-6 right-2 h-0.5 bg-gradient-to-r from-purple-400 to-transparent opacity-80"></div>
                    <div className="absolute top-12 left-4 right-6 h-0.5 bg-gradient-to-r from-pink-400 to-transparent opacity-80"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
              </div>
              
              <div className="text-center">
                <Upload className="w-8 h-8 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Upload Your Palm</h3>
                <p className="text-purple-200 mb-4">Drag & drop or click to upload</p>
                <Link to="/reader" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full transition-colors inline-block">
                  Choose File
                </Link>
              </div>
            </div>
            
            {/* Sparkle effects */}
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-bounce" />
            <Sparkles className="absolute -bottom-4 -left-4 w-6 h-6 text-purple-400 animate-bounce delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}