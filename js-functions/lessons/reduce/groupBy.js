import groupBy from './groupBy.js';

export default (data, key) => {
  const cb = (acc, obj) => {
    const property = obj[key];
    if (!Object.hasOwn(acc, property)) {
      acc[property] = [];
    }
    acc[property].push(obj);
    return acc;
  };

  return data.reduce(cb, {});
};

// alternate
// const groupBy = (objects, key) => objects.reduce((acc, object) => {
//   // из каждого объекта берётся значение по ключу
//   const groupName = object[key];
//   // контейнером группы выступает массив
//   // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
//   const group = acc[groupName] ?? [];
//   // возвращается новый объект аккумулятора
//   // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
//   // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
//   return { ...acc, [groupName]: group.concat(object) };
// }, {});

// export default groupBy;

const students = [
  { name: 'Tirion', class: 'B', mark: 3 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
];

console.log(groupBy([], '')); // {}
console.log(groupBy(students, 'mark'));

// {
//   3: [
//     { name: "Tirion", class: "B", mark: 3 },
//     { name: "Keit", class: "A", mark: 3 },
//   ],
//   4: [
//     { name: "Ramsey", class: "A", mark: 4 },
//   ],
// }

// Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству.
// Функция принимает аргументами массив объектов и название свойства для группировки.
// Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.

// Подсказки

//     Аналогичная функция есть в lodash, но вам её нужно создать самостоятельно

//     Алгоритм решения задачи с помощью цикла и редьюса одинаковый.
//     Если вам так проще, сделайте сначала через цикл, затем перепишите через reduce

//     Решение этой задачи аналогично решению задачи usersByAge из теории
