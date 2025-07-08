
let hand = [];
let deck = [];
let turn = 1;
let vice = 1;

function log(message) {
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += message + "<br>";
    logDiv.scrollTop = logDiv.scrollHeight;
}

function drawCard() {
    if (deck.length > 0) {
        const card = deck.pop();
        hand.push(card);
        log("Drew card: " + card.name);
    } else {
        log("Deck is empty.");
    }
}

function startGame() {
    deck = [];
    for (let i = 1; i <= 20; i++) {
        deck.push({ name: "Card " + i, cost: 1 });
    }
    for (let i = 0; i < 5; i++) {
        drawCard();
    }
    renderHand();
    document.getElementById("game-status").textContent = "Game started. Your turn.";
    log("Game started. Drew starting hand of 5 cards.");
}

function renderHand() {
    const handDiv = document.getElementById("hand");
    handDiv.innerHTML = '';
    hand.forEach((card, index) => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = card.name + " (Cost: " + card.cost + ")";
        div.onclick = () => playCard(index);
        handDiv.appendChild(div);
    });
}

function playCard(index) {
    const card = hand[index];
    if (card.cost <= vice) {
        log("Played " + card.name + ", Cost: " + card.cost);
        vice -= card.cost;
        hand.splice(index, 1);
        renderHand();
    } else {
        log("Not enough Vice to play " + card.name);
    }
}

function endTurn() {
    turn++;
    vice = turn;
    log("Turn " + turn + " started. Vice replenished to " + vice);
    drawCard();
    renderHand();
}

window.onload = startGame;
