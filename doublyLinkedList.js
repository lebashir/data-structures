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
            this.length++;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
            poppedNode.previous= null;
        }
        
        this.length--;
        return poppedNode;
    }
    shift() {
        if(!this.head) return undefined;
        let shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = shiftedNode.next;
            this.head.previous = null;
            shiftedNode.next = null;
        }
        
        this.length--;
        return shiftedNode;
    } 
}
