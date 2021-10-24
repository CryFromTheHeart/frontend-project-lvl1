import readlineSync from 'readline-sync';
import getRandomInt from '../getRandomInt.js';

const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');
const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const roundCount = 3;
  for (let wonRoundCount = 0; wonRoundCount < roundCount;) {
    const number = getRandomInt(0, 100);
    const rightAnswer = isEven(number);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      return console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".\nLet's try again, ${name}!`);
    }
    console.log('Correct!');
    wonRoundCount += 1;
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;
