import runGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (numberOne, numberTwo) => {
  if (numberOne % numberTwo === 0) {
    return numberTwo;
  }
  return getGreatestCommonDivisor(numberTwo, numberOne % numberTwo);
}; // использовал Алгоритм Евклида

const getData = () => {
  const numberOne = getRandomInt(0, 100);
  const numberTwo = getRandomInt(0, 100);
  const question = (`${numberOne} ${numberTwo}`);
  const correctAnswer = String(getGreatestCommonDivisor(numberOne, numberTwo));
  return [correctAnswer, question];
};

const brainGreatestCommonDivisor = () => {
  runGame(description, getData);
};

export default brainGreatestCommonDivisor;
