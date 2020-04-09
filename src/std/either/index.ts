/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-classes-per-file */
// curry :: (*... -> b) -> a -> ... -> c -> b
const curry = (fn: Function) => {
  const arity = fn.length

  const internalCurry = (...args: unknown[]): unknown =>
    args.length < arity ? internalCurry.bind(null, ...args) : fn(...args)

  return internalCurry
}

class Left<A> {
  constructor(public readonly value: A) {}

  static of<A>(value: A) {
    return new Left(value)
  }

  map<B>(_f: (value: A) => B) {
    return this
  }

  chain<B>(_f: (value: A) => B) {
    return this
  }

  ap<T, B>(_f: Either<T, (value: A) => B>) {
    return this
  }
}

class Right<B> {
  constructor(public readonly value: B) {}

  static of<B>(value: B) {
    return new Right(value)
  }

  map<A>(f: (value: B) => A) {
    return Right.of(f(this.value))
  }

  chain<A>(f: (value: B) => A) {
    return f(this.value)
  }

  ap<T, A>(f: Either<T, (value: B) => A>) {
    return f instanceof Left ? f : this.map(f.value)
  }
}

type Either<A, B> = Left<A> | Right<B>

const left = <A, B>(value: A): Either<A, B> => new Left(value)
const right = <A, B>(value: B): Either<A, B> => new Right(value)

// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = curry(
  <A, B, C>(
    leftFn: (value: A) => C,
    rightFn: (value: B) => C,
    $either: Either<A, B>
  ) =>
    $either instanceof Left ? leftFn($either.value) : rightFn($either.value)
)
