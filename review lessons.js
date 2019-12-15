// // var shapes = ['square', 'rectangle', 'circle', 'triangle'];
// //
// // // loop through the array and log the values
// // shapes.forEach(function(shape) {
// //     console.log('Here is a lovely shape: ' + shape + '.');
// // });
// // // //
// // // //
// // //
// // // // The forEach method on an array takes another function as a parameter and doesn't have a return value. The function passed to forEach takes in up to 3 parameters that will provide access to the array element, the corresponding index, and the array itself. We can refer to the function passed to .forEach as a callback function. The callback function will be called for every item in the array.
// // //
// // for (i = 0; i < shapes.length; i++){
// //     console.log("the shapes at index " + i + " " + shapes[i])
// // };
// //
//
// // (function() {
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an object with firstName and lastName properties that are strings
//      * with your first and last name. Store this object in a variable named
//      * `person`.
//      *
//      * Example:
//      *  > console.log(person.firstName) // "Rick"
//      *  > console.log(person.lastName) // "Sanchez"
//      */
//     /**
//      * TODO:
//      * Add a sayHello method to the person object that returns a greeting using
//      * the firstName and lastName properties.
//      * console.log the returned message to check your work
//      *
//      * Example
//      * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
//      */
//
//
//     // var person ={
//     //     firstName: "Ruben",
//     //     lastName: "Montanez",
//     //     sayHello:function(){
//     //     return "Hello from " + this.firstName + " " + this.lastName + "!"
//     //     }
//     // };
//     // console.log(person.firstName);
//     // console.log(person.lastName);
//     // console.log(person.sayHello());
//     //
//     //
//     //
//     //
//     //
//     //
//
//
//     /** TODO:
//      * HEB has an offer for the shoppers that buy products amounting to
//      * more than $200. If a shopper spends more than $200, they get a 12%
//      * discount. Write a JS program, using conditionals, that logs to the
//      * browser, how much Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      */
//
//     // var shoppers = [
//     //     {name: 'Cameron', amount: 180},
//     //     {name: 'Ryan', amount: 250},
//     //     {name: 'George', amount: 320}
//     // ];
//     //
//     // shoppers.forEach(function (shopper) {
//     //     if(shopper.amount > 200){
//     //         var discount = shopper.amount * .12;
//     //         console.log(shopper.name + " spent " + shopper.amount + " gets a 12% discount and the total is " + (shopper.amount - discount))
//     //     } else if(shopper.amount < 200){
//     //         console. log(shopper.name + " didnt spend more than 200, gets no discount");
//     //     }
//     // });
//
//     /** TODO:
//      * Create an array of objects that represent books and store it in a
//      * variable named `books`. Each object should have a title and an author
//      * property. The author property should be an object with properties
//      * `firstName` and `lastName`. Be creative and add at least 5 books to the
//      * array
//      *
//      *
//      *
//      * Example:
//      * > console.log(books[0].title) // "The Salmon of Doubt"
//      * > console.log(books[0].author.firstName) // "Douglas"
//      * > console.log(books[0].author.lastName) // "Adams"
//      */
//
//     var books = [
//         {
//             title: "The Power of Habit",
//             author: {
//                 firstName: "Charles",
//                 lastName: "Duhigg"
//             }
//         },
//         {
//             title: "UnF*ck Yourself",
//             author: {
//                 firstName: "Gary",
//                 lastName: "Bishop"
//             }
//         },
//         {
//             title: "The subtle art of not giving a f*uck",
//             author:{
//                 firstName: "Mark",
//                 lastName: "Manson"
//             }
//         },
//         {
//             title: "The Alchemist",
//             author:{
//                 firstName: "Paulo",
//                 lastName: "Coelho"
//             }
//         },
//         {
//             title: "The Four Agreements",
//             author:{
//                 firstName: "Don Miguel",
//                 lastName: "Ruiz"
//             }
//         }
//     ];
//
//
//
//     /**
//      * TODO:
//      * Loop through the books array and output the following information about
//      * each book:
//      * - the book number (use the index of the book in the array)
//      * - the book title
//      * - author's full name (first name + last name)
//      *
//      * Example Console Output:
//      *
//      *      Book # 1
//      *      Title: The Salmon of Doubt
//      *      Author: Douglas Adams
//      *      ---
//      *      Book # 2
//      *      Title: Walkaway
//      *      Author: Cory Doctorow
//      *      ---
//      *      Book # 3
//      *      Title: A Brief History of Time
//      *      Author: Stephen Hawking
//      *      ---
//      *      ...
//      */
//
//     /**
//      * Bonus:
//      * - Create a function named `createBook` that accepts a title and author
//      *   name and returns a book object with the properties described
//      *   previously. Refactor your code that creates the books array to instead
//      *   use your function.
//      * - Create a function named `showBookInfo` that accepts a book object and
//      *   outputs the information described above. Refactor your loop to use your
//      *   `showBookInfo` function.
//      */
//     function createBook(title,first, last) {
//         var book = {};
//         book.title = title;
//         book.author = {
//             firstName: first,
//             lastName: last
//         };
//         return book;
//     }
// books.push(createBook());
//
// // });

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
// console.log(student.name + "," +  student.sclass+ "," + student.rollno);

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
// };
// console.log(Object.getOwnPropertyNames(student).join());
// delete student.rollno;
// console.log(Object.getOwnPropertyNames(student).join());

