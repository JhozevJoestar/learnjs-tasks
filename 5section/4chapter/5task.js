function getMaxSubSum(arr) {
    let maxNum = 0; 
    for (let i = 0; i < arr.length; i++) {
      let num2 = 0;
      for (let k = i; k < arr.length; k++) {
        num2 += arr[k];
        maxNum = Math.max(maxNum, num2);
      }
    }
    return maxNum;
}
  
  console.log(getMaxSubSum([100, -9, 2, -3, 5]));