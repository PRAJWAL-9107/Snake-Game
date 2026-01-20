const board = document.querySelector('.board');

const blockSize = 30;

const columns = Math.floor(board.clientWidth / blockSize);
const rows = Math.floor(board.clientHeight / blockSize);

board.style.gridTemplateColumns = `repeat(${columns}, ${blockSize}px)`;
board.style.gridTemplateRows = `repeat(${rows}, ${blockSize}px)`;

for (let i = 0; i < rows * columns; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    board.appendChild(block);
}
