const getSleepHours = (day) =>{
//     if (day === 'monday'){
//         return 8;
//     } else if(day === 'tuesday'){
//         return 8;
//     }else if(day === 'wednesday'){
//         return 8;
//     } else if(day === 'thursday'){
//         return 8;
//     } else if(day === 'friday'){
//         return 8;
//     }else if(day === 'saturday'){
//         return 8;
//     } else if(day === 'sunday'){
//         return 8;
//     }else
//         return 'error';
// };

    switch (day) {
        case 'monday':
            return 8
            break;
        case 'tuesday' :
            return 8
            break;
        case 'wednesday' :
            return 8
            break;
        case 'thursday' :
            return 8
            break;
        case 'friday' :
            return 8
            break;
        case 'saturday' :
            return 8
            break;
        case 'sunday' :
            return 8
            break;
        default:
            return 'error'
    }
    }
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
    let idealHours = 8;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours == idealSleepHours) {
        console.log("user got the perfect amount of sleep" + calculateSleepDebt());
    } else if (actualSleepHours > idealSleepHours) {
        console.log('user got more sleep than needed' + ' user needed an extra ' + (actualSleepHours - idealSleepHours) + ' hours for the week')
    } else if (idealSleepHours > actualSleepHours)
        console.log('user needs rest.  ' + 'you needed ' +(idealSleepHours - actualSleepHours) + ' hours for the week');
 else {
    console.log('Error something went wrong')
}}
calculateSleepDebt( );