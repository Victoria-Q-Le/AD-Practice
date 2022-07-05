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

// this is O(n2) due to nested for loops


// Solution 2:
function same (arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1){
    if (!(key ** 2 in frequencyCounter2)){
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  return true
}
// since we only looping through each array to count the frequency of each val, therefore this function is only O(N)


// Anagram Challenge, constraint there are all one words, all lowercase.
function anagram(str1, str2){
  let arr1 = str1.split(" ") //this turn string into arr and filters out the spaces 
  let arr2 = str2.split(" ")
  if (arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let char of arr1){
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for (let char of arr2){
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  for (let key in frequencyCounter2){
    if (!(key in frequencyCounter2)){
      return false
    }
  }
  return true
}
