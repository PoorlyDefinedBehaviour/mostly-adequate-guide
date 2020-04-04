import curry from "../curry"

const map = curry((mapper, xs) => xs.map(mapper))

export default map
