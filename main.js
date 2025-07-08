
let turnCount = 0;

function endTurn() {
    turnCount++;
    document.getElementById("game-status").innerText = "Turn " + turnCount + " ended. Drawing new card...";
}
