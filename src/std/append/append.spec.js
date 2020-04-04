import append from "."

describe("append test suite", () => {
  test("adds right string to left string start", () => {
    expect(append("hello", " world")).toBe(" worldhello")
    expect(append("hello")(" world")).toBe(" worldhello")
  })

  test("adds right array to left array start", () => {
    expect(append([1, 2, 3], [4, 5, 6])).toEqual([4, 5, 6, 1, 2, 3])
    expect(append([1, 2, 3])([4, 5, 6])).toEqual([4, 5, 6, 1, 2, 3])
  })
})
