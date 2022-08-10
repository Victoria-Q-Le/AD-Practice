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

// OPTIMIZE:
function bubbleSort (arr) {
  for (let i = arr.length; i > 0; i--){
    for (let j = 0; j < i - 1; j++){
      console.log(arr, arr[j],arr[j+1]);
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

// When the arr is almost sorted out, if the previous run we didnt make any swap then the ext run we wont make any swap either
function bubbleSort(arr) {
  let noSwap
  for (let i = arr.length; i > 0; i--){
    for (let j = 0; j < i- 1; j++){
      if (arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwap = false
      }
    }
    if (noSwap) break
  }
  return arr
}
