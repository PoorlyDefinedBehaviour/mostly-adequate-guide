import compose from "."
import curry from "../curry"
import add from "../add"

describe("compose test suite", () => {
  test("applies arguments from right to left", () => {
    const sum2 = curry((a, b) => a + b)(2)
    const multiplyBy4 = curry((a, b) => a * b)(4)
    expect(compose(sum2, multiplyBy4)(2)).toBe(10)
    expect(compose(multiplyBy4, sum2)(2)).toBe(16)
  })

  test("works without arguments", () => {
    expect(compose(add(2), () => 2)()).toBe(4)
  })
})
