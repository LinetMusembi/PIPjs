// Given an array of strings, use a function to reverse all the elements in the string in ascending order 
// and the specific elements in descending order

function sortArr(arr){

}

// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns the sum of all people who are less than 18 years.


const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

function sumAge(age) {
    let sum = 0;
    for (let i = 0; i < age.length; i++) {
      if (age[i].age < 18) {
        sum += age[i].age;
      }
    }
    return sum;
  }
  console.log(sumAge(age));

// Using JS functions and an array of numbers, return positive if an element within the array is positive,
//  negative if an element is negative, else zero
function checkNum(nums) {
    let positive = 0;
    for (let i = 0; i < arr.length; i++) {
      if (nums[i] > 0) {
        positive = "positive";
        break;
      } else if (nums[i] < 0) {
        positive = "negative";
        break;
      }
    }
    return positive;
  }
  let nums= [1, 2, 3, 4, 5];
  console.log(checkNum(nums));

// Given an array of objects, where each object represents an employee with an id, name, and salary property,
//  write a function that returns a new array of employee objects sorted by their salary in ascending order.


