let countHome = 0
let countGuest = 0

const hBtn1 = document.getElementById("homeScoreBtn1")
const hBtn2 = document.getElementById("homeScoreBtn2")
const hBtn3 = document.getElementById("homeScoreBtn3")
const gBtn1 = document.getElementById("guestScoreBtn1")
const gBtn2 = document.getElementById("guestScoreBtn2")
const gBtn3 = document.getElementById("guestScoreBtn3")

const scoreHome = document.getElementById("homeScore")
const scoreGuest = document.getElementById("guestSore")
const newGameBtn = document.getElementById("new-game")

hBtn1.addEventListener("click", function() {
    countHome += 1
    scoreHome.textContent = countHome
})

hBtn2.addEventListener("click", function() {
    countHome += 2
    scoreHome.textContent = countHome
})

hBtn3.addEventListener("click", function() {
    countHome += 3
    scoreHome.textContent = countHome
})

gBtn1.addEventListener("click", function() {

    countGuest += 1
    scoreGuest.textContent = countGuest
})

gBtn2.addEventListener("click", function() {

    countGuest += 2
    scoreGuest.textContent = countGuest
})

gBtn3.addEventListener("click", function() {

    countGuest += 3
    scoreGuest.textContent = countGuest
})

newGameBtn.addEventListener("click", function() {
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    countHome = 0
    countGuest = 0
})