const name1 = document.querySelector('#player1');
const name2 = document.querySelector('#player2');
const player1Input = document.querySelector('#player1-input');
const player2Input = document.querySelector('#player2-input');
const formPlayer1 = document.querySelector('#form-player1');
const formPlayer2 = document.querySelector('#form-player2');
const submitPlayer1 = document.querySelector('#submit-player1');
const submitPlayer2 = document.querySelector('#submit-player2');
const changeName1 = document.querySelector('#change-name1');
const changeName2 = document.querySelector('#change-name2');

changeName1.addEventListener('click', function() {
    const value = name1.innerHTML;
    name1.classList.add('hide');
    player1Input.classList.remove('hide');
    submitPlayer1.classList.remove('hide');
    changeName1.classList.add('hide');
    player1Input.value = value;

});

changeName2.addEventListener('click', function() {
    const value = name2.innerHTML;
    name2.classList.add('hide');
    submitPlayer2.classList.remove('hide');
    player2Input.classList.remove('hide');
    changeName2.classList.add('hide');
    player2Input.value = value;
});

submitPlayer1.addEventListener('click', function() {
    const value = player1Input.value;
    changeName1.classList.remove('hide');
    name1.classList.remove('hide');
    player1Input.classList.add('hide');
    submitPlayer1.classList.add('hide');
    name1.innerHTML = value;
});

submitPlayer2.addEventListener('click', function() {
    const value = player2Input.value;
    changeName2.classList.remove('hide');
    name2.classList.remove('hide');
    player2Input.classList.add('hide');
    submitPlayer2.classList.add('hide');
    name2.innerHTML = value;
});

const scorePlayer1 = document.querySelector('#score-player1');
const scorePlayer2 = document.querySelector('#score-player2');
var numscorePlayer1 = 0;
var numscorePlayer2 = 0;

function add1toplayer1 () {
    numscorePlayer1 += 1;
    scorePlayer1.innerHTML = numscorePlayer1;
}

function add1toplayer2 () {
    numscorePlayer2 += 1;
    scorePlayer2.innerHTML = numscorePlayer2;
}

function minus1toplayer1 () {
    numscorePlayer1 -= 1;
    if (numscorePlayer1 < 0) numscorePlayer1 = 0;
    scorePlayer1.innerHTML = numscorePlayer1;
}

function minus1toplayer2 () {
    numscorePlayer2 -= 1;
    if (numscorePlayer2 < 0) numscorePlayer2 = 0;
    scorePlayer2.innerHTML = numscorePlayer2;
}