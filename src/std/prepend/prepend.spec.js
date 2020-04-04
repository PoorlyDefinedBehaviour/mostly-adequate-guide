import prepend from "."

describe("prepend test suite", () => {
  test("prepend right string to left string", () => {
    expect(prepend("hello", " world")).toBe("hello world")
    expect(prepend("hello")(" world")).toBe("hello world")
  })

  test("prepend right array to left array", () => {
    expect(prepend([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    expect(prepend([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
})
