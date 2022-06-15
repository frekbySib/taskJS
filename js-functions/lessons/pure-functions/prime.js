import sayPrimeOrNot from './prime.js';
const isPrime = (num) => {
  if (num < 2) return false;

  const maxDelimiter = num / 2;

  for (let delimiter = 2; delimiter <= maxDelimiter; delimiter += 1) {
    if (num % delimiter === 0) return false;
  }

  return true;
};

export default (num) => console.log(isPrime(num) ? 'yes' : 'no');

sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'

// alternate 
// const isPrime = (num) => {
//   if (num < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// };

// const sayPrimeOrNot = (num) => {
//   const text = isPrime(num) ? 'yes' : 'no';
//   console.log(text);
// };

// export default sayPrimeOrNot;