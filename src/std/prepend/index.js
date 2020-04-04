import curry from "../curry"

const prepend = curry((a, b) => a.concat(b))

export default prepend
