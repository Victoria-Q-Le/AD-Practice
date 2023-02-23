////////////////////////HASH TABLE/////////////
// What is it?
// - hash tables are used to store key-value pairs 
// - they are like arrays, but the keys are not ordered 
// - unlike arrays, hash table are fast for all of the following operations: finding values, adding new valuesm and removing values!

// Why?

//What makes a good hash?
// 1. Fast 
// 2. doesnt cluster outputs at specific indices, but distributes uniformly 
// 3. deterministic (same input yields same output)

//.charCodeAt() = giving the numeric position of specific letter

function hash(key, arrayLength){
    let total = 0
    for (let char of key){
        //map "a" to 1. "b" to 2, etc. Because a starts at 97
        let value = char.charCodeAt(0) - 96 //0 is the index of char that we want to find the charcode 
        total = (total + value) % arrayLength
    }
    return total 
}
// Whats wrong with this hash?
// - Only hash string 
// - Not constant time - linear in key length
// - Could be a little more random

function hashImprovised(key, arrayLength){ //arrayLength is the amount of locker we have 
    let total = 0
    let prime = 31 //adding a prime number to the length can significantly reduce the cluster and collision
    for (let i = 0; i < Math.min(key.length, 100); i++){ //Math.min to ensure the run time is always less than 100
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * prime + value) % arrayLength
    }
    return total
}

///////////HANDLING COLLISIONS/////////////
// 1. Seperate Chaining: at each index in our array we store values using more sophisticated data structure (and array or a linked list - storing diff key value pair in the same locker)
// 2. Linear Probing: when we find the collision, we search through the array to find the next empty slot. What if no empty locker? How do we know which one we decided to move to a diff locker and which one?

class HashTable {
    constructor(size =53){//default size is 53 but we can change this const ht = new HashTable(17) etc..
        this.keyMap = new Array(size)
    }
    _hash(key){
        let total = 0
        let prime = 31 
        for (let i =0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.keyMap.length
        }
        return total
    }
    set(key, value){
        let index = this._hash(key)
        if (!this.keyMap[index]){
            this.keyMap[index] = [] //if the locker is not occupied we then have to set it the become an empty array first before pushing a key value pair to it
        }
        this.keyMap[index].push([key, value])
    }
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0] === key)
                return this.keyMap[index][i][1]
            }
        }
        return undefined
    }
}