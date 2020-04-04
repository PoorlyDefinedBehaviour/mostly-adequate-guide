import identiy from "."

describe("identity test suite", () => {
  test("always returns the arg that is passed to it", () => {
    expect(identiy(2)).toBe(2)
    expect(identiy("hello world")).toBe("hello world")
    expect(identiy(identiy(2))).toBe(2)
    expect(identiy(identiy(identiy([1, 2, 3])))).toEqual([1, 2, 3])
  })
})
