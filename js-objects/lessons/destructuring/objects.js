const getSortedNames = (users) => {
  const namesArr = [];

  for (const { name } of users) {
    namesArr.push(name);
  }
  return namesArr.sort();
};
export default getSortedNames;


const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
