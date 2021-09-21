# Morse Code Translator

![morsecode](https://github.com/alexsp92/morsecode/blob/main/morsecodepreview.png)

## The Design :large_blue_diamond:
The Morse Code translator was designed with a **mobile-first approach**, using a _css-grid_ layout.

## The Logic :large_orange_diamond:
Built in JavaScript. The user will type the sentence in the English language textarea and we will get the translation in morse code in the second textarea

## The Code :white_square_button:
We use an object with all the letters, numbers and symbols as the Object's keys, and their corresponding morse codes as the Object's values.

```javascript
const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    [...]
}
```

To display the result, we use a function `translate()` that will store the inputs' values inside a variable and will then map the variable and return the Object's values for each key that matches the user input. If a character/key is invalid, it will output **"?"**.

```javascript
const translate = () => {
	userInput.addEventListener('input', () => {
	 const characters = userInput.value.split('')
		translation.textContent = characters.map((character) => {
			return morseCode[character.toLowerCase()] || "?";
		}).join('');
	})
}
translate();
```

### Playing the Morse Code
The user can play the morse code in their browser by pressing the Play button. This was done using a library called **morseSynth** by [netAction](https://github.com/netAction/morseSynth).
