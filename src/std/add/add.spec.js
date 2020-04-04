import add from "."

describe("add test suite", () => {
  test("2 + 2 is 4", () => {
    expect(add(2, 2)).toBe(4)
    expect(add(2)(2)).toBe(4)
  })
})
