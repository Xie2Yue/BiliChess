const BoardsContainer = document.getElementById('boards-container');

const board = new Board(BoardsContainer);

function resetBoards() {
    board.reset();
}