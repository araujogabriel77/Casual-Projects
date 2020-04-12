let playerPoints = 0;
let compPoints = 0;

const choices = ['pedra', 'papel', 'tesoura'];

const playerImg = document.getElementById('player-choice')
const compImg = document.getElementById('comp-choice')

const buttonRock = document.getElementById("rock").addEventListener("click", () => letsGame(choices[0]))
const buttonPaper = document.getElementById("paper").addEventListener("click", () => letsGame(choices[1]))
const buttonScissors = document.getElementById("scissors").addEventListener("click", () => letsGame(choices[2]))


function letsGame(playerChoice) {
    let compResult = choices[(compChoice()) - 1];
    changeImg(playerChoice, compResult);

    result(playerChoice, compResult)
}

function compChoice() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function changeImg(player, comp) {
    compImg.src = `./${comp}.png`

    playerImg.src = `./${player}.png`
}

function result(player, comp) {
    const pp = document.getElementById('player')
    const cp = document.getElementById('comp')

    if (player === comp) {
        return;
    } else if (player === 'pedra' && comp === 'tesoura' || player === 'papel' && comp === 'pedra' || player === 'tesoura' && comp === 'papel') {
        playerPoints += 1;
        pp.innerText = `${playerPoints}`
    } else {
        compPoints += 1;
        cp.innerText = `${compPoints}`
    }
    return;
}
