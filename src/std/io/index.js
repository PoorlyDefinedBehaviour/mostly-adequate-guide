import compose from "../compose"

class IO {
  static of(value) {
    return new IO(() => value)
  }

  constructor(fn) {
    this.unsafeFunction = fn
  }

  map(fn) {
    return new IO(compose(fn, this.unsafeFunction))
  }

  join() {
    return this.unsafeFunction()
  }

  ap(functor) {
    return functor.map(this.value)
  }

  inspect() {
    return `IO(${this.unsafeFunction})`
  }
}

export default IO
