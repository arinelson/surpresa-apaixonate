document.querySelectorAll('.phraseButton').forEach((button, index) => {
    button.addEventListener('click', function() {
        this.style.display = 'none';
        const nextButton = document.querySelectorAll('.phraseButton')[index + 1];
        if (nextButton) {
            nextButton.style.opacity = 1;
        } else {
            const message = document.getElementById('surpriseMessage');
            message.classList.remove('hidden');
            for (let i = 0; i < 20; i++) {
                createHeart();
            }
        }
    });
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
