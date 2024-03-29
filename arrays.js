// Given an array of strings, use a function to reverse all the elements in the string in ascending order 
// and the specific elements in descending order

function sortArr(arr){
    return arr.sort().reverse("").split("")

}
console.log(sortArr(arr["learning"]))

// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns the sum of all people who are less than 18 years.


const num = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];

function sumAge(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i].age < 18) {
        sum += num[i].age;
      }
    }
    return sum;
  }
  console.log(sumAge(num));

// Using JS functions and an array of numbers, return positive if an element within the array is positive,
//  negative if an element is negative, else zero

function checkNum(arr) {
   if(arr>=0){
    return "positive"
   }
   else if(arr<0){
    return "negative"
   }
   else{
    return "zero"
   }


}
arr = [-7]
console.log(checkNum(arr))


// Given an array of objects, where each object represents an employee with an id, name, and salary property,
//  write a function that returns a new array of employee objects sorted by their salary in ascending order.


