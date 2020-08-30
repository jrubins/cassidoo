import { countOccurrences } from '..'

test.each`
  s               | c      | expected
  ${'oh heavens'} | ${'h'} | ${2}
  ${'oh heavens'} | ${'b'} | ${0}
  ${''}           | ${'h'} | ${0}
  ${'aaa'}        | ${'a'} | ${3}
`(
  'counts occurrences correctly: $s, $c => $expected',
  ({ c, expected, s }: { c: string; expected: number; s: string }) => {
    expect(countOccurrences(s, c)).toEqual(expected)
  }
)
