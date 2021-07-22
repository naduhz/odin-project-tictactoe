const CROSS = "\u2715";
const CIRCLE = "\u25EF";
let turnCounter = 0;
let playerMarker;

const displayController = (() => {
  const crossMark = document.querySelector("#cross-mark");
  const circleMark = document.querySelector("#circle-mark");
  const turnDisplayer = document.querySelector("#turnDisplayer");
  const clearButton = document.querySelector("#clearButton");
  const winModal = document.querySelector("#winModal");

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
    turnCounter = 0;
  });

  window.addEventListener("click", closeModal);

  function closeModal(event) {
    if (event.target == winModal) {
      winModal.style.display = "none";
    }
  }

  return { closeModal };
})();

const gameBoard = (() => {
  const board = Array.from(document.querySelector("#gameBoard").children);
  const turnDisplayer = document.querySelector("#turnDisplayer");

  board.forEach((square) => {
    square.setAttribute("data-value", "0");

    square.addEventListener("click", () => {
      if (!square.textContent && playerMarker) {
        square.textContent = playerMarker;
        playerMarker == CROSS
          ? square.setAttribute("data-value", "1")
          : square.setAttribute("data-value", "-1");

        playerMarker = playerMarker == CROSS ? CIRCLE : CROSS;
        turnDisplayer.textContent = `TURN: ${playerMarker}`;
        turnCounter += 1;
      } else return;

      if (turnCounter >= 5 && turnCounter <= 9) {
        const winModal = document.querySelector("#winModal");

        if (turnCounter != 9) {
          const winner = checkForWin();
          if (!winner) return;

          // Do this if Win
          winModal.style.display = "block";
        } else {
          const winner = checkForWin();
          // Do this if tie
          if (!winner) return;

          // Do this if Win
          winModal.style.display = "block";
        }
      }

      function checkForWin() {
        const rows = [];
        const cols = [];
        for (let i = 0; i < 3; i++) {
          rows[i] = Array.from(document.querySelectorAll(`[data-row='${i}']`));
          cols[i] = Array.from(document.querySelectorAll(`[data-col='${i}']`));
        }

        const rowsArrayWithValues = rows.map((row) => {
          return row.map((square) =>
            parseInt(square.getAttribute("data-value"))
          );
        });
        const colsArrayWithValues = cols.map((col) => {
          return col.map((square) =>
            parseInt(square.getAttribute("data-value"))
          );
        });

        const rowSums = rowsArrayWithValues.map((row) =>
          row.reduce((a, b) => a + b)
        );
        const colSums = colsArrayWithValues.map((col) =>
          col.reduce((a, b) => a + b)
        );

        if (rowSums.includes(3) || colSums.includes(3)) {
          return CROSS;
        } else if (rowSums.includes(-3) || colSums.includes(-3)) {
          return CIRCLE;
        } else return;
      }
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
