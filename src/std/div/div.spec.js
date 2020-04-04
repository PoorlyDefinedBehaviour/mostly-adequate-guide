import div from "."

describe("div test suite", () => {
  test("2 divided by 2 is 1", () => {
    expect(div(2, 2)).toBe(1)
    expect(div(2)(2)).toBe(1)
  })
})
