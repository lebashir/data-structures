class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    } 
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }
}