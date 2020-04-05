const orDefault = args => (args.length > 0 ? args : [null])

// compose :: [(a -> b)] -> [a] -> b
const compose = (...fns) => (...args) =>
  fns.reduceRight((arg, fn) => fn(arg), ...orDefault(args))

export default compose
