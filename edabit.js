//split removes the / reverse turns date around and join puts them back together
function formatDate(date) {
    return date.split("/").reverse().join("")
}



function search(arr, item) {
    return arr.indexOf(item);
}

function intOrString(param) {
    if (typeof param === "number") {
        return "int";
    } else if (typeof param === "string") {
        return "str";
    }
}

function stackBoxes(n) {
    return Math.pow(n,2)
}

function isEvenOrOdd(num) {
    return num % 2 ? 'odd' : 'even';
}

function toInt(str) {
    return Number(str)
}

function toStr(int) {
    return String(int)
}

// returns the number of numbers in a string
function findDigitAmount(num) {
    return num.toString().length;
}

// returns true if number is within the range of min and max
function isInRange(num, range) {
    return num >= range.min && num <= range.max;
}

// //returns the negated solution
// function negate(arr) {
//     return arr.map(val => -val);
// )
// }

// function negate(arr) {
//     return arr.map(val => -val);
//
// }

// looks for the same word ignoring case
function match(s1, s2) {
    return s1.localeCompare(s2, undefined, { sensitivity: 'base' }) === 0;
}
function match(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}

// used to figure whether to add or subtract to get to a certain number
function operation(num1, num2) {
    if (num1 + num2 == 24) {return "added"}
    if (num1 - num2 == 24) {return "subtracted"}
    if (num1 * num2 == 24) {return "multiplied"}
    if (num1 / num2 == 24) {return "divided"}
    return null
}
// returns the first and last item in an array
function firstLast(arr) {
    return [arr.shift(), arr.pop()]
}
// returns day of month in numbers
// function monthName(num) {
//     let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     let month = monthArray[num -1]
//     return month
// }
// returns array divided by -
function numberSyllables(word) {
    return word.split("-").length;
}

// returns the number of slices per person if the pizza is less than 12 slices
function equalSlices(total, people, each) {
    return people * each <= total
}
//find the missing angle
function missingAngle(angle1, angle2) {
    return angle1 + angle2 < 90 ? 'obtuse'
        : angle1 + angle2 > 90 ? 'acute'
            : 'right';
}
// when looking for var split by .\
function retrieveMajor(semver) {
    return semver.split(".")[0];
}

function retrieveMinor(semver) {
    return semver.split(".")[1];
}

function retrievePatch(semver) {
    return semver.split(".")[2];
}

// check if both are the same sign
function both(n1, n2) {
    return Math.sign(n1) === Math.sign(n2);
}
// inverts an array neg to pos and pos to neg
// function additiveInverse(arr) {
//     return arr.map(x => -x);
// }

// check for true or false
function isTruthy(input) {
    if (input) {
        return 1;
    }
    else {
        return 0;
    }
}
// return the array
function Go(num) {
    return "-".repeat(num);
}

// ensures the "word" is between last and first
function isBetween(first, last, word) {
    return word > first && word < last;
}
// adds ly to the end of each word in array
function addEnding(arr, ending) {
    // return arr.map(word => word + ending);
}

//checks if numbers mult of 3 5
function FizzBuzz(num) {
    if ( (num % 3 == 0) && (num % 5 == 0) ) {
        return "FizzBuzz";
    } else if (num % 5 == 0) {
        return "Buzz";
    } else if (num % 3 == 0) {
        return "Fizz";
    } else {
        return num.toString()
    }
}

// returning answers as a string
function smallerNum(n1, n2) {
    return Math.min(n1, n2).toString();
}