import runGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const getGreatestCommonDivisor = (numberOne, numberTwo) => {
  if (numberOne % numberTwo === 0) {
    return numberTwo;
  }
  return getGreatestCommonDivisor(numberTwo, numberOne % numberTwo);
}; // использовал Алгоритм Евклида

const getData = () => {
  const numberOne = getRandomInt(0, 100);
  const numberTwo = getRandomInt(0, 100);
  console.log(`Question: ${numberOne} ${numberTwo}`);
  let correctAnswer = '1';
  if (numberOne > numberTwo) {
    correctAnswer = getGreatestCommonDivisor(numberOne, numberTwo);
  } else {
    correctAnswer = getGreatestCommonDivisor(numberTwo, numberOne);
  }
  return String(correctAnswer);
};

const brainGreatestCommonDivisor = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, getData);
};

export default brainGreatestCommonDivisor;
