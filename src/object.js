// Objects is an unordered collection of properties each of whic has a name and a value.Property names are stringa, hence objects map strings to values

const person = {
  first: 'object',
  last: 'value',
  age: 20
}
console.log(person.age)
console.log(person.last)
console.log(person.first)

person.first = 'first'
person.last = null
console.log(person.last)

const book = {
  'main title': 'Java Script',
  'sub-title': 'Beginners book',
  for: 'students',
  author: {
    first: 'tom',
    last: 'hardy'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
// console.log(book.sub - title)
console.log(book.for)
