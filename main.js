// Es muss eine Funktion entwickelt werden, mit der man einfachen Text in Morsecode übersetzen kann. Das Array ist im Kommentar angegeben.

let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

let inputArray = [];

let inputElement = document.querySelector("#input");
let buttonElement = document.querySelector("#encrypt");
let outputElement = document.querySelector("#output");


buttonElement.addEventListener("click", (event) => {
    event.preventDefault();

    let inputUpperCase = input.value.toUpperCase();

    //Es soll von 0 bis die Länge von Input gehen
    for (i = 0; i <= (input.value.length) - 1; i++) {
        //Speichere jeweils immer den Buchstaben
        let letter = inputUpperCase.charAt(i);

        //Zähle von 1-36 (Alle Zeichen im Array sind 37 insgesamt)
        for (let i = 0; i <= 36; i++) {
            //Falls die Eingabe mit dem MorseCode übereinstimmt, für jede Zahl von 1-37 ausspucken
            if (letter === morseAlphabet[i].letter) {
                console.log(morseAlphabet[i].morseCode);
            }
        }
    }

})





