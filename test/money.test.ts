import { Franc } from '../src/franc'
import { Money } from '../src/money'
import { MoneyFactory } from '../src/moneyFactory'

test('', () => {
  const five = MoneyFactory.dollar(5)
  expect(five.times(2)).toStrictEqual(MoneyFactory.dollar(10))
  expect(five.times(3)).toStrictEqual(MoneyFactory.dollar(15))
})

test('', () => {
  expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5))).toBe(true)
  expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6))).toBe(false)
})

test('', () => {
  const five = MoneyFactory.franc(5)
  expect(five.times(2)).toStrictEqual(MoneyFactory.franc(10))
  expect(five.times(3)).toStrictEqual(MoneyFactory.franc(15))
})

test('', () => {
  expect(MoneyFactory.franc(5).equals(MoneyFactory.franc(5))).toBe(true)
  expect(MoneyFactory.franc(5).equals(MoneyFactory.franc(6))).toBe(false)
})

test('', () => {
  expect(MoneyFactory.dollar(1).getCurrency()).toBe('USD')
  expect(MoneyFactory.franc(1).getCurrency()).toBe('CHF')
})

test('', () => {
  expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF'))).toBe(true)
})
