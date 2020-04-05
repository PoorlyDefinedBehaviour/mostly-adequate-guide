import compose from "../compose"
import join from "../join"
import map from "../map"

// chain :: Monad m => (a -> m b) -> m a -> m b
const chain = f => compose(join, map(f))

export default chain
