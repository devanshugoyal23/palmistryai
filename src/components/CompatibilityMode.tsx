import React, { useState } from 'react';
import { Heart, Users, Upload } from 'lucide-react';
import { generateCompatibilityReading } from '../utils/palmAnalysis';
import { CompatibilityResult } from '../types';

export default function CompatibilityMode() {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!image1 || !image2) return;
    
    setIsAnalyzing(true);
    try {
      const compatibility = await generateCompatibilityReading(image1, image2);
      setResult(compatibility);
    } catch (error) {
      console.error('Compatibility analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const ImageUpload = ({ 
    image, 
    onImageChange, 
    label 
  }: { 
    image: File | null; 
    onImageChange: (file: File) => void; 
    label: string;
  }) => (
    <div className="text-center">
      <h3 className="text-white font-semibold mb-4">{label}</h3>
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onImageChange(file);
          }}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="w-48 h-64 bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl border-2 border-dashed border-purple-400/50 flex items-center justify-center hover:border-purple-400/70 transition-colors">
          {image ? (
            <img 
              src={URL.createObjectURL(image)} 
              alt={label}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="text-center">
              <Upload className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <p className="text-purple-200 text-sm">Upload palm</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Users className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold text-white">Compatibility Mode</h2>
          <Heart className="w-8 h-8 text-pink-400" />
        </div>
        <p className="text-xl text-purple-200">
          Upload two palms to discover your cosmic connection! 💫
        </p>
      </div>

      {!result ? (
        <>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ImageUpload 
              image={image1} 
              onImageChange={setImage1} 
              label="First Palm 👋" 
            />
            <ImageUpload 
              image={image2} 
              onImageChange={setImage2} 
              label="Second Palm ✋" 
            />
          </div>

          <div className="text-center">
            <button
              onClick={handleAnalyze}
              disabled={!image1 || !image2 || isAnalyzing}
              className={`bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all ${
                (!image1 || !image2 || isAnalyzing) 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:shadow-pink-500/25 hover:scale-105'
              }`}
            >
              {isAnalyzing ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Analyzing Compatibility...</span>
                </div>
              ) : (
                'Analyze Compatibility 💕'
              )}
            </button>
          </div>
        </>
      ) : (
        <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-8 rounded-3xl border border-pink-500/20">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-white mb-4">{result.score}%</div>
            <div className="w-full bg-purple-900/30 rounded-full h-4 mb-4">
              <div 
                className="h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-1000"
                style={{ width: `${result.score}%` }}
              ></div>
            </div>
            <p className="text-2xl text-pink-200 mb-6">{result.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-green-500 rounded-full mr-2"></span>
                Strengths
              </h3>
              <ul className="space-y-2">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="text-purple-200 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-yellow-500 rounded-full mr-2"></span>
                Growth Areas
              </h3>
              <ul className="space-y-2">
                {result.challenges.map((challenge, index) => (
                  <li key={index} className="text-purple-200 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setResult(null);
                setImage1(null);
                setImage2(null);
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Try Another Pair
            </button>
          </div>
        </div>
      )}
    </div>
  );
}