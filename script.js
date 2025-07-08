
let playerHand = [];
let turn = 1;
let maxVice = 1;
let currentVice = 1;
let logEl = document.getElementById("log");

function log(msg) {
    logEl.innerHTML += "<div>" + msg + "</div>";
}

function drawCard() {
    const newCard = {
        name: "Test Card " + Math.floor(Math.random() * 100),
        cost: 1,
        effect: "Deal 1 damage"
    };
    playerHand.push(newCard);
    updateHand();
}

function updateHand() {
    const hand = document.getElementById("hand");
    hand.innerHTML = "";
    playerHand.forEach((card, index) => {
        const el = document.createElement("div");
        el.className = "card";
        el.innerText = card.name + "\nCost: " + card.cost;
        el.onclick = () => playCard(index);
        hand.appendChild(el);
    });
}

function playCard(index) {
    const card = playerHand[index];
    if (card.cost <= currentVice) {
        currentVice -= card.cost;
        log("Played " + card.name + ": " + card.effect);
        playerHand.splice(index, 1);
        updateHand();
    } else {
        log("Not enough Vice to play " + card.name);
    }
}

function endTurn() {
    turn++;
    maxVice++;
    currentVice = maxVice;
    drawCard();
    log("Turn " + turn + " started. Vice: " + currentVice);
    document.getElementById("status").innerText = "Turn " + turn + ", Vice: " + currentVice;
}

window.onload = () => {
    for (let i = 0; i < 5; i++) drawCard();
    log("Game started. Drawing 5 cards.");
    document.getElementById("status").innerText = "Turn 1, Vice: 1";
};
