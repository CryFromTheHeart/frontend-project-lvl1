import getRandomInt from '../getRandomInt.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const maxStep = 10;

const getProgression = (firstMemberProgression, progressionStep, numberOfTheGuessNumber) => {
  const progression = [];
  for (let countProgressionStep = 1; countProgressionStep <= maxStep; countProgressionStep += 1) {
    const currentMember = firstMemberProgression + (progressionStep * countProgressionStep);
    if (numberOfTheGuessNumber === countProgressionStep) {
      progression.push('..');
    } else {
      progression.push(`${currentMember}`);
    }
  }
  const progressionToString = progression.join(' ');
  return progressionToString;
};

const getData = () => {
  const firstMember = getRandomInt(0, 15);
  const progressionStep = getRandomInt(2, 10);
  const numberGuessNumber = getRandomInt(2, 10);
  const question = getProgression(firstMember, progressionStep, numberGuessNumber);
  const guessNumber = String(firstMember + (progressionStep * numberGuessNumber));
  return [guessNumber, question];
};

const brainProgression = () => {
  runGame(description, getData);
};

export default brainProgression;
