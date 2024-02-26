const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

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
            botChoice === "scissors" ? (botPoints += 0) : (userPoints += 0);
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