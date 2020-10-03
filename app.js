let userScore = 0;
let compScore = 0;
let result = document.querySelector(".resultText");

function compChoice() {
    let choice = ["Rock", "Paper", "Scissor"];
    let randomNumber = Math.floor(Math.random()*3);
    return choice[randomNumber];
}

function won(selected, comp) {
    userScore++;
    document.querySelector(".user-score").innerHTML = userScore
    result.innerHTML = `You selected  ${selected} and Opponent selected ${comp}.<br> ${selected} beats ${comp}.<br>Hurray!! You Won🎉`;
}

function lost(selected, comp) {
    compScore++;
    document.querySelector(".comp-score").innerHTML = compScore
    result.innerHTML = `You selected  ${selected} and Opponent selected ${comp}.<br> ${comp} beats ${selected}.<br>You Lost 🥺 Try Again.`;
}

function draw(comp) {
    result.innerHTML = `You both selected ${comp}.<br>It's a Draw!! Play Again.`;
}

function game(selectedChoice) {
    let comp_Choice = compChoice()
    switch(selectedChoice + " " + comp_Choice) {  
        case "Paper Rock":
        case "Scissor Paper":
        case "Rock Scissor":
            won(selectedChoice, comp_Choice);
            break;
        case "Rock Paper":
        case "Paper Scissor":
        case "Scissor Rock":
            lost(selectedChoice, comp_Choice);
            break;   
        case "Rock Rock":
        case "Paper Paper":
        case "Scissor Scissor":
            draw(selectedChoice, comp_Choice);
            break;       
        default:
            result.innerHTML = "Play Again!!";
            break;
    }
}

function userClick(button) {
    let sound = new Audio("./Click2-Sebastian-759472264.mp3");
    document.getElementsByClassName(button)[0].addEventListener("click", function() {
        let key = button.charAt(0).toUpperCase() + button.slice(1);
        game(key);
        sound.play();
    });
}

(function userChoice() {
    userClick("rock");
    userClick("paper");
    userClick("scissor")
})();

