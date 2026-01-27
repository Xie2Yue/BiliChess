const ChessName = {
    'king' : '国王',
    'queen' : '王后',
    'rook' : '车',
    'bishop' : '主教',
    'knight' : '马',
    'pawn' : '兵',
}
const ChessSvg = {
    'king_w' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path d="M12,18.3 L20,18.3 A4,6.3 0 0,0 12,18.3 Z" fill="#fff" stroke="#000" stroke-width="1.3"></path>
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M10,26.7 L 8.5,24.7 L23.5,24.7 L22,26.7 Z
                    M8.5,24.7 A7,5.3 45 0,1 16,17.2 A7,5.3 135 0,1 23.5,24.7 Z
                    M16,12 L16,6
                    M14,8 L18,8
                " 
                fill="#fff" stroke="#000" stroke-width="1.3"
            ></path>
        </svg>
    `,
    'king_b' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path d="M12,18.3 L20,18.3 A4,6.3 0 0,0 12,18.3 Z" fill="#000" stroke="#444" stroke-width="1.3"></path>
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M10,26.7 L 8.5,24.7 L23.5,24.7 L22,26.7 Z
                    M8.5,24.7 A7,5.3 45 0,1 16,17.2 A7,5.3 135 0,1 23.5,24.7 Z
                    M16,12 L16,6
                    M14,8 L18,8
                " 
                fill="#000" stroke="#444" stroke-width="1.3"
            ></path>
        </svg>
    `,
    'queen_b' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <circle cx="7" cy="12" r="1.15" fill="#000" stroke="#444" stroke-width="1"></circle>
            <circle cx="25" cy="12" r="1.15" fill="#000" stroke="#444" stroke-width="1"></circle>
            <circle cx="16" cy="9" r="1.3" fill="#000" stroke="#444" stroke-width="1"></circle>
            <circle cx="11.5" cy="10.5" r="1.225" fill="#000" stroke="#444" stroke-width="1"></circle>
            <circle cx="20.5" cy="10.5" r="1.225" fill="#000" stroke="#444" stroke-width="1"></circle>
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M10,26.7 L22,26.7 L22,24.7 L10,24.7 Z
                    M10,24.7 L 8.5,22.7 L23.5,22.7 L22,24.7 Z
                    M8.5,22.4 L7,13 L11.45,20 L11.55,20 L11.5,11.5 L14.5,20 L16,10 L17.5,20 L20.5,11.5 L20.95,20 L21.05,20 L25,13 L23.5,22.4 Z
                " 
                fill="#000" stroke="#444" stroke-width="1.3"
            ></path>
        </svg>
    `,
   'queen_w' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <circle cx="7" cy="12" r="1.15" fill="#fff" stroke="#000" stroke-width="1"></circle>
            <circle cx="25" cy="12" r="1.15" fill="#fff" stroke="#000" stroke-width="1"></circle>
            <circle cx="16" cy="9" r="1.3" fill="#fff" stroke="#000" stroke-width="1"></circle>
            <circle cx="11.5" cy="10.5" r="1.225" fill="#fff" stroke="#000" stroke-width="1"></circle>
            <circle cx="20.5" cy="10.5" r="1.225" fill="#fff" stroke="#000" stroke-width="1"></circle>
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M10,26.7 L22,26.7 L22,24.7 L10,24.7 Z
                    M10,24.7 L 8.5,22.7 L23.5,22.7 L22,24.7 Z
                    M8.5,22.4 L7,13 L11.45,20 L11.55,20 L11.5,11.5 L14.5,20 L16,10 L17.5,20 L20.5,11.5 L20.95,20 L21.05,20 L25,13 L23.5,22.4 Z
                " 
                fill="#fff" stroke="#000" stroke-width="1.3"
            ></path>
        </svg>
    `,
    'rook_w' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M8,28 L8,25 L24,25 L24,28
                    M24,25 L22,23 L22,15 L24,13 L24,10 L21.5,10 L21.5,11 L18.5,11 L18.5,10 L13.5,10 L13.5,11 L10.5,11 L10.5 10 L8,10 L8,13 L10,15 L10,23 L8,25
                " 
                fill="#fff" stroke="#000" stroke-width="1.3"
            ></path>
            <path 
                d="
                    M22,23 L10,23  M22,15 L10,15 M24,13 L8,13
                " 
                fill="#fff" stroke="#222" stroke-width="1"
            ></path>
        </svg>
    `,
    'rook_b' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M8,28 L8,25 L24,25 L24,28
                    M24,25 L22,23 L22,15 L24,13 L24,10 L21.5,10 L21.5,11 L18.5,11 L18.5,10 L13.5,10 L13.5,11 L10.5,11 L10.5 10 L8,10 L8,13 L10,15 L10,23 L8,25
                " 
                fill="#000" stroke="#444" stroke-width="1.3"
            ></path>
            <path 
                d="
                    M22,23 L10,23  M22,15 L10,15 M24,13 L8,13
                " 
                fill="#000" stroke="#99" stroke-width="1"
            ></path>
        </svg>
    `,
    'bishop_b' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M19,26.7, L13,26.7 C10,20 12,12 16,10 L16,18 L18,18 L18,12 C20,12 22,20 19,26.7 Z
                " 
                fill="#000" stroke="#444" stroke-width="1.3"
            ></path>
            <circle cx="16" cy="9" r="1.3" fill="#000" stroke="#444" stroke-width="1"></circle>
            <path d="M16,18 L18,18 L18,12" fill="none" stroke="#888" stroke-width="1"></path>
        </svg>
    `,
    'bishop_w' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M7,30 L25,30 L25,28 L7,28 Z
                    M19,26.7, L13,26.7 C10,20 12,12 16,10 L16,18 L18,18 L18,12 C20,12 22,20 19,26.7 Z
                " 
                fill="#fff" stroke="#000" stroke-width="1.3"
            ></path>
            <circle cx="16" cy="9" r="1.3" fill="#fff" stroke="#000" stroke-width="1"></circle>
            <path d="M16,18 L18,18 L18,12" fill="none" stroke="#222" stroke-width="1"></path>
        </svg>
    `,
    'knight_b' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M14,10 C25,12 25,24, 25,30 L11,30 C11,26 16,26 16,16
                    M16,16 C16,20 9,21 8,25 L8.2,22 L8.0,22 L7,24 A3,3 0 0,1 4,21 Q6,14 10,10 L10.3,8.8 L10.5,8.8 L11.7,10 L12.7,10 L13.7,8.8 L14,8.8 L14,10
                    M6.7,20 A.3,.3 0 1,0 6.7,19.4 A.3,.3 0 1,0 6.7,20
                " 
                fill="#000" stroke="#444" stroke-width="1.3"
            ></path>
            <circle cx="10.3" cy="13" r="0.5" fill="#000" stroke="#444" stroke-width="1"></circle>
        </svg>
    `,
    'knight_w' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M14,10 C25,12 25,24, 25,30 L11,30 C11,26 16,26 16,16
                    M16,16 C16,20 9,21 8,25 L8.2,22 L8.0,22 L7,24 A3,3 0 0,1 4,21 Q6,14 10,10 L10.3,8.8 L10.5,8.8 L11.7,10 L12.7,10 L13.7,8.8 L14,8.8 L14,10
                    M6.7,20 A.3,.3 0 1,0 6.7,19.4 A.3,.3 0 1,0 6.7,20
                " 
                fill="#fff" stroke="#000" stroke-width="1.3"
            ></path>
            <circle cx="10.3" cy="13" r="0.5" fill="#fff" stroke="#000" stroke-width="1"></circle>
        </svg>
    `,
    'pawn_w' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M7.5,30 L24.5,30 A8.5,8.5 0 0,0 19,20 A5,5 0 0,0 18.5,12 A2.75,2.75 0 1,0 13.5,12 A5,5 0 0,0 13,20 A8.5,8.5 0 0,0 7.5,30 Z
                " 
                fill="#fff" stroke="#000" stroke-width="1.3"
            ></path>
        </svg>
    `,
    'pawn_b' : `
        <svg width="100%" height="100%" viewBox="0 0 32 32">
            <path 
                d="
                    M7.5,30 L24.5,30 A8.5,8.5 0 0,0 19,20 A5,5 0 0,0 18.5,12 A2.75,2.75 0 1,0 13.5,12 A5,5 0 0,0 13,20 A8.5,8.5 0 0,0 7.5,30 Z
                " 
                fill="#000" stroke="#444" stroke-width="1.3"
            ></path>
        </svg>
    `
}

function getChessName(key) {
    return ChessName[key] ?? '默认';
}
function getChessSvg(type, color) {
    return ChessSvg[type + "_" + color] ?? (color === 'b' ?
        `
            <svg width="100%" height="100%" viewBox="0 0 32 32">
                <circle cx="16" cy="20" r="10" fill="#000" stroke="#444" stroke-width="1.3"></circle>
                <text x="8" y="24.5" font-size="16" fill="#444">${getChessName(type)[0]}</text>
            </svg>
        `
        :
        `
            <svg width="100%" height="100%" viewBox="0 0 32 32">
                <circle cx="16" cy="20" r="10" fill="#fff" stroke="#000" stroke-width="1.3"></circle>
                <text x="8" y="24.5" font-size="16" fill="#000">${getChessName(type)[0]}</text>
            </svg>
        `
    );
}