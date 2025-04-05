export class Money {
  protected amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  equals(object: Money): boolean {
    const money = object
    return this.amount == money.amount
  }
}
