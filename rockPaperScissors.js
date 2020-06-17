const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor'){
        return userInput;
    }  else {
        console.log('Error!');
    }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
};
console.log(getComputerChoice());


const determinWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
        return 'This game is a tie';
    } if ( userChoice === 'rock') {
        if (computerChoice === 'paper'){
            return 'computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
            return 'computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

    if (userChoice === 'scissor'){
        if (computerChoice === 'rock'){
            return 'computer won!';
        } else {
            return 'Congratulations, you won!';
        }
    }

};


// console.log(determinWinner('rock', 'scissors'));
// console.log(determinWinner('paper', 'scissors'));
// console.log(determinWinner('rock', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('Paper');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log('The Computer threw: ' + computerChoice);
    console.log(determinWinner(userChoice, computerChoice));
};

playGame();