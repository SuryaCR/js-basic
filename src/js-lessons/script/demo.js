function add() {
  const x = 100;
  const y = 50;
  console.log(x + y);
  const result = x + y;
  //   document.writeln(x+y);
  document.getElementById("result").innerHTML = result;
}
function sum() {
  const x = parseInt(document.getElementById("first").value);
  const y = parseInt(document.getElementById("second").value);
  const result = x + y;
  document.getElementById("result").innerHTML = result;
}
function add(x, y) {
  var result = parseInt(x) + parseInt(y);
  document.getElementById("result").innerHTML = result;
}
function problem1() {
  let i = 0;
  for (i = 0; i < 100; i++) {
    console.log(i);
  }
}
function problem2() {
  let i = 0;
  for (i = 10; i > 0; i--) {
    console.log(i);
  }
}
function problem3() {
  let i = 0;
  for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
function printdigits(x) {
//   let x = 945632672;
  let num = parseInt(x);
  let reminder = 0;
  while (num >= 1) {
    reminder = num % 10;
    if (!(reminder % 2 == 0)) {
      console.log(reminder);
    }
    num = num / 10;
  }
}
