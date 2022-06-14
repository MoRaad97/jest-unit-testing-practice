class calculator {
static add(...numbers) { return  numbers.reduce( (prev , current) => prev + current , 0)}
static subtract(...numbers) { 
    if (numbers.length === 1) {
        return numbers[0]
    }else {
        return  numbers.reduce( (prev , current) => prev - current)}
    }
static divide(...numbers) { 
    if (numbers.length === 1) {
        return numbers[0]
    }else {
        return  numbers.reduce( (prev , current) => prev / current)}
    }
static multiply(...numbers) { 
    if (numbers.length === 1) {
        return numbers[0]
    }else {
        return  numbers.reduce( (prev , current) => prev * current)}
    }
}


module.exports = calculator;