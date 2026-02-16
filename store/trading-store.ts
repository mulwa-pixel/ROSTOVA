import { create } from 'zustand';
import { ActiveContract } from '@/lib/types';

interface TradingStore {
  balance: number;
  setBalance: (balance: number) => void;
  activeContracts: ActiveContract[];
  addContract: (contract: ActiveContract) => void;
  removeContract: (contractId: string) => void;
  selectedSymbol: string;
  setSelectedSymbol: (symbol: string) => void;
}

export const useTradingStore = create<TradingStore>((set) => ({
  balance: 10000,
  setBalance: (balance) => set({ balance }),
  activeContracts: [],
  addContract: (contract) => 
    set((state) => ({ 
      activeContracts: [...state.activeContracts, contract] 
    })),
  removeContract: (contractId) =>
    set((state) => ({
      activeContracts: state.activeContracts.filter(c => c.contractId !== contractId)
    })),
  selectedSymbol: 'R_100',
  setSelectedSymbol: (symbol) => set({ selectedSymbol: symbol })
}));