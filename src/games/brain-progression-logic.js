import getRandomInt from '../getRandomInt.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const maxStep = 10;

const getProgression = (firstMemberProgression, progressionStep, numberOfTheGuessNumber) => {
  let stringNumbers = '';
  let guessNumber = 0;
  for (let countProgressionStep = 1; countProgressionStep <= maxStep; countProgressionStep += 1) {
    const currentMember = firstMemberProgression + (progressionStep * countProgressionStep);
    if (numberOfTheGuessNumber === countProgressionStep) {
      guessNumber = currentMember;
      stringNumbers = `${stringNumbers}.. `;
    } else {
      stringNumbers = `${stringNumbers}${currentMember} `;
    }
  }
  return [String(guessNumber), stringNumbers];
};

const getData = () => {
  const firstMember = getRandomInt(0, 15);
  const progressionStep = getRandomInt(2, 10);
  const numberGuessNumber = getRandomInt(2, 10);
  const [guessNumber, question] = getProgression(firstMember, progressionStep, numberGuessNumber);
  return [guessNumber, question];
};

const brainProgression = () => {
  runGame(description, getData);
};

export default brainProgression;
