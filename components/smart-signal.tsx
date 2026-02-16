'use client';

import { useState, useEffect } from 'react';

export default function SmartSignalCard({ symbol }: { symbol: string }) {
  const [signal, setSignal] = useState<any>(null);

  useEffect(() => {
    setSignal({
      symbol,
      direction: 'CALL',
      confidence: 75,
      reasoning: ['Even digit streak detected', 'RSI oversold']
    });
  }, [symbol]);

  if (!signal) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">AI Signal</h2>
      
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-[#00ff88] mb-2">
          {signal.direction}
        </div>
        <div className="text-2xl text-[#667eea]">
          {signal.confidence}% Confidence
        </div>
      </div>

      <div className="space-y-2">
        {signal.reasoning.map((reason: string, i: number) => (
          <div key={i} className="text-sm text-gray-400">• {reason}</div>
        ))}
      </div>
    </div>
  );
}