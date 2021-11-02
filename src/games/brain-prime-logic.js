import runGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question(`${number}`);
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
  return [correctAnswer, question];
};

const brainPrime = () => {
  runGame(description, getData);
};

export default brainPrime;
