
let finalGrade = (a,b,c) => {
    if ((a < 0 || a>100 ) || (b < 0 || b > 100 )
        || (c < 0 || c > 100 )){
        return 'You have entered an invalid grade.'
    }else if ( (a + b + c) / 3 <= 59 ){
        return "F";
    } else if ( (a + b + c) / 3 <= 69 ){
        return "D";
    } else if ( (a + b + c) / 3 <= 79 ){
        return "C";
    } else if ( (a + b + c) / 3 <= 89 ){
        return "B";
    } else if ( (a + b + c) / 3 <= 100 ){
        return "A";
    } else
        return 'You have entered an invalid grade.'
};


console.log(finalGrade(101, 101, 101))