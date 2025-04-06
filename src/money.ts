export abstract class Money {
  protected amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  abstract times(multiplier: number): Money

  equals(object: Money): boolean {
    const money = object
    return this.amount == money.amount
  }
}
