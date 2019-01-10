// Code your solutions in this file
// const employees = ['Ada', 'Brendan', 'Ali']


function printBadges(array){
  for (let i = 0; i < array.length ; i++)
  console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  return array
};

function tailsNeverFails() {
  function coin() {
    return Math.random() >= 0.5;
  }
  coinFlip = 0
  while (coin()) {
    coinFlip++
  }
  return `You got ${coinFlip} tails in a row!`}
