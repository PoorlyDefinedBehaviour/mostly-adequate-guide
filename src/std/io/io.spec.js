import IO from "."

describe("IO test suite", () => {
  test("wraps an impure operation", () => {
    const mockedReadFile = () => "content"

    expect(new IO(mockedReadFile).join()).toBe("content")
    expect(IO.of("content").join()).toBe("content")

    const toUpperCase = str => str.toUpperCase()
    expect(IO.of("content").map(toUpperCase).join()).toBe("CONTENT")
  })
})
