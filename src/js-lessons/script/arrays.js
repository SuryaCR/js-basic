const names = ["John", "Sam", "Peter", "Surya", "RE"];

// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length-1]);

//Methods of Array
// names.push('Hello')
// console.log('After Push:'+names)
// //Spread Operator
// const names2 =[...names,'Raj']
// console.log('names2'+names2)
// //Unshift -add values at front and changes the index no
// names.unshift('poppy')
// console.log('unshift:'+names)
// // this will add the data at the beginning
// const names3 =['Raj',...names]
// console.log('names3'+names3)
//slice method prints the vale from 0 to 2 range
// const bikes = ['Honda','Yamaha','KTM','RE','TVS']
// const b1 = [...bikes.slice(0,3)]
// console.log(b1)

// const b2 = [...bikes.slice(2)]
// console.log(b2)//last 2 values

// const newBikes =[
//     ...bikes.slice(0,2),
//     'Hero',
//     ...bikes.slice(2)
// ]
// console.log('newBikes'+newBikes)
// const newBikes2 =[...newBikes.slice(0,2),...newBikes.slice(4)]
// console.log('newBikes2'+newBikes2)

// const indexSam = names.findIndex(names=>names==='sam')
// console.log('IndexOfSam: '+indexSam)

function deleteName(names1) {
  const indexN = names.findIndex((names) => names === names1);
  const newArray = [...names.slice(0, indexN), ...names.slice(indexN + 1)];
  console.log("newarray: " + newArray);
}
deleteName("Sam");

const numbers=[1,2,3,4,5,6,7,8,9]
// console.log(numbers)
// // (method) Array<number>.splice(start:number,deleteCount: number)
// //Mutation Method - Modifies/Delete the original content
// numbers.splice(3,2) // from the 3rd index delete the next 2 values
// console.log(numbers)
// // (method) Array<number>.slice(start:number,end: number)
// //Immutable Method - doesnot changes the source array
// const pizzaSlice =numbers.slice(2,4)
// console.log('PizzaSlice'+pizzaSlice)
// console.log('Numbers'+numbers)
const number1=[...numbers].reverse()
console.log(number1)
console.log(numbers)
