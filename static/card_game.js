import {Deck} from './cards.js';

const CONTAINER = document.getElementById('container')
const SHUFFLE_BUTTON = document.getElementById('shuffle')
const init_html_deck = (deck) => {
    try {
        while(CONTAINER.firstChild) { // removes currently rendered deck if it exists
            CONTAINER.removeChild(CONTAINER.firstChild)
        }

        deck.shuffleDeck(deck.deck)
        deck.deck.map(card => CONTAINER.appendChild(card.generate_card_html()))
    
        let cards = document.querySelectorAll('.card')

        cards.forEach(card => card.addEventListener('click', () => { // Add an event listener to each card
            card.classList.add('hide') // Hide current card
            try {
                cards[[].indexOf.call(cards, card) + 1].classList.remove('hide') // Display next card
            } catch (e) {
                if(e.message === "Cannot read properties of undefined (reading 'classList')") {
                    cards[0].classList.remove('hide')
                }
            }
        }))

        // cards[0].classList.remove('hide') // Display first card in deck
        
        return cards // returns a NodeList of the HTML elements of the cards
    } catch (e) {
        console.log(e)
        return false
    }
}

// Construct deck of cards
let deck = new Deck()
init_html_deck(deck)


// Button controls
SHUFFLE_BUTTON.addEventListener('click', () => {
    init_html_deck(deck)
})