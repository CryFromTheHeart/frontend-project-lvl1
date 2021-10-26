import readlineSync from 'readline-sync';

const runGame = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);
  const roundCount = 3;
  for (let wonRoundCount = 0; wonRoundCount < roundCount;) {
    const correctAnswer = getGameData();
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    wonRoundCount += 1;
  }
  return console.log(`Congratulation, ${name}!`);
};

export default runGame;
