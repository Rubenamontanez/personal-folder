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