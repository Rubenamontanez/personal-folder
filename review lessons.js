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
var random = Math.floor((Math.random()*50)+1);

console.log('Random odd number to skip is: ' + random);

for (var i = 1; i < 50; i++) {
    if (i %2 == 0) {
        continue;
        // console.log('We have reached the random stopping point: break!');
        // use the break keyword to exit from the while loop

    }
    if (i == random){
        console.log("yikes skip the number: " + i);
    }else {

        console.log("Here is an odd number " + i);
    }
}