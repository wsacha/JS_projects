document.addEventListener("DOMContentLoaded", function () {

    let round = 1;
    let winner = "";
    const boardValue = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
    };
    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    const clickBoard = document.querySelector("#game-board");
    const textInfo = document.querySelector(".play-info");
    const resetBtn = document.querySelector(".reset-btn");

    function checkWinner() {
        let checkValue = "";
        for (let combination of winningCombinations) {
            checkValue = boardValue[combination[0]] + boardValue[combination[1]] + boardValue[combination[2]];
            if (checkValue === "XXX") {
                winner = "PLAYER #1";
                alert(winner + " wins!");
                textInfo.innerText = "Play again!";
                break;
            }
            else if (checkValue === "OOO") {
                winner = "PLAYER #2";
                alert(winner + " wins!");
                textInfo.innterText = "Play again!";
                break;
            }
            checkValue = "";
        }
        if (winner === "" && round === 10) {
            winner = "Draw!";
            alert(winner);
            textInfo.innerText = "Play again!";
        }
    }

    clickBoard.addEventListener("click", (e) => {
        if (winner !== "" || e.target.innerText !== "") {
            return false;
        }
        if (round % 2 === 0) {
            e.target.innerText = "O";
            textInfo.innerText = "PLAYER #1 turn!";
        }
        else {
            e.target.innerText = "X";
            textInfo.innerText = "PLAYER #2 turn!";
        }
        boardValue[parseInt(e.target.dataset.boxNumber)] = e.target.innerText;
        round++;
        checkWinner();
    });

    resetBtn.addEventListener("click", (e) => {
        winner = "";
        round = 1;
        for (let key in boardValue) {
            boardValue[key] = "";

        }
        [...document.getElementsByClassName("box")].forEach(function (item) {
            item.innerText = "";
        });
    });
});