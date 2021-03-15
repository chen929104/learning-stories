import rainTerraces from './rain-terraces';
import rainTerracesDP from './rain-terraces-dp';
import rainTerracesStack from './rain-terraces-stack';

test('rainTerraces', () => {
  expect(rainTerraces([])).toBe(0);
  expect(rainTerraces([1])).toBe(0);
  expect(rainTerraces([2, 0, 2])).toBe(2);
  expect(rainTerraces([1, 0])).toBe(0);
  expect(rainTerraces([0, 1])).toBe(0);
  expect(rainTerraces([0, 1, 0])).toBe(0);
  expect(rainTerraces([0, 1, 0, 0])).toBe(0);
  expect(rainTerraces([0, 1, 0, 0, 1, 0])).toBe(2);
  expect(rainTerraces([0, 2, 0, 0, 1, 0])).toBe(2);
  expect(rainTerraces([2, 0, 2])).toBe(2);
  expect(rainTerraces([2, 0, 5])).toBe(2);
  expect(rainTerraces([3, 0, 0, 2, 0, 4])).toBe(10);
  expect(rainTerraces([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(rainTerraces([1, 1, 1, 1, 1])).toBe(0);
  expect(rainTerraces([1, 2, 3, 4, 5])).toBe(0);
  expect(rainTerraces([4, 1, 3, 1, 2, 1, 2, 1])).toBe(4);
  expect(rainTerraces([0, 2, 4, 3, 4, 2, 4, 0, 8, 7, 0])).toBe(7);
});

test('rainTerracesDP', () => {
  expect(rainTerracesDP([])).toBe(0);
  expect(rainTerracesDP([1])).toBe(0);
  expect(rainTerracesDP([2, 0, 2])).toBe(2);
  expect(rainTerracesDP([1, 0])).toBe(0);
  expect(rainTerracesDP([0, 1])).toBe(0);
  expect(rainTerracesDP([0, 1, 0])).toBe(0);
  expect(rainTerracesDP([0, 1, 0, 0])).toBe(0);
  expect(rainTerracesDP([0, 1, 0, 0, 1, 0])).toBe(2);
  expect(rainTerracesDP([0, 2, 0, 0, 1, 0])).toBe(2);
  expect(rainTerracesDP([2, 0, 2])).toBe(2);
  expect(rainTerracesDP([2, 0, 5])).toBe(2);
  expect(rainTerracesDP([3, 0, 0, 2, 0, 4])).toBe(10);
  expect(rainTerracesDP([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(rainTerracesDP([1, 1, 1, 1, 1])).toBe(0);
  expect(rainTerracesDP([1, 2, 3, 4, 5])).toBe(0);
  expect(rainTerracesDP([4, 1, 3, 1, 2, 1, 2, 1])).toBe(4);
  expect(rainTerracesDP([0, 2, 4, 3, 4, 2, 4, 0, 8, 7, 0])).toBe(7);
});

test('rainTerracesStack', () => {
  expect(rainTerracesStack([])).toBe(0);
  expect(rainTerracesStack([1])).toBe(0);
  expect(rainTerracesStack([2, 0, 2])).toBe(2);
  expect(rainTerracesStack([1, 0])).toBe(0);
  expect(rainTerracesStack([0, 1])).toBe(0);
  expect(rainTerracesStack([0, 1, 0])).toBe(0);
  expect(rainTerracesStack([0, 1, 0, 0])).toBe(0);
  expect(rainTerracesStack([0, 1, 0, 0, 1, 0])).toBe(2);
  expect(rainTerracesStack([0, 2, 0, 0, 1, 0])).toBe(2);
  expect(rainTerracesStack([2, 0, 2])).toBe(2);
  expect(rainTerracesStack([2, 0, 5])).toBe(2);
  expect(rainTerracesStack([3, 0, 0, 2, 0, 4])).toBe(10);
  expect(rainTerracesStack([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  expect(rainTerracesStack([1, 1, 1, 1, 1])).toBe(0);
  expect(rainTerracesStack([1, 2, 3, 4, 5])).toBe(0);
  expect(rainTerracesStack([4, 1, 3, 1, 2, 1, 2, 1])).toBe(4);
  expect(rainTerracesStack([0, 2, 4, 3, 4, 2, 4, 0, 8, 7, 0])).toBe(7);
});
