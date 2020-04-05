import curry from "../curry"

// append :: a -> a -> a
const append = curry((a, b) => b.concat(a))

export default append
