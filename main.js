const CROSS = "\u2715";
const CIRCLE = "\u25EF";
let playerMarker;

const displayController = (() => {
  const crossMark = document.querySelector("#cross-mark");
  const circleMark = document.querySelector("#circle-mark");

  crossMark.addEventListener("click", () => {
    crossMark.classList.add("buttonPressed");
    circleMark.className = "button";
    playerMarker = CROSS;
  });

  circleMark.addEventListener("click", () => {
    circleMark.classList.add("buttonPressed");
    crossMark.className = "button";
    playerMarker = CIRCLE;
  });
})();

const gameBoard = (() => {
  const board = Array.from(document.querySelector("#gameBoard").children);

  board.forEach((square) => {
    square.addEventListener("click", () => {
      if (!square.textContent) {
        square.textContent = playerMarker;
        playerMarker = playerMarker == CROSS ? CIRCLE : CROSS;
      } else return;
    });
  });
})();

const playerFactory = () => {
  return {};
};
