let score = 0;
let timeLeft = 10;
let timerInterval;

document.getElementById('heart-button').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = `Pontos: ${score}`;
});

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Tempo restante: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    document.getElementById('heart-button').disabled = true;
    let message = `Parabéns! Você fez ${score} pontos!`;
    
    if (score >= 20) {
        message += " Meu amor, minha chatinha, minha vida, eu te amo cada vez mais a cada dia!";
    } else {
        message += " Ana Clara, meu amor, minha chatinha, minha vida, você é o meu melhor presente!";
    }

    document.getElementById('message').textContent = message;
}

window.onload = () => {
    startTimer();
};
