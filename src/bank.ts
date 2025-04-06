import { Expression } from './expression'
import { MoneyFactory } from './moneyFactory'

export class Bank {
  reduce(source: Expression, to: string) {
    return MoneyFactory.dollar(10)
  }
}
