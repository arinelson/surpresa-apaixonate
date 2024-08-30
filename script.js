// Função para mover e exibir o próximo botão
function showNextButton(currentButtonId, nextButtonId) {
    const currentButton = document.getElementById(currentButtonId);
    const nextButton = document.getElementById(nextButtonId);

    // Oculta o botão atual
    currentButton.classList.add('hidden');

    // Exibe o próximo botão em uma posição aleatória
    nextButton.style.left = `${Math.random() * 80}vw`;
    nextButton.style.top = `${Math.random() * 80}vh`;
    nextButton.classList.remove('hidden');
}

// Eventos de clique para os botões
document.getElementById('button1').addEventListener('click', function() {
    showNextButton('button1', 'button2');
});

document.getElementById('button2').addEventListener('click', function() {
    showNextButton('button2', 'button3');
});

document.getElementById('button3').addEventListener('click', function() {
    showNextButton('button3', 'button4');
});

document.getElementById('button4').addEventListener('click', function() {
    showNextButton('button4', 'button5');
});

document.getElementById('button5').addEventListener('click', function() {
    // Oculta o último botão e exibe a mensagem final
    document.getElementById('button5').classList.add('hidden');
    document.getElementById('messageContainer').classList.remove('hidden');
});
