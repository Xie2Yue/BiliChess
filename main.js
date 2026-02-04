const BoardsScreen = document.getElementById('boards-screen');
const BoardsContainer = document.getElementById('boards-container');

const board = new Board(BoardsContainer);
const game = new Game(board);
const Camera = {
    x: 0, y: 0, scale: 1, isDown: false, lastX: 0, lastY: 0
}


function resetBoards() {
    board.reset();
    game.reset();
}
function resetCamera() {
    Camera.x = 0;
    Camera.y = 0;
    Camera.scale = 1;
    BoardsContainer.style.transform = `translate(${Camera.x}px, ${Camera.y}px) scale(${Camera.scale})`;
}
function switchTurn() {
    game.switchTurn();
}

BoardsScreen.addEventListener('mousedown', event => {
    event.preventDefault();
    const {x: x0, y: y0} = document.getElementById('tile(0,0)').getClientRects()[0];
    if(event.button === 0) {
        let nx = Math.floor( (event.clientX - x0) / 40 / Camera.scale );
        let ny = Math.floor( (y0 - event.clientY) / 40 / Camera.scale ) + 1;
        game.ClickOn(nx, ny);
    }
    if(event.button === 1) {
        Camera.isDown = true;
        Camera.lastX = event.clientX;
        Camera.lastY = event.clientY;
    }
});
BoardsScreen.addEventListener('mouseup', event => {
    Camera.isDown = false;
});
BoardsScreen.addEventListener('mouseleave', event => {
    Camera.isDown = false;
});
BoardsScreen.addEventListener('wheel', event => {
    Camera.scale += event.deltaY * -0.001;
    if(Camera.scale > 3) {
        Camera.scale = 3;
    } else if(Camera.scale < 0.3) {
        Camera.scale = 0.3;
    }
    BoardsContainer.style.transform = `translate(${Camera.x}px, ${Camera.y}px) scale(${Camera.scale})`;
});
BoardsScreen.addEventListener('mousemove', event => {
    if(Camera.isDown) {
        Camera.x += event.clientX - Camera.lastX;
        Camera.y += event.clientY - Camera.lastY;

        Camera.lastX = event.clientX;
        Camera.lastY = event.clientY;
        BoardsContainer.style.transform = `translate(${Camera.x}px, ${Camera.y}px) scale(${Camera.scale})`;
    }
});