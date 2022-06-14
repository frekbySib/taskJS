const cloneDeep = (obj) => {
  if (!obj || typeof obj !== 'object') return obj;

  const cloneObj = {};
  const entries = Object.entries(obj);
  for (const [key, val] of entries) {
    cloneObj[key] = cloneDeep(val);
  }
  return cloneObj;
};
export default cloneDeep;

const data = {
  key: 'value',

  key2: {
    key: 'innerValue',

    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const result = cloneDeep(data);
console.log(result);

// Но внутри другие объекты
console.log(result.key2 !== data.key2); // true
console.log(result.key2.innerKey !== data.key2.innerKey); // true



// alternate

// const cloneDeep = (object) => {
//   const result = {};
//   const entries = Object.entries(object);
//   for (const [key, value] of entries) {
//     result[key] = isObject(value) ? cloneDeep(value) : value;
//   }

//   return result;
// };

// export default cloneDeep;
