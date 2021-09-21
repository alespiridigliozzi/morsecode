import { morseCode } from "../data/data.js";
export { translate }  

const userInput = document.querySelector('#user-input');
const translation = document.getElementById('translation');
const button = document.querySelector('button');

const translate = () => {
	userInput.addEventListener('input', () => {
		const characters = userInput.value.split('')
		translation.textContent = characters.map((character) => {
			return morseCode[character.toLowerCase()] || "?";
		}).join('');
	})
}
translate();