export abstract class Money {
  protected amount: number
  protected currency: string

  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  abstract times(multiplier: number): Money

  abstract getCurrency(): string

  equals(object: Money): boolean {
    const money = object
    return this.amount == money.amount
  }
}
