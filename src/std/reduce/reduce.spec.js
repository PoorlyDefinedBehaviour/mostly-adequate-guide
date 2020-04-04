import add from "../add"
import reduce from "."

describe("reduce teste suite", () => {
  test("sum array of numbers", () => {
    expect(reduce(add, 0, [1, 2, 3])).toBe(6)
  })

  test("doesn't fail with empty arrays", () => {
    expect(reduce(add, 0, [])).toBe(0)
  })
})
