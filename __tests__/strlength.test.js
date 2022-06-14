const strLen = require('../string-length')

describe("string length test", ()=>{
    test("string length check",() => {
        // Arrange
        const str = "Mohammed"
        // Act
        const strLength = strLen(str)
        // Assert
        expect(strLength).toBe(8)
    })
    test("string length less then 1",() => {
        // Arrange
        const str = ""
        // Act
        const strLength = strLen(str)
        // Assert
        expect(strLength).toBe(`Error`)
    })
    test("string length bigger then 10",() => {
        // Arrange
        const str = "Mohammed Raad"
        // Act
        const strLength = strLen(str)
        // Assert
        expect(strLength).toBe(`Error`)
    })
}) 