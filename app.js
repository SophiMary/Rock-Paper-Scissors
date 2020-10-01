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
    result.innerHTML = `You selected  ${selected}. Opponent selected ${comp}. <br> <br> ${selected} beats ${comp}. <br> <br>Hurray!! You Won🎉`;
}

function lost(selected, comp) {
    compScore++;
    document.querySelector(".comp-score").innerHTML = compScore
    result.innerHTML = `You selected  ${selected}. Opponent selected ${comp}. <br><br> ${comp} beats ${selected}. <br><br>You Lost 🥺 Try Again.`;
}

function draw(selected, comp) {
    result.innerHTML = `You both selected ${comp}. <br><br>It's a Draw!! Play Again.`;
}

function game(selectedChoice) {
    let comp_Choice = compChoice()
    switch(selectedChoice + " " + comp_Choice) {
        case "Rock Rock":
        case "Paper Paper":
        case "Scissor Scissor":
            draw(selectedChoice, comp_Choice);
            break;    
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
        default:
            document.querySelector(".result").innerHTML = "Play Again!!";
            break;
    }
}


function userChoice() {
    let sound = new Audio("./Click2-Sebastian-759472264.mp3");
    document.querySelector(".rock").addEventListener("click", function(){
        game("Rock");
        sound.play();
    });

    document.querySelector(".paper").addEventListener("click", function(){
        game("Paper");
        sound.play();
    });

    document.querySelector(".scissor").addEventListener("click", function(){
        game("Scissor");
        sound.play();
    });
}

userChoice();