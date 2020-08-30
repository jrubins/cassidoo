/**
 * Given a string s and a character c, return the number of occurrences of c in s.
 */
export function countOccurrences(s: string, c: string): number {
  let numOccurrences = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      numOccurrences = numOccurrences + 1
    }
  }

  return numOccurrences
}
