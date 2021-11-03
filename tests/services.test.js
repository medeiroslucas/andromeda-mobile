import { moveDown, moveLeft, moveRight, moveUp, MIN_DEG_AZ, MIN_DEG_ALT } from '../services/telescopeAdjustments';

function convert(num) {
  return parseFloat(num.toFixed(2))
}

test('Move Up Test', () => {
  expect(convert(moveUp(0))).toBe(convert(MIN_DEG_ALT));
});

test('Move Down Test', () => {
  expect(convert(moveDown(0))).toBe(convert(-MIN_DEG_ALT));
});

test('Move Right Test', () => {
  expect(convert(moveRight(0))).toBe(convert(MIN_DEG_AZ));
});

test('Move Left Test', () => {
  expect(convert(moveLeft(0))).toBe(convert(-MIN_DEG_AZ));
});
