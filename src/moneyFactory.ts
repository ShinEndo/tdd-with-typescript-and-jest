import { Dollar } from './dollar'
import { Franc } from './franc'
import { Money } from './money'

export class MoneyFactory {
  static dollar(amount: number): Money {
    return new Dollar(amount)
  }

  static franc(amount: number): Money {
    return new Franc(amount)
  }
}
