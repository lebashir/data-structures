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
    pop() {
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