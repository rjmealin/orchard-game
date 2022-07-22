let game = true
let crow = 0;
let gameWins = 0;
let gameLosses = 0;
let totalGames = 0;
let dice = [1,2,3,4,5,6];
let diceRoll1 = 0;
let diceRoll2 = 0;
let diceRoll3 = 0;
let diceRoll4 = 0;
let diceRoll5 = 0;
let diceRoll6 = 0;
let totalRolls = 0;




for (let i = 0; i < 1000000; i++){
  game = true;
  fruits = {
    green:4,
    blue:4,
    red:4,
    yellow:4
    }
  crow = 0;
  while (game === true){
    const diceRoll = dice[Math.floor(Math.random() * dice.length)];


    //Keep track of dice rolls
    totalRolls++;
    if(diceRoll === 1){
      diceRoll1++;
    } else if (diceRoll === 2){
      diceRoll2++;
    } else if (diceRoll === 3) {
      diceRoll3++;
    } else if (diceRoll === 4) {
      diceRoll4++;
    } else if ( diceRoll === 5) {
      diceRoll5++;
    } else {diceRoll6++;}


    switch(diceRoll){
      case 1:
        fruits.red--;
        break;
      case 2:
        fruits.blue--;
        break;
      case 3:
        fruits.yellow--;
        break;
      case 4:
        fruits.green--;
        break;
      case 5:
        crow++;
        break;
      case 6:
        let tempArray = [fruits.blue, fruits.red, fruits.yellow, fruits.green];
        let target = Math.max(...tempArray);
        let index = tempArray.findIndex( (el) => el === target);
        if(index === 0){
          fruits.blue--;
        }else if(index === 1){
          fruits.red--;
        } else if (index === 2){
          fruits.yellow--;
        } else if (index === 3){
          fruits.green--;
        } else{
          break;
        }
        break;
    }
  
    if (fruits.green <= 0 && fruits.blue <= 0 && fruits.red <= 0 && fruits.yellow <= 0 ){
      gameWins++;
      game = false;
    }
    if(crow === 4){
      gameLosses++;
      game = false
    }
  }
  totalGames++;
}
let winPercentage = gameWins/totalGames;
let lossPercentage = gameLosses/totalGames;
let percentRolls1 = diceRoll1/totalRolls
let percentRolls2 = diceRoll2/totalRolls
let percentRolls3 = diceRoll3/totalRolls
let percentRolls4 = diceRoll4/totalRolls
let percentRolls5 = diceRoll5/totalRolls
let percentRolls6 = diceRoll6/totalRolls

console.log(`Total Rolls: ${totalRolls}`)
console.log(`Percent of 1 rolled: ${percentRolls1}`)
console.log(`Percent of 2 rolled: ${percentRolls2}`)
console.log(`Percent of 3 rolled: ${percentRolls3}`)
console.log(`Percent of 4 rolled: ${percentRolls4}`)
console.log(`Percent of 5 rolled: ${percentRolls5}`)
console.log(`Percent of 6 rolled: ${percentRolls6}`)

console.log(`Total games played: ${totalGames}`)
console.log(`Total Wins: ${gameWins}`)
console.log(`Total Losses: ${gameLosses}`)
console.log(`Win Percentage: ${winPercentage}`)
console.log(`Loss Percentage: ${lossPercentage}`)
