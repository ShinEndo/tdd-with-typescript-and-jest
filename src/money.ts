import { Bank } from './bank'
import { Expression } from './expression'
import { Sum } from './sum'

export class Money implements Expression {
  amount: number
  protected currency: string

  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency)
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend)
  }

  public reduce(bank: Bank, to: string) {
    const rate = bank.rate(this.currency, to)
    return new Money(this.amount / rate, to)
  }

  getCurrency(): string {
    return this.currency
  }

  equals(object: Money): boolean {
    const money = object
    return this.amount == money.amount
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF')
  }
}
