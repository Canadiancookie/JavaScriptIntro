//Hello World Function
function greet (firstName, lastName){ //Parameters
  console.log('Hello ' + firstName + ' World ' + lastName);
}

function square (number) {
  return number*number;
}

//firstName, lastName, age, ageAfraid, hair, male, female
let BraydenSakovich = ["Brayden", "Sakovich", 16, null, true, true, false]
let MeganSpence = ["Megan", "Spence", 14, null, true, false, true]

//Calling Functions with arguments
greet (BraydenSakovich[0], BraydenSakovich[1]);
greet (MeganSpence[0], MeganSpence[1]);
greet (square(BraydenSakovich[2]), MeganSpence[2]);
