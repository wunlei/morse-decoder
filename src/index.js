const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


var exprReg = /[0-1]{10,10}|[*]*/g;
var letterReg = /[0-1*]{2,2}/g;
let wordArray = [];

function decode(expr) {
    var exprArray = expr.match(exprReg);
    for (let i = 0; i < exprArray.length - 1; i++) {
        let letterArray = (exprArray[i]).match(letterReg);
        if (exprArray[i] === "**********") {
            let space = " ";
            wordArray.push(space);
        } else {
            let word = "";
            for (let j = 0; j < letterArray.length; j++) {
                if (letterArray[j] === "10") {
                    word = word + ".";
                } else if (letterArray[j] === "11") {
                    word = word + "-";
                } else {
                    word;
                }
            }
            wordArray.push(word);
        }
    }
    let decodeMorse = "";
    for (let k = 0; k < wordArray.length; k++) {
        if (MORSE_TABLE.hasOwnProperty(wordArray[k])) {
            decodeMorse = decodeMorse + MORSE_TABLE[wordArray[k]];
        } else {
            decodeMorse = decodeMorse + " ";
        }
    }
    return decodeMorse;
};

module.exports = {
    decode
}