
import { useState } from 'react';
import { Platform } from '@/data/platforms';

export interface StreamData {
  [platformId: string]: number;
}

export interface Revenue {
  platformId: string;
  streams: number;
  amount: number;
}

export function useCalculator(platforms: Platform[]) {
  const [streamData, setStreamData] = useState<StreamData>(() => {
    const initialData: StreamData = {};
    platforms.forEach(platform => {
      initialData[platform.id] = 0;
    });
    return initialData;
  });
  
  const [results, setResults] = useState<Revenue[]>([]);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const updateStreamCount = (platformId: string, count: number) => {
    setStreamData(prev => ({
      ...prev,
      [platformId]: count
    }));
  };

  const calculateRevenue = () => {
    const calculatedResults: Revenue[] = platforms.map(platform => {
      const streams = streamData[platform.id] || 0;
      const amount = streams * platform.rate;
      
      return {
        platformId: platform.id,
        streams,
        amount
      };
    });
    
    setResults(calculatedResults);
    
    const total = calculatedResults.reduce((sum, item) => sum + item.amount, 0);
    setTotalRevenue(total);
    setHasCalculated(true);
  };

  const resetCalculator = () => {
    const resetData: StreamData = {};
    platforms.forEach(platform => {
      resetData[platform.id] = 0;
    });
    
    setStreamData(resetData);
    setResults([]);
    setTotalRevenue(0);
    setHasCalculated(false);
  };

  return {
    streamData,
    updateStreamCount,
    calculateRevenue,
    resetCalculator,
    results,
    totalRevenue,
    hasCalculated
  };
}
