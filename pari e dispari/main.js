// pari e dispari
// l'utente sceglie se pari o dispari
// l'utente inserisce un numero compreso tra 1 e 5 
// generiamo un numero random da dassegnare al pc (FUNZIONE)
// sommiamo i due numeri
// stabiliamo se la somma dei due numeri è pari o dispari (FUNZIONE)
// dichiariamo il vincitore

let sceltaUtente = '';
let numeroUtente = 1;

do {
    sceltaUtente = prompt('Scegli: Pari o Dispari? Dai! Dai! Dai!').trim().toLowerCase();
} while ((sceltaUtente !== 'pari') && (sceltaUtente !== 'dispari'));

do {
    numeroUtente = parseInt(prompt('ora scegli un numero compreso tra 1 e 5 e premi "OK", vediamo chi vince...'));
    console.log(numeroUtente)
} while ((isNaN(numeroUtente)) || (numeroUtente < 1) || (numeroUtente > 5))

const numeroPc = getRangeNumber(1, 5);
const somma = numeroUtente + numeroPc;

document.body.innerHTML += `<h3>hai scelto ${sceltaUtente}, e hai scelto il numero ${numeroUtente}</h3>`;
document.body.innerHTML += `<h3>al computer è stato assegnato il numero ${numeroPc}</h3>`;
document.body.innerHTML += `<h3>la somma è ${somma} ed è ${evenOrOdd(somma)}`;

if (evenOrOdd(somma) === sceltaUtente) {
    document.body.innerHTML += `<h3>Hai vinto. :(</h3>`
} else {
    document.body.innerHTML += `<h3>HAI PERSO!!!! ahahahaha! </h3>`
}


// FUNZIONI

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return 'pari';
    }

    return 'dispari';
}

function getRangeNumber (min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}