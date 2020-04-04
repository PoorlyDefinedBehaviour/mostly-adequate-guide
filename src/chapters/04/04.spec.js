import {
  split,
  words,
  filter,
  match,
  filterQs,
  keepHighest,
  reduce,
  max,
} from "."
import curry from "../../std/curry"

describe("chapter 04 test suite", () => {
  test("split@ splits string by a separator", () => {
    expect(split("-", "hello-world")).toEqual(["hello", "world"])
    expect(split("/", "hello/world")).toEqual(["hello", "world"])
  })

  test("words@ curried version of split, splits by single space", () => {
    expect(words("hello world")).toEqual(["hello", "world"])
    expect(words("h e l l o w o r l d")).toEqual([
      "h",
      "e",
      "l",
      "l",
      "o",
      "w",
      "o",
      "r",
      "l",
      "d",
    ])
  })

  test("filter@ filters array based on predicate", () => {
    const array = [1, 2, 3]
    expect(filter(x => x === 2, array)).toEqual([2])
    expect(filter(x => x === 1)(array)).toEqual([1])
  })

  test("match@ matchs str to regular expression", () => {
    expect(match("hello", "hello world")).toBeTruthy()
    expect(match("hello")("hello world")).toBeTruthy()

    const matchHello = match("hello")

    expect(matchHello("hello world")).toBeTruthy()
    expect(matchHello("world")).toBe(null)
  })

  test("filterQs@ filter strings that don't have the letter q", () => {
    const strings = ["hello", "world", "!", "query", "abc", "abcdq"]

    expect(filterQs(strings)).toEqual(["query", "abcdq"])
  })

  test("keepHighest@ returns the kighest number", () => {
    expect(keepHighest(2, 4)).toBe(4)
    expect(keepHighest(2)(4)).toBe(4)
  })

  test("reduce@ takes a reducer and an array, and returns a single value", () => {
    const sum = curry((a, b) => a + b)
    expect(reduce(sum, 0, [1, 2, 3])).toBe(6)
  })

  test("max@ takes an array e returns the highest value", () => {
    expect(max([1, 2, 3])).toBe(3)
    expect(max([3, 2, 1])).toBe(3)
    expect(max([-1, -2, -3])).toBe(-1)
    expect(max([-3, -2, -1])).toBe(-1)
  })
})
