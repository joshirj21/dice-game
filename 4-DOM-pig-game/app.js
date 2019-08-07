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
scores[0] = 0;
scores[1] = 0;
var activeplayer = 0;

document.querySelector("#current-" + 0).textContent = 0
document.querySelector("#current-" + 1).textContent = 0

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
function random() {
    return Math.floor(Math.random() * 6 + 1);
}



// document.querySelector(".btn-roll").addEventListener("click", function () {
//     score = random();
//     if (score !== 1) {
//         score[activeplayer] = score[activeplayer] + score;
//         document.querySelector("#current-" + activeplayer).textContent = score[activeplayer];
//     }
//     else {
//         score[activeplayer] = 0;
//         document.querySelector("#current-" + activeplayer).textContent = score[activeplayer];
//     }

// })

document.querySelector(".btn-hold").addEventListener("click", function () {
    document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer];
    document.querySelector("#current-" + 0).textContent = 0;
    document.querySelector("#current-" + 1).textContent = 0;
    document.querySelector(".player-" + 0 + "-panel").classList.toggle("active");
    document.querySelector(".player-" + 1 + "-panel").classList.toggle("active");
    if (activeplayer === 0) {
        activeplayer = 1;
    }
    else if (activeplayer === 1) {
        activeplayer = 0;
    }
})

document.querySelector(".btn-roll").addEventListener("click", function () {
    score = random();
    document.getElementsByClassName("dice")[0].setAttribute("src", "dice-" + score + ".png")
    if (score !== 1) {
        scores[activeplayer] = scores[activeplayer] + score;
        document.querySelector("#current-" + activeplayer).textContent = Number(document.querySelector("#current-" + activeplayer).textContent) + score;
    }
    else {
        scores[activeplayer] = 0;
        document.querySelector("#score-" + activeplayer).textContent = scores[activeplayer];
        document.querySelector("#current-" + 0).textContent = 0;
        document.querySelector("#current-" + 1).textContent = 0;
        document.querySelector(".player-" + 0 + "-panel").classList.toggle("active");
        document.querySelector(".player-" + 1 + "-panel").classList.toggle("active");
        if (activeplayer === 0) {
            activeplayer = 1;
        }
        else if (activeplayer === 1) {
            activeplayer = 0;
        }
    }

})