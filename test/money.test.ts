import { Bank } from './../src/bank'
import { Money } from '../src/money'
import { Sum } from '../src/sum'

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

test('test plus returns sum', () => {
  const five = Money.dollar(5)
  const result = five.plus(five)
  const sum = result as Sum
  expect(sum.augend).toStrictEqual(five)
  expect(sum.addend).toStrictEqual(five)

  const bank = new Bank()
  const reduced = bank.reduce(sum, 'USD')
  expect(reduced).toStrictEqual(Money.dollar(10))
})

test('test reduce sum', () => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4))
  const bank = new Bank()
  const result = bank.reduce(sum, 'USD')
  expect(result).toStrictEqual(Money.dollar(7))
})

test('test reduce money', () => {
  const bank = new Bank()
  const result = bank.reduce(Money.dollar(1), 'USD')
  expect(result).toStrictEqual(Money.dollar(1))
})
