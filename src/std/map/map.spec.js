import map from "."
import mult from "../mult"

describe("map test suite", () => {
  test("returns a new array with the function applied to it's elements", () => {
    const double = mult(2)
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6])
    expect(map(double)([1, 2, 3])).toEqual([2, 4, 6])
  })

  test("returns empty array if argument is an empty array", () => {
    const double = mult(2)
    expect(map(double, [])).toEqual([])
    expect(map(double)([])).toEqual([])
  })
})
