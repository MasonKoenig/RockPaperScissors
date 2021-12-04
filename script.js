function computerPlay() {
  let list = ['rock', 'paper', 'scissor'];
  let compPlay = list[Math.floor(Math.random()*list.length)];
  return compPlay
}

function playRound(playerSelection, computerSelection) {
  let msg = '';
  if (playerSelection == computerSelection) {
    msg = 'It\'s a tie!!!';
    return msg;
  } else if (playerSelection == 'rock' && computerSelection == 'scissor') {
    msg = 'You win!!! ' + playerSelection + ' beats ' + computerSelection + '.';
    return msg;
  } else if (playerSelection == 'scissor' && computerSelection == 'paper') {
    msg = 'You win!!! ' + playerSelection + ' beats ' + computerSelection + '.';
    return msg;
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    msg = 'You win!!! ' + playerSelection + ' beats ' + computerSelection + '.';
    return msg;
  } else {
    msg = 'You lose!!! ' + computerSelection + ' beats ' + playerSelection + '.';
    return msg;
  }
}

function game(msg) {
  let player = 0;
  let comp = 0;
  let result = '';
  for(let i = 0; i < 5; i++) {
    let playerSelection = computerPlay();
    let computerSelection = computerPlay();
    let outCome = playRound(playerSelection, computerSelection);
    console.log(outCome);
    if (outCome.slice(4,5) == 'w') {
      player = player + 1; 
    } else if(outCome.slice(4,5) == 'l') {
      comp = comp + 1;
    } else;
  }
  if (player > comp) {
    result = 'Player wins!!! ' + player + ' to ' + comp;
  } else {
    result = 'Player loses!!! ' + comp + ' to ' + player;
  }
  console.log(result);
}

game()