const CustomError = require("../extensions/custom-error");



const chainMaker = {
  chains: [],

  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      this.chains.push('()');
    }
    else {
      this.chains.push(String(value));
    }
    return this;
  },
  removeLink(position) {
    if (position > this.chains.length) {
      throw 'Error';
    }
    else {
      this.chains[position - 1] = null;
      this.chains = this.chains.filter(el => el !== null);
      return this
    }
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    for (let i = 0; i < this.chains.length; i++) {
      if (i !== this.chains.length - 1) {
        str += `(${this.chains[i]})~~`;
      }
      else {
        str += `(${this.chains[i]})`;
      }
    }
    return str
  }
};

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
module.exports = chainMaker;
