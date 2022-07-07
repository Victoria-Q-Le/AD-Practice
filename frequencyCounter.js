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
  for (let key in frequencyCounter1){
    if (!(key in frequencyCounter2)){
      return false
    }
  }
  return true
}

//Write a function called sameFrequency. Given 2 positive integers, find out if the two numbers have the same requency of digits. Your solution MUST hae the following complexities.

function sameFrequency(int1, int2){
  if (int1 === int2){
    return true;
  } else {
    let str1 = int1.toString();
    let str2 = int2.toString();
    let counter1 = {};
    let counter2 = {};
    for (let val of str1){
      counter1[val] = (counter1[val] || 0) + 1;
    }
    for (let val of str2){
      counter2[val] = (counter2[val] || 0) + 1;
    }
    console.log(counter1);
    console.log(counter2);
    for (let key in counter1) {
      if (!(key in counter2)) {
        return false;
      }
       if (counter2[key] !== counter1[key]){
         return false
       }
    }
    return true
  }
}
