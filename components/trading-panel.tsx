'use client';

import { useState } from 'react';
import { useTradingStore } from '@/store/trading-store';

export default function TradingPanel({ symbol }: { symbol: string }) {
  const [stake, setStake] = useState(1);
  const [duration, setDuration] = useState(5);
  const { balance } = useTradingStore();

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Quick Trade</h2>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-400">Market</label>
          <div className="text-white mt-1">{symbol}</div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="bg-[#00ff88] text-black font-bold py-2 rounded-lg">
            CALL ↗
          </button>
          <button className="bg-[#ff0055] text-white font-bold py-2 rounded-lg">
            PUT ↘
          </button>
        </div>

        <div>
          <label className="text-sm text-gray-400">Stake ($)</label>
          <input
            type="number"
            value={stake}
            onChange={(e) => setStake(Number(e.target.value))}
            className="w-full bg-gray-800 rounded-lg p-2 mt-1 text-white"
            min="1"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Duration (ticks)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full bg-gray-800 rounded-lg p-2 mt-1 text-white"
            min="1"
          />
        </div>

        <div className="bg-gray-800 rounded-lg p-3">
          <p className="text-sm text-gray-400">Potential Payout</p>
          <p className="text-2xl font-bold text-[#00ff88]">
            ${(stake * 1.95).toFixed(2)}
          </p>
        </div>

        <button className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold py-3 rounded-lg">
          PLACE TRADE
        </button>
      </div>
    </div>
  );
}