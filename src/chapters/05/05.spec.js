import {
  length,
  last,
  prop,
  isLastInStock,
  sum,
  average,
  averageDollarValue,
  fastestCar,
} from "."
import curry from "../../std/curry"

describe("chapter 05 test suite", () => {
  test("length@ returns list length", () => {
    expect(length([1, 2, 3])).toBe(3)
    expect(length([])).toBe(0)
    expect(length([1])).toBe(1)
  })

  test("last@ returns the last element in the list", () => {
    expect(last([1, 2, 3])).toBe(3)
    expect(last([1])).toBe(1)
    expect(last([3, 2, 1])).toBe(1)
  })

  test("prop@ extracts property com object", () => {
    const object = {
      name: "Aston Martin One-77",
      horsepower: 750,
      dollar_value: 1850000,
      in_stock: true,
    }
    expect(prop("horsepower", object)).toBe(750)
    expect(prop("dollar_value")(object)).toBe(1850000)
  })

  test("isLastInStock@ returns true if the last car in the list is in stock", () => {
    const cars = [
      {
        name: "Aston Martin One-77",
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: false,
      },
      {
        name: "Aston Martin One-77",
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: false,
      },
      {
        name: "Aston Martin One-77",
        horsepower: 750,
        dollar_value: 1850000,
        in_stock: true,
      },
    ]
    expect(isLastInStock(cars)).toBe(true)
    const popLast = curry((start, end, xs) => xs.slice(start, end))(
      0,
      length(cars) - 1
    )
    expect(isLastInStock(popLast(cars))).toBe(false)
  })

  test("sum@ sums an array of numbers", () => {
    expect(sum([1, 2, 3])).toBe(6)
    expect(sum([3, 2, 1])).toBe(6)
    expect(sum([])).toBe(0)
  })

  test("average@ returns the average of a list of numbers", () => {
    expect(average([1, 1, 1])).toBe(1)
    expect(average([1])).toBe(1)
  })

  test("averageDollarValue@ returns car values average", () => {
    expect(
      averageDollarValue([
        { dollar_value: 1 },
        { dollar_value: 1 },
        { dollar_value: 1 },
      ])
    ).toBe(1)

    expect(
      averageDollarValue([
        { dollar_value: 2 },
        { dollar_value: 2 },
        { dollar_value: 2 },
      ])
    ).toBe(0.5)
  })

  test("fastestCar@ returns the name of the fastest car with 'is the fastest' appended to it", () => {
    const cars = [
      { name: "a", horsepower: 1 },
      { name: "b", horsepower: 2 },
      { name: "c", horsepower: 3 },
    ]
    expect(fastestCar(cars)).toBe("c is the fastest car")
  })
})
