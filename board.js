class Board {
    static _index = 0;
    constructor(BoardsContainer) {
        this.Tiles = new Map();
        this.Chess = new Map();

        this.idx = Board._index ++;

        let ele = document.createElement('div');
        ele.id = `board(${this.idx})`;
        ele.classList.add('board');

        BoardsContainer.appendChild(ele);
        this.HtmlElement = ele;

        this.reset();
    }
    removeTile(tile) {
        tile.HtmlElement.remove();
    }
    removeChess(chess) {
        chess.HtmlElement.remove();
    }
    createTile(x, y) {
        let tile = {x, y, color: ((x + y + 1) & 1) ? 'w' :'b'};

        let ele = document.createElement('div');
        ele.id = `tile(${x},${y})`;
        ele.classList.add('tile');
        ele.classList.add('tile-' + tile.color);
        ele.style.left = - 160 + x * 40 + 'px';
        ele.style.top = 80 - y * 40 + 'px';
        ele.setAttribute('coord', `(${x},${y})`);

        this.HtmlElement.appendChild(ele);
        tile.HtmlElement = ele;

        this.Tiles.set(`(${x},${y})`, tile);
    }
    createChess(x, y, type, color) {
        let chess = {
            x, y, type, color,
            tagList: [
                type
            ],
            hasMoved: false
        }

        let ele = document.createElement('div');
        ele.id = type + `(${x},${y})`;
        ele.classList.add('chess');
        ele.style.left = - 158 + x * 40 + 'px';
        ele.style.top = 82 - y * 40 + 'px';
        ele.innerHTML = getChessSvg(type, color);

        this.HtmlElement.appendChild(ele);
        chess.HtmlElement = ele;

        this.Chess.set(`(${x},${y})`, chess);
    }
    reset() {
        //delete
        this.Tiles.forEach( tile => {
            this.removeTile(tile);
        });
        this.Tiles.clear();
        this.Chess.forEach( chess => {
            this.removeChess(chess);
        });
        this.Chess.clear();

        //rebuild
        for(let i = 0; i < 8; i ++) {
            for(let j = 0; j < 8; j ++) {
                this.createTile(i, j);
            }
        }
        ChessList.forEach( ({x, y, type, color}) => {
            this.createChess(x, y, type, color);
        });
    }
}