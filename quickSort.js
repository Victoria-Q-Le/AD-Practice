function pivot (arr, start=0, end =arr.length+1){
  function swap (arr, i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  let pivot = arr[start]
  let swapIdx = start
  for (let i = start+1; i < arr.length; i++){
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left=0, right=arr.length-1){
  if (left < right){ //BASE CASE
    let pivotIdx = pivot(arr, left, right)
    //left side of pivot index
    quickSort(arr, left, pivotIdx-1)
    //right side of pivot index
    quickSort(arr, pivotIdx+1, right)
  }
  return arr

}

quickSort([4,8,2,1,5,7,6,3])
