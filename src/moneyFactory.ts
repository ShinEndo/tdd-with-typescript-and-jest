import { Money } from './money'

export class MoneyFactory {
  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF')
  }
}
