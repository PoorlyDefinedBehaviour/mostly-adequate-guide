import compose from "../../std/compose"
import curry from "../../std/curry"
import reduce from "../../std/reduce"
import add from "../../std/add"
import map from "../../std/map"
import div from "../../std/div"
import sortBy from "../../std/sortBy"
import append from "../../std/append"

/*
In each following exercise, we'll consider Car objects with the following shape:
{
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}

Use `compose()` to rewrite the function below. 

isLastInStock :: [Car] -> Boolean
const isLastInStock = (cars) => {
  const lastCar = last(cars);
  return prop('in_stock', lastCar);
};
 */
export const length = xs => xs.length
export const last = xs => xs[length(xs) - 1]
export const prop = curry((property, object) => object[property])
export const isLastInStock = compose(prop("in_stock"), last)

/*
Considering the following function:

const average = xs => reduce(add, 0, xs) / xs.length;

Use the helper function `average` to refactor `averageDollarValue` as a composition. 

averageDollarValue :: [Car] -> Int
const averageDollarValue = (cars) => {
  const dollarValues = map(c => c.dollar_value, cars);
  return average(dollarValues);
};
*/
export const sum = reduce(add, 0)
export const average = xs => compose(div(length(xs)), sum)(xs)
export const averageDollarValue = compose(average, map(prop("dollar_value")))

/*
Refactor `fastestCar` using `compose()` and other functions in pointfree-style.
Hint, the `append` function may come in handy. 

fastestCar :: [Car] -> String
const fastestCar = (cars) => {
  const sorted = sortBy(car => car.horsepower, cars);
  const fastest = last(sorted);
  return concat(fastest.name, ' is the fastest');
};
*/
export const fastestCar = compose(
  compose(append(" is the fastest car"), prop("name")),
  last,
  sortBy(prop("horsepower"))
)
