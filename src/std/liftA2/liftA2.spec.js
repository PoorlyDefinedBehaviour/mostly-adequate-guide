import add from "../add"
import liftA2 from "."
import { Maybe } from "../maybe"

describe("liftA2 test suite", () => {
  test("works with any two functors", () => {
    expect(liftA2(add, Maybe.of(2), Maybe.of(2)).value).toBe(4)
    expect(liftA2(add)(Maybe.of(2))(Maybe.of(2)).value).toBe(4)
  })
})
