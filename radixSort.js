///////////HELPERS//////
function getDigit(num, i){
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10
}

function countDigit(){
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums){
   let maxDigits = 0
   for (let i = 0; i < nums.length; i++){
     maxDigits = Math.max(maxDigits, countDigit(nums[i]))
   }
   return maxDigits
}

function radixSort(nums){ //define a function that accepts list of numbers
  let mostDigitCount = mostDigits(nums) //figure out how many digits the largest number has
  //console.log(mostDigitCount);
  for (let k = 0; k < mostDigitCount; k++){ //loop from k = 0 up to this largest number of digits
    let digitBuckets = Array.from({length: 10}, () => []) //create an array with 10 elements, and each element will be an empty sub arr.
    for (let i = 0; i < nums.length; i++) { //for each i of the loop:
      let digit = getDigit(nums[i],k) //get the k-th digit of nums[i]
      digitBuckets[digit].push(nums[i]) //push the number with same k-digit to the same digitBuckets sub arr (i.e: 23 and 123 belong to the same digitBuckets when k = 0, 123 and 225 belong to the same bucket when k = 1 )
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets) //concat the sub arrays in digitBuckets array together, using the ... operator allows the values to be joined in a same array.
    console.log(nums);
  }
  return nums
}
