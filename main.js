document.addEventListener("DOMContentLoaded", () => {
  const gameDiv = document.getElementById("game");

  Promise.all([
    fetch('all_card_library.json').then(r => r.json()),
    fetch('hero_cost_modifiers.json').then(r => r.json()),
    fetch('swashbuckler_ai_deck.json').then(r => r.json()),
    fetch('cyber_ronin_deck.json').then(r => r.json())
  ]).then(([cards, costModifiers, aiDeck, playerDeck]) => {
    gameDiv.innerHTML = `
      <p>Game loaded successfully!</p>
      <pre>Cards: ${cards.length} | AI Deck: ${aiDeck.length} | Player Deck: ${playerDeck.length}</pre>
    `;

    console.log({ cards, costModifiers, aiDeck, playerDeck });
  }).catch(err => {
    gameDiv.innerHTML = `<p style="color:red">Error loading game: ${err.message}</p>`;
    console.error(err);
  });
});
