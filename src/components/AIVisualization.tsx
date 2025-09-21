import React, { useState, useEffect } from 'react';
import { Eye, Zap, Brain, Sparkles } from 'lucide-react';

interface AIVisualizationProps {
  imageUrl: string;
  isAnalyzing: boolean;
  palmLines?: any;
}

export default function AIVisualization({ imageUrl, isAnalyzing, palmLines }: AIVisualizationProps) {
  const [scanProgress, setScanProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const scanSteps = [
    { icon: Eye, text: "Detecting palm boundaries...", color: "text-blue-400" },
    { icon: Brain, text: "Analyzing palm lines...", color: "text-purple-400" },
    { icon: Zap, text: "Processing with AI...", color: "text-yellow-400" },
    { icon: Sparkles, text: "Generating insights...", color: "text-pink-400" }
  ];

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      const stepInterval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % scanSteps.length);
      }, 1000);

      return () => {
        clearInterval(interval);
        clearInterval(stepInterval);
      };
    } else {
      setScanProgress(0);
      setCurrentStep(0);
    }
  }, [isAnalyzing]);

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl">
        <img 
          src={imageUrl} 
          alt="Palm analysis" 
          className="w-full h-64 object-cover"
        />
        
        {/* AI Overlay Effects */}
        {isAnalyzing && (
          <>
            {/* Scanning Grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                animation: 'scan 2s linear infinite'
              }}></div>
            </div>

            {/* Palm Line Overlays */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Heart Line */}
              <path
                d="M 50 80 Q 150 60 250 90"
                stroke="#ff6b9d"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                style={{ filter: 'drop-shadow(0 0 8px #ff6b9d)' }}
              />
              {/* Head Line */}
              <path
                d="M 50 120 Q 150 110 240 130"
                stroke="#4ecdc4"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                style={{ filter: 'drop-shadow(0 0 8px #4ecdc4)', animationDelay: '0.5s' }}
              />
              {/* Life Line */}
              <path
                d="M 60 100 Q 80 160 90 220"
                stroke="#ffd93d"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
                style={{ filter: 'drop-shadow(0 0 8px #ffd93d)', animationDelay: '1s' }}
              />
            </svg>

            {/* Scanning Line */}
            <div 
              className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                top: `${(scanProgress / 100) * 100}%`,
                boxShadow: '0 0 20px #00ffff',
                transition: 'top 0.1s ease-out'
              }}
            ></div>
          </>
        )}

        {/* Palm Line Detection Points */}
        {palmLines && !isAnalyzing && (
          <div className="absolute inset-0">
            {/* Detection points */}
            <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        )}
      </div>

      {/* AI Analysis Status */}
      {isAnalyzing && (
        <div className="mt-4 bg-black/50 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center space-x-3 mb-3">
            {React.createElement(scanSteps[currentStep].icon, {
              className: `w-5 h-5 ${scanSteps[currentStep].color} animate-spin`
            })}
            <span className="text-white font-medium">{scanSteps[currentStep].text}</span>
          </div>
          
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-100"
              style={{ width: `${scanProgress}%` }}
            ></div>
          </div>
          
          <div className="text-center mt-2 text-purple-200 text-sm">
            {scanProgress}% Complete
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}