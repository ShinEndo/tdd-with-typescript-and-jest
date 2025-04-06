import { Bank } from './bank'
import { Expression } from './expression'
import { Money } from './money'

export class Sum implements Expression {
  augend: Expression
  addend: Expression

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend
    this.addend = addend
  }

  public plus(addend: Expression) {
    return addend // tmp
  }

  public reduce(bank: Bank, to: string) {
    const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount
    return new Money(amount, to)
  }
}
