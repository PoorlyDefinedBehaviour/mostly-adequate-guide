import curry from "../curry"

const prop = curry((property, object) => object[property])

export default prop
