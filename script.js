function showHearts() {
    const container = document.getElementById('hearts-container');

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
