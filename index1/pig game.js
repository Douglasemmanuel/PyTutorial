let score0 =document.getElementById('score--0');
let score1 =document.getElementById('score--1');
let dice = document.querySelector('.dome');
let rollDice= document.querySelector('#rolldice');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdbtn = document.querySelector('#hold');
let newgame = document.querySelector('#newgame');
let name1 = document.getElementById('name--0');
let name2 = document.getElementById('name--1');
// score0.textContent = 0;
// score1.textContent = 0;
// dice.classList.add('hidden');
let scores;
let current;
let activeplayer;
let switchplayer = ()=>{
    current = 0;
    document.getElementById(`current--${activeplayer}`).textContent = current
    activeplayer = activeplayer === 0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
function init(){
    score0.textContent = 0;
    score1.textContent = 0; 
    current1.textContent = 0;
    current2.textContent = 0;
    name1.textContent = 'PLAYER 1'
    name2.textContent = 'PLAYER 2'
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    rollDice.classList.remove('hidden');
    holdbtn.classList.remove('hidden');
    dice.classList.add('hidden');
     scores = [0,0];
    current = 0;
    activeplayer = 0;
}
init();
// scores of [active player]
// functionality for roll dice
rollDice.addEventListener('click',()=>{
    // generate a random number between 1 and 6
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    // console.Log(diceNumber);
    console.log(diceNumber);
    // display the dice image with random number
    dice.classList.remove('hidden');
    dice.src = `images/dice${diceNumber}.png`;
    // if the random number is not 1 then add it to active players current score
    if(diceNumber != 1){
        current += diceNumber;
        document.getElementById(`current--${activeplayer}`).textContent = current
        // current1.textContent = current;
    }else{
        switchplayer();
        // current = 0;
        // document.getElementById(`current--${activeplayer}`).textContent = current
        // activeplayer = activeplayer === 0?1:0;
        // player0.classList.toggle('player--active');
        // player1.classList.toggle('player--active');
    }
//     current += diceNumber;
//    current1.textContent = current;
    // if random number is 1 then reset current score to zero and change the active player
})
holdbtn.addEventListener('click',()=>{
    // add current score to global school
    scores[activeplayer] += current;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    if(scores[activeplayer] >= 20){
        // finish the game
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        document.getElementById(`name--${activeplayer}`).textContent = 'WINNER!';
        // hide dice image
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdbtn.classList.add('hidden');
    }else{
        switchplayer();
    }
})
newgame.addEventListener('click',init)