# Utilitários

Aqui você encontrará todos os utilitários disponíveis para uso.

## isValidCPF

Valida se o CPF é válido.

```javascript
import { isValidCPF } from '@brazilian-utils/brazilian-utils';

isValidCPF('155151475'); // false
```

## formatCPF

Formata o CPF.

```javascript
import { formatCPF } from '@brazilian-utils/brazilian-utils';

formatCPF('746506880'); // 746.506.880
formatCPF('746506880', { pad: true }); // 007.465.068-80
```

## isValidCNPJ

Valida se o CNPJ é válido.

```javascript
import { isValidCNPJ } from '@brazilian-utils/brazilian-utils';

isValidCNPJ('15515147234255'); // false
```

## formatCNPJ

Formata o CNPJ.

```javascript
import { formatCNPJ } from '@brazilian-utils/brazilian-utils';

formatCNPJ('245222000174'); // 24.522.200/0174
formatCNPJ('245222000174', { pad: true }); // 00.245.222/0001-74
```

## isValidCEP

Valida se o CEP é válido.

```javascript
import { isValidCEP } from '@brazilian-utils/brazilian-utils';

isValidCEP('92500000'); // true
```

## isValidBoleto

Valida se o boleto é válido.

```javascript
import { isValidBoleto } from '@brazilian-utils/brazilian-utils';

isValidBoleto('00190000090114971860168524522114675860000102656'); // true
```

## formatBoleto

Formata valor do tipo string ou number no padrão de boletos.

```javascript
import { formatBoleto } from '@brazilian-utils/brazilian-utils';

formatBoleto('10491443385511900000200000000141325230000093423'); // 10491.44338 55119.000002 00000.000141 3 25230000093423
```

## isValidConvenio

