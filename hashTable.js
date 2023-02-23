////////////////////////HASH TABLE/////////////
// What is it?
// - hash tables are used to store key-value pairs 
// - they are like arrays, but the keys are not ordered 
// - unlike arrays, hash table are fast for all of the following operations: finding values, adding new valuesm and removing values!

// Why?

//What makes a good hash?
1. Fast 
2. doesnt cluster outputs at specific indices, but distributes uniformly 
3. deterministic (same input yields same output)

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