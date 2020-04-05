import curry from "../curry"

// mult :: a -> a -> a
const mult = curry((a, b) => a * b)

export default mult
