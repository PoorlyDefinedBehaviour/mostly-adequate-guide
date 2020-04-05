import { Maybe, maybe } from "."
import mult from "../mult"
import identiy from "../identity"

describe("maybe test suite", () => {
  test("works with values different than null & undefined", () => {
    const double = mult(2)
    expect(Maybe.of(43).value).toBe(43)
    expect(Maybe.of(43).map(double).value).toBe(86)
    expect(maybe("defaultValue", identiy, Maybe.of(1))).toBe(1)
    expect(maybe("defaultValue", identiy)(Maybe.of(1))).toBe(1)
    expect(maybe("defaultValue")(identiy)(Maybe.of(1))).toBe(1)
  })

  test("works with null", () => {
    expect(Maybe.of(null).map(mult(2)).value).toBe(null)
    expect(maybe("defaultValue", identiy, Maybe.of(null))).toBe("defaultValue")
    expect(maybe("defaultValue", identiy)(Maybe.of(null))).toBe("defaultValue")
    expect(maybe("defaultValue")(identiy)(Maybe.of(null))).toBe("defaultValue")
  })

  test("works with undefined", () => {
    expect(Maybe.of(undefined).map(mult(2)).value).toBe(undefined)
    expect(maybe("defaultValue", identiy, Maybe.of(undefined))).toBe(
      "defaultValue"
    )
    expect(maybe("defaultValue", identiy)(Maybe.of(undefined))).toBe(
      "defaultValue"
    )
    expect(maybe("defaultValue")(identiy)(Maybe.of(undefined))).toBe(
      "defaultValue"
    )
  })
})
