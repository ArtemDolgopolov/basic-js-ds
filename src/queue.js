const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

 class Queue {
  constructor() {
    this.headValue = null;
    this.queueLength = 0;
  }

  getUnderlyingList() {
    return this.headValue;
  }

  enqueue( value ) {
    let node = new ListNode(value);
    if (this.queueLength === 0) {
      this.headValue = node;
    } else {
      let thisValue = this.headValue;
      while(thisValue.next) {
       thisValue = thisValue.next;
      }
      thisValue.next = new ListNode(value);
    }
    this.queueLength++;
    return this.headValue;
  }

  dequeue() {
    let thisValue = this.headValue;
    this.headValue = thisValue.next;
    this.queueLength--;
    return thisValue.value;
  }
}

module.exports = {
  Queue
};
