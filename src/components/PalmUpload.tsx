import React, { useState, useRef } from 'react';
import { Upload, Camera, X } from 'lucide-react';

interface PalmUploadProps {
  onImageSelect: (file: File) => void;
  isAnalyzing: boolean;
}

export default function PalmUpload({ onImageSelect, isAnalyzing }: PalmUploadProps) {
  const [dragOver, setDragOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onImageSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="relative">
      <div 
        className={`relative border-2 border-dashed rounded-3xl p-8 lg:p-12 transition-all cursor-pointer ${
          dragOver 
            ? 'border-yellow-400 bg-yellow-400/5 shadow-xl shadow-yellow-500/20' 
            : 'border-purple-400/50 bg-purple-900/20 hover:border-purple-400/70'
        } ${isAnalyzing ? 'pointer-events-none opacity-50' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
        
        {selectedImage ? (
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Selected palm" 
              className="w-48 h-64 mx-auto object-cover rounded-2xl"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearImage();
              }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            {isAnalyzing && (
              <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p>Analyzing your palm...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-48 h-64 mx-auto bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                  <div className="text-purple-200">Your palm photo will appear here</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
            </div>
            
            <Upload className="w-8 h-8 text-purple-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Upload Your Palm</h3>
            <p className="text-purple-200 mb-4">Drag & drop or click to upload</p>
            <div className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full transition-colors inline-block">
              Choose File
            </div>
          </div>
        )}
      </div>
    </div>
  );
}