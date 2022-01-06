// richiedere all'utente l'inserimento di una parola
// prelevare ogni singolo carattere che la compone
// creare una nuova parola inserendo i caratteri nell'ordine contrario
// riscrivere la parola al contrario
// compararla con la parola originariamente scritta dall'utente
// se le due parole combaciano ip ip urrà


const userWord = prompt('inserisci una parola');
let revWord = reverse(userWord);

if (revWord === userWord) {
    document.body.innerHTML = `<h3>Yes! ${userWord} è palindroma</h3>`;
} else {
    document.body.innerHTML = `<h3>No! ${userWord} NON è palindroma! Riprova...</h3>`;
}


// FUNZIONI

function reverse(word) {
    let revWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        revWord += word[i];
    }

    return revWord;
}