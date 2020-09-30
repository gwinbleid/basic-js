const chainMaker = {
  value: [],

  getLength() {
    return this.value.length;
  },

  addLink(value) {
    this.value.push(value);
    return this;
  },

  removeLink(position) {

    if (typeof position !== 'number' || position > this.getLength() || position < 0) {
      this.value = [];
      throw new Error();
    }

    this.value = this.value.filter((item, index) => index !== position - 1);
    return this;
  },

  reverseChain() {
    this.value.reverse();
    return this;
  },

  finishChain() {
    let mode = this.value
                .map(item => `( ${item} )`)
                .join('~~');
    this.value = [];
    return mode;
  }
};

module.exports = chainMaker;
