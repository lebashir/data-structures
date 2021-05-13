class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(val) {
        if (!this.tail) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } 
        this.tail = poppedNode.previous;
        this.tail.next = null;
        poppedNode.previous = null;
        this.length--; 
        return poppedNode;

    }
    shift() {
        if(!this.head) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail == null;
        } 
        this.head = shiftedNode.next;
        shiftedNode.next = null;
        this.head.previous = null;
        this.length--;
        return shiftedNode;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.previous = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
        
    }
}

