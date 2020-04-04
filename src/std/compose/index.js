const compose = (...fns) => (...args) =>
  fns.reduceRight((arg, fn) => fn(arg), ...args)

export default compose
