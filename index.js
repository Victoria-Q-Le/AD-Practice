// Write a function called same, which accepts 2 arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// Solution 1:
function same(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false
  }
  for (let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2) //finding the value squared in the second array
    if (correctIndex === -1 ) { //this means that the squared value doesnt exist within the arr2
      return false
    }
    arr2.splice(correctIndex,1) //this to ensure the same frequency of the values 
  }
  return true
}
