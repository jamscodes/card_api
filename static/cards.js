export class Deck {
    constructor(suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'], cardValues = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) {
        this.deck = []
        suits.map(
            suit => cardValues.map(
                value => this.deck.push(new Card(value, suit))
            )
        )
    }

    shuffleDeck(arr) {
        let m = arr.length, t, i

        while(m) {
            i = Math.floor(Math.random() * m--)

            t = arr[m]
            arr[m] = arr[i]
            arr[i] = t
        }

        return arr
    }
}

export class Card {
    constructor(name, suit, next = null) {
        // Checks for all necessary parameters
        if (!name) {
            throw 'ERROR ON CARD CONSTRUCTION: Card class requires name'
        }

        if(!suit) {
            throw 'ERROR ON CARD CONSTRUCTION: Card class requires suit to be provided'
        }

        this.name = name
        this.suit = suit
        this.next = next
    }
    
    generate_card_html() {
        // Map table of suits to symbols
        let suit_symbols = {
            'Spades': '&spades;',
            'Hearts': '&hearts;',
            'Diamonds': '&diams;',
            'Clubs': '&clubs;'
        }

        // Will return an HTML node for a card
        return document.createRange().createContextualFragment(`
        <div class="card hide">
            <div class="card-pip ${(this.suit == 'Spades' || this.suit == 'Clubs' ? 
            'card-dark' : 'card-accent')}">
                <p class="card-pip-name">${this.name}</p>
                <p><span class="card-pip-suit">${suit_symbols[this.suit]}</span></p>
            </div>
            <div class="card-center-icon ${(this.suit == 'Spades' || this.suit == 'Clubs' ? 
            'card-dark' : 'card-accent')}">
                <p><span class="card-pip-suit">${suit_symbols[this.suit]}</span></p>
            </div>
            <div class="card-pip ${(this.suit == 'Spades' || this.suit == 'Clubs' ? 
            'card-dark' : 'card-accent')}">
                <p class="card-pip-name">${this.name}</p>
                <p><span class="card-pip-suit">${suit_symbols[this.suit]}</span></p>
            </div>
        </div>
        `)
    }
}