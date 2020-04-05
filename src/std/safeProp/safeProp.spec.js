import safeProp from "."
import { maybe } from "../maybe"
import identity from "../identity"

describe("safeProp test suite", () => {
  test("returns Just(a) if property exists", () => {
    const object = { x: 1 }
    expect(safeProp("x", object).value).toBe(1)
    expect(safeProp("x")(object).value).toBe(1)
    expect(maybe("defaultValue", identity, safeProp("x", object))).toBe(1)
  })

  test("returns Nothing() if property doesn't exist", () => {
    const object = { x: 1 }
    expect(safeProp("y", object).value).toBe(undefined)
    expect(maybe("defaultValue", identity, safeProp("y", object))).toBe(
      "defaultValue"
    )
  })
})
