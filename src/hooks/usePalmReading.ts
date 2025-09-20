import { useState, useCallback } from 'react';
import { PalmReading } from '../types';
import { analyzePalmImage } from '../utils/palmAnalysis';

export const usePalmReading = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentReading, setCurrentReading] = useState<PalmReading | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeImage = useCallback(async (file: File, tone: PalmReading['tone'] = 'funny') => {
    setIsAnalyzing(true);
    setError(null);
    
    try {
      const reading = await analyzePalmImage(file, tone);
      setCurrentReading(reading);
      return reading;
    } catch (err) {
      setError('Failed to analyze palm image. Please try again.');
      throw err;
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  const clearReading = useCallback(() => {
    setCurrentReading(null);
    setError(null);
  }, []);

  return {
    isAnalyzing,
    currentReading,
    error,
    analyzeImage,
    clearReading
  };
};