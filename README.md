# Vice Tactics

**Vice Tactics** is a fast-paced, turn-based 1v1 card game where players build decks around unique Hero cards. Use Spells, Tech, Weapons, and Buffs to outplay your opponent and manage your Vice resources wisely.

## 🎮 Current Status
This is the MVP (Minimum Viable Product) version of the game engine — built in HTML and JavaScript with CSV/JSON-based data. Testing includes:
- Hero card modifiers
- Card effect logic (damage, healing, draw, durability)
- AI dummy opponent (greedy behavior)
- Resource system (Vice: gain + replenish per turn)

## 🔧 How to Play the MVP

1. Download or open `index.html` locally in your browser
2. Play hotseat-style using one of the test decks
3. One player uses:
   - 🧙 **Witch Doctor Dre** (player)
   - ⚔️ **Swashbuckler** (AI)
4. Turn-based play:
   - Draw one card at start of turn
   - Your Vice replenishes and increases by 1 each turn (max 10)
   - Click to play cards; effects auto-resolve

## 🗂 File Structure
vice-tcg/
├── index.html # MVP engine
├── README.md # You're here
├── data/
│ ├── hero_cost_modifiers.json
│ ├── all_card_library.json
│ └── decks/
│ ├── witch_doctor_dre.csv
│ ├── chaos_mage.csv
│ └── swashbuckler_ai.csv
├── rules/
│ ├── quickstart.md
│ └── full_rules.md

## 📚 Rules Overview

- 40 cards per deck, max 2 copies of any card
- You lose if your deck runs out
- If both players hit 0 HP simultaneously, it's a draw
- Decks may include cards that are "unavailable" to your Hero — they simply can't be played
- Weapons attack automatically until broken

See `rules/quickstart.md` for setup and `full_rules.md` for advanced mechanics.

## 🚧 Upcoming Features
- Zone-based layout with React (in progress)
- Graphical card rendering
- Turn history log
- AI difficulty options
- Online multiplayer support
- GitHub Pages deployment

## 🌐 Live Demo (soon)
We’ll host the playable version via GitHub Pages:
> https://walterhansen52.github.io/vice-tcg/

## 🤝 Contributing
Coming soon — issues and project board will be added for dev planning.

---
