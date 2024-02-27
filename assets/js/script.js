//get the elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const container = document.querySelector(".container");

//Button
const replay = document.getElementById("replay");

//Results
const resultContainer = document.querySelector(".result-container");
const resultPlace = document.getElementById("result");
const firstItem = document.getElementById("result-first-item");
const secondItem = document.getElementById("result-second-item");
const firstItemText= document.getElementById("first-item-text");
const secondItemText= document.getElementById("second-item-text");
const presentUserScore = document.getElementById("present-user-score");
const presentBotScore = document.getElementById("present-bot-score");
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

    // Hide the element not selected by both
    changeTheLayout(userChoice, botChoice);

    const result = compere(userChoice, botChoice); 
    const [userPoints, botPoints] = result;

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
    firstItemText.innerText = `You picked ${userChoice}`;
    secondItemText.innerText = `Bot picked ${botChoice}`;
    presentUserScore.innerText = userPoints;
    presentBotScore.innerText = botPoints;

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
replay.addEventListener("click", () => replayGame());

// Hide the element not selected by both
let changeTheLayout = (userChoice, botChoice) => {

    // show the result container
  resultContainer.style.display = "flex";

   // change the images
   firstItem.src = `./assets/images/${userChoice}.jpg`;
   secondItem.src = `./assets/images/${botChoice}.jpg`;

  // Scale down the container
  container.style.transform = "scale(0.5)";
  container.style.transition = "all 0.5 ease";
  container.style.pointerEvents = "none";
};

const replayGame = () => {

   // hide the result container 

   resultContainer.style.display = "none";

   //scale up the container 

   container.style.transform = "scale(1)";
   container.style.pointerEvents = "auto";
   container.style.marginTop = "0px";
};

// Function to open the modal
function openModal() {
    document.getElementById('myModal').style.display = 'flex';
};
// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
};
// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};