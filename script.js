document.getElementById('button1').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('button2').classList.remove('hidden');
});

document.getElementById('button2').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('button3').classList.remove('hidden');
});

document.getElementById('button3').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('button4').classList.remove('hidden');
});

document.getElementById('button4').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('button5').classList.remove('hidden');
});

document.getElementById('button5').addEventListener('click', function() {
    this.classList.add('hidden');
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
