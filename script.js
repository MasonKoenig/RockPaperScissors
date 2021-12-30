function computerPlay() {
  let list = ['Rock', 'Paper', 'Scissor'];
  let compPlay = list[Math.floor(Math.random()*list.length)];
  return compPlay
}

function display(txt) {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  body.append(div);
  div.textContent = txt;
}

function playRound(playerSelection, computerSelection) {
  let msg = '';
  if (playerSelection == computerSelection) {
    msg = 'It\'s a tie!!!';
    return msg;
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissor') {
    msg = 'You win!!! ' + playerSelection + ' beats ' + computerSelection + '.';
    return msg;
  } else if (playerSelection == 'Scissor' && computerSelection == 'Paper') {
    msg = 'You win!!! ' + playerSelection + ' beats ' + computerSelection + '.';
    return msg;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    msg = 'You win!!! ' + playerSelection + ' beats ' + computerSelection + '.';
    return msg;
  } else {
    msg = 'You lose!!! ' + computerSelection + ' beats ' + playerSelection + '.';
    return msg;
  }
};

const select = document.querySelectorAll('.select');
let playerScore = 0;
let compScore = 0;

select.forEach( (e) => {
  e.addEventListener( 'click', (a) => {
    let sel = a.target.textContent;
    let result = playRound( sel, computerPlay() );
    let char = result.charAt(4);
    if( char === 'w') {
      playerScore++;
    } else if( char === 'l') {
      compScore++;
    };
    display(`${result} Score is ${playerScore} to ${compScore}`);
    if(playerScore === 5) {
      display('You win best of 5. Try again!!!')
      playerScore = 0;
      compScore = 0;
    } else if(compScore === 5) {
      display('You lose best of 5. Try again!!!')
      playerScore = 0;
      compScore = 0;
    }
  })
})

