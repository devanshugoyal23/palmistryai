import React, { useState } from 'react';
import { ArrowLeft, Users, Brain, Sparkles } from 'lucide-react';
import PalmUpload from './PalmUpload';
import ToneSelector from './ToneSelector';
import ReadingResult from './ReadingResult';
import CompatibilityMode from './CompatibilityMode';
import AIVisualization from './AIVisualization';
import AIInsights from './AIInsights';
import { usePalmReading } from '../hooks/usePalmReading';
import { PalmReading } from '../types';

export default function PalmReader() {
  const [selectedTone, setSelectedTone] = useState<PalmReading['tone']>('funny');
  const [mode, setMode] = useState<'single' | 'compatibility'>('single');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const { isAnalyzing, currentReading, error, analyzeImage, clearReading } = usePalmReading();

  const handleImageSelect = async (file: File) => {
    try {
      setUploadedImage(URL.createObjectURL(file));
      await analyzeImage(file, selectedTone);
    } catch (error) {
      console.error('Analysis failed:', error);
    }
  };

  const handleNewReading = () => {
    clearReading();
    setUploadedImage(null);
  };

  if (currentReading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleNewReading}
            className="flex items-center space-x-2 text-purple-200 hover:text-yellow-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Upload</span>
          </button>
          <ReadingResult reading={currentReading} onNewReading={handleNewReading} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mode Selector */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              AI Palm Reading
            </span>
            <br />
            <span className="text-white">Experience</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Brain className="w-6 h-6 text-purple-400" />
            <span className="text-purple-200">Powered by Advanced AI</span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setMode('single')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                mode === 'single'
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                  : 'border-2 border-purple-400 text-purple-200 hover:bg-purple-400/10'
              }`}
            >
              <span>Single Reading</span>
            </button>
            <button
              onClick={() => setMode('compatibility')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                mode === 'compatibility'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  : 'border-2 border-purple-400 text-purple-200 hover:bg-purple-400/10'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Compatibility</span>
            </button>
          </div>
        </div>

        {mode === 'compatibility' ? (
          <CompatibilityMode />
        ) : (
          <div className="max-w-4xl mx-auto">
            <ToneSelector selectedTone={selectedTone} onToneChange={setSelectedTone} />
            
            {uploadedImage ? (
              <div className="mb-8">
                <AIVisualization 
                  imageUrl={uploadedImage} 
                  isAnalyzing={isAnalyzing}
                  palmLines={null}
                />
              </div>
            ) : (
              <div className="text-center mb-8">
                <PalmUpload onImageSelect={handleImageSelect} isAnalyzing={isAnalyzing} />
              </div>
            )}

            {error && (
              <div className="bg-red-900/30 border border-red-500/50 text-red-200 p-4 rounded-lg text-center mb-8">
                {error}
              </div>
            )}

            <div className="text-center">
              <p className="text-purple-200 mb-4">
                🤖 AI analyzes your palm lines in real-time
              </p>
              <p className="text-purple-300 text-sm">
                Advanced computer vision + Gemini AI for accurate readings
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}