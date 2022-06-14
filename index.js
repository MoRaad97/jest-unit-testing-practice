function calc(...numbers) {
  return  numbers.reduce( (prev , current) => prev + current )
}
numb = [10,6,4]
console.log(calc(...numb))