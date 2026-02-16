export interface TickData {
  symbol: string;
  price: number;
  timestamp: number;
  digit: number;
  parity: 'even' | 'odd';
}

export interface DigitAnalytics {
  frequencies: { [key: number]: number };
  evenCount: number;
  oddCount: number;
  probabilityNext: {
    digit: { [key: number]: number };
    parity: { even: number; odd: number };
  };
}

export interface ActiveContract {
  contractId: string;
  symbol: string;
  entryPrice: number;
  currentPrice: number;
  stake: number;
  profitLoss: number;
}

export interface SmartSignal {
  symbol: string;
  direction: 'CALL' | 'PUT';
  confidence: number;
  reasoning: string[];
}