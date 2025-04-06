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

test('test reduce money different currency', () => {
  const bank = new Bank()
  bank.addRate('CHF', 'USD', 2)
  const result = bank.reduce(Money.franc(2), 'USD')
  expect(result).toStrictEqual(Money.dollar(1))
})

test('test identity rate', () => {
  expect(new Bank().rate('USD', 'USD')).toBe(1)
})

test('test mixed addition', () => {
  const fiveBucks = Money.dollar(5)
  const tenFrancs = Money.franc(10)
  const bank = new Bank()
  bank.addRate('CHF', 'USD', 2)
  const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD')
  expect(result).toStrictEqual(Money.dollar(10))
})

test('test sum plus money', () => {
  const fiveBucks = Money.dollar(5)
  const tenFrancs = Money.franc(10)
  const bank = new Bank()
  bank.addRate('CHF', 'USD', 2)
  const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks)
  const result = bank.reduce(sum, 'USD')
  expect(result).toStrictEqual(Money.dollar(15))
})

test('test sum times', () => {
  const fiveBucks = Money.dollar(5)
  const tenFrancs = Money.franc(10)
  const bank = new Bank()
  bank.addRate('CHF', 'USD', 2)
  const sum = new Sum(fiveBucks, tenFrancs).times(2)
  const result = bank.reduce(sum, 'USD')
  expect(result).toStrictEqual(Money.dollar(20))
})
