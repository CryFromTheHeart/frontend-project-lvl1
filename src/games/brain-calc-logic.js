import runGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCalcExpression = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber; 
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      console.log(`operation ${operator} is not supported`);
  }
};

const getData = () => {
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);
  const indexOperator = getRandomInt(0, 3);
  const currentOperator = operators[indexOperator];
  const question = (`${firstNumber} ${currentOperator} ${secondNumber}`);
  const correctAnswer = String(getCalcExpression(firstNumber, currentOperator, secondNumber));
  return [correctAnswer, question];
};

const brainCalc = () => {
  runGame(description, getData);
};

export default brainCalc;
