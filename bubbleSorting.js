// Naive Solution
function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j <arr.length; j++){
      if (arr[j] > arr[j+1]){
        // SWAP
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
// this solution is not optimize because the j runs through the entire array. 
