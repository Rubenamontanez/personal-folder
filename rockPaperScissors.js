const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){
        return userInput;
    }  else {
        console.log('Error!');
    }
};

console.log(getUserChoice('Paper'))