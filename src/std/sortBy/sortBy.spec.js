import prop from "../prop"
import sortBy from "."

describe("sortBy test suite", () => {
  test("sorts in ascending order", () => {
    const objects = [{ x: 3 }, { x: 2 }, { x: 1 }]
    expect(sortBy(prop("x"), objects)).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }])
  })
})
