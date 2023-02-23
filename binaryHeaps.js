///////////WHAT IS A BINARY HEAP?///////////
// - Very similar to a BroadcastChannel, but with some diff rules
// - In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parentnodes are always smaller than a child nodes

// ///////////MAX BINARY HEAP//////////
// - Each Parent has at most 2 child nodes 
// - The value of each parent node is always greater than its child nodes 
// - In a MaxBinaryHeap the parent is greater than the children, but there are no guarantees between sibling nodes 
// - A binary heap is as compact as possible. All the children of each node are as fill as they can be and left children are filled out first 

// /////////WHY///////////////////////
// - Priority Queues?
// - In MaxBinaryHeap: remove the max value 
// - In MaxBinaryHeap: remove the min value 


////////////////////////STORING HEAPS//////////////////////
// For any index of an array n the left child is stored at 2n + 1 and the right child is 2n +2 

// ///////////////////////BIG O/////////////////////
// - Insertion: O(logN)
// - Removal: O(logN)
// - Search: O(N)

class MaxBinaryHeap {
    constructor(){
        this.values = []
    }
    insert(element){
        this.values.push(element)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]
            if (element <= parent) break 
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
    extractMax(){
        const max = this.values[0]//swap the first value in the the values pro with the last one 
        const end =  this.values.pop()//pop from the values pro, so you can return the value at the end 
        if (this.values.length > 0){
            this.values[0] = end 
            this.sinkDown() //helper method to sink the node down to correct position
        }
        return max//return the old root
    }
    sinkDown(){ //have the new root sink down to the correct spot
            let idx = 0//your parent index starts at 0 (the root)
            const length = this.values.length
            const element = this.values[0]
            while(true){
                let leftChildIdx =  2 * idx + 1 //find the index of the left child and make sure within bound 
                let rightChildIdx =  2 * idx + 2 //find the index of the right child and make sure within bound 
                let leftChild, rightChild
                let swap = null 

                if (leftChildIdx < length){ //if the left or right child is greater than the element...swap. if both left and right child are larger, swap with the largest child 
                    leftChild = this.values[leftChildIdx]
                    if (leftChild > element){
                        swap = leftChildIdx
                    }
                }

                if (rightChildIdx < length){
                    rightChild = this.values[rightChildIdx]
                    if(
                        (swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)
                    )
                    {
                        swap = rightChildIdx
                    }
                }
                if (swap === null) break 
                this.values[idx] = this.values[swap]
                this.values[swap] = element
                idx = swap
            }
    }
}


/////////////////////PRIORITY QUEUE////////////
class Node {
    constructor (value, priority){
        this.value = value 
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        let newNode = new Node (val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1
        const element = this.values[idx]
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2)
            let parent = this.values[parentIdx]
            if (element.priority >= parent.priority) break 
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
    dequeue(){
        const min = this.values[0]
        const end =  this.values.pop()
        if (this.values.length > 0){
            this.values[0] = end 
            this.sinkDown() //helper method to sink the node down to correct position
        }
        return min//return the old root
    }
    sinkDown(){ //have the new root sink down to the correct spot
            let idx = 0//your parent index starts at 0 (the root)
            const length = this.values.length
            const element = this.values[0]
            while(true){
                let leftChildIdx =  2 * idx + 1 //find the index of the left child and make sure within bound 
                let rightChildIdx =  2 * idx + 2 //find the index of the right child and make sure within bound 
                let leftChild, rightChild
                let swap = null 

                if (leftChildIdx < length){ //if the left or right child is greater than the element...swap. if both left and right child are larger, swap with the largest child 
                    leftChild = this.values[leftChildIdx]
                    if (leftChild.priority < element.priority){
                        swap = leftChildIdx
                    }
                }

                if (rightChildIdx < length){
                    rightChild = this.values[rightChildIdx]
                    if(
                        (swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)
                    )
                    {
                        swap = rightChildIdx
                    }
                }
                if (swap === null) break 
                this.values[idx] = this.values[swap]
                this.values[swap] = element
                idx = swap
            }
    }
}