// var i = 5;
//
// while (i < 65537){
//     console.log(i);
//     i = i* 2;
// }


//
// for(var i = 100; i >= 5; i = i - 5){
// console.log(i);
// }

// do not worry about the details of this line
// just know that it generates a random number between 1 and 100
// var random = Math.floor((Math.random()*50)+1);
//
// console.log('Random odd number to skip is: ' + random);
//
// for (var i = 1; i < 50; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i == random){
//         console.log("yikes skip the number: " + i);
//     }else {
//
//         console.log("Here is an odd number " + i);
//     }
// }

"use strict";

/*TODO Problem 1 - 'Sum Array' from Code Wars
Write a method named sum that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Examples:
numbers = [1, 5.2, 4, 0, -1];
9.2
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.*/

function sum(numbers) {


}


// console.log(sum([1, 5.2, 4, 0, -1])); // outputs 9.2
// console.log(sum([2, 3, 4, 5, 6])); // outputs 20
// console.log(sum([10.5, 50.3, -100, 77.7, 230])); // output 268.5

/*TODO Problem 2 - 'Remove String Spaces' from Code Wars
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {

}


// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // output '8j8mBliB8gimjB8B8jlB'
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // output '88Bifk8hB8BB8BBBB888chl8BhBfd'
// console.log(noSpace('8aaaaa dddd r     ')); // output '8aaaaaddddr'

/*TODO Problem 3 - 'Numbers to Letters' on Code Wars
Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

function switcher(x) {

}

// console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // outputs 'codewars'
// console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); // outputs 'btswmdsbd kkw'
// console.log(switcher(['4', '24'])); // outputs 'wc'


/* TODO Problem 4 - 'Convenience Store' on Edabit
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
changeEnough([10, 0, 0, 50], 3.85) ➞ false
changeEnough([1, 0, 5, 219], 19.99) ➞ false
Notes
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01*/

function changeEnough(change, amountDue) {

}

/*console.log(changeEnough([2, 100, 0, 0], 14.11)); // outputs false
console.log(changeEnough([0, 0, 20, 5], 0.75)); // outputs true
console.log(changeEnough([30, 40, 20, 5], 12.55)); // outputs true
console.log(changeEnough([10, 0, 0, 50], 3.85)); // outputs false
console.log(changeEnough([1, 0, 5, 219], 19.99)); // outputs false*/


/*TODO Problem 5 - 'Volume of a Box' from Edabit
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
Notes
Don't forget to return the result.
Remember that the values are in an object.*/

function volumeOfBox(sizes) {

}


/*
console.log(volumeOfBox({width: 2, length: 5, height: 1})); // outputs 10
console.log(volumeOfBox({width: 4, length: 2, height: 2})); // outputs 16
console.log(volumeOfBox({width: 2, length: 3, height: 5})); // outputs 30*/


/*TODO Problem 6 - 'Return the Objects Keys and Values' from Edabit
Create a function that takes an object and returns the keys and values as separate arrays.

Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]*/

function keysAndValues(obj) {

}


/*
console.log(keysAndValues({a: 1, b: 2, c: 3})); // outputs [["a", "b", "c"], [1, 2, 3]]
console.log(keysAndValues({a: "Apple", b: "Microsoft", c: "Google"})); // outputs [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
console.log(keysAndValues({key1: true, key2: false, key3: undefined})); // outputs [["key1", "key2", "key3"], [true, false, undefined]]*/

/*TODO Problem 7 - 'Who's The Oldest?' from Edabit
Given an object containing the names and ages of a group of people, return the name of the oldest person.

Examples
oldest({
  Emma: 71,
  Jack: 45,
  Amy: 15,
  Ben: 29
}) ➞ "Emma"

oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
}) ➞ "Sam"
Notes
All ages will be different.*/

let oldest = function (people) {

};

/*
console.log(oldest({
    Emma: 71,
    Jack: 45,
    Amy: 15,
    Ben: 29
})); // outputs "Emma"

console.log(oldest({
    Max: 9,
    Josh: 13,
    Sam: 48,
    Anne: 33
})); // outputs "Sam"*/


/*TODO Problem 8 - 'Longest Streak' from Edabit
Create a function that takes an array of date objects and return the "longest streak" (i.e. number of consecutive days in a row).

Example
longestStreak([
  {
    "date": "2019-09-18"
  },
  {
    "date": "2019-09-19"
  },
  {
    "date": "2019-09-20"
  },
  {
    "date": "2019-09-26"
  },
  {
    "date": "2019-09-27"
  },
  {
    "date": "2019-09-30"
  }
]) ➞ 3*/

function longestStreak(arr) {

}

/*

console.log(longestStreak([
    {
        "date": "2019-09-18"
    },
    {
        "date": "2019-09-19"
    },
    {
        "date": "2019-09-20"
    },
    {
        "date": "2019-09-26"
    },
    {
        "date": "2019-09-27"
    },
    {
        "date": "2019-09-30"
    }
])); // outputs 3

console.log(longestStreak([])); // outputs 0*/
