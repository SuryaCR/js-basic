/* eslint-disable prefer-regex-literals */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-object */
const cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getGender = function () { return cody.gender }
console.log(cody.getGender())
console.log(cody)

const myObject = new Object()
myObject['0'] = 't'
myObject['1'] = 'o'
myObject['2'] = 'o'
console.log(myObject)

const myString = new String('go')
console.log(myString)

const Person = function (living, age, gender) {
  this.living = living
  this.age = age
  this.gender = gender
  this.getGender = function () { return this.gender }
}
const smith = new Person(true, 33, 'male')
console.log(smith)

// Inbuild function

const mynumber = new Number(23)
const mystring = new String('male')
const myboolean = new Boolean(false)
const myobject = new Object()
const myarray = new Array('foo', 'bar')
const myfunction = new Function('x', 'y', 'return x*y')
const mydate = new Date()
const myregexp = new RegExp('\bt[a-z]+\b')
const myerror = new Error('sorry')
