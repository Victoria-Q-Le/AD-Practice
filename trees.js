// ////////////////////////TREES////////////////////////
// What is a Tree 
//     a data structure that consists of nodes in a parent/child relationship

// Compare and contract trees and lists
//     Lists - linear 
//     Trees - nonlinear 

// Explain the differences between trees, binary trees and binary search trees 
//     Terminology:
//         ROOT - The top node in the tree 
//         CHILD - A node directly connected to another node when moving away from the Root  
//         Parent - The converse notion of a child
//         Siblings - A group of nodes with the same parent 
//         Leaf - A node with no children
//         Edge - The connection between one node and another 

//     Use cases: 
//         HTML DOM
//         Network Routing 
//         Abstract Syntax Tree 
//         Artificial Intelligence (tic tqac toe - minimax )
//         Folders in operating systems, computer file systems
//         JSON
    
//     Binary Trees: one parent can only have up to 2 children 

//     BST 
//         A binary trees whose data can be sortable (usually number), 
//         Every node on the left of the parent is always less than the parent
//         Every node to the right of a parent node is always greater than the parent

// Implement operations on binary search trees (BST)

class Node {
    constructor(value){
        this.value = value 
        this.left  = null 
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){ //can take a vlue here and use it as the initial value of the root 
        this.root = null
    }
    insert (val){
        const newNode = new Node(val)
        if (this.root === null){
            this.root = newNode
            return this
        } else {
            const current = this.root 
            while (true){
                if (val === current.value ) return undefined
                if (val < current.value){
                    if (current.left === null){
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value){
                    if (current.right === null){
                        current.right = newNode
                        return this 
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
}

const tree = new BinarySearchTree()
tree.root = new Node (10)
tree.root.right = new Node (15)
tree.root.left = new Node (7)
tree.root.left.right = new Node(9)