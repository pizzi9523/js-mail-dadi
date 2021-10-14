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
