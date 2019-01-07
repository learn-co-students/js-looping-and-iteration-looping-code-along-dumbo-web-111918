// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

function printBadges (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`)
       
    }
     return arr;
}

//don't really understand the answer below 
// function tailsNeverFails() {
//     let tails = 0;

//     while (Math.random() >= 0.5) {
//         tails++;
//     }

//     return `You got ${tails} tails in a row!`;
// }



function tailsNeverFails() {
    let tails = 0;
    let random = Math.random();

    while (random >= 0.5) {
        // console.log(random);
        random = Math.random()
        tails++;
    }

    return `You got ${tails} tails in a row!`;
}
