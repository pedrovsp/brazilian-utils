import { mod10 } from '.';

describe('mod10', () => {
  test('should match the final mod10 value', () => {
    expect(mod10('83640000001')).toBe(1);
    expect(mod10('51240138000')).toBe(5);
    expect(mod10('92741588911')).toBe(6);
    expect(mod10('00076420421')).toBe(0);
    expect(mod10('001900000')).toBe(9);
    expect(mod10('0114971860')).toBe(1);
  });
});