Valida o convênio de acordo com definições da [FEBRABAN](https://cmsportal.febraban.org.br/Arquivos/documentos/PDF/Layout%20-%20C%C3%B3digo%20de%20Barras%20-%20Vers%C3%A3o%205%20-%2001_08_2016.pdf).

```javascript
import { isValidConvenio } from '@brazilian-utils/brazilian-utils';

isValidConvenio('836400000011512401380005927415889116000764204210'); // true
```

## formatConvenio

Formata valor do tipo string ou number no padrão de convênios definidos pela [FEBRABAN](https://cmsportal.febraban.org.br/Arquivos/documentos/PDF/Layout%20-%20C%C3%B3digo%20de%20Barras%20-%20Vers%C3%A3o%205%20-%2001_08_2016.pdf).

```javascript
import { formatConvenio } from '@brazilian-utils/brazilian-utils';

formatConvenio('836400000011512401380005927415889116000764204210'); // '83640000001-1 51240138000-5 92741588911-6 00076420421-0'
```

## isValidEmail

Valida se email é valido.

```javascript
import { isValidEmail } from '@brazilian-utils/brazilian-utils';

isValidEmail('john.doe@hotmail.com'); // true
```

## isValidPhone

Valida se o número de telefone (celular ou residencial) é valido.

```javascript
import { isValidPhone } from '@brazilian-utils/brazilian-utils';

isValidPhone('11900000000'); // true
```

## isValidMobilePhone

Valida se o número de telefone celular é valido.

```javascript
import { isValidMobilePhone } from '@brazilian-utils/brazilian-utils';

isValidMobilePhone('11900000000'); // true
```

## isValidLandlinePhone

Valida se o número de telefone residencial é valido.

```javascript
import { isValidLandlinePhone } from '@brazilian-utils/brazilian-utils';

isValidLandlinePhone('1130000000'); // true
```

## isValidLicensePlate

Valida se a placa de carro é válida.

```javascript
import { isValidLicensePlate } from '@brazilian-utils/brazilian-utils';

isValidLicensePlate('ABC1234'); // true
```

## isValidPIS

Valida se o PIS é válido.

```javascript
import { isValidPIS } from '@brazilian-utils/brazilian-utils';

isValidPIS('12056412547'); // false
```

## formatCEP

Formata o CEP.

```javascript
import { formatCEP } from '@brazilian-utils/brazilian-utils';

formatCEP('92500000'); // 92500-000
```

## isValidIE

Valida se a inscrição estadual de um estado é valida.

```javascript
import { isValidIE } from '@brazilian-utils/brazilian-utils';

isValidIE('AC', '0187634580933'); // false
```

## capitalize

Transforma primeira letra de cada palavra em maiúscula ignorando preposições.

```javascript
import { capitalize } from '@brazilian-utils/brazilian-utils';

capitalize('josé e maria'); // José e Maria
capitalize('josé Ama MARIA', { lowerCaseWords: ['ama'] }); // José ama Maria
capitalize('doc inválido', { upperCaseWords: ['DOC'] }); // DOC Inválido
```

## formatCurrency

Formata um número inteiro ou float para uma string no padrão BRL

```javascript
import { formatCurrency } from '@brazilian-utils/brazilian-utils';

formatCurrency(10); // 10,00
formatCurrency(10756.11); // 10.756,11
formatCurrency(10756.123, { precision: 3 }); // 10.756,123
```

## parseCurrency

Transforma uma string para o formato de inteiro ou float

```javascript
import { parseCurrency } from '@brazilian-utils/brazilian-utils';

parseCurrency('10.756,11'); // 10756.11
parseCurrency('R$ 10.59'); // 10.59
```

## getStates

Retorna todos os estados brasileiros.

```javascript
import { getStates } from '@brazilian-utils/brazilian-utils';

getStates();
// [
//   { code: 'AC', name: 'Acre' },
//   { code: 'AL', name: 'Alagoas' },
//   { code: 'AP', name: 'Amapá' },
//   { code: 'AM', name: 'Amazonas' },
//   { code: 'BA', name: 'Bahia' },
//   { code: 'CE', name: 'Ceará' },
//   { code: 'DF', name: 'Distrito Federal' },
//   { code: 'ES', name: 'Espírito Santo' },
//   { code: 'GO', name: 'Goiás' },
//   { code: 'MA', name: 'Maranhão' },
//   { code: 'MT', name: 'Mato Grosso' },
//   { code: 'MS', name: 'Mato Grosso do Sul' },
//   { code: 'MG', name: 'Minas Gerais' },
//   { code: 'PA', name: 'Pará' },
//   { code: 'PB', name: 'Paraíba' },
//   { code: 'PR', name: 'Paraná' },
//   { code: 'PE', name: 'Pernambuco' },
//   { code: 'PI', name: 'Piauí' },
//   { code: 'RJ', name: 'Rio de Janeiro' },
//   { code: 'RN', name: 'Rio Grande do Norte' },
//   { code: 'RS', name: 'Rio Grande do Sul' },
//   { code: 'RO', name: 'Rondônia' },
//   { code: 'RR', name: 'Roraima' },
//   { code: 'SC', name: 'Santa Catarina' },
//   { code: 'SP', name: 'São Paulo' },
//   { code: 'SE', name: 'Sergipe' },
//   { code: 'TO', name: 'Tocantins' },
// ]
```

## getCities

Retorna as cidades brasileiras.

```javascript
import { getCities } from '@brazilian-utils/brazilian-utils';

// Retorna todas as cidades brasileiras.
getCities();
// [
//   'Abadia de Goiás',
//   'Abadia dos Dourados',
//   'Abadiânia',
//   'Abaeté',
//   'Abaetetuba',
//   'Abaiara',
//   'Abaíra',
//   'Abaré',
//   'Abatiá',
//   'Abdon Batista',
//   ... 5460 more items
// ]

// Retornas todas as cidades brasileiras do estado de São Paulo.
getCities('São Paulo');
getCities('SP');
// [
//   "Adamantina",
//   "Adolfo",
//   "Aguaí",
//   "Águas da Prata",
//   "Águas de Lindóia",
//   "Águas de Santa Bárbara",
//   "Águas de São Pedro",
//   "Agudos",
//   "Alambari",
//   "Alfredo Marcondes",
//   ... 635 more items
// ]
```
