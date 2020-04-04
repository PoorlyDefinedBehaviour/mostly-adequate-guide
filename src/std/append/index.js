import curry from "../curry"

const append = curry((a, b) => b.concat(a))

export default append
