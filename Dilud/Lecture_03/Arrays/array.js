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

// find = returns the value of the first element in the array that satisfies the provided testing function

function isLongerThan6(currentValue) {
    return currentValue.length == 6;
}

fruits = ["Apple", "Banana", "Mango","Orange","Strawberry"];
let found = fruits.find(isLongerThan6);
console.log("First element with length 6: " + found);
console.log(" ");


//  findIndex = returns the index of the first element in the array that satisfies the provided testing function

function isLongerThan6Index(currentValue) {
    return currentValue.length == 6;
}
let fruits1 = ["Apple", "Banana", "Mango","Orange","Strawberry"];
let foundIndex = fruits1.find(isLongerThan6Index);
console.log("Index of first element with length 6: " + foundIndex);
console.log(" ");

// forEach = executes a provided function once for each array element
function printFruit(currentValue) {
    console.log(currentValue);
}
fruits.forEach(printFruit);
console.log(" ");

// indexOf = returns the first index at which a given element can be found in the array, or -1 if it is not present
let index = fruits.indexOf("Mango");
console.log("Index of Mango: " + index);
console.log(" ");

// isArray = checks if the given value is an array
let array =[1,2,3,4,5,6];
console.log("Is array an array? " + Array.isArray(array));
console.log(" ");

// join = joins all elements of an array into a string
console.log("Turn all the array elements to String: "+ array.join("*"));
console.log(" ");


// reduce = applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
function sum(total, currentValue) {
    return total + currentValue;
}
console.log("Sum of array: " + array.reduce(sum));
console.log("Sum of array: " + array.reduce(sum,10)); // with initial value
console.log("Sum of array (from right to left): " + array.reduceRight(sum)); // from right to left
console.log("Sum of array (from right to left with initial value): " + array.reduceRight(sum,10)); // from right to left with initial value
console.log("Array in reverse order: " + array.reverse());
console.log(" ");

// slice = returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

let array1 = ["Apple", "Banana", "Mango","Orange","Strawberry"];

console.log("Sliced Array (from index 1 to 3): " + array1.slice(1,4));
console.log("Sliced Array (from index 2 to end): " + array1.slice(2));
console.log("Sliced Array (from index 2 to 4): " + array1.slice(2,4));
console.log(" ");

console.log("Removed the first element: " + array1.shift());
console.log("Removed the last element: " + array1.pop());
console.log("Array after removing first and last element: " + array1);
console.log(" ");

// sort = sorts the elements of an array in place and returns the sorted array
let numbers = [5, 2, 9, 1, 5, 6];
console.log("Sorted Array: " + numbers.sort());

var months = ["jan","march","april","june","february"];
console.log("Sorted Months: " + months.sort());
console.log("");
months.splice(1,0,"february"); // insert at index 1
console.log("Months after adding february: " + months);
months.splice(4,1,"May"); // replace one element at index 4
console.log("Months after removing june: " + months);
console.log(" ");

// unshift = adds one or more elements to the beginning of an array and returns the new length of the array

let arr = [1, 2, 3];
console.log("Original Array: " + arr);
arr.unshift(5,6);// adds 5 and 6 to the beginning of the array
console.log("Array after unshift: " + arr);
console.log(" ");

// valueOf = returns an array of a given object's own enumerable property values
let obj = ["Banana", "Orange","Apple", "Mango"];
console.log("Values of the object: " + obj.valueOf()); // returns the array itself
