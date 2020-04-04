import curry from "../curry"

const sortBy = curry((valueProducer, xs) =>
  xs.slice().sort((a, b) => (valueProducer(a) > valueProducer(b) ? 1 : -1))
)

export default sortBy
