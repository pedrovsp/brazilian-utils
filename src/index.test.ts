import * as API from '.';

describe('Public API', () => {
  const methods = [
    'formatPJ',
    'getStates',
    'formatCPF',
    'isValidCEP',
    'formatCEP',
    'isValidPIS',
    'isLastChar',
    'isValidCPF',
    'isValidLicensePlate',
    'isValidIE',
    'formatCNPJ',
    'isValidCNPJ',
    'onlyNumbers',
    'generateCPF',
    'isValidEmail',
    'isValidPhone',
    'isValidMobilePhone',
    'isValidLandlinePhone',
    'generateCNPJ',
    'formatBoleto',
    'isValidBoleto',
    'generateChecksum',
    'generateRandomNumber',
    'getCities',
    'capitalize',
    'formatCurrency',
    'parseCurrency',
  ];

  Object.keys(API).forEach((method) => {
    test(`${method} is available in the Public API`, () => {
      expect(methods).toContain(method);
    });
  });
});
