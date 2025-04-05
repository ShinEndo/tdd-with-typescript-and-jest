import { Franc } from './../src/franc'

test('', () => {
  const five = new Franc(5)
  expect(five.times(2)).toStrictEqual(new Franc(10))
  expect(five.times(3)).toStrictEqual(new Franc(15))
})
