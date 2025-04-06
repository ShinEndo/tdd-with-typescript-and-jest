export class Money {
  protected amount: number
  protected currency: string

  constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency)
  }

  getCurrency(): string {
    return this.currency
  }

  equals(object: Money): boolean {
    const money = object
    return this.amount == money.amount
  }
}
