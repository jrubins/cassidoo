/**
 * Given an array of random integers, move all the zeros in the array to the end of the array.
 * Try to keep this in O(n) time (or better)!
 */
export function moveZeros(arr: number[]): number[] {
  let adjustedArr: number[] = []
  const zeros: number[] = []
  arr.forEach((num) => {
    if (num === 0) {
      zeros.push(num)
    } else {
      adjustedArr.push(num)
    }
  })

  return adjustedArr.concat(zeros)
}
