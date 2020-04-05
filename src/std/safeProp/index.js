import curry from "../curry"
import { Maybe } from "../maybe"

// safeProp :: String -> a -> Maybe b
const safeProp = curry((property, object) => Maybe.of(object[property]))

export default safeProp
