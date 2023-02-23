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
  push(val){ //this function should accept a value => this is a method
    let newNode = new Node (val) //create a new node using the value passed to the function
    if (!this.head){ //if there is no head, meaning it is an empty list
      this.head = newNode
      this.tail = this.head
    } else { //if the list is not empty
      this.tail.next = newNode //set the next property of the current tail to be the newNode
      this.tail = newNode //update the tail, move the tail marker over 
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
  shift(){
    if(!this.head) return undefined //if there are no head, return undefined
    const currentHead = this.head //store the current head property in a variable 
    this.head = currentHead.next //set the current head property to be the current's next property
    this.length-- //decrease the length
    if(this.length === 0){
      this.tail = null
    }
    return currentHead
  }
  unshift(val){ //this function should accept a value 
    const newNode = new Node(val)// create a new node using the value passed to the function
    if (!this.head){ // if there is no head property on the list, set the head and tail to be the newly created node 
      this.head = newNode
      this.tail = newNode
    } else {
        newNode.next = this.head //otherwise set the newly created node's NEXT property to be the current head on the list
        this.head = newNode //set the head property on the list to be that newly created node 
    }
    this.length++ //increment the length of the list by 1 
    return this //return the linked list
  }
  get(index){ //this function should accept an index 
    if(index < 0 || index >= this.length) return null // if the index is less than zero or greater than or euqal to the length of the list, return null 
    const counter = 0
    const current = this.head 
    while (counter !== index ){ // loop through the list until you reach the index and return the node at that specific index 
      current = current.next 
      counter++
    }
    return current
  }
  set(index, val){
    const foundNode = this.get(index)
    if(foundNode){
      foundNode.val = val 
      return true
    }
    return false
  }
  insert(index, val){
    if(index < 0 || index > this.length) return false  //if the index is less than zero or greater than the length, return false 
    if(index === this.length) return !!this.push(val)//if the index is the same as the length, push a new node to the end of the list !!operator (bang bang operator to convert to boolean)
    if(index === 0) return !!this.unshift(val)//if the index is 0, unshift a new node to the start of the list 


    const newNode = new Node(val)
    const prev = this.get(index -1) //otherwise, using the GET method, access the node at the (index - 1 ) 
    const temp = prev.next //this is a place holder 
    prev.next = newNode//set the next property on that node to be the new node 
    newNode.next = temp//set the next property on the new node to be the previous next
    this.length++//increment the length
    return true //return true - this means the method works
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined//if the index is less than 0 or greater than the length, return the undefined
    if(index === this.length -1 ) return this.pop()//if the index is the same as trhe length-1, pop
    if(index === 0) return this.shift()//if the index is 0, shift 
    
    const prevNode = this.get(index-1)//otherwise, using the GET method, access the node at the index-1 
    const removed = prevNode.next
    prevNode.next = removed.next//set the next property on that node to be the next of the next node 
    this.length--//decreament the length
    return removed//return the value of the node removed 
  }
  print(){
    const arr = []
    const current = this.head 
    while (current){
      arr.push(current.val)
      current = current.next 
    }
    console.log(arr);
  }
  reverse(){
    const node = this.head//swap the head and tail, create a variable called node and initialize it to be the head property 
    this.head = this.tail 
    this.tail = node 
    let next //create a variable called next 
    const prev = null //creat a variable called prev, prev has to be null because  we want to make the end of our list - the tail.next is null 
    for(const i = 0; i < this.length; i++){ //loop through the list 
      next = node.next //set next to be the next property on whatever node is 
      node.next = prev //set the next property on the node to be whatever prev is 
      prev = node //set prev to be the value of the node variable 
      node = next 
    }
    return this
  }
}

let list = new SinglyLinkedList ()
list.push("Hello")
list.push("there") //this will be added to the end of the list so we dont have to keep typing .next multiple times


///////////////////////////////////////////BIG O NOTATION////////////////////////////////////////////////////
//INSERTION - O(1), we add thing to the begining of the list without having to re index the whole list => better than using array 
//REMOVAL - O(1) or O(N), depends on which position
//SEARCHING - O(N)
//ACCESS - O(N)