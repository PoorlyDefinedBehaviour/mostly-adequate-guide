import { getStreetName, getFile, pureLog, baseName, logFileName } from "."
import IO from "../../std/io"

describe("chapter 09 test suite", () => {
  test("getStreetName@ safely returns user street name", () => {
    const user = {
      id: 1,
      name: "Albert",
      address: {
        street: {
          number: 22,
          name: "Walnut St",
        },
      },
    }
    expect(getStreetName(user).value).toBe("Walnut St")
  })

  test("getFile@ returns file path", () => {
    expect(getFile.join()).toBe("/home/mostly-adequate/ch09.md")
  })

  test("pureLog@ returns IO ()", () => {
    expect(pureLog("test") instanceof IO)
  })

  test("baseName@ given a filepath, returns it's base name", () => {
    expect(baseName("/home/mostly-adequate/ch09.md")).toBe("ch09.md")
  })

  test("logFileName@ given a file path, retuns IO () that will log it's base name", () => {
    expect(logFileName(getFile.join()) instanceof IO)
  })
})
