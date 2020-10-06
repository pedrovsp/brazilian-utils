import { onlyNumbers, isLastChar } from '../../helpers';

export const PARTIALS = [
  {
    end: 10,
    start: 0,
    index: 11,
  },
  {
    end: 22,
    start: 12,
    index: 23,
  },
  {
    end: 34,
    start: 24,
    index: 35,
  },
  {
    end: 46,
    start: 36,
    index: 47,
  },
];

export const SLASH_INDEXES = [10, 22, 34, 46];

export const SPACE_INDEXES = [11, 23, 35];

export const LENGTH = 48;

export const CHECK_DIGIT_POSITION = 2;

export const MOD_10_INDICATORS = [6, 7];
export const MOD_11_INDICATORS = [8, 9];

export const MOD_10_WEIGHTS = [2, 1];
export const MOD_11_WEIGHTS = {
  end: 9,
  initial: 2,
};

function isValidLength(digitableLine: string): boolean {
  return digitableLine.length === LENGTH;
}

function isMod10(digitableLine: string) {
  return MOD_10_INDICATORS.some((indicator) => indicator === +digitableLine.split('')[CHECK_DIGIT_POSITION]);
}

function isMod11(digitableLine: string) {
  return MOD_11_INDICATORS.some((indicator) => indicator === +digitableLine.split('')[CHECK_DIGIT_POSITION]);
}

function mod10(partial: string): number {
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

function mod11(value: string): number {
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

function isValidPartials(digitableLine: string): boolean {
  const modFunction = isMod10(digitableLine) ? mod10 : mod11;

  return PARTIALS.every(({ start, end, index }) => {
    const mod = modFunction(digitableLine.substring(start, end));

    return +digitableLine[index] === mod;
  });
}

export function isValid(digitableLine: string): boolean {
  if (!digitableLine || typeof digitableLine !== 'string') return false;

  const digits = onlyNumbers(digitableLine);

  // Convenio always starts with an 8
  if (+digits[0] !== 8) return false;

  if (!isValidLength(digits)) return false;

  if (!(isMod10(digits) || isMod11(digits))) return false;

  // return isValidPartials(digits);
  const mod = mod11(digitableLine.substring(start, end));

  return +digitableLine[index] === mod;
}

export function format(boleto: string) {
  const digits = onlyNumbers(boleto);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if (SLASH_INDEXES.indexOf(index) >= 0) return `${result}-`;
        if (SPACE_INDEXES.indexOf(index) >= 0) return `${result} `;
      }

      return result;
    }, '');
}
