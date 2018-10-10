function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
}
//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

//simpleComparison using WHILE and Skip Counting Algorithm
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    console.log(numberStart += skipCount); // Used to be 2 lines ... console.log(numberStart); numberStart += skipCount;
    // What is happening with the single line compared to the double line of code?
  }
}

function LooseEquality (firstOperand, secondOperant) { //Changes the second operand to the typeof the first operand
  console.log(firstOperand == secondOperant);
}

function StrictEquality (firstOperand, secondOperant) {
  console.log(firstOperand === secondOperant);
}
/*
function notEqual(valueArray, i){
  if(valueArray !=5){
    console.log(number[i], "Is index number: ", i, "with a total")
    return i;
  } else {console.log("5 is at the index", i); i=number.length}

}*/

//Not Equality Starter Code
//Outputing individual values of an array, we want to start stop at the value 5, where ever it is in the array
/*
for (let i=0; i<number.length; i++) {

}

let number = [4, 7, 13, 99, 0, 100, 5, 1, '1'];
for(let i=0; i==done; i++){
  notEqual(if i == number[i], i);
}
*/
//for (let i=0; i<number.length; i++) { //we do not know when to stop in the array
//  if (number[i] !=5) { //This is when we do stop, so we accept every other value (common logic for "not")
//  console.log(number[i], "Is index number: ", i, "with a total array index of ", number.length);
//} else {console.log("5 is at the index", i); i=number.length} //once we stop, we want to jump out of the loop
//}
//Introduces Break and Continue Code
//See: https://github.com/QEHS-Websites/JavaScript-Sandbox/tree/master/Control%20Flow#break-and-continue-key-words-and-loop-concepts










//Using falsy: preferences
/*let userColor = 'red'; //User not defined yet
let defaultColor = 'blue'
let currentColor = userColor || defaultColor;
console.log(currentColor); //returns 'blue'*/


let points = 110;
let type = points > 100 ? 'gold' : 'silver'; //points > 100 returns
console.log(type); //returns "silver" in console since false
