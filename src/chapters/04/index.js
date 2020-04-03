import { curry } from "../../std"

/*
  Refactor to remove all arguments by partially applying the function. 
  words :: String -> [String]
  const words = str => split(" ", str)
*/
export const split = curry((sep, str) => str.split(sep))
export const words = split(" ")

/*
  Refactor to remove all arguments by partially applying the functions. 
  filterQs :: [String] -> [String]
  const filterQs = xs => filter(x => x.match(/q/i), xs);
*/
export const filter = curry((predicate, xs) => xs.filter(predicate))
export const match = curry((regexp, str) => str.match(regexp))
export const filterQs = filter(match(/q/i))

/*
  Considering the following function:
  Refactor `max` to not reference any arguments using the helper function `keepHighest`. 
  max :: [Number] -> Number
  const max = xs => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
*/
export const keepHighest = curry((x, y) => (x >= y ? x : y))
export const reduce = curry((reducer, initalValue, xs) =>
  xs.reduce(reducer, initalValue)
)
export const max = reduce(keepHighest, -Infinity)
