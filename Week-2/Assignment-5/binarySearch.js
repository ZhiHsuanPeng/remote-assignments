function binarySearchPosition(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
}
// console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should
// print 0
// console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should
//  print 3

console.log(binarySearchPosition([1, 2, 5, 6, 7], 6));
