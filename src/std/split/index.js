import curry from "../curry"

// split :: Splittable s => String -> s a -> [a]
const split = curry((separator, splittable) => splittable.split(separator))

export default split
