// Code your solutions in this file
const badgeNames = ['Ada', 'Brendan', 'Ali']
function printBadges(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`Welcome ${arr[i]}! You are employee #${i + 1}.`)
    }
    return arr;
}


function tailsNeverFails() {
    let tailsCounter = 0;
    while(Math.random() >= 0.5) {
        tailsCounter++;
    }
   return `You got ${tailsCounter} tails in a row!`  
}

