import make from './company.js';

export default (str, obj) => {
  const postStatus = { state: 'moderating' };
  const createPostDate = { createdAt: Date.now() };
  const newObj = {
    name: str, ...postStatus, ...obj, ...createPostDate,
  };
  return newObj;
};

const company = make('Hexlet');

// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });

// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }


// alternate

// export default (name, data = {}) => {
//   const defaultData = {
//     state: 'moderating',
//     createdAt: Date.now(),
//   };

//   return { ...defaultData, ...data, name };
// };

