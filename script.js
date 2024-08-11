document.getElementById('surpriseButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    for (let i = 0; i < 20; i++) {
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
