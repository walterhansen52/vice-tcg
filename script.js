
let playerHP = 25;
let aiHP = 25;
let vice = 1;
let maxVice = 1;
let turn = 1;
let deck = Array.from({length: 30}, (_, i) => ({ id: i + 1, cost: 1 }));
let hand = [];

function log(msg) {
  const logBox = document.getElementById('logBox');
  logBox.textContent += msg + "\n";
  logBox.scrollTop = logBox.scrollHeight;
}

function updateUI() {
  document.getElementById('player-hp').textContent = playerHP;
  document.getElementById('ai-hp').textContent = aiHP;
}

function drawCard() {
  if (deck.length > 0) {
    const card = deck.shift();
    hand.push(card);
    log(`Drew card: Card ${card.id}`);
  }
}

function startGame() {
  for (let i = 0; i < 5; i++) drawCard();
  renderHand();
  log("Game started. Drew starting hand of 5 cards.");
  updateUI();
}

function renderHand() {
  const handDiv = document.getElementById("hand");
  handDiv.innerHTML = "";
  hand.forEach((card, i) => {
    const btn = document.createElement("button");
    btn.textContent = `Card ${card.id} (Cost: ${card.cost})`;
    btn.onclick = () => playCard(i);
    handDiv.appendChild(btn);
  });
}

function playCard(index) {
  const card = hand[index];
  if (vice >= card.cost) {
    vice -= card.cost;
    log(`Played Card ${card.id}, Cost: ${card.cost}`);
    hand.splice(index, 1);
    renderHand();
  } else {
    log(`Not enough Vice to play Card ${card.id}`);
  }
}

function endTurn() {
  turn++;
  maxVice++;
  vice = maxVice;
  drawCard();
  updateUI();
  renderHand();
  log(`Turn ${turn} started. Vice replenished to ${vice}`);
}

window.onload = startGame;
