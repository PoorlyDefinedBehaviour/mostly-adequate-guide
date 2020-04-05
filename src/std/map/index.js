import curry from "../curry"

// map :: (a -> b) -> [a] -> [b]
const map = curry((mapper, xs) => xs.map(mapper))

export default map
