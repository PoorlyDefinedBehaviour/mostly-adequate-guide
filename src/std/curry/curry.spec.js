import { curry } from "."

describe("curry function test suite", () => {
  test("can curry a function with arity 2", () => {
    const sum = curry((a, b) => a + b)
    expect(sum(2, 2)).toBe(4)
    expect(sum(2)(2)).toBe(4)
  })

  test("can curry a function with arity 3", () => {
    const sum = curry((a, b, c) => a + b + c)
    expect(sum(1, 1, 1)).toBe(3)
    expect(sum(1)(1, 1)).toBe(3)
    expect(sum(1)(1)(1)).toBe(3)
    expect(sum(1, 1)(1)).toBe(3)
  })
})
