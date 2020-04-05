import curry from "../curry"

// prop :: String -> a -> b
const prop = curry((property, object) => object[property])

export default prop
