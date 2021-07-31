const CROSS = "\u2715";
const CIRCLE = "\u25EF";
let markerSelected = false;
let player1 = "",
  player2 = "";
let turnCounter = 0;

const playerFactory = (symbol) => {
  const marker = symbol;
  return { marker };
};

const displayController = (() => {
  const crossMark = document.querySelector("#cross-mark");
  const circleMark = document.querySelector("#circle-mark");
  const turnDisplayer = document.querySelector("#turnDisplayer");
  const clearButton = document.querySelector("#clearButton");
  const resultModal = document.querySelector("#resultModal");
  const restartButton = document.querySelector("#restartButton");
  const player1marker = document.querySelector("#p1marker");
  const player2marker = document.querySelector("#p2marker");
  const p1name = document.querySelector("#p1name");
  const p2name = document.querySelector("#p2name");

  p1name.addEventListener("input", (event) => {
    p1name.value = event.target.value;
  });

  p2name.addEventListener("input", (event) => {
    p2name.value = event.target.value;
  });

  crossMark.addEventListener("click", () => {
    if (turnCounter === 0) {
      crossMark.classList.add("buttonPressed");
      circleMark.className = "button";
      markerSelected = true;
      player1 = playerFactory(CROSS);
      player2 = playerFactory(CIRCLE);
      setDisplay();
    }
  });

  circleMark.addEventListener("click", () => {
    if (turnCounter === 0) {
      circleMark.classList.add("buttonPressed");
      crossMark.className = "button";
      markerSelected = true;
      player1 = playerFactory(CIRCLE);
      player2 = playerFactory(CROSS);
      setDisplay();
    }
  });

  clearButton.addEventListener("click", () => {
    gameBoard.resetBoard();
    resetCounters();
  });

  window.addEventListener("click", closeModal);

  restartButton.addEventListener("click", () => {
    gameBoard.resetBoard();
    resetCounters();
    resultModal.style.display = "none";
  });

  function closeModal(event) {
    if (event.target == resultModal) {
      resultModal.style.display = "none";
    }
  }

  function setDisplay() {
    player1marker.textContent = `Marker: ${player1.marker}`;
    player2marker.textContent = `Marker: ${player2.marker}`;
    turnDisplayer.textContent = `TURN: ${p1name.value}`;
  }

  function resetCounters() {
    turnCounter = 0;
    markerSelected = false;
    player1.marker = "";
    player2.marker = "";
    p1name.value = "";
    p2name.value = "";
    turnDisplayer.textContent = `TURN:`;
  }

  return { closeModal, resetCounters };
})();

const gameBoard = (() => {
  const board = Array.from(document.querySelector("#gameBoard").children);
  const turnDisplayer = document.querySelector("#turnDisplayer");

  board.forEach((square) => {
    square.setAttribute("data-value", "0");

    square.addEventListener("click", () => {
      const p1name = document.querySelector("#p1name");
      const p2name = document.querySelector("#p2name");

      if (!square.textContent && markerSelected) {
        square.textContent =
          turnCounter % 2 === 0 ? player1.marker : player2.marker;
        square.textContent === CROSS
          ? square.setAttribute("data-value", "1")
          : square.textContent === CIRCLE
          ? square.setAttribute("data-value", "-1")
          : square.setAttribute("data-value", "0");

        turnCounter += 1;
        turnDisplayer.textContent = `TURN: ${
          turnCounter % 2 === 0 ? p1name.value : p2name.value
        }`;
      } else return;

      if (turnCounter >= 5 && turnCounter <= 9) {
        const resultModal = document.querySelector("#resultModal");
        const result = document.querySelector("#result");
        const resultWinner = document.querySelector("#resultWinner");

        if (turnCounter != 9) {
          const winner =
            player1.marker === checkForWin()
              ? p1name.value
              : player2.marker === checkForWin()
              ? p2name.value
              : false;
          if (!winner) return;

          resultWinner.textContent = `${winner} wins!`;
          resultModal.style.display = "block";
        } else {
          const winner =
            player1.marker === checkForWin()
              ? p1name.value
              : player2.marker === checkForWin()
              ? p2name.value
              : false;

          if (!winner) {
            result.textContent = "It's a tie!";
            resultWinner.textContent = "";
            resultModal.style.display = "block";
            return;
          } else {
            resultWinner.textContent = `${winner} wins!`;
            resultModal.style.display = "block";
          }
        }
      }

      function checkForWin() {
        const rows = [];
        const cols = [];
        for (let i = 0; i < 3; i++) {
          rows[i] = Array.from(document.querySelectorAll(`[data-row='${i}']`));
          cols[i] = Array.from(document.querySelectorAll(`[data-col='${i}']`));
        }

        const lrDiagonal = [
          document.querySelector(`[data-row='0'][data-col='0']`),
          document.querySelector(`[data-row='1'][data-col='1']`),
          document.querySelector(`[data-row='2'][data-col='2']`),
        ];
        const rlDiagonal = [
          document.querySelector(`[data-row='0'][data-col='2']`),
          document.querySelector(`[data-row='1'][data-col='1']`),
          document.querySelector(`[data-row='2'][data-col='0']`),
        ];
        const diagonals = [[...lrDiagonal], [...rlDiagonal]];

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
        const diagonalsArrayWithValues = diagonals.map((diagonal) => {
          return diagonal.map((square) =>
            parseInt(square.getAttribute("data-value"))
          );
        });

        const rowSums = rowsArrayWithValues.map((row) =>
          row.reduce((a, b) => a + b)
        );
        const colSums = colsArrayWithValues.map((col) =>
          col.reduce((a, b) => a + b)
        );
        const diagonalSums = diagonalsArrayWithValues.map((col) =>
          col.reduce((a, b) => a + b)
        );

        if (
          rowSums.includes(3) ||
          colSums.includes(3) ||
          diagonalSums.includes(3)
        ) {
          return CROSS;
        } else if (
          rowSums.includes(-3) ||
          colSums.includes(-3) ||
          diagonalSums.includes(-3)
        ) {
          return CIRCLE;
        } else return;
      }
    });
  });

  const resetBoard = () => {
    board.forEach((square) => {
      square.textContent = "";
      square.setAttribute("data-value", "0");
    });
  };

  return { resetBoard };
})();
