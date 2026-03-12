// concat = combine two or more arrays
let fruites = ["Apple", "Banana", "Cherry"];
let vegetables = ["Carrot", "Broccoli", "Spinach"];

let food = fruites.concat(vegetables);
console.log("Concated Array: " + food);
console.log(" ");

// every = check if all elements in an array pass a test

function containFiveLetters(currentValue) {
    return currentValue.length === 5;
}
let fruit1 = ["Apple", "Mango", "Grapes"];
let fruit2 = ["Apple", "Peach"]; // all elements in this array have 5 letters

console.log("Every element in fruit1 has 5 letters: " + fruit1.every(containFiveLetters));
console.log("Every element in fruit2 has 5 letters: " + fruit2.every(containFiveLetters));
console.log(" ");

// fill = fill all the elements of an array with a static value

let fruits = ["Apple", "Banana", "Mango","Orange"];
fruits.fill("Kiwi",2,4);

console.log("Filled Array: " + fruits);
console.log(" ");

// filter = creates a new array with all elements that pass the test implemented by the provided function
function isLongerThan5(currentValue) {
    return currentValue.length == 5;
}

fruits = ["Apple", "Banana", "Mango","Orange","Strawberry"];
let result = fruits.filter(isLongerThan5);
console.log("Filtered Array: " + result);
console.log(" ");