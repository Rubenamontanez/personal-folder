"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
function isNegative(num){
    num =parseFloat(num);
    if(num < 0) {
        return true;
    } else{
        return false;
    }
}

// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false

// Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
function isTen(num){
    return num === 10;
}
// isTen(1) // false
// isTen(10) // true
// isTen('10') // false

// Write a function named double that accepts a number and returns the number doubled.

function double(num){
    num = parseFloat(num)
    return num * 2;
}

// Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
function remove9s(arr){
    var bucket =[];
    arr.forEach(function (num) {
        if(num !== 9){
            bucket.push(num);
        }
    });
    return bucket
}

remove9s([7, 8, 9, 10]) // [7, 8, 10]
remove9s([1, 2, 3])     // [1, 2, 3]
remove9s([9, 9, 9])     // []

// Write a function named average that accepts an array of numbers and returns the average of those numbers.
function average (arr){
    var total = 0;
    for (var i= 0; i<arr.length; i++){
        arr[i] = parseFloat(arr[i]);
        total += arr[i];
    }
    return total/arr.length;

}
average([1, 2, 3]) // 2
average([4, 6, 8, 10, 12]) // 8
average([1, 2]) // 1.5

// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
function countOdds(arr){
    var oddCount = 0;
    for (var i = 0; i<arr.length; i++){
        if(arr[i] %2 !==0){
            oddCount +=1;
        }
    }
    return oddCount;
}

countOdds([1, 2, 3]) // 2
countOdds([4, 6, 8, 10]) // 0
countOdds([1, 2, 1, 1]) // 3

// Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
function convertNameToObject(str){
    var word = {};
    var firstName = str.split(' ').slice(0, -1).join(' ');
    var lastName = str.split(' ').slice(-1).join(' ');
    word.firstName = firstName;
    word.lastName = lastName;

    return word;
}

// console.log(convertNameToObject('Harry Potter')); // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

// Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
function capitalizeName(str){
    var newstring = str.toLowerCase().split(" ");
    var result = newstring.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

capitalizeName('ron weasley') // "Ron Weasley"

// Write a function named capitalizeAllNames that accepts an array of strings where each string is in the format described in the previous problem, and returns an array of strings where each string contains a capitalized named.
function capitalizeAllNames(arr){
    var capitalizedNames = [];
    for (var i = 0; i< arr.length; i ++){
        capitalizedNames.push(capitalizeName(arr[i]));
    }
    return capitalizedNames;
}

capitalizeAllNames(['ron weasley', 'harry potter', 'hermione granger'])
    ['Ron Weasley', 'Harry Potter', 'Hermione Granger']

// Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
function countVowels(string){
    if(string.length == 0) { return 0; }
    let count = 0;
    for(let i = 0; i < string.length; i++) {
        let v = string[i];
        if(v == "a" || v == "e" || v == "i" || v == "o" || v == "u" ||
            v == "A" || v == "E" || v == "I" || v == "O" || v == "U") {
            count += 1;
        }
    }
    return count;

}
countVowels('Hello, Codeup!') // 5

// Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
function averageSales(arr) {
    var totalPrice = 0;
    for(var i=0;i<arr.length;i++) {
        totalPrice += arr[i].sales;
    }
    return totalPrice / arr.length;
}
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// 100

// Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
// word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
function analyzeWord(str){
    var word = {};
    word.word = str;
    word.numberOfLetters = str.length;
    word.numberOfVowels = countVowels(str);
    return word;
}
analyzeWord('codeup');
// { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }

// Write a function named analyzeAllWords. It should take in an array of strings, and return an array where each element contains an object with the same analysis of the word as described in the previous problem.
function analyzeAllWords(arr){
    var analyzedWords = [];
    for (var i = 0; i< arr.length; i ++){
        analyzedWords.push(analyzeWord(arr[i]));
    }
    return analyzedWords;
}


console.log(analyzeAllWords(['html', 'css', 'javascript'])
    [
    {word: 'html', numberOfLetters: 4, numberOfVowels: 0},
        {word: 'css', numberOfLetters: 3, numberOfVowels: 0},
        {word: 'javascript', numberOfLetters: 10, numberOfVowels: 3}]);

