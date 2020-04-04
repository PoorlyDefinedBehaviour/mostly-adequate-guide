import curry from "../curry"

const reduce = curry((reducer, initialValue, xs) =>
  xs.reduce(reducer, initialValue)
)

export default reduce
