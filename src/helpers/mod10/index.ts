export const MOD_10_WEIGHTS = [2, 1];

export function mod10(partial: string): number {
  const sum = partial
    .split('')
    .reverse()
    .reduce((acc, digit, index) => {
      const result = parseInt(digit, 10) * MOD_10_WEIGHTS[index % 2];

      return acc + (result > 9 ? 1 + (result % 10) : result);
    }, 0);

  const mod = sum % 10;

  return mod > 0 ? 10 - mod : 0;
}
