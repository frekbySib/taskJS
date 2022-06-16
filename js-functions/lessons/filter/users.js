import getGirlFriends from './users.js';

export default (users) => {
  const friends = users.map((user) => user.friends).flat();
  const girlFriends = friends.filter((friend) => friend.gender === 'female');
  return girlFriends;
};

// alternate
// export default (users) => {
//   const friendsOfUsers = users.map(({ friends }) => friends);
//   return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
// };

const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [{ name: 'Taywin', gender: 'male' }],
  },
];

console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];

// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей и
// возвращает плоский список подруг всех пользователей (без сохранения ключей).
// Друзья каждого пользователя хранятся в виде массива в ключе friends.
// Пол доступен по ключу gender и может принимать значения male или female.

// Подсказки

//     Так как нам нужны только друзья, то можно применить отображение map() и получить список друзей, который затем будет фильтроваться
//     Одно из решений задачи предполагает использование метода массива flat()
