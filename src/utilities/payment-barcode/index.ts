import { formatBoleto, formatConvenio, isValidBoleto, isValidConvenio } from 'utilities';
import { onlyNumbers } from '../../helpers';

export const CONVENIO_VALUE = 8;
export enum PaymentType {
  BOLETO,
  CONVENIO,
}

export function identifyPaymentType(barcode: string): PaymentType {
  return +barcode.charAt(0) === CONVENIO_VALUE ? PaymentType.CONVENIO : PaymentType.BOLETO;
}

export function isValid(barcode: string): boolean {
  if (!barcode || typeof barcode !== 'string') return false;

  const digits = onlyNumbers(barcode);

  if (identifyPaymentType(digits) === PaymentType.CONVENIO) {
    return isValidBoleto(barcode);
  } else {
    return isValidConvenio(barcode);
  }
}

export function format(barcode: string): string {
  const digits = onlyNumbers(barcode);

  if (identifyPaymentType(digits) === PaymentType.CONVENIO) {
    return formatBoleto(barcode);
  } else {
    return formatConvenio(barcode);
  }
}
