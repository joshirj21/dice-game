/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score = 0;
var scores = [];
var activeplayer = 0;
var dice = document.getElementsByClassName("dice")[0];
var btnRoll = document.querySelector(".btn-roll")
var btnHold = document.querySelector(".btn-hold");
init();

btnHold.addEventListener("click", function () {
    document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer];
    if (scores[activeplayer] >= 30) {
        winner();
    }
    else {
        dice.style.display = "none";
        changePlayer();
    }
})

btnRoll.addEventListener("click", function () {
    score = random();    //Picking out random number between 1 and 6
    dice.style.display = "block";
    dice.setAttribute("src", "dice-" + score + ".png")    //Setting dice image corresponding to the generated random number
    if (score !== 1) {
        scores[activeplayer] = scores[activeplayer] + score;    //Setting total score equals score.
        document.querySelector("#current-" + activeplayer).textContent = Number(document.querySelector("#current-" + activeplayer).textContent) + score;  //Adding score to current score
    }
    else {
        dice.style.display = "none";
        scores[activeplayer] = 0;
        document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer];
        changePlayer();
    }
})

document.querySelector(".btn-new").addEventListener("click", function () {
    window.location.reload();
})
////////////////////////////////////////////////////////////////////////////////////////////////////
//  Functions
/////////////////////////////////////////////////////////////////////////////////////////////////////

function init() {
    scores[0] = 0;
    scores[1] = 0;
    document.querySelector("#current-" + 0).textContent = 0
    document.querySelector("#current-" + 1).textContent = 0
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;
    dice.style.display = "none";
}


function winner() {
    dice.style.display = "none";
    document.querySelector(".player-" + 0 + "-panel").classList.remove("active");
    document.querySelector(".player-" + 1 + "-panel").classList.remove("active");
    document.querySelector(".player-" + activeplayer + "-panel").classList.add("winner")
    document.querySelector("#name-" + activeplayer).textContent = "Winner";
    btnRoll.disabled = true;
    btnHold.disabled = true;
}


function random() {
    return Math.floor(Math.random() * 6 + 1);
}


function changePlayer() {
    document.querySelector(".player-" + 0 + "-panel").classList.toggle("active");
    document.querySelector(".player-" + 1 + "-panel").classList.toggle("active");
    document.querySelector("#current-" + 0).textContent = 0;
    document.querySelector("#current-" + 1).textContent = 0;
    if (activeplayer === 0) {
        activeplayer = 1;
    }
    else if (activeplayer === 1) {
        activeplayer = 0;
    }
}