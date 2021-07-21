const CROSS = "\u2715";
const CIRCLE = "\u25EF";
let turnCounter = 0;
let playerMarker;

const displayController = (() => {
  const crossMark = document.querySelector("#cross-mark");
  const circleMark = document.querySelector("#circle-mark");
  const turnDisplayer = document.querySelector("#turnDisplayer");
  const clearButton = document.querySelector("#clearButton");

  crossMark.addEventListener("click", () => {
    if (turnCounter === 0) {
      crossMark.classList.add("buttonPressed");
      circleMark.className = "button";
      playerMarker = CROSS;
      turnDisplayer.textContent = `TURN: ${playerMarker}`;
    }
  });

  circleMark.addEventListener("click", () => {
    if (turnCounter === 0) {
      circleMark.classList.add("buttonPressed");
      crossMark.className = "button";
      playerMarker = CIRCLE;
      turnDisplayer.textContent = `TURN: ${playerMarker}`;
    }
  });

  clearButton.addEventListener("click", () => {
    gameBoard.resetBoard();
  });
})();

const gameBoard = (() => {
  const board = Array.from(document.querySelector("#gameBoard").children);
  const turnDisplayer = document.querySelector("#turnDisplayer");

  board.forEach((square) => {
    square.addEventListener("click", () => {
      if (!square.textContent && playerMarker) {
        square.textContent = playerMarker;
        playerMarker = playerMarker == CROSS ? CIRCLE : CROSS;
        turnDisplayer.textContent = `TURN: ${playerMarker}`;
        turnCounter += 1;
      } else return;
    });
  });

  const resetBoard = () => {
    board.forEach((square) => {
      square.textContent = "";
    });
  };

  return { resetBoard };
})();

const playerFactory = () => {
  return {};
};
