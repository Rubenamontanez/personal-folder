let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly  =  true;

let runnerAge = 19;

if (registeredEarly && runnerAge > 18){
    raceNumber += 1000;
}

if (registeredEarly && runnerAge > 18){
    console.log(`Race time is at 9:30 am and your race number is ${raceNumber}`)
} else if (runnerAge > 18 && !registeredEarly){
    console.log(`Late adults run at 11:00 am, your race number is ${raceNumber}`);
}
else if (runnerAge < 18){
    console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}. `)
} else {
    console.log('Please go to the registration desk');
}