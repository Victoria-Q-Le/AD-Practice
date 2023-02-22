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


////////////////////////STORING HEAPS//////////////////////
// For any index of an array n the left child is stored at 2n + 1 and the right child is 2n +2 

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
}