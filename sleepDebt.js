const getSleepHours = (day) =>{
    if (day === 'monday'){
        return 7;
    } else if(day === 'tuesday'){
        return 7;
    }else if(day === 'wednesday'){
        return 7;
    } else if(day === 'thursday'){
        return 7;
    } else if(day === 'friday'){
        return 7;
    }else if(day === 'saturday'){
        return 7;
    } else if(day === 'sunday'){
        return 7;
    }else
        return 'error';


    // switch (day) {
    //     case 'monday':
    //         return 7
    //         break;
    //     case 'tuesday' :
    //         return 7
    //         break;
    //     case 'wednesday' :
    //         return 7
    //         break;
    //     case 'thursday' :
    //         return 7
    //         break;
    //     case 'friday' :
    //         return 7
    //         break;
    //     case 'saturday' :
    //         return 7
    //         break;
    //     case 'sunday' :
    //         return 7
    //         break;
    //     default:
    //         return 'error'
    // }

    };
//  implicite return without the curly braces
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');



const getIdealSleepHours = () =>{
    let idealHours = 7;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log("user got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
        console.log('user got more sleep than needed' + ' user needed an extra ' + (actualSleepHours - idealSleepHours) + ' hours for the week')
    } else if (idealSleepHours > actualSleepHours)
        console.log('user needs rest.  ' + 'you needed ' +(idealSleepHours - actualSleepHours) + ' hours for the week');
 else {
    console.log('Error something went wrong')
}}
calculateSleepDebt( );