// NOTE:
// 1. What is a linked list?
// - A data structure that contains a head, tail and length property
// - Linked list consist of nodes, and each node has a value and a pointer to another node or null
//
// 2. Comparisons with Arrays
// - Lists:
//   - Do not have indexes!
//   - Connected via nodes with a next pointer
//   - Random access is not allowed
// - Arrays:
//   - Indexed in order!
//   - Insertion and deletion can be expensive
//   - Can quickly be accessed at a specific index
//
// 3. Stater Code, Push, Pop Control:
//- Node: store a piece of data, and reference to next node
class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}
// const first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("Victoria!")

class SinglyLinkedList {
  constructor(){ //the linked list includes head, tail and length
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val){ //this function should accept a value
    let newNode = new Node (val) //create a new node using the value passed to the function
    if (!this.head){ //if there is no head, meaning it is an empty list
      this.head = newNode
      this.tail = newNode
    } else { //if the list is not empty
      this.tail.next = newNode //set the next property of the current tail to be the newNode
      this.tail = newNode //update the tail
    }
    this.length++ //increament the length of the list
    return this //to retrun the whole list
  }
  pop(){
    if (!this.head) return undefined //EDGE CASE: when the list is empty
    let current = this.head //start at the begining to the list
    let newTail = current
    while (current.next){ //while there is a node after current
      newTail = current //because the node right before the current tail will become the new tail.
      current = current.next //current gets move up to the next node
    }
    this.tail = newTail //tail gets updated to the node right before the last node
    this.tail.next = null //newTail updated, the node after will get pop off.
    this.length-- //decreament the length of the list
    if (this.length === 0){ //In case the list only have 1 node left before the pop
      this.head = null
      this.tail = null
    }
    return  current
  }
}

let list = new SinglyLinkedList ()
list.push("Hello")
list.push("there") //this will be added to the end of the list so we dont have to keep typing .next multiple times
