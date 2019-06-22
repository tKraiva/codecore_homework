const name1 = process.argv[2];
const name2 = process.argv[3];
const name3 = process.argv[4];

let arr =  process.argv.slice(2);;




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

    for (let val of arr) {
        if (val.length > max) {
            max = val.length;
        }
    }
    let line = '';
    line += drawTopBoarder(max);
    let counter = 0;
    for (let val of arr) {

        line += '\n';
        line += drawBarsAround(val, (max - val.length));

        counter += 1;
        if (counter < arrPos) {
            line += '\n';
            line += drawMiddleBoarder(max);

        }

    }
    line += '\n';
    line += drawBottomBoarder(max);
    return line;
}

console.log(boxIt(arr));
