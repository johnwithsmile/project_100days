function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameOverElement.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      GameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please set custom player names for both players!");
    return;
  }
  resetGameStatus();

  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameIsOver) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = +selectedField.dataset.col - 1;
  const selectedRow = +selectedField.dataset.row - 1;

  if (GameData[selectedRow][selectedColumn] > 0) {
    alert("Please Select empty field!");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  GameData[selectedRow][selectedColumn] = activePlayer + 1;
  console.log(GameData);
  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // checking the rows for equality
  for (let i = 0; i < 3; i++) {
    if (
      GameData[i][0] > 0 &&
      GameData[i][0] === GameData[i][1] &&
      GameData[i][1] === GameData[i][2]
    ) {
      return GameData[i][0];
    }
  }
  // checking the columns for equality
  for (let i = 0; i < 3; i++) {
    if (
      GameData[0][i] > 0 &&
      GameData[0][i] === GameData[1][i] &&
      GameData[1][i] === GameData[2][i]
    ) {
      return GameData[0][i];
    }
  }
  // Diagonal : Top left to bottom right
  if (
    GameData[0][0] > 0 &&
    GameData[0][0] === GameData[1][1] &&
    GameData[1][1] === GameData[2][2]
  ) {
    return GameData[0][0];
  }
  // Diagonal : Bottom left to top right
  if (
    GameData[2][0] > 0 &&
    GameData[2][0] === GameData[1][1] &&
    GameData[1][1] === GameData[0][2]
  ) {
    return GameData[2][0];
  }
  // in case there is no winner
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameIsOver = true;
  gameOverElement.style.display = "block";

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
