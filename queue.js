class Node {
    constructor(val) {
        this.val = val;
        this.next = null;

    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        var newNode = new Node(val);
        if(this.size ===0) {
            this.last = newNode;
            this.first = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;

    }
    dequeue() {
        if (this.size === 0) return null;
        let temp = this.first;
        this.size--;
        if(this.size === 0) {
            this.first = null;
            this.last = null;
        } else {
            
            this.first = temp.next;
            temp.next = null;
        }
        return temp;

    }
}