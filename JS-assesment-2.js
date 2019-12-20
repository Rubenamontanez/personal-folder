"use strict";
console.log("asssesment");

// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
    function filterNumbers(arr) {
            var numb = [];
        for (var i = 0; i<arr.length; i++){
          if (typeof arr[i] === "number"){
               numb.push(arr[i]);
          }
        }
        return numb.sort(function (a,b) {
            return a-b;
        });
    }
    console.log(filterNumbers(["fred", true, 5, 3]));
//
// // 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.
//
//
//     //Example Input:
//
       var dogList = [
        {
             name: "Chompers",
             breed: "Pug",
             age: 7
         },
         {
             name: "Freddy",
             breed: "Lab",
             age: 4
         },
         {
             name: "Mr. Pig",
             breed: "Mastif",
             age: 10
         }
     ];

// function getOlder(dogArray){
//     var bucket = [];
//     for(var i = 0; i < dogArray.length; i++){
//         bucket.push(dogArray[i].age + 1);
//     }
//     return bucket;
// }
// console.log(getOlder(dogs));
//
function getOlder(dogs) {
    dogs.forEach(function (dog) {
           dog.age += 1;

    });
    return dogs;
}
console.log(getOlder(dogList));
//
// // ```js
//     // //Example output
//     //  [
//     //     {
//     //          name: "Chompers",
//     //          breed: "Pug",
//     //          age: 8
//     //      },
//     //      {
//     //          name: "Freddy",
//     //          breed: "Lab",
//     //          age: 5
//     //      },
//     //      {
//     //          name: "Mr. Pig",
//     //          breed: "Mastif",
//     //          age: 11
//     //      }
//     //  ];
//
// // 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false
//
            // Example output:
             var carList = [
                 {
                     make: 'Volvo',
                     color: 'red',
                     year: 1996,
                     isDirty: true // changed to false
                 },
                 {
                     make: 'Toyota',
                     color: 'black',
                     year: 2004,
                     isDirty: false // stays the same
                 },
                 {
                     make: 'Ford',
                     color: 'white',
                     year: 2007,
                     isDirty: true // changed to false
                 }
             ];

    function WashCars(cars){
    cars.forEach(function(car){
         car.isDirty = false;

    });
    return cars;
}
console.log(WashCars(carList));
//
// // 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
// whenever a count is needed need a var to equal 0
         var userList = [
             {
                 isAdmin: true,
                 email: 'user1@email.com'
             },
             {
                 isAdmin: true,
                 email: 'user2@email.com'
             },
             {
                 isAdmin: false,
                 email: 'user3@email.com'
             }
         ];
// setting up your gonna add number to anything that needs to keep a running track of your total
    function adminList(users){
        var totalAdminCount = 0;
        users.forEach(function (user) {
        if (user.isAdmin){
            totalAdminCount += 1;
        }
        })
        return totalAdminCount
    }
//
// console.log(adminList(userList));
  // Example Output (before refactor): 2

    function adminList(users) {
        var adminEmailbucket = [];

        users.forEach(function (user) {
        if (user.isAdmin){
            adminEmailbucket.push(user.email)
        }
        })
        return adminEmailbucket;
    }

// console.log(adminList(userList));
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//

function adminList(users) {
    var adminBucket = [];

    users.forEach(function (user) {
    if (user.isAdmin){
        adminBucket.push(user)
    }
    })
    return adminBucket;
}

console.log(adminList(userList));

//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
//
//
// // 5. Create a function,  that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
// //
//
        //     Example Input:

         var breadList  = [
             "white",
             "wheat",
             "rhy",
             "white"
         ];

         var fillingList = [
             "pb&j",
             "ham",
             "cheese steak",
             "tuna"
         ];


         function makeSandwichObjects(breads, fillings) {
             var sandWichBucket = [];
             for (var i = 0; i < breads.length; i++) {
                 var sandwichObject = {
                     bread: breads[i],
                     filling: fillings[i],
                 }
                 sandWichBucket.push(sandwichObject);
             }
             return sandWichBucket
         }
