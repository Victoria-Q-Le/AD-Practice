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

// solution 2, pure recursion without helper
function collectOddValues(arr){
  let newArr =[];

  if (arr.length === 0){
    return newArr;
  }
  if (arr[0] % 2 !== 0){
    newArr.push(arr[0])
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)))
  return newArr
}
// Everytime the collectOddValues is called recursively the newArr will be reseted to an empty array, therefore we concat all the newArr arrays together to return the final result



//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. The function should miminc the functionality of Math.pow() - do not worry aabout negative bases and exponents.
function power(base, exponent){
    if (exponent === 0) {
        return 1;
    }
    return base * power(base,(exponent - 1))
}


//Write a funtion fatorial which accepts a number and return the factorial of that number. A factorial is the product of an integer and all the integers below it.
function factorial(num){
   if (num === 0){
       return 1
   }
   return num * factorial(num - 1)
}


//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
function productOfArray (arr){
    let result = 1
    function helper (helperInput){
        if (helperInput.length === 0){
            return
        }
        if (helperInput.length !== 0){
            result = result * helperInput[0]
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result
}

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
function recursiveRange(num){
   if (num === 0){
       return 0
   }
   return num + recursiveRange(num -1)
}
