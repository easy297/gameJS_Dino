const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")
const gameStart = document.querySelector(".game-start");


let score = 0;
const scoreDisplay = document.getElementById("score");


document.addEventListener("keydown", function(event) {
    jump();
})

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
        score++;
        scoreDisplay.textContent = score;
    }

    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300);
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        gameStart.classList.add("game-over");
        score = 0;
        scoreDisplay.textContent = score;
        if(confirm("GAMEOVER, start again?") == true) {
            gameStart.classList.remove("game-over");
        }
    }
}, 10);