import rainTerraces from './rain-terraces';

test('rainTerraces', () => {
  expect(rainTerraces([])).toEqual(0);
  expect(rainTerraces([1])).toEqual(0);
  expect(rainTerraces([2, 0, 2])).toEqual(2);
  expect(rainTerraces([3, 0, 0, 2, 0, 4])).toEqual(10);
  expect(rainTerraces([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
});
