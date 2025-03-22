let score1El = document.getElementById('score1-el')
let score2El = document.getElementById('score2-el')
let periodEl = document.getElementById('period-el')
let score1 = 0
let score2 = 0
let period = 0

console.log(score1El.textContent)
console.log(score2El.textContent)
function reset() {
    score1 = 0
    score2 = 0
    score1El.textContent = score1
    score2El.textContent = score2
}

function add(team, points) {
    if (team === 1) {
        score1 += points
        score1El.textContent = score1
    } else if (team == 2) {
        score2 += points
        score2El.textContent = score2
    }
}

function resetPeriod() {
    period = 0
    periodEl.textContent = "1st Quarter"
}

function updatePeriod() {
    period += 1
    let ordinal = ["1st", "2nd", "3rd", "4th"]
    period %= 4
    periodEl.textContent = ordinal[period] + " Quarter"
}