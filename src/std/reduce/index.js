import curry from "../curry"

// reduce :: (a -> b -> a) -> a -> [b] -> a
const reduce = curry((reducer, initialValue, xs) =>
  xs.reduce(reducer, initialValue)
)

export default reduce
