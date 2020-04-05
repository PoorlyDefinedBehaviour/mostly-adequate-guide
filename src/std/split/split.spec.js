import split from "."

describe("split test suite", () => {
  test("splits string using separtor", () => {
    expect(split("/", "a/b/c")).toEqual(["a", "b", "c"])
    expect(split("/")("a/b/c")).toEqual(["a", "b", "c"])
    expect(split("/", "")).toEqual([""])
    expect(split("/")("")).toEqual([""])
    expect(split("a", "bbb")).toEqual(["bbb"])
    expect(split("a")("bbb")).toEqual(["bbb"])
  })
})
