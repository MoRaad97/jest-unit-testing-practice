const calc = require('../calculator')

describe('calculator Tests' , () => {
    describe('Add Method test',()=>{
        test('one number',()=> {
        // Arrange
        const numbers = 10 
        // Act
        const sumResult = calc.add(numbers)
        // Assert
        expect(sumResult).toBe(10)
        })
        test('two numbers',()=> {
        // Arrange
        const numbers = [10,30] 
        // Act
        const sumResult = calc.add(...numbers)
        // Assert
        expect(sumResult).toBe(40)
        })
        test('multi numbers',()=> {
        // Arrange
        const numbers = [10,50,40,80,5,15] 
        // Act
        const sumResult = calc.add(...numbers)
        // Assert
        expect(sumResult).toBe(200)
        })
    })
    describe('subtract Method test',()=>{
        test('one number',()=> {
        // Arrange
        const numbers = 10 
        // Act
        const sumResult = calc.subtract(numbers)
        // Assert
        expect(sumResult).toBe(10)
        })
        test('two numbers',()=> {
        // Arrange
        const numbers = [10,30] 
        // Act
        const sumResult = calc.subtract(...numbers)
        // Assert
        expect(sumResult).toBe(-20)
        })
        test('multi numbers',()=> {
        // Arrange
        const numbers = [50,30,20] 
        // Act
        const sumResult = calc.subtract(...numbers)
        // Assert
        expect(sumResult).toBe(0)
        })
    })
    describe('divide Method test',()=>{
        test('one number',()=> {
        // Arrange
        const numbers = 10 
        // Act
        const sumResult = calc.divide(numbers)
        // Assert
        expect(sumResult).toBe(10)
        })
        test('two numbers',()=> {
        // Arrange
        const numbers = [30,3] 
        // Act
        const sumResult = calc.divide(...numbers)
        // Assert
        expect(sumResult).toBe(10)
        })
        test('multi numbers',()=> {
        // Arrange
        const numbers = [50,5,10] 
        // Act
        const sumResult = calc.divide(...numbers)
        // Assert
        expect(sumResult).toBe(1)
        })
    })
    describe('multiply Method test',()=>{
        test('one number',()=> {
        // Arrange
        const numbers = 10 
        // Act
        const sumResult = calc.multiply(numbers)
        // Assert
        expect(sumResult).toBe(10)
        })
        test('two numbers',()=> {
        // Arrange
        const numbers = [10,30] 
        // Act
        const sumResult = calc.multiply(...numbers)
        // Assert
        expect(sumResult).toBe(300)
        })
        test('multi numbers',()=> {
        // Arrange
        const numbers = [50,2,2] 
        // Act
        const sumResult = calc.multiply(...numbers)
        // Assert
        expect(sumResult).toBe(200)
        })
    })
})

