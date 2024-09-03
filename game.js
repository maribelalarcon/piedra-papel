// const stone = document
//   .getElementById("stone")
//   .addEventListener("click", () => playGame("stone"));
// const paper = document.getElementById("paper");
// const scissors = document.getElementById("scissors");
// const userScore = document.getElementById("user");
// const pcScore = document.getElementById("pc");

// userScore.innerHTML = 0;
// pcScore.innerHTML = 0;

document
  .getElementById("stone")
  .addEventListener("click", () => playGame("piedra"));
document
  .getElementById("paper")
  .addEventListener("click", () => playGame("papel"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playGame("tijera"));

function playGame(playerChoice) {
  const choices = ["piedra", "papel", "tijera"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = `Empate! Ambos eligieron ${playerChoice}`;
  } else if (
    (playerChoice === "piedra" && computerChoice === "tijera") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijera" && computerChoice === "papel")
  ) {
    result = `Ganaste! ${playerChoice} vence a ${computerChoice}`;
  } else {
    result = `Perdiste! ${computerChoice} vence a ${playerChoice}`;
  }

  document.getElementById("result").innerText = result;
}
