// Node Constructor
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }

}

// List Constructor
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
    get(index) {
        if (index < 0 || index >= this.length) return null;
        
        if (index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while (count != index) {
                current = current.next;
                count++
            }
            return current;
        } else {
            
            let count = this.length - 1;
            let current = this.tail;
            while(count != index) {
                current = current.previous;
                count--;
            }
            return current;
        }
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) !!this.push(val);
        if (index === 0) !!this.unshift(val);

        let newNode = new Node(val)
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next

        beforeNode.next = newNode, newNode.previous = beforeNode;
        newNode.next = afterNode, afterNode.previous = newNode;
        this.length++; 
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length - 1) return !!this.pop();
        if (index === 0) return !!this.shift();
        
        let before = this.get(index - 1);
        let removed = before.next;
        let after = removed.next;

        before.next = after;
        after.previous = before;
        this.length--;
        return removed;
    }
    
}


 