// objects.js

// Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий только указанные свойства. Параметры:

//     Исходный объект
//     Массив имен свойств

const pick = (obj, arr) => {
  const newObj = {};
  for (const item of arr) {
    if (obj.length === 0) {
      return newObj;
    }
    if (obj[item] !== undefined) {
      newObj[item] = obj[item];
    }
  }
  return newObj;
};
export default pick;

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

console.log(pick(data, ['user'])); // { user: 'ubuntu' }
console.log(pick(data, ['user', 'os'])); // { user: 'ubuntu', os: 'linux' }
console.log(pick(data, [])); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется
console.log(pick(data, ['none', 'cores'])); // { cores: 4 }

// alternate (more correct)
// BEGIN
// export default (data, keys) => {
//   const result = {};

//   for (const key of keys) {
//     if (Object.hasOwn(data, key)) {
//       result[key] = data[key];
//     }
//   }

//   return result;
// };
// // END
