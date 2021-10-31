import runGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (num) => {
  for (let divisor = 2; divisor <= num / 2; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  const number = getRandomInt(0, 100);
  console.log(`Question: ${number}`);
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no' ;
  return correctAnswer;
};

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, getData);
};

export default brainPrime;
