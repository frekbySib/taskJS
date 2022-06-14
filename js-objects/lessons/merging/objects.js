import fill from './objects.js';
import _ from 'lodash';

export default (inObj, keys, outObj) =>
  keys.length > 0
    ? Object.assign(inObj, _.pick(outObj, keys))
    : Object.assign(inObj, outObj);

// Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

//     Исходный объект
//     Список ключей которые нужно заменить
//     Данные, которые нужно сливать в исходный объект

// В случае, когда список ключей пустой, нужно сливать все данные полностью.

const company = {
  name: null,

  state: 'moderating',
};

const data = {
  name: 'Hexlet',

  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

console.log(fill(company, ['name'], data));

// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

console.log(fill(company, [], data));

// {
//   name: 'Hexlet',
//   state: 'published',
// }

// Попробуйте решить эту задачу с помощью слияния.

// Подсказки;
// _.pick();

// alternate

// export default (object, keys, data) => {
//   const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
//   Object.assign(object, filteredData);
// // END
