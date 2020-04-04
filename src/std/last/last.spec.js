import last from "."

describe("last test suite", () => {
  test("returns last list element", () => {
    expect(last([1, 2, 3])).toBe(3)
    expect(last([3, 2, 1])).toBe(1)
    expect(last([100])).toBe(100)
  })
})
