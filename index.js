// Code your solutions in this file



function printBadges(employeeArray) {
  for(let i = 0; i < employeeArray.length; i++) {
    console.log(`Welcome ${employeeArray[i]}!, You are employee #${i+1}.`)
  }
  return employeeArray
}

function tailsNeverFails() {
  function coinFlip() {
    return Math.random() >= 0.5;
  }
  streak = 0
  while (coinFlip()) {
    streak++
  }
  return `You got ${streak} in a row!`
}
