'use client';

import { useTradingStore } from '@/store/trading-store';

export default function ActiveContracts() {
  const { activeContracts } = useTradingStore();

  if (activeContracts.length === 0) {
    return (
      <div className="bg-gray-900 rounded-lg p-4">
        <p className="text-gray-400 text-center">No active contracts</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Active Contracts</h2>
      <div className="space-y-2">
        {activeContracts.map(contract => (
          <div key={contract.contractId} className="bg-gray-800 p-3 rounded flex justify-between">
            <div>
              <p className="font-bold">{contract.symbol}</p>
              <p className="text-sm text-gray-400">Stake: ${contract.stake}</p>
            </div>
            <div className="text-right">
              <p className={contract.profitLoss >= 0 ? 'text-[#00ff88]' : 'text-[#ff0055]'}>
                ${contract.profitLoss}
              </p>
              <button className="text-xs text-[#667eea]">Sell</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}