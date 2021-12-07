const gamesURL = "http://localhost:3000/games"
const commentsURL = "http://localhost:3000/comments"
const gameForm = document.getElementById("game-form")
const gameName = document.getElementById("game-name")
const gameProducer = document.getElementById("game-producer")
const gameScore = document.getElementById("game-score")
const gameImage = document.getElementById("game-image")
const gameList = document.getElementById("card")

Game.fetchGames()
gameForm.addEventListener("submit",Game.submitGame)