import prop from "."

describe("prop test suite", () => {
  test("extracts object property", () => {
    const object = { x: 1 }
    expect(prop("x", object)).toBe(1)
    expect(prop("x")(object)).toBe(1)
  })
})
