let game = true
let crow = 0;
let gameWins = 0;
let gameLosses = 0;
let dice = [1,2,3,4,5,6];
let fruits = {
green:4,
blue:4,
red:4,
yellow:4
}

while (game === true){
	const diceRoll = dice[Math.floor(Math.random() * dice.length)];
	//console.log(`random array element: ${diceRoll}`);
  //fruits.green--;
  switch(diceRoll){
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;

  }
  if (fruits.green === 0 ){
  	game = false;
  }
}