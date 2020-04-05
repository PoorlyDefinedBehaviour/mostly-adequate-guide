import curry from "../curry"

// prepend :: a -> a -> a
const prepend = curry((a, b) => a.concat(b))

export default prepend
