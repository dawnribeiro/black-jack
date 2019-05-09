const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

const deck = []

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i]
    for (let j = 0; j < ranks.length; j++) {
      const rank = ranks[j]
      const card = rank + ' ' + suit
      deck.push(card)
    }
  }
  shuffle(deck)
  console.log(deck)
}
const shuffle = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1))
    let temp = deck[i]
    deck[i] = deck[randomPosition]
    deck[randomPosition] = temp

  }
}
// document.querySelector('.draw-btn').addEventListener('click', cardDrawn)
document.addEventListener('DOMContentLoaded', main)