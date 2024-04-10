function twoSum(nums, target) {
  const checkNum = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const theOther = target - nums[i];
    if (checkNum.hasOwnProperty(theOther)) {
      result.push(checkNum[theOther], i);
    }
    checkNum[nums[i]] = i;
  }
  return result;
}

console.log(twoSum([1, 2, 7, 3, 4, 11, 15], 9));
