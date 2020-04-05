import { safeAdd, safeAddLiftA2, getFromCache } from "."
import { Maybe } from "../../std/maybe"

describe("chapter 10 test suite", () => {
  test("safeAdd@ adds two functors", () => {
    expect(safeAdd(Maybe.of(2), Maybe.of(2)).value).toBe(4)
    expect(safeAdd(Maybe.of(1))(Maybe.of(1)).value).toBe(2)
  })

  test("safeAddLiftA2 works any two functors", () => {
    expect(safeAddLiftA2(Maybe.of(2), Maybe.of(2)).value).toBe(4)
    expect(safeAddLiftA2(Maybe.of(1))(Maybe.of(1)).value).toBe(2)
  })

  test("getFromCache@ returns IO User", () => {
    expect(getFromCache("player1").join()).toEqual({ id: 1, name: "Albert" })
    expect(getFromCache("player2").join()).toEqual({ id: 2, name: "Theresa" })
  })
})
