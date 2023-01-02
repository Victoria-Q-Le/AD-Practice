///////Comparisons with Singly Linked Lists//////
// - More memory === more flexibility 

class Node {
    constructor (val){
        this.val = val 
        this.next = null 
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null 
        this.tail = null 
        this.length = 0
    }
    push(val){ //taking a value and adding it to the end of the list 
        const newNode = new Node (val)    // create a new node with the value passed to the function
        if (!this.length === 0) {// if the head property is null set the head and tail to be the newly created node 
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode // if not, set the next property on the tail to be that node 
            newNode.prev = this.tail // set the prev property on the newly created node to be the the tail 
            this.tail = newNode  // set the tail to be the newly created node 
        }
        this.length++// increment the length 
        return this // return the list 

    }
}