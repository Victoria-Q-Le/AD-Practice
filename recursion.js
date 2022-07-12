// function countDown(num){
//   if (num <= 0){
//     console.log("all done");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

function sumRange(num) {
  if (num === 1){
    return 1;
  }
  return num + sumRange(num - 1)
}
 sumRange(3)
 //     return 3 + sumRange(2)
 //                   return 2 + sumRange(1)
 //                                 return 1
 //     => return 6 in total 
