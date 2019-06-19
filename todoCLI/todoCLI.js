const readline = require('readline');
const log = (x) => {
    console.log(x);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [];
let clist=[];

log("Welcome to Todo CLI!");

log("--------------------------------");




let loop = function () {
    rl.question('(v) View \u25C9 (n) New \u25C9 (cX) Complete \u25C9 (dX) Delete \u25C9 (q) Quit \n >  ', (answer) => {

        if (answer == 'q') {
            log("See you soon!")
            return  rl.close();
        } else if (answer =='n'){
            rl.question("\n What needs doing? \n > ",(n1)=>{
                list.push(n1);
                log("\n ")
                loop();
            });
          
           
        } else if (answer.charAt(0) == 'c' ) {
            log("complete works");
        } else if (answer.charAt(0) == 'd' ) {

        } else if (answer == 'v') {
            log("\n ")
            let count = 0;
            for(let val of list){
                count++;
                log(`${count}     ${val}`);
            }
            log("\n ")
        }

        loop();
    });
    
};



loop();