import { format as formatBoleto, isValid as isValidBoleto } from '../boleto';
import { format as formatConvenio, isValid as isValidConvenio } from '../convenio';
import { onlyNumbers } from '../../helpers';

export const CONVENIO_VALUE = 8;
export enum PaymentType {
  BOLETO,
  CONVENIO,
  INVALID,
}

function checkFirstDigit(digits: string): PaymentType {
  return +digits.charAt(0) === CONVENIO_VALUE ? PaymentType.CONVENIO : PaymentType.BOLETO;
}

export function identifyPaymentType(barcode: string): PaymentType {
  const digits = onlyNumbers(barcode);
  if (digits.length >= 44 && digits.length <= 48) return checkFirstDigit(digits);
  return PaymentType.INVALID;
}

export function isValid(barcode: string): boolean {
  if (!barcode || typeof barcode !== 'string') return false;

  if (identifyPaymentType(barcode) === PaymentType.BOLETO) {
    return isValidBoleto(barcode);
  } else {
    return isValidConvenio(barcode);
  }
}

export function format(barcode: string): string {
  if (checkFirstDigit(barcode) === PaymentType.BOLETO) {
    return formatBoleto(barcode);
  } else {
    return formatConvenio(barcode);
  }
}
