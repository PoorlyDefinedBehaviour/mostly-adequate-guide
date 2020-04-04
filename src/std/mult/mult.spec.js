import mult from "."

describe("mult test suite", () => {
  test("2 * 2 is 4", () => {
    expect(mult(2, 2)).toBe(4)
    expect(mult(2)(2)).toBe(4)
  })

  test("anything * 0 is 0", () => {
    expect(mult(10, 0)).toBe(0)
    expect(mult(0)(10)).toBe(0)
  })

  test("anything * 1 is itself", () => {
    expect(mult(2423, 1)).toBe(2423)
    expect(mult(1)(123)).toBe(123)
    expect(mult(123)(1)).toBe(123)
  })
})
