import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN (write your solution here)
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
  'ivan@yahoo.com',
];

console.log(getFreeDomainsCount(emails));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список емейлов, 
// а возвращает количество емейлов, расположенных на каждом бесплатном домене. 
// Список бесплатных доменов хранится в константе freeEmailDomains.

// Подсказки

//     При решении вам может понадобится функция get() из библиотеки lodash.
