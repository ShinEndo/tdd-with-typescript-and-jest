import { Dollar } from '../src/dollar'

test('', () => {
  const five = new Dollar(5)
  expect(five.times(2)).toStrictEqual(new Dollar(10))
  expect(five.times(3)).toStrictEqual(new Dollar(15))
})

test('', () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true)
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false)
})
