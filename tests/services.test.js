import { moveDown, moveLeft, moveRight, moveUp, MIN_DEG_AZ, MIN_DEG_ALT } from '../services/telescopeAdjustments';
import { getAstros } from '../services/getAstros';
import { categoryList } from "../astros";

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

test('Get Astro Test', () => {
  getAstros({ latitude: 0, longitude: 0 }).then(astros => {
    expect(astros).toBe(categoryList);
  })
});