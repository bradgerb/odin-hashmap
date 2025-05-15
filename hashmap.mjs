import LinkedList from "./linkedList.mjs";

//Use when accessing bucket through an index
// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bounds");
// }

class HashMap {
    constructor () {
    this.loadFactor = 1;
    this.capacity = 16;
    this.storage = [];
    this.storage.length = this.capacity;        
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        
        return hashCode;
    }

    set(key, value) {
        let bucket = this.hash(key);
        if (bucket < 0 || bucket >= this.storage.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!this.storage[bucket]) {
            let newList = new LinkedList();
            newList.append([key, value]);
            this.storage[bucket] = newList;
        } else {
            let currentNode = this.storage[bucket].head;

            for (let i = 0; i < this.storage[bucket].length; i++){
                if (currentNode.value[0] === key){
                    currentNode.value[1] = value;
                    break
                } else if (currentNode.next === null){
                    this.storage[bucket].append([key, value]);
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
    }

    get(key) {
        let bucket = this.hash(key);
        if (bucket < 0 || bucket >= this.storage.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if(this.storage[bucket]) {
            let currentNode = this.storage[bucket].head;

            for (let i = 0; i < this.storage[bucket].length; i++){
                if (currentNode.value[0] === key) {
                    return currentNode.value[1];
                } else if (currentNode.next === null) {
                    return null
                } else {
                    currentNode = currentNode.next;
                }
            }
        } else {
            return null
        }
    }

    has(key) {
        let bucket = this.hash(key);
        if (bucket < 0 || bucket >= this.storage.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if(this.storage[bucket]) {
            let currentNode = this.storage[bucket].head;

            for (let i = 0; i < this.storage[bucket].length; i++){
                if (currentNode.value[0] === key) {
                    return true;
                } else if (currentNode.next === null) {
                    return false
                } else {
                    currentNode = currentNode.next;
                }
            }
        } else {
            return false
        }
    }

    remove(key) {
        let bucket = this.hash(key);
        if (bucket < 0 || bucket >= this.storage.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if(this.storage[bucket]) {
            let currentNode = this.storage[bucket].head;

            for (let i = 0; i < this.storage[bucket].length; i++){
                if (currentNode.value[0] === key) {
                    if (this.storage[bucket].length === 1){
                        this.storage[bucket] = null
                    } else {
                        
                    }
                    return true;
                } else if (currentNode.next === null) {
                    return false
                } else {
                    currentNode = currentNode.next;
                }
            }
        } else {
            return false
        }
    }

    length() {
        let hashLength = 0;

        for(let i = 0; i < this.storage.length; i++){
            if (this.storage[i]){
                hashLength += this.storage[i].length;
            }
        }

        return hashLength
    }

    clear() {
        for (let i = 0; i < this.storage.length; i++) {
            this.storage[i] = null;
        }
    }

    keys() {
        let allKeys = [];

        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]){
                let currentNode = this.storage[i].head;
                while(currentNode != null){
                    allKeys.push(currentNode.value[0]);
                    currentNode = currentNode.next;
                }
            }
        }

        return allKeys
    }

    values() {
        let allValues = [];

        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]){
                let currentNode = this.storage[i].head;
                while(currentNode != null){
                    allValues.push(currentNode.value[1]);
                    currentNode = currentNode.next;
                }
            }
        }

        return allValues
    }
    
    entries() {
        let allPairs = [];

        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i]){
                let currentNode = this.storage[i].head;
                while(currentNode != null){
                    allPairs.push([currentNode.value[0], currentNode.value[1]]);
                    currentNode = currentNode.next;
                }
            }
        }

        return allPairs
    }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden')

console.log(test.remove('apple'));
console.log(test.remove('nope'));
console.log(test.entries());
