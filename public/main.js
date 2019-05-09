// when the page loads, shuffle the deck
// when user clicks the button, display the first card

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = [{
  rank: 'Ace',
  value:
} {
  rank: '2',
  value:
} {
  rank: '3',
  value:
} {
  rank: '4',
  value:
} {
  rank: '5',
  value:
} {
  rank: '6',
  value:
} {
  rank: '7',
  value:
} {
  rank: '8',
  value:
} {
  rank: '9',
  value:
} {
  rank: '10',
  value:
} {
  rank: 'Jack',
  value:
} {
  rank: 'Queen',
  value:
} {
  rank: 'King',
  value:
}]

const deck = []

let shuffledDeck = () => {
  console.log('page loaded')
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
const drawCard = () => {
  console.log('card drawn')
  deck[drawnCard]
  if (drawCard) {
    firstCard += 1
  }

}

const main = () => {
  shuffledDeck()
}



document.querySelector('.draw-btn').addEventListener('click', drawCard)

document.addEventListener('DOMContentLoaded', main)

/*
const card={
  rank: ranks[j]
  suit: suits[i]
  value: cardValues
  

        get face
        push card to array