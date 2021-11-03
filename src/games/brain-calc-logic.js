import runGame from '../index.js';
import getRandomInt from '../getRandomInt.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCalcExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const getData = () => {
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);
  const indexOperator = getRandomInt(0, 2);
  const currentOperator = operators[indexOperator];
  const question = (`${firstNumber} ${currentOperator} ${secondNumber}`);
  const correctAnswer = String(getCalcExpression(firstNumber, secondNumber, currentOperator));
  return [correctAnswer, question];
};

const brainCalc = () => {
  runGame(description, getData);
};

export default brainCalc;
