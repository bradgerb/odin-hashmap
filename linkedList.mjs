class LinkedList {
    constructor() {
    this.head = null;
    this.length = 0;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    append(value) {
        let currentNode = this.head;

        if (this.head === null) {
            this.prepend(value);
        } else {

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value, null);
        
        this.length++;
        }
    }

    size() {
        return this.length
    }

    getHead() { 
        return this.head
    }

    getTail() {
        let currentNode = this.head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode
    }

    at(index) {
        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode
    }

    pop() {
        let currentNode = this.head;

        if (currentNode.next){

            if(currentNode.next.next){
                while (currentNode.next.next !== null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = null;
                this.length --;
            } else {
                currentNode.next = null;
                this.length --;
            }

        } else if (this.head){
            this.head = null;
            this.length --;
        }
    }

    contains(value) {
        let isTrue = false
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value){
                isTrue = true;
            }
            currentNode = currentNode.next;
        }

        return isTrue
    }

    find(value) {
        let index;
        let currentNode = this.head;

            for (let i = 0; i < this.length; i++){
                if (currentNode.value === value){
                    index = i;
                }
                currentNode = currentNode.next;
            }
        
        return index
    }

    toString() {
        let currentNode = this.head;
        let string = '';

        while (currentNode !== null) {
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }
        string += 'null';
        return string
    }
}

class Node {
    constructor(value, nextNode) {
      this.value = value;
      this.next = nextNode;
    }
}

export default LinkedList