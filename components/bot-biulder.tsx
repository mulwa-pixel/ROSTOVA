'use client';

import { useState } from 'react';

export default function BotBuilder() {
  const [botName, setBotName] = useState('');
  const [strategy, setStrategy] = useState('martingale');

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Bot Builder</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Bot Name"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="w-full bg-gray-800 rounded-lg p-2 text-white"
        />

        <select
          value={strategy}
          onChange={(e) => setStrategy(e.target.value)}
          className="w-full bg-gray-800 rounded-lg p-2 text-white"
        >
          <option value="martingale">Martingale</option>
          <option value="fixed">Fixed Stake</option>
          <option value="percentage">Percentage</option>
        </select>

        <button className="w-full bg-[#00ff88] text-black font-bold py-2 rounded-lg">
          START BOT
        </button>
      </div>
    </div>
  );
}