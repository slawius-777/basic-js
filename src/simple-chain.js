const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],  // This will store the chain of links

  // Returns the length of the chain
  getLength() {
    return this.chain.length;
  },

  // Adds a link to the chain with the given value
  addLink(value) {
    this.chain.push(value === undefined ? 'undefined' : value); // handle undefined
    return this; // return chainMaker object to allow chaining
  },

  // Removes the link at the specified position
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.chain.length) {
      this.chain = []; // reset chain if invalid position
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // remove at the correct index
    return this; // return chainMaker object to allow chaining
  },

  // Reverses the order of the links in the chain
  reverseChain() {
    this.chain.reverse();
    return this; // return chainMaker object to allow chaining
  },

  // Returns the chain as a string
  finishChain() {
    const result = this.chain.map(link => `( ${link} )`).join('~~');
    this.chain = []; // reset the chain after finishing it
    return result;
  }
};

module.exports = {
  chainMaker
};
