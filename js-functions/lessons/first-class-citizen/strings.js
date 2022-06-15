const run = (text) => {
  const newStr = text.split('').reverse().join('');
  const takeLast = (str, x) => (str.length === 0 || str.length < x ? null : newStr.slice(0, x));
  return takeLast(text, 4);
};

console.log(run(''));       // null
console.log(run('cb'));     // null
console.log(run('power'));  // rewo
console.log(run('hexlet')); // telx


// strings.js

// Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке. 
// Количество символов передаётся в takeLast() вторым параметром. 
// Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.


// alternate
// const takeLast = (str, length) => {
//   if (str.length === 0 || str.length < length) {
//     return null;
//   }

//   const result = [];
//   for (let i = str.length - 1; result.length < length; i -= 1) {
//     result.push(str[i]);
//   }

//   return result.join('');
// };