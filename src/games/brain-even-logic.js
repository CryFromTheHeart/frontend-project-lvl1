import getRandomInt from '../getRandomInt.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => ((number % 2 === 0));
const getData = () => {
  const number = getRandomInt(0, 100);
  const correctAnswer = (isEven(number)) ? 'yes' : 'no';
  const question = (`${number}`);
  return [correctAnswer, question];
};
const brainEven = () => {
  runGame(description, getData);
};

export default brainEven;
