import { onlyNumbers, isLastChar, mod10, mod11 } from '../../helpers';

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

// DIGIT THAT DETERMINES WHICH MOD FUNCTION WILL BE USED
export const VALUE_DIGIT_POSITION = 2;
// CHECK DIGIT THAT MUST MATCH THE MOD RESULT
export const CHECK_DIGIT_POSITION = 3;

export const MOD_10_INDICATORS = [6, 7];
export const MOD_11_INDICATORS = [8, 9];

function isValidLength(digitableLine: string): boolean {
  return digitableLine.length === LENGTH;
}

function isMod10(digitableLine: string) {
  return MOD_10_INDICATORS.some((indicator) => indicator === +digitableLine.split('')[VALUE_DIGIT_POSITION]);
}

function isMod11(digitableLine: string) {
  return MOD_11_INDICATORS.some((indicator) => indicator === +digitableLine.split('')[VALUE_DIGIT_POSITION]);
}

function isValidPartials(digitableLine: string, modFunction: Function): boolean {
  return PARTIALS.every(({ start, index }) => {
    const mod = modFunction(digitableLine.substring(start, index));

    return +digitableLine[index] === mod;
  });
}

export function digitableLineToBarcode(digitableLine: string): string {
  let barcode: string[] = [];
  PARTIALS.forEach(({ start, index }) => {
    barcode = barcode.concat(digitableLine.substring(start, index).split(''));
  });

  barcode.splice(CHECK_DIGIT_POSITION, 1);

  return barcode.join('');
}

export function isValid(digitableLine: string): boolean {
  if (!digitableLine || typeof digitableLine !== 'string') return false;

  const digits = onlyNumbers(digitableLine);

  // Convenio always starts with an 8
  if (+digits[0] !== 8) return false;

  if (!isValidLength(digits)) return false;

  let modFunction;
  if (isMod10(digits)) modFunction = mod10;
  else if (isMod11(digits)) modFunction = mod11;
  else return false;

  if (!isValidPartials(digits, modFunction)) return false;

  const barcode = digitableLineToBarcode(digits);

  return modFunction(barcode) === +digitableLine.substr(CHECK_DIGIT_POSITION, 1);
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
