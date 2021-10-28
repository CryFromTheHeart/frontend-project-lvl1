import getRandomInt from '../getRandomInt.js';
import runGame from '../index.js';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');
const getData = () => {
  const number = getRandomInt(0, 100);
  const correctAnswer = isEven(number);
  console.log(`Question: ${number}`);
  return correctAnswer;
};
const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, getData);
};

export default brainEven;
