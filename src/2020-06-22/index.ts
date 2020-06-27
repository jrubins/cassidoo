/**
 * Problem statement:
 *    Given an unsorted array arr of integers and an index n, return a list of medians of the
 *    subarrays in arr (where the first subarray is from index 0 to index 1, the next from 0 to
 *    index 2… index 0 to index n). Try to do it in better than O(n^2) time!
 *
 * Example:
 *    $ findMedians([2, 1, 3, 10, 5], 3)
 *    $ [2, 1.5, 2]
 */
function findMedians(arr: number[], n: number): number[] {
  if (n === 0) {
    return []
  }

  // Naive solution O(n^2)
  const medians = []
  for (let i = 0; i < n && i < arr.length; i++) {
    // Need to use a custom sort function since the default sort function uses the string representation
    // of the elements.
    const subarray = arr.slice(0, i + 1).sort((a, b) => a - b) // O(n log n)
    const hasTwoMiddles = i % 2 === 1
    if (hasTwoMiddles) {
      const leftMiddleIndex = Math.floor(i / 2)
      const rightMiddleIndex = leftMiddleIndex + 1

      medians.push((subarray[leftMiddleIndex] + subarray[rightMiddleIndex]) / 2)
    } else {
      medians.push(subarray[i / 2])
    }
  }

  return medians
}

console.log(findMedians([], 0), 'expected: []')
console.log(findMedians([2], 0), 'expected: []')
console.log(findMedians([2, 1, 3, 10, 5], 1), 'expected: [2]')
console.log(findMedians([2, 1, 3, 10, 5], 2), 'expected: [2, 1.5]')
console.log(findMedians([2, 1, 3, 10, 5], 3), 'expected: [2, 1.5, 2]')
console.log(findMedians([2, 1, 3, 10, 5], 4), 'expected: [2, 1.5, 2, 2.5]')
console.log(findMedians([2, 1, 3, 10, 5], 5), 'expected: [2, 1.5, 2, 2.5, 3]')
console.log(findMedians([2, 1, 3, 10, 5], 100), 'expected: [2, 1.5, 2, 2.5, 3]')
console.log(findMedians([2, -1, 3], 3), 'expected: [2, 0.5, 2]')
