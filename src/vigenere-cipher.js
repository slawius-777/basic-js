const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = '';
    let keyIndex = 0;
    key = key.toUpperCase();  // Convert key to uppercase

    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (/[A-Za-z]/.test(char)) {
        const shift = key[keyIndex % key.length].toUpperCase().charCodeAt(0) - 65;
        if (/[a-z]/.test(char)) {
          result += String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97); // lowercase letter
        } else {
          result += String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65); // uppercase letter
        }
        keyIndex++;
      } else {
        result += char; // For non-alphabet characters
      }
    }

    if (this.reverse === false) {
      return result.split('').reverse().join('');
    }

    return result;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let result = '';
    let keyIndex = 0;
    key = key.toUpperCase();  // Convert key to uppercase

    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if (/[A-Za-z]/.test(char)) {
        const shift = key[keyIndex % key.length].toUpperCase().charCodeAt(0) - 65;
        if (/[a-z]/.test(char)) {
          result += String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97); // lowercase letter
        } else {
          result += String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65); // uppercase letter
        }
        keyIndex++;
      } else {
        result += char; // For non-alphabet characters
      }
    }

    if (this.reverse === false) {
      return result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
