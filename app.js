// STRINGS

firstVariable = "hello world";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "any string";

console.log(firstVariable); //1

const yourName = "Ariel";
let hello = `Hello, my name is ${yourName}`
console.log(hello);

// BOOLEANS

const a = 4; 
const b = 53; 
const c = 57; 
const d = 16; 
const e = 'Kevin';

console.log(a < b); 
console.log(c > d); 
console.log('Name' == 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false); 
console.log(false && false && false && false && false || true); 
console.log(false === false) 
console.log(e == 'Kevin'); 
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
} 

console.log(moo(animal));

//Driver's Ed
let personAge = 18; // Replace 18 with the actual age value

if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

//LOOPS

//The Basics
for (let i = 0; i <= 10; i++) {
   console.log(i);
 }

 for (let i = 10; i <= 400; i++) {
   console.log(i);
 }
 
 for (let i = 12; i <= 4000; i += 3) {
   console.log(i);
 }
//Get Even
for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
     console.log(i + " <-- is an even number");
   } else {
     console.log(i);
   }
 }
 
//Give Me 5
for (let i = 0; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
     console.log("I found a " + i + ". High five! Three is a crowd");
   } else if (i % 3 === 0) {
     console.log("I found a " + i + ". Three is a crowd");
   } else if (i % 5 === 0) {
     console.log("I found a " + i + ". High five!");
   }
 } 
 
//Savings Account
let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account += i;
}

console.log(bank_account);  // Output: 55

bank_account = 0;

for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}

console.log(bank_account);  // Output: 10100

// ## III. Arrays & Control flow



// ### A. Talk about it:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?

// The elements in an array are typically referred to as "array elements" or simply "elements."

// Arrays do guarantee that the elements will be in a specific order. In most programming languages, arrays are ordered collections of elements where each element is assigned a unique index. The order of elements in the array is preserved, meaning that the elements will be stored and accessed in the same sequence as they were inserted.

// In real life, arrays can be modeled after various collections or arrangements of items. An array can be used to represent a grocery list, where each element of the array represents an item to be purchased. The order of items in the array can correspond to the desired sequence for shopping.


// ### B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["Quote 1", "Quote 2", "Quote 3"];


// ### C. Accessing elements

// Given the following array `const randomThings = [1, 10, "Hello", true]`

// - How do you access the 1st element in the array?

// - Change the value of `"Hello"` to `"World"`

// - Check the value of the array to make sure it updated the array using `console.log()`
const randomThings = [1, 10, "Hello", true];

// Access the 1st element in the array
const firstElement = randomThings[0];
console.log(firstElement);  // Output: 1

// Change the value of "Hello" to "World"
randomThings[2] = "World";

// Check the updated array
console.log(randomThings);


// ### D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// Access the 3rd element of the array
const thirdElement = ourClass[2];
console.log(thirdElement);  // Output: Sardine

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");

// Check the updated array
console.log(ourClass);



// ### E. Mix It Up

// Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: `const myArray = [5, 10, 500, 20]`

// - Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// - Remove the 5from the beginning of the array.
// - Add the string "Bob Marley"to the beginning of the array.
// - Remove the string of your choice from the end of the array.
// - Reverse this array using `Array.prototype.reverse()`. 
// - Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
const myArray = [5, 10, 500, 20];

// Add the string "Aegon" to the end of the array
myArray.push("Aegon");

// Add another string of your choice to the end of the array
myArray.push("Banana");

// Remove the 5 from the beginning of the array
myArray.shift();

// Add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");

// Remove the string of your choice from the end of the array
myArray.pop();

// Reverse the array using Array.prototype.reverse()
myArray.reverse();

console.log(myArray);



// ### F. Biggie Smalls

// Create a variable that contains an integer.

// Write an `if ... else` statement that:

// - `console.log()s` "little number" if the number is entered is less than 100
// - `console.log()s` "big number" if the number is greater than or equal to 100.
let number = 75;

if (number < 100) {
  console.log("little number");
} else {
  console.log("big number");
}



// ### G. Monkey in the Middle

// Write an `if ... else if ... else` statement:

