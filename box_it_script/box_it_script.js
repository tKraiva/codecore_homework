function drawLine(num) {
    let line = '';
    for (let i = 0; i < num; i++) {
        line += '\u2500';
    }
    return line;
}
function drawTopBoarder(num) {
    let line = '';
    line += '\u250C';
    for (let i = 0; i < num; i++) {
        line += '\u2500';
    }
    line += '\u2510';
    return line;
}

function drawMiddleBoarder(num) {
    let line = '';
    line += '\u251C';
    for (let i = 0; i < num; i++) {
        line += '\u2500';
    }
    line += '\u2524';
    return line;
}
function drawBottomBoarder(num) {
    let line = '';
    line += '\u2514';
    for (let i = 0; i < num; i++) {
        line += '\u2500';
    }
    line += '\u2518';
    return line;
}


function drawBarsAround(str, spc) {
    let line = '';
    line += '\u2502';
    line += str;
    for (let i = 0; i < spc; i++) {
        line += ' ';
    }
    line += '\u2502';
    return line;
}

function boxIt(arr) {
    let max = 0;
    let arrPos = arr.length;
    //console.log(arrPos);
    for (let val of arr) {
        if (val.length > max) {
            max = val.length;
        }
    }
    let line = '';
    line += drawTopBoarder(max);
    let counter=arrPos;
    for (let val of arr) {
     
        line += '\n';
        line += drawBarsAround(val, (max - val.length));
        line += '\n';
        counter-=1;
        if (counter>0) {
            line += drawMiddleBoarder(max);
            console.log(counter);
        }
        
    }
    line += '\n';
    line += drawBottomBoarder(max);
    return line;
}

let arr = ['Jon Snow', 'Cersei Lannister'];


console.log(boxIt(arr));
// console.log(drawLine(8));
// console.log();
// console.log(drawTopBoarder(8));
// console.log();
// console.log(drawMiddleBoarder(8));
// console.log();
// console.log(drawBottomBoarder(8));
// console.log();
// console.log(drawBarsAround("    My name is Dan"));