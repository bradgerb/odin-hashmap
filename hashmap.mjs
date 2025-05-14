import LinkedList from "./linkedList.mjs";

//Use when accessing bucket through an index
// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bounds");
// }

class HashMap {
    constructor (loadFactor, capacity) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.storage = [];
    this.storage.length = capacity;        
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

    view() {
        console.table(this.storage);
    }
}

const test = new HashMap(1, 16);

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
test.set('lion', 'yellow');
test.set('lion', 'golden')

test.view();
