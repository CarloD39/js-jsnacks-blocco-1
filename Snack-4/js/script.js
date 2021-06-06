// ------------- quarto snack  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// ----------------------------chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = ['carlo', 'luigi', 'mimmo', 'luca', 'francesco', 'andrea', 'michele'];
var nome = prompt('nome invitato');
var check = false;

var output = document.getElementById('persone');

for (var i = 0; i < invitati.length; i++){
    if (invitati[i] === nome){
        check = true;
        break;
    }   
}   
 
if (check === true){
    output.innerHTML += 'il nome è presente'; 
} else{
    output.innerHTML += 'il nome  NON è in lista';
}