// function countDown(num){
//   if (num <= 0){
//     console.log("all done");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// function sumRange(num) {
//   if (num === 1){
//     return 1;
//   }
//   return num + sumRange(num - 1)
// }
//  sumRange(3)
//  //     return 3 + sumRange(2)
//  //                   return 2 + sumRange(1)
//  //                                 return 1
//  //     => return 6 in total


// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }


// Write a function to collect the odd values inside an array
function collectOddValues (arr){
  let result = [];
  // Define recursive helper function within the outer function
  function helper (helperInput){
    if (helperInput.length === 0){
      return
    }
    if (helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  // The end of recursive helper function
  return result
}
