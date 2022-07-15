//Linear Search Pseudocode
// This function accepts an array and a value, loop through the array and check if the current array element is equal to the value. if it is, return the index at which the element is found. If the value is never found, return -1.
function linearSearch (arr,val){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val) return i
  }
  return -1
}

// Binary Search Pseudocode
// This function accepts a sorted array and a value. Create a left pointerat the start of the array, and a right pointer at the end of the array. While the left pointer comes before the right pointer:
// Create a pointer in the middle
// If you find the value you want, return the index
// If the value is too small, move the left point up
// If the value is too large, move the right pointer down
// If you never find the value, return -1
function binarySearch (arr, val){
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((end + start)/2)
  while (arr[middle] !== val && start <= end){
    if (val < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end)/2)
  }
  return arr[middle] === val ? middle : -1
}
