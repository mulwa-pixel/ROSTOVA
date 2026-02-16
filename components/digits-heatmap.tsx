'use client';

import { useEffect, useState } from 'react';
import { AnalyticsEngine } from '../lib/analytics';
import { DigitAnalytics } from '../lib/types';

export default function DigitHeatmap({ symbol }: { symbol: string }) {
  const [data, setData] = useState<DigitAnalytics | null>(null);

  useEffect(() => {
    const engine = new AnalyticsEngine();
    const mockData = {
      frequencies: {0:12,1:8,2:15,3:7,4:13,5:9,6:14,7:6,8:11,9:10},
      evenCount: 65,
      oddCount: 45,
      probabilityNext: {
        digit: {},
        parity: { even: 0.59, odd: 0.41 }
      }
    };
    setData(mockData as any);
  }, [symbol]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Digit Analytics</h2>
      
      <div className="grid grid-cols-5 gap-2 mb-4">
        {[0,1,2,3,4,5,6,7,8,9].map(digit => (
          <div key={digit} className="text-center p-2 bg-gray-800 rounded">
            <div className="text-2xl font-bold">{digit}</div>
            <div className="text-sm text-[#00ff88]">
              {data.frequencies[digit]}%
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-3 rounded">
          <p className="text-gray-400">Even</p>
          <p className="text-2xl font-bold text-[#00ff88]">
            {data.evenCount}%
          </p>
        </div>
        <div className="bg-gray-800 p-3 rounded">
          <p className="text-gray-400">Odd</p>
          <p className="text-2xl font-bold text-[#ff0055]">
            {data.oddCount}%
          </p>
        </div>
      </div>
    </div>
  );
}