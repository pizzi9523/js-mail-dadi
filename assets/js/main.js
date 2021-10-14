//Chiedo all'utente la sua email
const userEmail = prompt("Inserisci la tua email: (es. nome@email.it)");
//console.log(userEmail);

//Creo una lista di email consentiti
const emailsAllowed = ["giuseppe@email.it", "fabio@email.it", "tiziano@email.it", "fabiola@email.it", "chiara@email.it"];
//console.log(emailsAllowed);

//controllo che sia nella lista di chi può accedere
const flag = emailsAllowed.includes(userEmail);
//console.log(flag);

//stampo un messaggio appropriato sull'esito del controllo
const messageElement = document.getElementById("access");
if (flag == true) {
    //console.log("Accesso Consentito");
    messageElement.innerHTML = "Accesso Consentito"
    messageElement.style.color = "green"
}
else {
    //console.log("Accesso Negato");
    messageElement.innerHTML = "Accesso Negato"
    messageElement.style.color = "red"
}

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer

const userRandomNumber = Math.floor(Math.random() * 6) + 1;
const pcRandomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(userRandomNumber);
// console.log(pcRandomNumber);



//Stabilire il vincitore in base al punteggio più alto
if (userRandomNumber > pcRandomNumber) {
    console.log("User hai vinto");
}
else if (userRandomNumber < pcRandomNumber) {
    console.log("PC hai vinto");
}
else {
    console.log("Avete pareggiato");
}