export class Franc {
  private amount: number

  constructor(amount: number) {
    this.amount = amount
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }

  equlas(object: Franc): boolean {
    const franc = object
    return this.amount == franc.amount
  }
}
