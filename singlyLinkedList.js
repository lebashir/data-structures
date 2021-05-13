// Node Constructor
class Node{
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
        while(current.next) {
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
        if(!this.head) return undefined;
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
        while(count !== index) {
            current=current.next;
            count++;
        }
        return current;
    }
    set( index,val) {
        
       let foundNode= this.get(index); 
       if (foundNode) {
           foundNode.val = val;
           return true;
       }
       return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) !!this.push(val);
        if (index === 0) !!this.unshift(val);

        let newNode = new Node(val);
       
        let insertPoint = this.get(index-1);
        let temp = inserPoint.next
        insertPoint.next = newNode;
        newNode.next = temp;
        this. length++;
        return true;
        
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let before = this.get(index-1);
        let removed = before.next      
       
        before.next = removed.next
        removed.next = null;
        this.length--;
        
        return removed;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var previous = null;
        var next;
        for (let i = 0; i < this.length; i++){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this; 
    }

    print() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next
        }
        return arr;
    }    
};