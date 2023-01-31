let myString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 1) 1) Show(console.log) myString length.
console.log(myString.length);

// 2) Use a for loop and show(console.log) each letter.
for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

// 3) Replace the letter "BCDE" with "w-W-w".(search)
let results = myString.replace(/BCDE/, "w-W-w"); // the method ".replace()" is to take something out of the string and replace with a new element
console.log(results);

// 4) lowercase myString.
let text = myString.toLowerCase();
console.log(text);

// 5) Show(console.log) the letters from index 3 to index 7.
let resLetters = myString.slice(3,7)
console.log(resLetters)

// 6) convert the updated string to an array (search for the method)
let resultsLetters = resLetters.split("") // the method ".split()" takes the String and coverts it to an Array.
console.log(resultsLetters)

// 7) search for charCodeAt() method and explain in one line what does this function do?(add examples)

// charCodeAt() method is used to find out the Unicode value of a character at the specific index in a String.

let favDrink = "Fanta"
let uniCode = favDrink.charCodeAt(4)
console.log(uniCode)
// so the index of 4 in the word fanta which is "a" by using the method ".charCodeAt()" it will return the unicode value which is 97 

// 8) search for a substring and explain in one line what does this function do? (add examples)

// is an inbuilt function in JavaScript that is used to extract a part of the string. 

const myName = "Joshua Ano"
console.log(myName.substring(0, 6)) // the method ".substring()" takes a part of the string when you choose the index 
console.log(myName.substring(7, 10))