import { Maybe } from "../maybe"
import add from "../add"
import chain from "."

describe("chain test suite", () => {
  test("maps then joins a monad", () => {
    expect(chain(add(2))(Maybe.of(2))).toBe(4)
  })
})
