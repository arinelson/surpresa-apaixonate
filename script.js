const buttons = document.querySelectorAll('.phrase-button');
let currentButtonIndex = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        button.classList.add('hidden');
        if (index < buttons.length - 1) {
            buttons[index + 1].classList.remove('hidden');
            randomizeButtonPosition(buttons[index + 1]);
        } else {
            showFinalMessage();
        }
    });
});

function randomizeButtonPosition(button) {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function showFinalMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    for (let i = 0; i < 15; i++) {
        createHeart();
        createStar();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 5}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 5 + 5}s`;

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 10000);
}
