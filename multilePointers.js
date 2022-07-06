// Write a function call sumZero which accepts a sorted array of integers. The function should find ther first pair where the sum is 0. Return an array that includes both values that sum to zero or undefinded if a pair does not existed


// Solution 1:
function sumZero (arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] + arr[j] === 0){
        return [arr[i], arr[j]]
      }
    }
  }
}
// this solution is not ideal because it is O(n2) time complexity 
