const capitalize = require('../capitalize')

test("check for one word",()=> {
    const str = "mohammed"
    const result = capitalize(str)
    expect(result).toBe("Mohammed")
})
test("check for more than one word",()=> {
    const str = "mohammed raad zahraw"
    const result = capitalize(str)
    expect(result).toBe("Mohammed Raad Zahraw")
})