// 1. console.log()little numberif the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".
number = 7;

if (number < 5) {
  console.log("little number");
} else if (number > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}


// ### H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// ```
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// ```
// ```
// {
//   "firstName": "John",
//   "lastName": "Smith",
//   "age": 25
// }
// ```

// `// Thom's closet is more complicated. Check out this nested data structure!!`
// ```
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// ```

// **What's Kristyn wearing today?**

// 1. Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.


// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

// 3. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.

// **In the same way, access one item from Thom's pants array.**

// - Access one item from Thom's accessories array.
// - Log a sentence about what Thom's wearing. 
// *Example:* "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// - Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];
 
 const thomsCloset = [
   [
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],
   [
     "grey jeans",
     "jeans",
     "PJs"
   ],
   [
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];
 
 // What's Kristyn wearing today?
 
 // 1. Access the third item in Kristyn's closet and log a sentence about what she's wearing.
 console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
 
 // 2. Add "raybans" to Kristyn's closet after "yellow knit hat" and modify "yellow knit hat" to "stained knit hat".
 kristynsCloset.splice(5, 0, "raybans");
 kristynsCloset[6] = "stained knit hat";
 
 // 3. Create an outfit for Thom by accessing items from Thom's closet arrays.
 const thomShirt = thomsCloset[0][0];
 const thomPants = thomsCloset[1][1];
 const thomAccessory = thomsCloset[2][2];
 
 // Log a sentence about what Thom is wearing.
 console.log("Thom is looking fierce in a " + thomShirt + ", " + thomPants + ", and " + thomAccessory + "!");
 
 // Modify the name of Thom's PJ pants to "Footie Pajamas".
 thomsCloset[1][2] = "Footie Pajamas";
 


// ## IV. Functions


// ### A. printGreeting

// Do you think you could write a function called `printGreetingwith` a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// ``console.log(printGreeting("Slimer")); `
// `=> Hello there, Slimer!``

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
function printGreeting(name) {
   return "Hello there, " + name + "!";
 }
 
 console.log(printGreeting("Slimer"));
 

// ### B. printCool

// Write a function `printCoolthat` accepts one parameter, `name`, as an argument. The function should print the name and a message saying that that person is cool.

// `console.log(printCool("Captain Reynolds"));`
// `=> "Captain Reynolds is cool";`
function printCool(name) {
   console.log(name + " is cool");
 }
 
 printCool("Captain Reynolds");
 



// ### C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// `console.log(calculateCube(5));`
// `=> 125`
function calculateCube(number) {
   var volume = number ** 3;
   console.log(volume);
 }
 
 calculateCube(5);
 



// ## D. isVowel

// 1. Write a function `isVoweltha`t takes a character (i.e. a string of length 1) and returns `true` if it is a vowel, `false` otherwise. 

// 2. The vowel could be upper or lower case. 

// Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// `console.log(isVowel("a"));`
// `=> true`
function isVowel(character) {
   var lowercaseChar = character.toLowerCase();
   return lowercaseChar === 'a' || lowercaseChar === 'e' || lowercaseChar === 'i' || lowercaseChar === 'o' || lowercaseChar === 'u';
 }
 
 console.log(isVowel("a"));
 console.log(isVowel("E"));
 console.log(isVowel("i"));
 console.log(isVowel("O"));
 console.log(isVowel("u"));
 console.log(isVowel("b"));
 



// ### E. getTwoLengths

// Write a function `getTwoLengthsthat` accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// `console.log(getTwoLengths("Hank", "Hippopopalous"));`
// `=> [4, 13]`
function getTwoLengths(string1, string2) {
   var lengths = [];
   lengths.push(string1.length);
   lengths.push(string2.length);
   return lengths;
 }
 
 console.log(getTwoLengths("Hank", "Hippopopalous"));



// ### F. getMultipleLengths

// Write a function `getMultipleLengthsthat` accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// `console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));`
// `=> [5, 4, 2, 2, 4]`
function getMultipleLengths(strings) {
   var lengths = [];
   for (var i = 0; i < strings.length; i++) {
     lengths.push(strings[i].length);
   }
   return lengths;
 }
 
 console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));



