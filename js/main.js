//1 е задание//
function Message (FirstName, SecondName) {
  let AboutMe = FirstName + " " + SecondName;

  return AboutMe
}
let Result = Message('Anastasia', 'Starkova');
console.log(Result)

//2 е задание
function sumWithDefaults (a, b = 100) {
  return a+b
    }
sumWithDefaults (20)

console.log(sumWithDefaults(20))

//3
function returnFnResult (a) {
  return a
}
console.log(returnFnResult(sumWithDefaults(0)))

function returnCounter (c) {

  return function (){
    return  c++
  }
}

let Count = returnCounter(2)

console.log(Count());
console.log(Count());

