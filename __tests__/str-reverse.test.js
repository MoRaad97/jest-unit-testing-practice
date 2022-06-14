const strRev = require('../str-reverse')
// Reverse String

     test("string length check",() => {
        // Arrange
        const str = "eye"
        // Act
        const reversedString = strRev(str)
        // Assert
        expect(reversedString).toBe("eye")
    })