/* 
    1. Generate computer choice
    2. Generate user choice
    3. Profit

*/

function choiceToNum(c) {
  switch (c.id) {
    case "rock":
      return 0;
    case "scissors":
      return 1;
    case "paper":
      return 2;
  }
}

while (true) {
  let cChoice = Math.floor(Math.random() * 3);
  let uChoice = choiceToNum(prompt("enter your choice :D (case sensitive)"));

  if (cChoice == uChoice) {
    alert("tie :(");
  } else if (cChoice == 1 && uChoice == 0) {
    alert("you win :D");
  } else if (cChoice == 2 && uChoice == 0) {
    alert("you lose :(");
  } else if (cChoice == 0 && uChoice == 1) {
    alert("you lose :(");
  } else if (cChoice == 2 && uChoice == 1) {
    alert("you win :D");
  } else if (cChoice == 0 && uChoice == 2) {
    alert("you win :D");
  } else if (cChoice == 1 && uChoice == 2) {
    alert("you lose :(");
  }
}
