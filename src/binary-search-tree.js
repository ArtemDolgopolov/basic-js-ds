const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require("../extensions/list-tree.js");

class BinarySearchTree {
  binaryArr = [];

  root() {
    return this.binaryArr.length ? { data: this.binaryArr[0] } : null;
  }

  add(data) {
    this.binaryArr.push(data);
  }

  has(data) {
    return this.binaryArr.includes(data);
  }

  find(data) {
    const item = this.binaryArr.find((elem) => elem === data);
    if (item) return {data: item}
    else return null
  }

  remove(data) {
    this.binaryArr = this.binaryArr.filter((elem) => elem !== data);
  }

  min() {
    return Math.min(...this.binaryArr);
  }

  max() {
    return Math.max(...this.binaryArr);
  }
}

module.exports = {
  BinarySearchTree
};