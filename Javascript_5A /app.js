// 1) Create an array and name it fruits, add some fruits name as strings. console.log

// fruits = ['apples', 'banana', 'grapes', 'oranges', 'mango', 'pear']
// console.log(fruits)

// 2) Create an Object

const myLife = {
  myName: "Joshua",
  age: "25",
  address: {
    houseNumber: 352,
    streetName: "Dowdeswell Close",
  },
  familyNames: ["Sarah", "Natasha", "Juanita"],
};

console.log(myLife["myName"]);
console.log(myLife["age"]);
console.log(myLife.address.houseNumber);
console.log(myLife["address"]["streetName"]);
console.log(myLife.familyNames[2]);

// 3) Create a for loop and show numbers between 20 and 30

for (let i = 21; i < 30; i++) {
  console.log(i);
}

console.log("==========================");

// 4) Create a for loop and count down from number 15
for (let j = 15; j >= 0; j--) {
  console.log(j);
}

console.log("===========================");

// 5) Create a for loop and go through all of your fruits array and show them in the browser

let fruits = ["apples", "banana", "grapes", "oranges", "mango", "pear"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6) Create an array of 5 objects (car object), each object should have the same keys

let myCars = [
  {
    name: "Audi",
    model: "RSQ8",
    colour: "Black",
    yearReleased: "2022",
    companyname: "Roadstar Automobile",
  },
  {
    name: "Mercedes-Ben",
    model: "A Class",
    colour: "White",
    yearReleased: "2022",
    companyname: "Motorpoint",
  },
  {
    name: "Tesla",
    model: "Model 3",
    colour: "Black",
    yearReleased: "2022",
    companyname: "Tesla",
  },
  {
    name: "Range Rover",
    model: "Evoque",
    colour: "Grey",
    yearReleased: "2022",
    companyname: "Roadstar Automobile",
  },
  {
    name: "BMW",
    model: "1 Series",
    colour: "Brooklyn Grey Metallic",
    yearReleased: "2022",
    companyname: "Barons Stansted",
  },
];

console.log('=============================')

// 7) Create a for loop and just show one key of each object in the previous example

for(let i=0; i < myCars.length; i++){
    console.log(myCars[i]["model"])
  }


console.log('=================================')  
//   8) Create if/else if/else and check a condition

let weather = 'rain'
if(weather === 'rain'){
  console.log('Take your umbrella')
}else{
  console.log('Wear your sunglasses')
}

console.log('====================================')



// 9) create a function which will get the array of objects you created in question 6
// found this bit confusing 


function myArrCars(count){
      for(let i = 0; i < myArrCars.length; i++){
        if(myArrCars === 'BMW'){
          console.log(myArrCars[i]["model"])
        }else{
          console.log(myArrCars[i])
        }
      }
      return count;
}



myArrCars([
  {
    name: "Audi",
    model: "RSQ8",
    colour: "Black",
    yearReleased: "2022",
    companyname: "Roadstar Automobile",
  },
  {
    name: "Mercedes-Ben",
    model: "A Class",
    colour: "White",
    yearReleased: "2022",
    companyname: "Motorpoint",
  },
  {
    name: "Tesla",
    model: "Model 3",
    colour: "Black",
    yearReleased: "2022",
    companyname: "Tesla",
  },
  {
    name: "Range Rover",
    model: "Evoque",
    colour: "Grey",
    yearReleased: "2022",
    companyname: "Roadstar Automobile",
  },
  {
    name: "BMW",
    model: "1 Series",
    colour: "Brooklyn Grey Metallic",
    yearReleased: "2022",
    companyname: "Barons Stansted",
  },
])