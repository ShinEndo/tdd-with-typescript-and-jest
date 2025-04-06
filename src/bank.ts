import { Pair } from './pair'
import { Expression } from './expression'

export class Bank {
  private rates: Map<string, number> = new Map<string, number>()
  reduce(source: Expression, to: string) {
    return source.reduce(this, to)
  }

  addRate(from: string, to: string, rate: number): void {
    if (rate === undefined) rate = 1
    this.rates.set(new Pair(from, to).toString(), rate)
  }

  rate(from: string, to: string): number {
    if (from === to) return 1
    return this.rates.get(new Pair(from, to).toString()) ?? 1
  }
}
