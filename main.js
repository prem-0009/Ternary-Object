//tenary-object
console.clear();
//1.
const person = [{ name: "Jill" }, { name: "" }, { name: "Bob" }];
//create a function 'greeting' that maps through the array.
// Use a ternary.
// If there is a name it should say 'Hello <name>' otherwise it should say,
// 'Hello Stranger'.
const oneGreeting = function (arr) {
  return arr.map((item, i, arr) => {
    return item.name ? `Hello ${item.name}` : `Hello Stranger`;
  });
};
console.log("one:\n", oneGreeting(person), "\n\n");

//2.
///Create a function that uses ternary to decide whether the person can drive
// If they are below 15 then log 'cannot drive', if they are 15 then log 'can drive with a parent', if they are 16 or above then 'yes they can drive'
const twoCanDrive = (age) => {
  return age < 15
    ? "cannot drive"
    : age === 15
    ? "can drive with parent"
    : "yes they can drive";
};

console.log("two: \n", twoCanDrive(16), "\n\n");

//3.
// create a variable speedMessage that has a value resulting from a ternary
let speedMessage = (speed) => {
  // if the speed equals 70 it should say '70 is the perfect speed'
  let allowableSpeed = "a decent speed";
  return speed >= 90
    ? `Are you trying to get us killed`
    : speed < 50
    ? `Faster please`
    : speed < 10
    ? "You should not drive"
    : // : speed >= allowableSpeed[0] && speed <= allowableSpeed[allowableSpeed.length - 1]  ? `${speed} is decent speed`
      `${speed} is ${allowableSpeed}`;
  // if the speed is greater than or equal to 90 it should say 'Are you trying to get us killed'
  // if the speed is less than 50 it should have the value 'Faster please'
  // if speed is less than 10 it should say you should not drive
  // create a variable allowableSpeed that sets a speed based on the range of numbers that are left.
  //so...if allowableSpeed is set to a number in that range your default output should be `<speed> is a decent speed`
  // ---
};

console.log("three\n", speedMessage(77), "\n\n");
//4.
// map through an array and if the value is greater than 50 it goes in the arr1
//if the array is less than 50 it goes in arr2
// if the value is a string arr3
//floating point numbers should only have 2 decimal places with the exact numbers not rounded
//use ternary
// use an array method BUT do not return a data structure when you iterate through your items.
// OUTPUT:
//[ 445, 4555 ][ 22, 33.99, 1, 44.98 ] [ 'peaches', 'apple' ]
let arr = [
  "peaches",
  444.7,
  22,
  undefined,
  33.99999,
  null,
  1,
  "apple",
  4555,
  undefined,
  NaN,
  44.98999,
];

let arr1 = [];
let arr2 = [];
let arr3 = [];
const four = arr.map((item) =>
  item > 50
    ? arr1.push(Math.round(item))
    : item < 50 && typeof item === "number"
    ? arr2.push(Math.trunc(item * 100) / 100)
    : typeof item === "string"
    ? arr3.push(item)
    : "hello"
);

console.log("four: \n", arr1, arr2, arr3, "\n\n");

// Object Methods:
5; //Use object methods to solve problem
// Write a method that doubles the price of each item in the prices object and place those values in a new object called priceDoubler
let prices = {
  cigarettes: 5.99,
  coke: { lg: 2.99, sm: 1.99 },
  chips: 2.79,
};

// console.log(typeof prices)

const priceEntries = Object.entries(prices).map((item, i, arr) => {
  // console.log(item)

  if (typeof item[1] === "number") {
    item[1] = item[1] * 2;
    return item;
  }

  if (typeof item[1] === "object") {
    let hi = {};

    Object.entries(item[1]).map((element, i, newArr) => {
      element[1] *= 2;
      hi[element[0]] = element[1]; //creating an object is the goal.
      return; //doesn't matter the outcome
    });
    // console.log({[item[0]]:hi})
    console.log([item[0], hi]);
    return [item[0], hi]; //returning an array with an obj inside
  }
  //hard coding
  // if (typeof item[1] === "object") {
  //   item[1].lg *= 2;
  //   item[1].sm *= 2;
  //   return item;
  //   }
});
// console.log("\nasd;f\n", priceEntries);

const newObj = Object.fromEntries(priceEntries);
console.log("\n\nfive:\n", newObj);
