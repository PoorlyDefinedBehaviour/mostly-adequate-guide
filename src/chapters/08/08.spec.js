import add from "../../std/add"
import {
  Maybe,
  maybe,
  left,
  Left,
  Either,
  either,
  IO,
  incrementFunctor,
  initial,
  showWelcome,
  checkActive,
  eitherWelcome,
  validateUser,
  validateName,
} from "."
import div from "../../std/div"
import identity from "../../std/identity"
import prop from "../../std/prop"
import compose from "../../std/compose"

describe("chapter 08 test suite", () => {
  test("maybe", () => {
    expect(maybe("oops", add(2), Maybe.of(2))).toBe(4)
    expect(maybe("oops", add(2), Maybe.of(2).map(add(2)))).toBe(6)
  })

  test("left", () => {
    expect(left("string").map(add(2)).value).toBe("string")
    expect(new Left(null).map(add(2)).map(div(0)).value).toBe(null)
  })

  test("right", () => {
    expect(Either.of(2).map(add(2)).value).toBe(4)
  })

  test("either", () => {
    const panic = () => {
      throw new Error("oops")
    }
    expect(either(panic, add(2), Either.of(2))).toBe(4)
  })

  test("IO", () => {
    expect(IO.of(10).map(add(2)).unwrap()).toBe(12)
  })

  test("incrementFunctor@ increments functor's values by 1", () => {
    expect(maybe("oops", identity, incrementFunctor(Maybe.of(2)))).toBe(3)
    expect(either(identity, identity, incrementFunctor(Either.of(10)))).toBe(11)
  })

  test("initial@ returns Just(String) if user has a name", () => {
    const user = { id: 2, name: "Albert", active: true }
    expect(initial(user).value).toBe("A")
    expect(maybe(null, identity, initial(user))).toBe("A")
  })

  test("initial@ returns Nothing if user has no name", () => {
    const user = { id: 2, active: true }
    expect(initial(user).value).toBe(undefined)
    expect(maybe(null, identity, initial(user))).toBe(null)
    expect(maybe(123, identity, initial(user))).toBe(123)
  })

  test("showWelcome@ welcomes user by name", () => {
    const user = { name: "john doe" }
    expect(showWelcome(user)).toBe("Welcome john doe")
  })

  test("checkActive@ returns Right(User) if user is active", () => {
    const activeUser = { active: true }
    const panic = () => {
      throw new Error("oops")
    }
    expect(either(panic, identity, checkActive(activeUser))).toEqual(activeUser)
    expect(either(panic)(identity)(checkActive(activeUser))).toEqual(activeUser)
  })

  test("checkActive@ returns Left(message) if user is inactive", () => {
    const inactiveUser = { active: false }
    const panic = () => {
      throw new Error("oops")
    }
    expect(either(identity, panic, checkActive(inactiveUser))).toBe(
      "Your account is not active"
    )
  })

  test("eitherWelcome@ returns welcome message if user is active", () => {
    const activeUser = { name: "john doe", active: true }
    expect(eitherWelcome(activeUser)).toBe("Welcome john doe")
  })

  test("eitherWelcome@ returns account inactive message if user is inactive", () => {
    const activeUser = { name: "john doe", active: false }
    expect(eitherWelcome(activeUser)).toBe("Your account is not active")
  })

  test("validateUser@ returns Right(user) if validation passes", () => {
    const user = { age: 18 }

    const isOldEnough = age =>
      age >= 18 ? Either.of(true) : left("not old enough")

    const validate = compose(isOldEnough, prop("age"))

    const panic = () => {
      throw new Error("oops")
    }

    expect(either(panic, identity, validateUser(validate, user))).toEqual(user)
  })

  test("validateUser@ returns Left(message) if validation fails", () => {
    const user = { age: 17 }

    const isOldEnough = age =>
      age >= 18 ? Either.of(true) : left("not old enough")

    const validate = compose(isOldEnough, prop("age"))

    const panic = () => {
      throw new Error("oops")
    }

    expect(either(identity, panic, validateUser(validate, user))).toBe(
      "not old enough"
    )
  })

  test("validateName@ returns Right(null) if user name is valid", () => {
    const user = { name: "abcdefg" }

    const panic = () => {
      throw new Error("oops")
    }

    expect(either(panic, identity, validateName(user))).toBe(null)
  })

  test("validaName@ returns Left(message) if user name is invalid", () => {
    const user = { name: "a" }

    const panic = () => {
      throw new Error("oops")
    }

    expect(either(identity, panic, validateName(user))).toBe(
      "name must be longer than the characters"
    )
  })
})