// ### G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
function maxOfThree(num1, num2, num3) {
   var max = num1;
   if (num2 > max) {
     max = num2;
   }
   if (num3 > max) {
     max = num3;
    }
    return max;
 }
 console.log(maxOfThree(6, 9, 1));

// ### H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
function printLongestWord(words) {
   var longestWord = words[0];
 
   for (var i = 1; i < words.length; i++) {
     if (words[i].length > longestWord.length) {
       longestWord = words[i];
     }
   }
 
   return longestWord;
 }
 
 console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
 



// ## Objects

// Let's set up an object data structure. 

// Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// ### A. Make a user object

// - Create an object called user.

// Write in to the object the **key-value** pairs for name, email, age, and purchased. Set the value of purchased to an empty array `[]`. Set the other values to whatever you would like.
var user = {
   name: "John Doe",
   email: "johndoe@example.com",
   age: 30,
   purchased: []
 };


// ### B. Update the user

// - Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

// - Our user has had a birthday! Without changing the original user object, increment the agevalue using the postfix operator. Hint: age++
// Update the email value
user.email = "johndoe_new@example.com";

// Increment the age value
user.age++;


// ### C. Adding keys and values

// You have decided to add your user's location to the data that you want to collect.

// - Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).
user.location = "New York";

console.log(user);


// ### D. Shopaholic!

// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchasedarray`.

// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the `purchasedarray`.

// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchasedarray`.
// Console.log just the "Merino jodhpurs" from the `purchasedarray`.
// 1. Add "carbohydrates" to the purchased array
user.purchased.push("carbohydrates");

// 2. Add "peace of mind" to the purchased array
user.purchased.push("peace of mind");

// 3. Add "Merino jodhpurs" to the purchased array
user.purchased.push("Merino jodhpurs");

// Console.log "Merino jodhpurs" from the purchased array
console.log(user.purchased[2]);



// ### E. Object-within-object

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// ```
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// ```

// When we console.log user, we would see the friend object added to our user object.

// 1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// 2. Console.log just the friend's name
// 3. Console.log just the friend's location
// 4. CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchasedarray`.
// 5. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's `purchasedarray`.
// 6. Console.log just "A latte" from the friend's `purchasedarray`.
// 1. Write a friend object into your user object
user.friend = {
   name: "Grace Hopper",
   age: 85,
   location: "New York",
   purchased: []
 };
 
 // 2. Console.log just the friend's name
 console.log(user.friend.name);
 
 // 3. Console.log just the friend's location
 console.log(user.friend.location);
 
 // 4. Change the friend's age to 55
 user.friend.age = 55;
 
 // 5. Add "The One Ring" to the friend's purchased array
 user.friend.purchased.push("The One Ring");
 
 // 6. Add "A latte" to the friend's purchased array
 user.friend.purchased.push("A latte");
 
 // Console.log just "A latte" from the friend's purchased array
 console.log(user.friend.purchased[1]);


// ### F. Loops

// - Write a for loop that iterates over the User's `purchasedarray` (NOT the friend's purchased array), and prints each element to the console.
// - Write a for loop that iterates over the Friend's `purchasedarray`, and prints each element to the console.
// Iterate over the User's purchased array
console.log("User's Purchased Items:");
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

// Iterate over the Friend's purchased array
console.log("Friend's Purchased Items:");
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}



// ### G. Functions can operate on objects

// Write a single function updateUserthat takes no parameters. When the function is run, it should:

// 1. it should increment the user's age by 1
// 2. make the user's name uppercase
// 3. The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
// Iterate over the User's purchased array
// Function to update user

function updateUser() {
  user.age++; // Increment age by 1
  user.name = user.name.toUpperCase(); // Make name uppercase
}

// Function to modify object and perform the same tasks
function oldAndLoud(person) {
  person.age++; // Increment age by 1
  person.name = person.name.toUpperCase(); // Make name uppercase
}

// Calling the updateUser function
updateUser();

// Calling the oldAndLoud function with user as the argument
oldAndLoud(user);

// Iterate over the User's purchased array
console.log("User's Purchased Items:");
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

