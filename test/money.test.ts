import { Bank } from './../src/bank'
import { Money } from '../src/money'

test('', () => {
  const five = Money.dollar(5)
  expect(five.times(2)).toStrictEqual(Money.dollar(10))
  expect(five.times(3)).toStrictEqual(Money.dollar(15))
})

test('', () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true)
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false)
  expect(Money.franc(5).equals(Money.franc(5))).toBe(true)
})

test('', () => {
  expect(Money.dollar(1).getCurrency()).toBe('USD')
  expect(Money.franc(1).getCurrency()).toBe('CHF')
})

test('', () => {
  const sum = Money.dollar(5).plus(Money.dollar(5))
  expect(sum).toStrictEqual(Money.dollar(10))

  const bank = new Bank()
  const reduced = bank.reduce(sum, 'USD')
  expect(reduced).toStrictEqual(Money.dollar(10))
})
