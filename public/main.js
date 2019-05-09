const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = [{
  rank: 'Ace',
  value: 11
}, {
  rank: '2',
  value: 2
}, {
  rank: '3',
  value: 3
}, {
  rank: '4',
  value: 4
}, {
  rank: '5',
  value: 5
}, {
  rank: '6',
  value: 6
}, {
  rank: '7',
  value: 7
}, {
  rank: '8',
  value: 8
}, {
  rank: '9',
  value: 9
}, {
  rank: '10',
  value: 10
}, {
  rank: 'Jack',
  value: 10
}, {
  rank: 'Queen',
  value: 10
}, {
  rank: 'King',
  value: 10
}]

const deck = []

const createDeck = () => {
  for (let j = 0; j < ranks.length; j++) {
    const rank = ranks[j]
    for (let i = 0; i < suits.length; i++) {
      const suit = suits[i]
      console.log(rank)
      console.log(suit)
      const card = {
        value: rank.value,
        rank: rank.rank,
        suit: suit
      }
      deck.push(card)
    }
  }
}
const shuffle = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    let randomPosition = Math.floor(Math.random() * (i + 1))
    let temp = deck[i]
    deck[i] = deck[randomPosition]
    deck[randomPosition] = temp
  }
}
const main = () => {
  createDeck()
  shuffle()
}
const cardDrawn = () => {
  const firstCard = deck[0]
  console.log(firstCard)
  document.querySelector('.card-drawn').textContent =
    firstCard.rank +
    ' of ' +
    firstCard.suit +
    ' has a value of ' +
    firstCard.value
}

document.querySelector('.draw-btn').addEventListener('click', cardDrawn)
document.addEventListener('DOMContentLoaded', main)