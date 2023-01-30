// 1) Create an array of strings and sort that array descending. (search about desceding)
const premTopFour = [
  "Arsenal",
  "Manchester City",
  "Newcastle Utd",
  "Manchester Utd",
];
const descArr = premTopFour.sort();
console.log(descArr);
// Reference about descending https://bobbyhadz.com/blog/javascript-sort-array-of-strings-descending
console.log("=================================================================================")
// 2) Create an array of objects. Each object should have a name and price key( example: { name: "shampoo", price: 12})  and sort this array of objects by price values(ascending).

const trainers = [
  { brandName: "Nike", shoeName: "Air-Force 1", price: 109.95 },
  { brandName: "Adidas", shoeName: "Yeezy 350 v2", price: 220 },
  { brandName: "Nike", shoeName: "Air Jordan 4", price: 180 },
  { brandName: "Adidas", shoeName: "Yeezy slides", price: 50 },
  { brandName: "Nike", shoeName: "Panda Dunks Low", price: 90 },
];

function byPrice(a,b){
    return parseInt(a.price) - parseInt(b.price)
}
let ascendArr = trainers.sort()
console.log(trainers.sort(byPrice))
console.log("=================================================================================")
// 3) Create an array and revert its value. does the actual array change?
let numbers = [10,20,30,40,50,60,70,80]
console.log(numbers)
numbers.reverse()
console.log(numbers)
// yes the actual array changes it is now in reverse order 
// To reverse the order in an array we must use the ".reverse()"
console.log("=================================================================================")
// 4) Create an array of strings and join its values by (&) separator
let juices = ["Apple", "Oranges","Pineapple","Coconut","Cranberry"]
let resultOfJucies = juices.join("&")
console.log(resultOfJucies)
// By default the string is seporated by "," but we can change this by calling the ".join()" and assigning which separator we choose "/" "&" "-" "+" "_"
console.log("=================================================================================")
// 5) Create an array of strings and join its values without any separator(you should not see any separator in the results) 
let biscuits = ["Dark chocolate", "Milk chocolate","Jam Dogers","Nature Valley"]
let resOfBis = biscuits.join("")
console.log(resOfBis)
// By putting .join("") with nothing between it will mean there is nothing separating
console.log("=================================================================================")
// 6) Create an array of 10 numbers and create a new array from this array which has elements from index 4 to index 8.
let numbers2 = [2,4,6,8,10,12,14,16,18,20]
console.log(numbers2)
let resOfNum2 = numbers2.slice(4,9)
console.log(resOfNum2)
// The method ".slice()" allows you to take apart of the Array from the index you select for example you only want the numbers 6,8,10 .slice(2,5) 
console.log("=================================================================================")
// 7) Create 2 arrays and merge them into one array(order is not important)
let animals = ["Elephant","Lion","Tiger", "Rhino", "Leopard"]
console.log(animals)
let pets = ["Dog","Cat","Gold fish","Hamster","Parrot"]
console.log(pets)
let resOfAnimals = animals.concat(pets)
console.log(resOfAnimals)
// To add Arrays together you must use the method ".concat()" you are able to merge Arrays together
console.log("=================================================================================")
// 8) Create a fruit array and follow the below instructions for changing this Array:

// 8.1) Add 3 new fruits to the end of this array and console.log the updated fruits array.
let fruits = ["Strawberry","Kiwi","Banana","Orange","Apple"]
fruits.push("Pineapple","Grapefruit","Blueberries")
console.log(fruits)
// To add 3 new elements to the Array we must call the method ".push()" and this will add to the array without having to touch the original array that we created
console.log("=================================================================================")
// 8.2) Add 2 new fruits to the first of this array and console.log the updated fruits array.
fruits.unshift("Grapes","Mango")
console.log(fruits)
// The method ".unshift()" will add elements to the start of the Array
console.log("=================================================================================")
// 8.3) Remove the last fruit from this updated array and console.log the updated array.
fruits.pop()
console.log(fruits)
// The method ".pop()" will remove the last element of the Array
console.log("=================================================================================")
// 8.4) Remove the first fruit from this updated array and console.log the updated array.
fruits.shift()
console.log(fruits)
// The method ".shift()" removes the first element within the Array
console.log("=================================================================================")
// 8.5) sort the updated fruit array alphabetically
fruits.sort()
console.log(fruits)
// The method ".sort()" by default will sort alphabetically
console.log("=================================================================================")
// 8.6) join all of the fruit names and separate them by % separator and save it in a variable name stringFruits.
let stringFruits = fruits.join("%")
console.log(stringFruits)
console.log("=================================================================================")
// 8.7)show "kiwi"  in stringFruits by using slice and console.log
let resFruits = stringFruits.slice(24,28)
console.log(resFruits)
console.log("=================================================================================")
// 9) create an array of numbers and use the map function to add 6 to each element.
function addingSix(num){
    return num + 6;
}
let arryNum = [3,6,9,12,15,18,21,24,27,30,33,36]
console.log(arryNum)
let arryNumRes = arryNum.map(addingSix)
console.log(arryNumRes)
// We must first create a function and call this function in the ".map()" method 
console.log("=================================================================================")
// 10) create an array of strings and use the map function to add "* " to each string.
function starsymbol(){
    return "*";
}
let takeaways = ["Pizza Hut","Nandos","Kfc","Five Guys", "MacDonalds"]
console.log(takeaways)
let takeawayRes = takeaways.map(starsymbol)
console.log(takeawayRes)
console.log("=================================================================================")
// 11) create an array of strings (brand names, at least 5 names) and find all of the brand names which has "a"
function brandNames(letter){
    if (letter.includes("a")){
        return letter
    }
}
let brandnames = ["Nike","Adidas","New Balance","Under Armour","Puma"]
console.log(brandnames)
let resBrandNames = brandnames.filter(brandNames)
console.log(resBrandNames)