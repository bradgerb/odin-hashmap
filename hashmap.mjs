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
        this.storage[bucket] = value;
    }

    view() {
        console.table(this.storage);
    }
}

const testHash = new HashMap(1, 16);

// console.log(testHash.hash("test"));
testHash.set('test', 'set to this');
testHash.set('another one', 'new test value');
testHash.view();
