const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

const gameStart = document.querySelector(".game-start");
// console.log(gameStart);
const scoreDisplay = document.getElementById("score");
// console.log(scoreDisplay);
let score = 0;


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
        // alert("GAME OVER");
        gameStart.classList.add("game-over");
        score = 0;
        scoreDisplay.textContent = score;
        dino.classList.add("dino-vanish");
        cactus.classList.add("cactus-vanish");
        if(confirm("GAME OVER, start again?") == true) {
            gameStart.classList.remove("game-over");
            dino.classList.remove("dino-vanish");
            cactus.classList.remove("cactus-vanish");
        }
    }
}, 10);