import curry from "../../std/curry"
import IO from "../../std/io"
import add from "../../std/add"
import { Maybe } from "../../std/maybe"
import liftA2 from "../../std/liftA2"

/*
Write a function that adds two possibly null numbers together using `Maybe` and `ap`. 
*/
// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
export const safeAdd = curry((a, b) => Maybe.of(add).ap(a).ap(b))

/*
Rewrite `safeAdd` from exercise_b to use `liftA2` instead of `ap`. 
*/
// safeAddLiftA2 :: Maybe Number -> Maybe Number -> Maybe Number
export const safeAddLiftA2 = liftA2(add)

/*
Write an IO that gets both player1 and
player2 from the cache and starts the game. 
*/
const localStorage = {
  player1: { id: 1, name: "Albert" },
  player2: { id: 2, name: "Theresa" },
}

// getFromCache :: String -> IO User
export const getFromCache = x => new IO(() => localStorage[x])

// game :: User -> User -> String
export const game = curry((p1, p2) => `${p1.name} vs ${p2.name}`)

// startGame :: IO String
export const startGame = IO.of(game)
  .ap(getFromCache("player1"))
  .ap(getFromCache("player2"))
