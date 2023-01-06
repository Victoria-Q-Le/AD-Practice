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
}