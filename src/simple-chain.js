const CustomError = require('../extensions/custom-error');



const chainMaker = {
	chain: [],

	getLength() {
		return this.chain.length;
	},

	addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  
	removeLink(position) {
		if (position > this.chain.length || position < 1 || isNaN(position)) {
      this.chain = [];
			throw  new Error();
		}
    this.chain.splice(position - 1, 1);
		return this;
  },
  
	reverseChain() {
    this.chain = this.chain.reverse();
		return this;
  },
  
	finishChain() {
    let finishedChain = this.chain.join("~~");
    this.chain = [];
    return finishedChain;
	},
};


module.exports = chainMaker;
