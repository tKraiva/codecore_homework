const readline = require('readline');
const log = (x) => {
    console.log(x);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


log("Welcome to Todo CLI!");

log("--------------------------------");




let loop = function () {
    rl.question('(v) View \u25C9 (n) New \u25C9 (cX) Complete \u25C9 (dX) Delete \u25C9 (q) Quit \n > ', (answer) => {

        if (answer == 'q') {
            log("See you soon!")
            return rl.close();
        } else if (answer =='n'){

        } else if (answer.charAt(0) == 'c' ) {
            log("complete works");
        } else if (answer.charAt(0) == 'd' ) {

        } else if (answer == 'v') {

        }

        loop();
    });
    
};



loop();