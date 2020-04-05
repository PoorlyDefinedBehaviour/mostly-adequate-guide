import { Maybe, maybe } from "../maybe"
import compose from "../compose"
import map from "../map"
import add from "../add"
import identity from "../identity"
import join from "."

describe("join test suite", () => {
  test("call .join() on any monad type", () => {
    expect(join(Maybe.of(Maybe.of(1))).value).toBe(1)
    expect(
      compose(
        maybe("defaultValue", identity),
        join,
        Maybe.of
      )(Maybe.of("hello world"))
    ).toBe("hello world")
    expect(
      compose(
        maybe("defaultValue", identity),
        map(add(2)),
        join,
        Maybe.of
      )(Maybe.of(2))
    ).toBe(4)
  })
})
