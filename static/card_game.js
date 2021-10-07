import {Deck} from './cards.js';

const CONTAINER = document.getElementById('container')

// Construct deck of cards
let deck = new Deck()
deck.shuffleDeck(deck.deck)

// Initialize HTML elements of cards
deck.deck.map(card => CONTAINER.appendChild(card.generate_card_html()))

let cards = document.querySelectorAll('.card') // Grab NodeList of newly generated card elements

cards[0].classList.remove('hide') // Display first card in deck

cards.forEach(card => card.addEventListener('click', () => { // Add an event listener to each card
    card.classList.add('hide') // Hide current card
    try {
        cards[[].indexOf.call(cards, card) + 1].classList.remove('hide') // Display next card
    } catch (e) {
        if(e instanceof TypeError) {
            cards[0].classList.remove('hide')
        }
    }
}))

// let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]

// function shuffleDeck(arr) {
//     let m = arr.length, t, i;
    
//     while(m) {
//         i = Math.floor(Math.random() * m--)

//         t = arr[m]
//         arr[m] = arr[i]
//         arr[i] = t
//     }

//     return arr
// }

// console.log(shuffleDeck(arr))