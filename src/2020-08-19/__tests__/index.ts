import { moveZeros } from '..'

test.each`
  arr                         | expected
  ${[1, 2, 0, 1, 0, 0, 3, 6]} | ${[1, 2, 1, 3, 6, 0, 0, 0]}
  ${[1, 2, 3]}                | ${[1, 2, 3]}
  ${[0, 0]}                   | ${[0, 0]}
`(
  'moves zeros correctly: $arr => $expected',
  ({ arr, expected }: { arr: number[]; expected: number[] }) => {
    expect(moveZeros(arr)).toEqual(expected)
  }
)
