// the ability to access the ouer level scoped data from the inner level scoped code even after the function is terminated

// function doSomeTask () {
//   const x = 100
//   const y = 100
//   console.log('x' + x + 'y' + y)
// }
// doSomeTask()
// console.log('completed')

// function outer () {
//   const ovar = 'hey'
//   console.log(ovar)
//   function inner () {
//     const ivar = 'heello'
//     console.log(ivar)
//     console.log(ovar) // closure - captured variable....
//   }
//   return inner
// }
// // outer()
// const innerf = outer()
// innerf()

// function create (greeting = '') {
//   const my = greeting.toUpperCase()
//   return function (name) {
//     return `${my} ${name}`
//   }
// }
// const output = create('Hello')
// const output2 = create('vanakkam')
// // const output1 = output('JS')
// // console.log(output1)

// console.log(output('surya'))
// console.log(output2('surya'))

function createGame (gameName) {
  let score = 0
  return function win () {
    score++
    return `Your name ${gameName} score is ${score}`
  }
}
const output = createGame('Hello')
console.log(output())
