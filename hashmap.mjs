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
    }

    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        
        return hashCode;
    }

    // set(key, value) {

    // }
}

const testHash = new HashMap(1, 16);

console.log(testHash.hash("test"));


const testList = new LinkedList();

testList.append("turtle");
console.log(testList.toString());
