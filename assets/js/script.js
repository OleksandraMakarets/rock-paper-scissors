const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//function
const play = (element) => {
    alert(`You picked ${element}!`);
};


//add event listeners
rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));