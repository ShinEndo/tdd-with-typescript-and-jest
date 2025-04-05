import { Franc } from './../src/franc'

test('', () => {
  const five = new Franc(5)
  expect(five.times(2)).toStrictEqual(new Franc(10))
  expect(five.times(3)).toStrictEqual(new Franc(15))
})

test('', () => {
  expect(new Franc(5).equals(new Franc(5))).toBe(true)
  expect(new Franc(5).equals(new Franc(6))).toBe(false)
})
