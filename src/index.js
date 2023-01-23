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

function decode(expr) {
    let inMorse = (letter) =>{
        result = '';
        while(letter.length>0){
            switch (letter.slice(0 ,2)) {
                case '10': {result += '.'; break;}
                case '11': {result += '-'; break;}
            }
            letter = letter.slice(2);
        }
        return MORSE_TABLE[result];
    }

    let result = '', letter='';
    let words = expr.split('**********');

    words.forEach(word => {
        while(word.length>0){
            letter = word.slice(0 ,10);
            result += inMorse(letter);
            word = word.slice(10);
        }
        result += ' ';
    });
    return result.trim();
}

module.exports = {
    decode
}
