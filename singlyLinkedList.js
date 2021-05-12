// Node Constructor
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

}

// List Constructor
class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) {

        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        var current = this.head;
        while (count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }


};


// test case
let list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
list.push('hello again');
list.push('four');
list.push('five');


