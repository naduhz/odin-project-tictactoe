const gameBoard = (() => {
  const board = Array.from(document.querySelector("#gameBoard").children);
  board.forEach((square) => {
    square.addEventListener("click", () => {
      if (!square.textContent) {
        square.textContent = "\u25EF";
      } else return;
    });
  });
})();

const displayController = (() => {})();

const playerFactory = () => {
  return {};
};
