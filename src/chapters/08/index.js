/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */

import compose from "../../std/compose"
import map from "../../std/map"
import add from "../../std/add"
import head from "../../std/head"
import prop from "../../std/prop"
import safeProp from "../../std/safeProp"
import prepend from "../../std/prepend"
import identity from "../../std/identity"
import curry from "../../std/curry"

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

export class Either {
  constructor(value) {
    this.value = value
  }

  static of(value) {
    return new Right(value)
  }
}

// either :: (a -> c) -> (b -> c) -> Either a b -> c
export const either = curry((leftFn, rightFn, $either) =>
  $either instanceof Left ? leftFn($either.value) : rightFn($either.value)
)

export class Left extends Either {
  map() {
    return this
  }

  inspect() {
    return `Left(${this.value})`
  }
}

// left :: a -> Either a b
export const left = a => new Left(a)

export class Right extends Either {
  map(f) {
    return Either.of(f(this.value))
  }

  inspect() {
    return `Right(${this.value})`
  }
}

export class IO {
  static of(value) {
    return new IO(() => value)
  }

  constructor(fn) {
    this.unsafeFunction = fn
  }

  map(fn) {
    return new IO(compose(fn, this.unsafeFunction))
  }

  inspect() {
    return `IO(${this.unsafeFunction})`
  }

  unwrap() {
    return this.unsafeFunction()
  }
}

/*
Use `add` and `map` to make a function that increments a value inside a functor. 

incrF :: Functor f => f Int -> f Int
const incrF = undefined;
*/
export const incrementFunctor = map(add(1))

/*
Given the following User object: 
const user = { id: 2, name: 'Albert', active: true };

Use `safeProp` and `head` to find the first initial of the user. 
initial :: User -> Maybe String
const initial = undefined;
*/
export const initial = compose(map(head), safeProp("name"))

/*
Given the following helper functions:
Write a function that uses `checkActive` and `showWelcome` 
to grant access or return the error. 
*/
// showWelcome :: User -> String
export const showWelcome = compose(prepend("Welcome "), prop("name"))

// checkActive :: User -> Either String User
export const checkActive = user =>
  user.active ? Either.of(user) : left("Your account is not active")

// eitherWelcome :: User -> Either String String
export const eitherWelcome = compose(either(identity, showWelcome), checkActive)

/*
Write a function `validateName` 
which checks whether a user has a name longer than 3 characters 
or return an error message.
Then use `either`, `showWelcome` and `save`
to write a `register` function to signup and
welcome a user when the validation is ok.
Remember either's two arguments must return the same type. 
*/
export const validateUser = curry((validate, user) =>
  validate(user).map(() => user)
)

// save :: User -> IO User
export const save = user => new IO(() => ({ ...user, saved: true }))

// validateName :: User -> Either String ()
export const validateName = user =>
  user.name.length > 3
    ? Either.of(null)
    : left("name must be longer than the characters")

// register :: User -> IO String
export const register = compose(
  either(IO.of, compose(showWelcome, save)),
  validateUser(validateName)
)
