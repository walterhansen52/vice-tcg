
let turn = 1;
let maxVice = 1;
let currentVice = 1;
let log = document.getElementById("log");
let hand = [];
let handArea = document.getElementById("hand");
let playerHP = 25;
let aiHP = 25;

function logMessage(msg) {
  log.value += msg + "\n";
  log.scrollTop = log.scrollHeight;
}

function drawCard() {
  let cardId = Math.floor(Math.random() * 100);
  let card = { id: cardId, cost: 1 };
  hand.push(card);
  updateHand();
  logMessage("Drew card: Card " + cardId);
}

function updateHand() {
  handArea.innerHTML = "";
  hand.forEach((card, index) => {
    let btn = document.createElement("button");
    btn.innerText = "Card " + card.id + " (Cost: " + card.cost + ")";
    btn.onclick = () => playCard(index);
    handArea.appendChild(btn);
  });
}

function playCard(index) {
  let card = hand[index];
  if (card.cost <= currentVice) {
    currentVice -= card.cost;
    document.getElementById("vice-counter").innerText = "Vice: " + currentVice;
    hand.splice(index, 1);
    updateHand();
    logMessage("Played Card " + card.id + ", Cost: " + card.cost);
  } else {
    logMessage("Not enough Vice to play Card " + card.id);
  }
}

document.getElementById("end-turn").onclick = () => {
  turn++;
  maxVice++;
  currentVice = maxVice;
  document.getElementById("vice-counter").innerText = "Vice: " + currentVice;
  drawCard();
  logMessage("Turn " + turn + " started. Vice replenished to " + maxVice);
};

function startGame() {
  logMessage("Game started. Drawing starting hand of 5 cards.");
  for (let i = 0; i < 5; i++) drawCard();
  document.getElementById("status").innerText = "Game started. Your turn.";
}

startGame();
