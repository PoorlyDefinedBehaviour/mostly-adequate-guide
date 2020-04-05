import curry from "../curry"

// liftA2 :: Functor f => (a -> b) -> f a -> f a -> f b
const liftA2 = curry((f, functorA, functorB) => functorA.map(f).ap(functorB))

export default liftA2
