const choices = ['rock', 'paper', 'scissors']

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choice.length)
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "It's a tie"
    }

    if(
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ){
        return 'You win!'
    } else {
        return "You loose!"
    }
}

function playGame(userChoice){
    const computerChoice = getComputerChoice()
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById('result').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`
}