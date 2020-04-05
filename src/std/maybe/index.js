import curry from "../curry"

export class Maybe {
  static of(value) {
    return new Maybe(value)
  }

  constructor(value) {
    this.value = value
  }

  get isNothing() {
    return this.value === null || this.value === undefined
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.value))
  }

  inspect() {
    return this.isNothing ? "Nothing" : `Just(${this.value})`
  }
}
// maybe :: b -> (a -> b) -> Maybe a -> b
export const maybe = curry((value, fn, $maybe) =>
  $maybe.isNothing ? value : fn($maybe.value)
)
