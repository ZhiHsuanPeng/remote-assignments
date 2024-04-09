function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(target - nums[i])) {
      return [i, nums.indexOf(target - nums[i])];
    }
  }
}
console.log(twoSum([1, 2, 3, 4, 7, 11, 15], 9));
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9

[1, 2, 3, 4, 7, 11, 15]
*/
