const characterInfo = {
    "0": "-----", 
    "1": ".----", 
    "2": "..---", 
    "3": "...--", 
    "4": "....-", 
    "5": ".....", 
    "6": "-....", 
    "7": "--...", 
    "8": "---..", 
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    " ": "/",
    ".": ".-.-.-",
    "'": ".----.",
    "(": "-.--.",
    ":": "---...",
    "+": ".-.-.",
    "\"": ".-..-.",
    ",": "--..--",
    "!": "-.-.--",
    ")": "-.--.-",
    ";": "-.-.-.",
    "-": "-....-",
    "$": "...-..-",
    "?": "..--..",
    "/": "-..-.",
    "&": ".-...",
    "=": "-...-",
    "_": "..--.-",
    "@": ".--.-."
}

const inverseCharacterInfo = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    ".-.-.-": ".",
    ".----.": "'",
    "-.--.": "(",
    "---...": ":",
    ".-.-.": "+",
    ".-..-.": "\"",
    "--..--": ",",
    "-.-.--": "!",
    "-.--.-": ")",
    "-.-.-.": ";",
    "-....-": "-",
    "...-..-": "$",
    "..--..": "?",
    "-..-.": "/",
    ".-...": "&",
    "-...-": "=",
    "..--.-": "_",
    ".--.-.": "@"
}

var isEncoding = true;

const inputTextArea = document.getElementById('inputTextArea');

function findCode(){
    var inputedText = inputTextArea.value.toLowerCase();
    var outputText = '';     
    
    if(isEncoding === true){        
        for (var i = 0; i < inputedText.length; i++) {
            if(characterInfo[inputedText[i]] !== undefined) { 
                outputText += characterInfo[inputedText[i]] + ' ';
            }
        }
    }
    else if(isEncoding === false)
    {   
        inputedText = ' ' + inputedText + ' ';
        var stringToDecode = inputedText.split(" ");
        console.log(stringToDecode)
        for (var i = 0; i < stringToDecode.length; i++) {
            if(inverseCharacterInfo[stringToDecode[i]] !== undefined){
                outputText += inverseCharacterInfo[stringToDecode[i]];
            }              
        }      
    }
    document.getElementById('outputText').innerHTML = outputText.toUpperCase();
}

function autoGrow(element){
    element.style.height = '5px';
    element.style.height = ((element.scrollHeight > 210)? element.scrollHeight: '210') + 'px';
    console.log(element.scrollHeight);
}

function changeCodingType(){
    var encodeRbtn = document.getElementById('encode');
    var decodeRbtn = document.getElementById('decode');
    document.getElementById('inputTextArea').value = "";
    document.getElementById('outputText').innerHTML = "";
    if(encodeRbtn.checked === true) isEncoding = true;
    else if(decodeRbtn.checked === true) isEncoding = false;
    else alert("Error!");
    autoGrow(inputTextArea);
}

inputTextArea.addEventListener('keyup', findCode);