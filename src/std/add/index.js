import curry from "../curry"

// add :: a -> a -> a
const add = curry((a, b) => a + b)

export default add
