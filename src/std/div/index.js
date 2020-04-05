import curry from "../curry"

// div :: a -> a -> a
const div = curry((a, b) => a / b)

export default div
