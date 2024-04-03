function binarySearchPosition(arr, target, start = 0, end = arr.length - 1) {
  if (target > arr[end] || target < arr[start]) {
    return "Target Not Found";
  }
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] < target) {
    return binarySearchPosition(arr, target, middle + 1, end);
  } else {
    return binarySearchPosition(arr, target, start, middle - 1);
  }
}
// console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should
// print 0
// console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should
//  print 3

console.log(binarySearchPosition([1, 2, 5, 6, 7], 6));
