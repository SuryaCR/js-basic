/* eslint-disable no-const-assign */
function getChild (parent) {
  if (parent == null) throw TypeError()
  return Object.create(parent)
}

// const o = { x: "don't change" }
// console.log(o.x)

// let p = Object.create(o)
// console.log(p)

// p = getChild(o)
// console.log(p)

// Object.prototype = 0
// console.log(Object)

const o5 = {}
console.log(o5)
o5.x = 100
const p = getChild(o5)
console.log(p)
p.y = 200
const q = getChild(p)
q.z = 300
console.log(q)
console.log('q.x+q.y+q.z' + (q.x + q.y + q.z))
console.log('p.x+p.y+p.z' + (p.x + p.y + p.z))
console.log('p.x+p.y' + (p.x + p.y))
console.log('o5.x' + (o5.x))

const book = {
  'main title': 'Javascript',
  subtitle: 'The Definitive Guide',
  for: 'all',
  author: {
    firstname: 'donald',
    surname: 'duck'
  }
}
// let len
// book = null
// if (book) {
//   if (book.subtitle) {
//     len = book.subtitle.length
//     console.log(len)
//   } else {
//     console.log('book.subtitle undefined:')
//   }
// } else {
//   console.log('book is null')
// }

const len = book && book.subtitle && book.subtitle.length
if (len) { console.log(len) }

console.log(book.author)
delete book.author
console.log(book.author)

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)

// cannot delete

console.log(o6.toString)
delete o6.toString
console.log(o6.toString)
const a = 1
delete this.a
console.log(a)
