import { MoneyFactory } from '../src/moneyFactory'

test('', () => {
  const five = MoneyFactory.dollar(5)
  expect(five.times(2)).toStrictEqual(MoneyFactory.dollar(10))
  expect(five.times(3)).toStrictEqual(MoneyFactory.dollar(15))
})

test('', () => {
  expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5))).toBe(true)
  expect(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6))).toBe(false)
  expect(MoneyFactory.franc(5).equals(MoneyFactory.franc(5))).toBe(true)
})

test('', () => {
  expect(MoneyFactory.dollar(1).getCurrency()).toBe('USD')
  expect(MoneyFactory.franc(1).getCurrency()).toBe('CHF')
})
