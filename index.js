
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
} 

wrapGifts(gifts, event); 

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}

writeCards(cards);
*/

const cards = ["Guadalupe", "Ollie", "Aki"];
const event = ["birthday"];
const writeCards = (cards,event) => {
    const messages = []
    for(let i = 0; i < cards.length;i++) {
        
           const greetingMessage = `Thank you, ${cards[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)

    }
   
    return messages;
}
writeCards()

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0; 
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++
    }
    return gifts;
}
wrapGifts(gifts); */

function countDown() {
    let i = 10;
    while (i >=  0) {

        console.log(i--);
    }
    
}
countDown;
