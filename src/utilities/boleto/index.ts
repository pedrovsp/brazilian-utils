import { onlyNumbers, isLastChar, mod10, mod11 } from '../../helpers';

export const PARTIALS = [
  {
    end: 9,
    start: 0,
    index: 9,
  },
  {
    end: 20,
    start: 10,
    index: 20,
  },
  {
    end: 31,
    start: 21,
    index: 31,
  },
];

export const DOT_INDEXES = [4, 14, 25];

export const SPACE_INDEXES = [9, 20, 31, 32];

export const LENGTH = 47;

export const CHECK_DIGIT_POSITION = 4;

export const DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS = [
  { end: 4, start: 0 },
  { end: 47, start: 32 },
  { end: 9, start: 4 },
  { end: 20, start: 10 },
  { end: 31, start: 21 },
];

function isValidLength(digitableLine: string): boolean {
  return digitableLine.length === LENGTH;
}

function isValidPartials(digitableLine: string): boolean {
  return PARTIALS.every(({ start, end, index }) => {
    const mod = mod10(digitableLine.substring(start, end));

    return +digitableLine[index] === mod;
  });
}

function parse(digitableLine: string): string {
  return DIGITABLE_LINE_TO_BOLETO_CONVERT_POSITIONS.reduce(
    (acc, pos) => acc + digitableLine.substring(pos.start, pos.end),
    ''
  );
}

function isValidCheckDigit(parsedDigitableLine: string): boolean {
  const mod = mod11(
    parsedDigitableLine.slice(0, CHECK_DIGIT_POSITION) + parsedDigitableLine.slice(CHECK_DIGIT_POSITION + 1)
  );

  return +parsedDigitableLine[CHECK_DIGIT_POSITION] === mod;
}

export function isValid(digitableLine: string): boolean {
  if (!digitableLine || typeof digitableLine !== 'string') return false;

  const digits = onlyNumbers(digitableLine);

  if (!isValidLength(digits)) return false;

  if (!isValidPartials(digits)) return false;

  const parsedDigits = parse(digits);

  return isValidCheckDigit(parsedDigits);
}

export function format(boleto: string) {
  const digits = onlyNumbers(boleto);

  return digits
    .slice(0, LENGTH)
    .split('')
    .reduce((acc, digit, index) => {
      const result = `${acc}${digit}`;

      if (!isLastChar(index, digits)) {
        if (DOT_INDEXES.indexOf(index) >= 0) return `${result}.`;
        if (SPACE_INDEXES.indexOf(index) >= 0) return `${result} `;
      }

      return result;
    }, '');
}
