import { morseCode } from "../data/data.js";
export { translate }  

const userInput = document.querySelector('#user-input');
const translation = document.getElementById('translation');
const button = document.querySelector('#play').addEventListener('click', () => {
	play()
});

const translate = () => {
	userInput.addEventListener('input', () => {
		const characters = userInput.value.split('')
		translation.textContent = characters.map((character) => {
			return morseCode[character.toLowerCase()] || "?";
		}).join('');
	})
}
translate();

const play = () => {
	let morse = new morseSynth();
	morse.play(userInput.value);
}

play();