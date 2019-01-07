// Code your solutions in this file

function printBadges(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
}

function tailsNeverFails() {
  let counter = 0;
  while(Math.random() >= 0.5 === true){
    counter++
  }

  return `You got ${counter} tails in a row!`
}
