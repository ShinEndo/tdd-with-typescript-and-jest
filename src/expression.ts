import { Bank } from './bank'
import { Money } from './money'

export interface Expression {
  times(multiplier: number): Expression
  reduce(bank: Bank, to: string): Money
  plus(addend: Expression): Expression
}
