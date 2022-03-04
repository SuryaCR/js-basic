const age = 100
const money = 1000.50
console.log(typeof age)
console.log(typeof money)
console.log('10' * '10')

console.log(Math.round(2.4))
console.log(Math.ceil(2.4))
console.log(Math.floor(2.2))
console.log(Math.random())
const sweets = 20
const kids = 3
const each = Math.floor(sweets / kids)
console.log(each)

const left = sweets % kids
console.log(left)

const x1 = 2 ** 3
console.log(x1)

console.log(Math.pow(2, 3))

console.log(0.1 + 0.2)

let cost = 100.95
cost = cost * 100
console.log(cost)

console.log(typeof NaN)

const x = 100
let result = Number.isInteger(x)
console.log(`is x a number:${result}`)

const y = 'abcd'
result = Number.isInteger(y)
console.log(`is y a number:${result}`)

result = typeof y === 'string'
console.log(`Is y a string :${result}`)

const flag = true
result = typeof flag === 'boolean'
console.log(`is flag is boolean:${flag}`)

const nos = [1, 2, 3, 4, 5]
result = typeof nos === 'object'
console.log(`is nos an object:${result}`)
