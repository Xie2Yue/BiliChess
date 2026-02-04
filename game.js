class Game {
    constructor(board) {
        this.board = board;
        this.selectedTile = null;
        this.turn = 'w';
        this.turnBox = document.getElementById('turn-box');
        this.MovableTilesList = [];
        this.AttackableTilesList = [];
        this.ChangableTilesList = [];
        this.reset();
    }
    reset() {
        //delete
        this.clearTag();


        //rebuild
        this.selectedTile = null;
        this.turn = 'w';
        this.turnBox.style.backgroundColor = '#fff';
        this.turnBox.style.color = '#000';
        this.turnBox.innerText = '白方执棋';
    }
    switchTurn() {
        
        if(this.turn === 'w') {
            this.turn = 'b';
            this.turnBox.style.backgroundColor = '#000';
            this.turnBox.style.color = '#fff';
            this.turnBox.innerText = '黑方执棋';
        }
        else {
            this.turn = 'w';
            this.turnBox.style.backgroundColor = '#fff';
            this.turnBox.style.color = '#000';
            this.turnBox.innerText = '白方执棋';
        }
    }
    ClickOn(x, y) {
        if(!this.board.Tiles.has(`(${x},${y})`)) return;
        let tile = this.board.Tiles.get(`(${x},${y})`);

        if(this.board.Chess.has(`(${x},${y})`)) {
            let chess = this.board.Chess.get(`(${x},${y})`);

            if(chess.color === this.turn) {

                if(tile.HtmlElement.classList.contains('tile-changable')) {
                    let self = this.board.Chess.get(`(${this.selectedTile.x},${this.selectedTile.y})`);

                    this.moveChess(chess);
                    this.moveChess(self, tile.x, tile.y);
                    this.moveChess(chess, this.selectedTile.x, this.selectedTile.y);
                    this.clearTag();
                    return;
                }


                if(this.selectedTile === tile) {
                    this.clearTag();
                } else {
                    this.clearTag();
                    this.selectedTile = tile;
                    tile.HtmlElement.classList.add('tile-selected');

                    this.getTargetTiles(chess).forEach( targetTile => {
                        switch(this.checkTile(`(${targetTile.x},${targetTile.y})`)) {
                            case 1:
                                targetTile.HtmlElement.classList.add('tile-movable');
                                targetTile.HtmlElement.innerHTML= MovableTile;
                                this.MovableTilesList.push(targetTile);
                                break;
                            case 2:
                                targetTile.HtmlElement.classList.add('tile-attackable');
                                targetTile.HtmlElement.innerHTML= AttackableTile;
                                this.AttackableTilesList.push(targetTile);
                                break;
                            case 3:
                                targetTile.HtmlElement.classList.add('tile-changable');
                                targetTile.HtmlElement.innerHTML= ChangableTile;
                                this.ChangableTilesList.push(targetTile);
                                break;
                        }
                    });

                }
            }
            else {
                if(tile.HtmlElement.classList.contains('tile-attackable')) {
                    let self = this.board.Chess.get(`(${this.selectedTile.x},${this.selectedTile.y})`);

                    this.board.removeChess(chess);
                    this.board.Chess.delete(`(${chess.x},${chess.y})`);

                    this.moveChess(self, tile.x, tile.y);
                    this.clearTag();
                }
            }
        }
        else {

                if(tile.HtmlElement.classList.contains('tile-movable')) {
                    let chess = this.board.Chess.get(`(${this.selectedTile.x},${this.selectedTile.y})`);

                    this.moveChess(chess, tile.x, tile.y);
                    this.clearTag();
                }
        }
    }
    moveChess(chess, x, y) {
        this.board.Chess.delete(`(${chess.x},${chess.y})`);

        chess.x = x;
        chess.y = y;
        chess.hasMoved = true;

        chess.HtmlElement.style.left = - 158 + x * 40 + 'px';
        chess.HtmlElement.style.top = 82 - y * 40 + 'px';

        this.board.Chess.set(`(${x},${y})`, chess);
    }
    clearTag() {
        if(this.selectedTile !== null) {
            this.selectedTile.HtmlElement.classList.remove('tile-selected');
            this.selectedTile = null;
        }

        this.MovableTilesList.forEach( tile => {
            tile.HtmlElement.classList.remove('tile-movable');
            tile.HtmlElement.innerHTML = "";
        });
        this.MovableTilesList = [];

        this.AttackableTilesList.forEach( tile => {
            tile.HtmlElement.classList.remove('tile-attackable');
            tile.HtmlElement.innerHTML = "";
        });
        this.AttackableTilesList = [];

        this.ChangableTilesList.forEach( tile => {
            tile.HtmlElement.classList.remove('tile-changable');
            tile.HtmlElement.innerHTML = "";
        });
        this.ChangableTilesList = [];
    }
    checkTile(coord) {
        if(this.board.Tiles.has(coord)) {
            let chess = this.board.Chess.get(coord);
            if(chess === undefined) return 1;
            if(chess.color === this.turn) return 3;
            return 2;
        }
        return 0;
    }
    getSlideTargetTiles(chess, dx, dy, len) {
        let nx = chess.x;
        let ny = chess.y;
        let ret = [];
        if(len === -1) {
            for(let i = 1;;i++) {
                nx += dx;
                ny += dy;
                switch(this.checkTile(`(${nx},${ny})`)) {
                    case 2:
                        ret.push(this.board.Tiles.get(`(${nx},${ny})`));
                    default:
                        return ret;
                    case 1:
                        ret.push(this.board.Tiles.get(`(${nx},${ny})`));
                        break;
                }
            }
        } else {
            for(let i = 1;i <= len; i++) {
                nx += dx;
                ny += dy;
                switch(this.checkTile(`(${nx},${ny})`)) {
                    case 2:
                        ret.push(this.board.Tiles.get(`(${nx},${ny})`));
                    default:
                        return ret;
                    case 1:
                        ret.push(this.board.Tiles.get(`(${nx},${ny})`));
                        break;
                }
            }
            return ret;
        }
    }
    getOrthogonalTargetTiles(chess, dx, dy) {
        let ret = [];
        [{nx:dx,ny:dy},{nx:-dx,ny:dy},{nx:dx,ny:-dy},{nx:-dx,ny:-dy},{nx:dy,ny:dx},{nx:-dy,ny:dx},{nx:dy,ny:-dx},{nx:-dy,ny:-dx}].forEach( ({nx, ny}) => {
            let check = this.checkTile(`(${chess.x+nx},${chess.y+ny})`);
            if(check === 1 || check === 2) {
                ret.push(this.board.Tiles.get(`(${chess.x+nx},${chess.y+ny})`));
            }
        });
        return ret;
    }
    getPawnTargetTiles(chess) {
        const {x,y,color} = chess;
        let ret = [];
        if(this.checkTile(`(${x},${y + (color === 'w' ? 1 : -1)})`) === 1) {
            ret.push(this.board.Tiles.get(`(${x},${y + (color === 'w' ? 1 : -1)})`));
        }
        if(this.checkTile(`(${x-1},${y + (color === 'w' ? 1 : -1)})`) === 2) {
            ret.push(this.board.Tiles.get(`(${x-1},${y + (color === 'w' ? 1 : -1)})`));
        }
        if(this.checkTile(`(${x+1},${y + (color === 'w' ? 1 : -1)})`) === 2) {
            ret.push(this.board.Tiles.get(`(${x+1},${y + (color === 'w' ? 1 : -1)})`));
        }
        if(!chess.hasMoved && this.checkTile(`(${x},${y + (color === 'w' ? 2 : -2)})`) === 1) {
            ret.push(this.board.Tiles.get(`(${x},${y + (color === 'w' ? 2 : -2)})`));
        }
        return ret;
    }
    getRookTargetTiles(chess) {
        let ret = [];
        [{nx:1,ny:0},{nx:-1,ny:0},{nx:0,ny:1},{nx:0,ny:-1}].forEach( ({nx, ny}) => {
            this.getSlideTargetTiles(chess, nx, ny, -1).forEach( tile => {
                ret.push(tile);
            });
        });
        return ret;
    }
    getBishopTargetTiles(chess) {
        let ret = [];
        [{nx:1,ny:1},{nx:-1,ny:1},{nx:1,ny:-1},{nx:-1,ny:-1}].forEach( ({nx, ny}) => {
            this.getSlideTargetTiles(chess, nx, ny, -1).forEach( tile => {
                ret.push(tile);
            });
        });
        return ret;
    }
    getQueenTargetTiles(chess) {
        let ret = [];
        [{nx:1,ny:0},{nx:-1,ny:0},{nx:0,ny:1},{nx:0,ny:-1},{nx:1,ny:1},{nx:-1,ny:1},{nx:1,ny:-1},{nx:-1,ny:-1}].forEach( ({nx, ny}) => {
            this.getSlideTargetTiles(chess, nx, ny, -1).forEach( tile => {
                ret.push(tile);
            });
        });
        return ret;
    }
    getKingTargetTiles(chess) {
        let ret = [];
        [{nx:1,ny:0},{nx:-1,ny:0},{nx:0,ny:1},{nx:0,ny:-1},{nx:1,ny:1},{nx:-1,ny:1},{nx:1,ny:-1},{nx:-1,ny:-1}].forEach( ({nx, ny}) => {
            this.getSlideTargetTiles(chess, nx, ny, 1).forEach( tile => {
                ret.push(tile);
            });
        });
        this.board.Chess.forEach( chess => {
            if(chess.type === 'rook' && chess.color === this.turn) {
                ret.push(this.board.Tiles.get(`(${chess.x},${chess.y})`));
            }
        })
        return ret;
    }
    getKnightTargetTiles(chess) {
        return this.getOrthogonalTargetTiles(chess, 1, 2);
    }
    getTargetTiles(chess) {
        let ret = [];
        if(chess.tagList.includes('pawn')) {
            this.getPawnTargetTiles(chess).forEach( tile => {
                ret.push(tile);
            });
        }
        if(chess.tagList.includes('rook')) {
            this.getRookTargetTiles(chess).forEach( tile => {
                ret.push(tile);
            });
        }
        if(chess.tagList.includes('bishop')) {
            this.getBishopTargetTiles(chess).forEach( tile => {
                ret.push(tile);
            });
        }
        if(chess.tagList.includes('queen')) {
            this.getQueenTargetTiles(chess).forEach( tile => {
                ret.push(tile);
            });
        }
        if(chess.tagList.includes('king')) {
            this.getKingTargetTiles(chess).forEach( tile => {
                ret.push(tile);
            });
        }
        if(chess.tagList.includes('knight')) {
            this.getKnightTargetTiles(chess).forEach( tile => {
                ret.push(tile);
            });
        }
        return ret;
    }
}