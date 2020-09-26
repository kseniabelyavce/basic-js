const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    this.value = value;
  }

  encrypt(message, key) {
    let cipher = "";
    if (message === undefined || key === undefined) {
      throw Error;
    }
    
    for (let i = 0, j = 0; i < message.length; i++) {
      let upperCaseLetter = message[i].toUpperCase();

      if (upperCaseLetter.charCodeAt() >= 65 && upperCaseLetter.charCodeAt() <= 90) {
        if (j > key.length -1 ) {
          j = 0;
        }
        let currentLetter = ((upperCaseLetter.charCodeAt() - 65) + (key[j].toUpperCase().charCodeAt() - 65)) % 26; 
        cipher += String.fromCharCode(currentLetter + 65);
        j++;
      } else {
        cipher += upperCaseLetter;
      }
    }
    if (this.value === false) {
      return cipher.split('').reverse().join('');
    }
    return cipher;
  }

  decrypt(message, key) {
    let cipher = "";
    if (message === undefined || key === undefined) {
      throw Error;
    }
    
    for (let i = 0, j = 0; i < message.length; i++) {
      let letter = message[i]

      if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        if (j > key.length - 1 ) {
          j = 0;
        }
        let currentLetter = ((letter.charCodeAt() + 65) - (key[j].toUpperCase().charCodeAt() - 65)) % 26; 
        cipher += String.fromCharCode(currentLetter + 65);
        j++;
      } else {
        cipher += letter;
      }
    }
    if (this.value === false) {
      return cipher.split('').reverse().join('');
    }
    return cipher;
  }
}

module.exports = VigenereCipheringMachine;
