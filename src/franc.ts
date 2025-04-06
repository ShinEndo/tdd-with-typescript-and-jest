import { Money } from './money'
import { MoneyFactory } from './moneyFactory'

export class Franc extends Money {
  times(multiplier: number): Money {
    return MoneyFactory.franc(this.amount * multiplier)
  }

  getCurrency(): string {
    return this.currency
  }
}
