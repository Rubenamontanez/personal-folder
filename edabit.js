// Write your function here:
const calculateWeight = (earthWeight, planet)=>{
    if(planet === 'Mercury'){
        return  earthWeight * 0.378;
    } else if (planet === 'Venus'){
        return earthWeight * 0.907;
    } else if (planet === 'Mars'){
        return earthWeight * 0.377;
    } else if (planet === 'Jupiter'){
        return earthWeight * 2.36;
    } else if (planet === 'Saturn'){
        return earthWeight * 0.916;
    } else
        return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
};
console.log(calculateWeight(100, 'Jupiter')) // Should print 236

const howOld = (age,year) => {
    const dateToday = new Date();
    const currentYear = dateToday.getFullYear();

    let yearDiff = year - currentYear
    let newAge = age + yearDiff
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}

console.log(howOld(36,2040));