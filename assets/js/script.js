//get the elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//Results
const resultPlace = document.getElementById("result");
//Leaderboard
const userScorePlace = document.getElementById("user-score");
const botScorePlace = document.getElementById("bot-score");
const drawScorePlace = document.getElementById("draw-score");

//Scores
let userScore = 0;
let botScore = 0;
let drawScore = 0;

//function
const play = (element) => {
    const userChoice = element;
    const botChoice = selectRandom();

    console.log(`User:${userChoice}`);
    console.log(`Bot: ${botChoice}`);

    const result = compere(userChoice, botChoice); 
    const [userPoints, botPoints] = result;

    console.log(`User:${userPoints}`);
    console.log(`Bot: ${botPoints}`);

    //Who winner text
    let resultText = "";

    if(userPoints > botPoints){

        resultText = "You won!Сongrats🥳";
        resultPlace.style.color = "green";
        userScore += 1;

    } else if (userPoints < botPoints) {

        resultText = "You lost! 🥲";
        resultPlace.style.color = "red";
        botScore += 1;

    } else {
        resultText = "It's a draw!";
        resultPlace.style.color = "black";
        drawScore += 1;
    }
    // update the result text
    resultPlace.innerText = resultText;

     // update the leaderboard
     userScorePlace.innerText = userScore; 
     botScorePlace.innerText = botScore; 
     drawScorePlace.innerText = drawScore; 
};

//bot selects a random element

const selectRandom = () => {
    const elements = ["rock", "paper", "scissors"]; 
    const randomNumber = Math.floor(Math.random() * 3); 
    const randomElement = elements[randomNumber]; 
    return randomElement; 
};

//Compere the choices
const compere = (userChoice, botChoice) =>{
    let botPoints = 0;
    let userPoints = 0;

//Draw
    if(userChoice === botChoice){
        return [userPoints, botPoints];
    }

    switch(userChoice) {
        case "rock":
            botChoice === "scissors" ? (userPoints += 1) : (botPoints += 1);
            break;
        case "paper":
            botChoice === "rock" ? (userPoints += 1) : (botPoints += 1);
            break;
        case "scissors":
            botChoice === "paper" ? (userPoints += 1) : (botPoints +=1 );
            break;
        default:
            console.log("Error");
    }

    return [userPoints, botPoints]; 

};

//add event listeners
rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));