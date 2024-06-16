document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const revealButton = document.getElementById('revealButton');
    const surpriseElement = document.getElementById('surprise');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Set initial volume (0.5 is half volume)
    backgroundMusic.volume = 0.3;

    // Replace with actual message from Python or directly in JavaScript
    const message = "Happy Father's Day!";

    messageElement.textContent = message;

    // Play background music on button click
    revealButton.addEventListener('click', function() {
        surpriseElement.style.display = 'block';
        revealButton.style.display = 'none';
        createBalloons(10); // Adjust number of balloons here

        // Ensure background music is playing
        if (backgroundMusic.paused) {
            backgroundMusic.play().then(() => {
                console.log('Background music started playing.');
            }).catch(error => {
                console.error('Failed to start background music:', error);
            });
        }
    });

    function createBalloons(numBalloons) {
        const balloonContainer = document.querySelector('.balloon-container');

        for (let i = 0; i < numBalloons; i++) {
            const balloon = document.createElement('img');
            balloon.src = 'balloon.png'; // Replace with your balloon image
            balloon.classList.add('balloon');
            balloon.style.left = `${Math.random() * 100}vw`; // Random horizontal position
            balloon.style.animationDuration = `${Math.random() * 10 + 15}s`; // Random duration between 15-25 seconds
            balloonContainer.appendChild(balloon);
        }

        // Clean up balloons after animation
        setTimeout(() => {
            balloonContainer.innerHTML = ''; // Remove all balloons
        }, 25000); // Adjust timeout to match longest animation duration
    }
});
