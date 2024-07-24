document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('grid-container');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.className = 'grid-square';
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }
});

