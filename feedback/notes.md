# Review

## Goals

1. Working morse code translator - done
   - english to morse - done
   - morse to english - to work on
2. Practice using TDD - not done
   - Got some practice writing tests
   - At the moments the test fail
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works - not done
   ​

## Specification

​

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files - almost done
  - Has written tests and data in separate files but hasn't written a pure translate function in a different file and brought it into main.
- Readme - kinda done
  - Awesome readme!
  - Add a section about set up so if someone came to project they know how to get it and run the tests.
  ```bash
  # get project
  git clone project-url
  # go into project
  cd project-name
  # add dependencies
  npm install
  # run test scripts
  npm run test
  ```
- 10 commits during development
  - \>10 commits done. Judging by commit comments, they are of value.
- Mobile first/Responsive - done
  - Responsive and looks nice! Handles a large sentence translation
- No tutorials - done
  - This work looks original
    ​

## Overall

​A very nice morse code translator which works well, provides some feedback if the character you type isn't able to be translate and the styling is great.
In terms of JS you have separated some of your files which is great. I will give you some feedback on turning you translate into a pure function.
​
You haven't started the extension which is fine I think if you fix the problems below you should be able to do it.

## To work on

### TDD​ & Pure functions

Follow the TDD cycle more closely you want to get all of your tests passing before you move on. This will mean that your `translateToMorse()` will need to go into its own file and be a pure function.

```js
// translate.js
// PURE FUNCTION TAKES A INPUT GIVES AND OUTPUT
// NO SIDE EFFECTS / DOM MANIPULATION = CAN BE TESTED!!!!!
export const translate = input => {
  const characters = input.split("");
  const morseTranslation = characters.map(character => morseCode[character.toLowerCase()] || "?").join("");
  return morseTranslation;
};
```

```js
// main.js
import { morseCode } from "../data/data.js";
import { translate } from "./translate.js";

const userInput = document.querySelector("#user-input");
const translation = document.getElementById("translation");
const button = document.querySelector("#play").addEventListener("click", () => {
  play();
});

userInput.addEventListener("input", () => {
  const userInput = userInput.value;
  translation.textContent = translate(userInput);
});

const play = () => {
  let morse = new morseSynth();
  morse.play(userInput.value);
};

play();
```

### House keeping

- GET YOUR TESTS WORKING :D
- Tidy up code base
  - main.scss file in a the scss folder
  - js files in js/app folder including data and morseSynth
- Complete the extension

Hey mate a lot of little things let me know if you want a hand or a further explanation.
