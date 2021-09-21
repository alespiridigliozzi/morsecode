
import { translate } from "./main.js"; 

describe("Testing translate()", () => {

    it('should translate "a" to ".--"', () => {
        let result;
        result = translate("a")
        expect(result).toBe(".-")
    })

    it('should store user input', () => {
        userInput.value = "b";
        let result = translate('b')
        expect(result).toBe('-...')
    })

    it('should return "not valid" for invalid characters', () => {
        let userInput = "£"
        let result = translate('£')
        expect(result).toBe("Not valid")
    })

    it('should return "/" for empty strings', () => {
        let userInput = " "
        let result = translate(" ")
        expect(result).toBe("/")
    })
})
