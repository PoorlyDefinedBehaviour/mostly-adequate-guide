import head from "."

describe("head test suite", () => {
  test("works on non empty arrays", () => {
    expect(head([1, 2, 3])).toBe(1)
    expect(head([3, 2, 1])).toBe(3)
    expect(head([1])).toBe(1)
    expect(head([2])).toBe(2)
  })

  test("works on empty arrays", () => {
    expect(head([])).toBe(undefined)
  })
})
