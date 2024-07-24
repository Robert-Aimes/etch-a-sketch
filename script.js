document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('grid-container');
    const input = document.getElementById('grid-size');
    const clickedButton = document.getElementById('enter');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function createGrid() {
        const size = parseInt(input.value);
        if (isNaN(size) || size <= 0) {
            alert("Must input a valid number greater than 0!");
            return;
        }
        container.innerHTML = ''; // Clear existing grid

        const squareSize = 400 / size; // Calculate the size of each square

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.className = 'grid-square';
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = getRandomColor();
            });
            container.appendChild(square);
        }
    }

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.className = 'grid-square';
        square.style.width = `16px`;
        square.style.height = `16px`;
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = getRandomColor();
        });
        container.appendChild(square);
    }

    clickedButton.addEventListener('click', createGrid);
    
  
});

