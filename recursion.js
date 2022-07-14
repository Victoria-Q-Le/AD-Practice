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

// Write a recursive function called fib which accepts a number and return the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole  numbers 1,1,2,3,5,8,.. which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous 2 numbers.
function fib(n) {
    if (n === 0) return null;
    if (n <= 2) return 1;
    if (n > 2 ){
        return fib(n-1) + fib(n-2)
    }
}

// Write a recursive function called reverse which accepts a string and returns a new string in reverse
function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0]
}

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome. Otherwise it return false.
function isPalindrome(str){
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1)) //-1 means slicing the array from the last element of the array.
  return false
}

// Write a function called someRecursive which accepts an array and a callback. The functions returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
function someRecursive(arr, callback){
  if (arr.length === 0) return false
  if (callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
function flatten(oldArr){
  let newArr = []
  	for(let i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  }
  return newArr;
}

// Write a function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array
function capitalizeFirst(arr){
  let capitalizedArray = []
  for (let word of arr) {
    capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedArray.push(capitalizedWord)
  }
  return capitalizedArray
}
// Solution 1 - non recursive

function capitalizeFirst(arr){
  let capitalizedArray = []
  if (arr.length === 0) return
  if (arr.length !== 0){
    capitalizedWord = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
    capitalizedArray.push(capitalizedWord)
    return capitalizedArray.concat(capitalizeFirst(arr.slice(1)))
  }
}
// Solution 2, recursive solution, however, keeps running into undefined at last element of the new array
