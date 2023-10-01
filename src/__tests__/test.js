import { checkPaymentSystem } from './index'

test('test1', () => {
  const result = checkPaymentSystem('4556597912652828');
  expect(result).toBe('VISA');
})

test('test1', () => {
  const result = checkPaymentSystem('6011068376745684');
  expect(result).toBe('Discover');
})

test('test1', () => {
  const result = checkPaymentSystem('30168466915039');
  expect(result).toBe('Diners Club');
})