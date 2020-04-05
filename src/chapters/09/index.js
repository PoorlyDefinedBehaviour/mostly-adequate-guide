import IO from "../../std/io"
import chain from "../../std/chain"
import safeProp from "../../std/safeProp"
import compose from "../../std/compose"
import split from "../../std/split"
import last from "../../std/last"
import map from "../../std/map"
/*
Considering a User object as follow:
const user = {  
  id: 1,  
  name: 'Albert',  
  address: {  
    street: {  
      number: 22,  
      name: 'Walnut St',  
    },  
  },  
};
Use `safeProp` and `map/join` or `chain` 
to safely get the street name when given a user 
*/
// getStreetName :: User -> Maybe String
export const getStreetName = compose(
  chain(safeProp("name")),
  chain(safeProp("street")),
  safeProp("address")
)

/*
Use getFile to get the filepath,
 remove the directory and keep only the basename, 
 then purely log it. Hint: you may want to use `split` and `last` 
 to obtain the basename from a filepath. 
*/
// getFile :: IO String
export const getFile = IO.of("/home/mostly-adequate/ch09.md")

// pureLog :: String -> IO ()
export const pureLog = str => new IO(() => console.log(str))

export const baseName = compose(last, split("/"))

// logFileName :: IO ()
export const logFileName = compose(pureLog, baseName)

/*
Use `validateEmail`, `addToMailingList`
 and `emailBlast` to create a function
  which adds a new email to the mailing list if valid,
   and then notify the whole list. 
*/
// validateEmail :: Email -> Either String Email
export const validateEmail = () => {}

// addToMailingList :: Email -> IO([Email])
export const addToMailingList = () => {}

// emailBlast :: [Email] -> IO ()
export const emailBlast = () => {}

export const joinMailingList = compose(
  map(compose(emailBlast, addToMailingList)),
  validateEmail
)
