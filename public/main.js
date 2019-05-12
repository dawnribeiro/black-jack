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
const playerHand = []
const dealerHand = []

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

const dealCardToPlayer = () => {
  const dealCard = (deck.pop())

  playerHand.push(dealCard)
  const playerCard = document.createElement('img')
  playerCard.src = '/images/' + dealCard.rank + '_' + 'of' + '_' + dealCard.suit + '.svg'

  document.querySelector('.players-cards').appendChild(playerCard)
}

const dealCardToDealer = () => {
  const dealCard = (deck.pop())

  dealerHand.push(dealCard)

  const dealerCard = document.createElement('li')
  dealerCard.textContent =
    dealCard.rank +
    ' of ' +
    dealCard.suit +
    ' has a value of ' +
    dealCard.value
  document.querySelector('.dealers-cards').appendChild(dealerCard)
}

const reset = () => {
  document.querySelector('.players-cards').textContent = ' '
  document.querySelector('.draw-btn').disabled = false
  document.querySelector('.player-total').textContent = ' '
  document.querySelector('.dealer-total').textContent = ' '
}

const stand = () => {
  let deckTotalPlayer = 0
  playerHand.forEach(card => {
    console.log(card.value)
    deckTotalPlayer += card.value
    document.querySelector('.player-total').textContent = deckTotalPlayer
  })
  let deckTotalDealer = 0
  dealerHand.forEach(card => {
    console.log(card.value)
    deckTotalDealer += card.value
    document.querySelector('.dealer-total').textContent = deckTotalDealer
  })
  if (deckTotalPlayer > 21) {
    document.querySelector('.player-wins').textContent = 'PLAYER BUST'
  }
  if (deckTotalDealer < 17) {
    const dealerCard = document.createElement('li')
    const dealCard = (deck.pop())
    dealerCard.textContent =
      dealCard.rank +
      ' of ' +
      dealCard.suit +
      ' has a value of ' +
      dealCard.value

    dealerHand.push(dealCard)
    console.log(dealCard)
    document.querySelector('.dealers-cards').appendChild(dealerCard)
  }

  document.querySelector('.draw-btn').disabled = true
}

const main = () => {
  createDeck()
  shuffle()
  dealCardToPlayer()
  dealCardToPlayer()
  dealCardToDealer()
  dealCardToDealer()
}

document.querySelector('.stand-btn').addEventListener('click', stand)
document.querySelector('.reset-btn').addEventListener('click', reset)
document.querySelector('.draw-btn').addEventListener('click', dealCardToPlayer)
document.addEventListener('DOMContentLoaded', main)