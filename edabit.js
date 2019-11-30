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

//returns the negated solution
function negate(arr) {
    return arr.map(val = > -val;
)
}

function negate(arr) {
    return arr.map(val => -val;
)
}