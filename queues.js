////////////////////QUEUES/////////////////////
// What is a queue?
//     A FIFO (First In First Out) data structure

// Use Cases:
//     Queues waiting in game 
//     Background tasks 
//     Uploading resources 
//     Print/Task processing 

// Implementation
//     Array 
//     Linked List based queues

class Node {
    constructor(value){
        this.value = value 
        this.next = null 
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null 
        this.size = 0
    }
    enqueue(value){ //adding to the end of the queue 
        const newNode = new Node (value)
        if (this.size === 0){
            this.first = newNode 
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue(){ //remove from the begining of the queue
        if (this.size === 0) return null 
        const temp = this.first 
        if (this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}


//////////////////////////BIG O/////////////////
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)