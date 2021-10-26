import runGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const operators = ['+', '-', '*'];

const getCalcExpression = (firstNumber, operator, secondNumber) => {
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      correctAnswer = 0;
  }
  return correctAnswer;
};

const getGameData = () => {
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);
  const indexOperator = getRandomInt(0, 3);
  const currentOperator = operators[indexOperator];
  console.log(`Question: ${firstNumber} ${currentOperator} ${secondNumber}`);
  const correctAnswer = getCalcExpression(firstNumber, currentOperator, secondNumber);
  return String(correctAnswer);
};

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  runGame(description, getGameData);
};

export default brainCalc;
