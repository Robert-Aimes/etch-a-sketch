document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('grid-container');

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.className = 'grid-square';
        container.appendChild(square);
    }
});