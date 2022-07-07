//Given a sorted array of intergers, write a function called search, that accepts a value and return the index where the value passed to the function is located. If the value is not found, return -1


//////////Solution 1////////
function search(arr, num){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === num){
      return i
    }
  }
  return -1
}
//Linear search, O(N) time complexity


/////////Solution 2/////////////
//Because the array is sorted we can compare compare n to the mid point value of the array if the n < the mid point, n will wither be on the left of the array or non exist within the array or vice versa => Binary search, O(log N) time complexity. 
