import { Money } from './money'
import { MoneyFactory } from './moneyFactory'

export class Dollar extends Money {
  times(multiplier: number): Money {
    return MoneyFactory.dollar(this.amount * multiplier)
  }
  getCurrency(): string {
    return this.currency
  }
}
