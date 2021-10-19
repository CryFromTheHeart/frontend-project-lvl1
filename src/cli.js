import readlineSync from 'readline-sync';

export const toGreet = () => {
	const name = readlineSync.question('May i have your name? ');
	console.log(`Hello, ${name}!`);
};
