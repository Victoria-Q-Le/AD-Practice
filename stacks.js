//////////////////////////////STACKS /////////////////////////////
// What is a stack?
//     Data collections, abstract data structure, LIFO data structure (last in first out) - the last element added to the stack will be the first element removed from the stack
// Whare stacks are used?
//     Managin function invocations 
//     Undo/Redo 
//     Routing (the history object) is treated like a stack 
// Stack implementations
//     Push and Pop for array 
//     Shift and unShift for linked lists 


class Node {
    constructor(value){
        this.value = value 
        this.next = null 
    }
}

class Stack {
    constructor(){
        this.first = null 
        this.last = null
        this.size = 0
    }
    push(value){ //basically this is a unshift in linked list, because we want constant time 
        const newNode = new Node (value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            const temp = this.first
            this.first = newNode
            this.first.next = temp 

        }
        return ++this.size
    }
    pop(){
        if (!this.first) return null 
        const temp = this.first
        if (this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

//////////////////////BIG O/////////////////
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)