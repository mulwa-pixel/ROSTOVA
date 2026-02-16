import { TickData, DigitAnalytics } from './types';

export class AnalyticsEngine {
  private history: TickData[] = [];

  addTick(tick: TickData) {
    this.history.push(tick);
    if (this.history.length > 100) this.history.shift();
  }

  getAnalytics(symbol: string): DigitAnalytics | null {
    if (this.history.length < 10) return null;

    const frequencies = { 0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0 };
    let evenCount = 0, oddCount = 0;

    this.history.forEach(tick => {
      const digit = tick.digit;
      frequencies[digit]++;
      if (digit % 2 === 0) evenCount++;
      else oddCount++;
    });

    const total = this.history.length;
    const probabilityNext = {
      digit: {} as { [key: number]: number },
      parity: { even: evenCount/total, odd: oddCount/total }
    };

    for (let i = 0; i <= 9; i++) {
      probabilityNext.digit[i] = frequencies[i] / total;
    }

    return { frequencies, evenCount, oddCount, probabilityNext };
  }

  generateSignal(symbol: string): any {
    const data = this.getAnalytics(symbol);
    if (!data) return null;

    const lastFew = this.history.slice(-5);
    const evenCount = lastFew.filter(t => t.digit % 2 === 0).length;
    
    let direction = 'CALL';
    let confidence = 50;

    if (evenCount >= 4) {
      direction = 'PUT';
      confidence = 75;
    } else if (evenCount <= 1) {
      direction = 'CALL';
      confidence = 75;
    }

    return {
      symbol,
      direction,
      confidence,
      reasoning: [`Based on last ${evenCount} digits pattern`]
    };
  }
}