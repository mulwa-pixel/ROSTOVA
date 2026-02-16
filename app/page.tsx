'use client';

import { useState } from 'react';
import TradingPanel from '../components/trading-panel';
import DigitHeatmap from '../components/digit-heatmap';
import ActiveContracts from '../components/active-contracts';
import BotBuilder from '../components/bot-builder';
import MultiChart from '../components/multi-chart';
import SmartSignalCard from '../components/smart-signal';

export default function Home() {
  const [activeTab, setActiveTab] = useState('trading');
  const [selectedSymbol, setSelectedSymbol] = useState('R_100');
  const [balance] = useState(10000);

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
            ROSTOVA
          </h1>
          <div className="bg-gray-800 px-4 py-2 rounded-lg">
            <p className="text-xs text-gray-400">Balance</p>
            <p className="text-xl font-bold text-[#00ff88]">${balance}</p>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto p-4">
        <div className="flex gap-2 mb-4 border-b border-gray-800">
          {['trading', 'analytics', 'bots', 'signals'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 capitalize ${
                activeTab === tab 
                  ? 'text-[#667eea] border-b-2 border-[#667eea]' 
                  : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-12 gap-4">
          {activeTab === 'trading' && (
            <>
              <div className="col-span-8">
                <MultiChart symbol={selectedSymbol} />
              </div>
              <div className="col-span-4">
                <TradingPanel symbol={selectedSymbol} />
              </div>
              <div className="col-span-12 mt-4">
                <ActiveContracts />
              </div>
            </>
          )}

          {activeTab === 'analytics' && (
            <div className="col-span-12">
              <DigitHeatmap symbol={selectedSymbol} />
            </div>
          )}

          {activeTab === 'bots' && (
            <div className="col-span-12">
              <BotBuilder />
            </div>
          )}

          {activeTab === 'signals' && (
            <div className="col-span-12">
              <SmartSignalCard symbol={selectedSymbol} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}