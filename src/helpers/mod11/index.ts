export const MOD_11_WEIGHTS = {
  end: 9,
  initial: 2,
};

export function mod11(value: string): number {
  const { initial, end } = MOD_11_WEIGHTS;

  let weight = initial;

  const sum = value
    .split('')
    .reverse()
    .reduce((acc, digit) => {
      const result = parseInt(digit, 10) * weight;
      weight = weight < end ? weight + 1 : initial;

      return acc + result;
    }, 0);

  const mod = sum % 11;

  return mod === 0 || mod === 1 ? 1 : 11 - mod;
}
