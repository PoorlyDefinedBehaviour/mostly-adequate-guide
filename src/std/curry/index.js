// curry :: (*... -> b) -> a -> ... -> c -> b
const curry = fn => {
  const arity = fn.length

  const internalCurry = (...args) =>
    args.length < arity ? internalCurry.bind(null, ...args) : fn(...args)

  return internalCurry
}

export default curry