console.log(makeSandwichObjects(breadList,fillingList))// example call to the function
//

// TODO Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"

function keepYellow (strings) {
    var yellowBucket = [];
   inputArray.forEach(function (str) {
       if (str === "yellow"){
           yellowBucket.push(str)
       }
   });
    return yellowBucket
}


//the following functions will be useful for solving more complicated functions! These were taken from previous exercises! You will also notice that I use some concepts from es6, although it is not absolutely necessary, it usually results in simpler and/or more eloquent functions.

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.

function isNegative(num) {
    return num < 0;
}

// Write a function named `isTen` that accepts a number and returns a boolean

function isTen(num) {
    return num === 10;
}

// Write a function named `double` that accepts a number and returns the number
// doubled.

function double(num) {
    return (num * 2);
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// write a function named remove3s that accepts and array of numbers and returns an array with all all of the same numbers except for 3
function remove3s(arr) {
    var bucket =[];
    arr.forEach(function (num) {
     if(num !== 3){
            bucket.push(num);
        }
    });
    return bucket
}
console.log(remove3s([1, "2", 3, 4, 3, 3, 3, 3]));

// write a function named sumAll that returns the sum of all numbers in an array
function sumAll(arr) {
    var total = 0;
    for (var i= 0; i<arr.length; i++){
        arr[i] = parseFloat(arr[i]);
        total += arr[i];
    }
    return total /*arr.length;*/
//    arr.length added to get average
}

console.log(sumAll([1, 9, 5]));
// once we have the sum of all numbers in an array we can use it for further math problems.


// write a function named countEvens that accepts an array of nuyms and returns the number of even numbers in the array.
function countsEvens(arr) {
    var evenCount = 0;
    for (var i = 0; i<arr.length; i++){
        if(arr[i] %2 ===0){
            evenCount +=1;
        }
    }
    return evenCount;
}
console.log(countsEvens([1, 1, 2, 2, 2, 2]));

// Write a function named totalSales that accepts an array of employee objects. Each object has a 'name' property and a 'sale' property. Return the total sales
name: 'string';
sales: 34567

function totalSales(arr) {
    var totalSales = 0;
    for (var i = 0; i<arr.length; i++){
        var empSales = parseFloat(arr[i].sales);
        totalSales += empSales;
    }
    return totalSales;
}

//write a function named AsAndBs that accepts a string and returns a count of how many a's and b's is contains
function AsandBs(arr){
    var letterCount = 0;
    var string = arr.toString();
    string = string.toLowerCase();
    for (var i = 0; i<arr.length - 1; i++){
      if (string.charAt(i) ==="a" || string.charAt(i) === "b"){
          letterCount += 1;
          console.log(string);
      }
    return letterCount;
}
}

console.log(AsandBs("banana"));
console.log(AsandBs("abba"));
console.log(AsandBs("cat"));


// Write a function called StringLength that returns the length of a string, if the input is not a string, return false
function StringLength(str){
    return str.length;
}

console.log(StringLength("doggo"));

//write a function that accepts a string and returns an object with the original string, the length of the string, as well as the number of a's and b's
function analyzedWord(str){
    var word = {};
    word.word = str;
    word.numberofLetters = StringLength(str);
    word.numberofAsAndBs = AsandBs(str);
    return word;
}

console.log(analyzedWord("dog"));
console.log(analyzedWord("banana"));


// Write a function thataccepts an array or strings and returns an array of those words analyzed similarly
function analyzeAllWords(arr){

    var analyzedWords = [];

    for (var i = 0; i< arr.length; i ++){
        analyzedWords.push(analyzedWord(arr[i]));
    }
    return analyzedWords
}

console.log(analyzeAllWords(['dog', 'banana', 'mississippi']));