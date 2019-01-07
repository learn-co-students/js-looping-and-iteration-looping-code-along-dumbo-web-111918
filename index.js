// Code your solutions in this file


function printBadges(array) {
  for(i=0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${array.indexOf(array[i])+1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let counter = 0;
  while(Math.random() >= 0.5){
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
