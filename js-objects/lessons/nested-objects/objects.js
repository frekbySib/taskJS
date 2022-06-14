import get from './objects.js';

export default (obj, arr) => {
  let value = obj;
  for (const key of arr) {
    value = value[key];
    if (value === undefined) {
      return null;
    }
  }
  return value;
};

// objects.js

// Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:

//     Исходный объект
//     Цепочка ключей (массив), по которой ведётся поиск значения

// В случае, когда добраться до значения невозможно, возвращается null.

const data = {
  user: 'ubuntu',

  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

console.log(get(data, ['undefined'])); // null
console.log(get(data, ['user'])); // 'ubuntu'
console.log(get(data, ['user', 'ubuntu'])); // null
console.log(get(data, ['hosts', 1, 'name'])); // 'web2'
console.log(get(data, ['hosts', 0])); // { name: 'web1' }
console.log(get(data, ['hosts', 1, null])); // 3
console.log(get(data, ['hosts', 1, 'active'])); // false

// В этой задаче нельзя использовать библиотеку lodash. Смысл задачи в том, чтобы реализовать всё самостоятельно.
// Для проверки наличия ключа используйте вариант предлагаемый ниже:

const obj = { key: 'value' };
console.log(Object.hasOwn(obj, 'key')); // true
console.log(Object.hasOwn(obj, 'another key')); // false

// alternative answer
// // BEGIN
// export default (data, keys) => {
//   let current = data;
//   for (const key of keys) {
//     const hasProperty = Object.hasOwn(current, key);
//     if (!hasProperty) {
//       return null;
//     }
//     current = current[key];
//   }

//   return current;
// };
// // END