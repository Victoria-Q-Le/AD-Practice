// Write a function call sumZero which accepts a sorted array of integers. The function should find ther first pair where the sum is 0. Return an array that includes both values that sum to zero or undefinded if a pair does not existed


// Solution 1:
// function sumZero (arr) {
//   for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//       if (arr[i] + arr[j] === 0){
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }
// this solution is not ideal because it is O(n2) time complexity and O(1) space complexity, the pro of this solution is that it can be applied for unsorted array

// Solution 2:
// function sumZero (arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right){
//     let sum = arr[left] + arr[right]
//     if (sum === 0){
//       return [arr[left], arr[right]]
//     } else if (sum > 0){
//       right--
//     } else {
//       left++
//     }
//   }
// }
// time complexity O(N), space complexity O(1), multiple pointer using the far left side and the far right side



/////////////////////////////////////////////////////

//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Solution:
function countUniqueValues (arr){
  // putting the unique values into the new array, then the arr.length +1 will be the total of the unique values
  let uniqueValues = []
  let left = 0
  let right = arr.length - 1
  while (left < right){
    let leftSum = arr[left] - arr[left + 1]
    if (leftSum === 0){
      left++
    }
    else if (leftSum !== 0){
      uniqueValues.push(arr[left])
      console.log(uniqueValues)
    }
  }
}
countUniqueValues([-3,-3,-2,-1,0,1,2,2,2,3])

// Remember the acronym UPS check
//
// Step One (Understand). We have to understand the problem.
// 1. What is the unknown? how many unique values in the sorted array
// 2. What are the data inputs?
// 3. Can you restate the problem in your own words? how many unique numbers within the array
// 4. Can the unknown be determined from the data inputs? yes
// 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory? yes
// 6. How should I label important pieces of data input that are a part of the problem?
// 7. Draw a figure. Introduce suitable notation.
//
// Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// 8.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem? frequency counters, count the number of keys within that obj
// 9.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// 10. Start with a simple example. Could you restate the problem? Could you restate it still differently?
// 11. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?
// 12. Progress to more complex examples. What is your updated plan here to find a solution?
// 13. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?
//
//
// Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// 14.  Can you see clearly that the step is correct?
//
//
// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 15.  Can you check your result?
// 16.  Can you check the argument?
// 17.  Can you derive the result differently?
// 18.  Can you see it at a glance?
// 19.  Can you make the code DRYer and refactor?
// 20.  Can you improve the performance?
