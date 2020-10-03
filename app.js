let userScore = 0;
let computerScore = 0;
let result = document.querySelector(".resultText");

function computerChoice() {
    let choice = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choice[randomNumber];
}

function won(userSelection, computerSelection) {
    userScore++;
    document.querySelector(".user-score").innerHTML = userScore
    result.innerHTML = `You selected  ${userSelection} and Opponent selected ${computerSelection}.<br> ${userSelection} beats ${computerSelection}.<br>Hurray!! You Won🎉`;
}

function lost(userSelection, computerSelection) {
    computerScore++;
    document.querySelector(".comp-score").innerHTML = computerScore
    result.innerHTML = `You selected  ${userSelection} and Opponent selected ${computerSelection}.<br> ${computerSelection} beats ${userSelection}.<br>You Lost 🥺 Try Again.`;
}

function draw(computerSelection) {
    result.innerHTML = `You both selected ${computerSelection}.<br>It's a Draw!! Play Again.`;
}

function game(userSelectedChoice) {
    let computerSelectedChoice = computerChoice();
    switch(userSelectedChoice + " " + computerSelectedChoice) {  
        case "Paper Rock":
        case "Scissor Paper":
        case "Rock Scissor":
            won(userSelectedChoice, computerSelectedChoice);
            break;
        case "Rock Paper":
        case "Paper Scissor":
        case "Scissor Rock":
            lost(userSelectedChoice, computerSelectedChoice);
            break;   
        case "Rock Rock":
        case "Paper Paper":
        case "Scissor Scissor":
            draw(userSelectedChoice, computerSelectedChoice);
            break;       
        default:
            result.innerHTML = "Play Again!!";
            break;
    }
}

function userClicked(button) {
    let sound = new Audio("./Click2-Sebastian-759472264.mp3");
    document.getElementsByClassName(button)[0].addEventListener("click", function() {
        let key = button.charAt(0).toUpperCase() + button.slice(1);
        game(key);
        sound.play();
    });
}

(function init() {
    userClicked("rock");
    userClicked("paper");
    userClicked("scissor")
})();

