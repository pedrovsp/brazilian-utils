import { mod11 } from '.';

describe('mod11', () => {
  test('should match the final mod11 value', () => {
    expect(mod11('85890000460')).toBe(9);
    expect(mod11('52460179160')).toBe(5);
    expect(mod11('60759305086')).toBe(5);
  });
});
