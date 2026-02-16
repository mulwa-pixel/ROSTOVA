'use client';

export default function MultiChart({ symbol }: { symbol: string }) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 h-96">
      <div className="flex justify-between mb-2">
        <h2 className="font-bold">{symbol} Chart</h2>
        <div className="flex gap-2">
          <button className="px-2 py-1 bg-gray-800 rounded text-sm">1m</button>
          <button className="px-2 py-1 bg-gray-800 rounded text-sm">5m</button>
          <button className="px-2 py-1 bg-gray-800 rounded text-sm">15m</button>
        </div>
      </div>
      <div className="h-80 bg-gray-800 rounded flex items-center justify-center text-gray-500">
        Chart Placeholder
      </div>
    </div>
  );
}