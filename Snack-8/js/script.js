// // Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.
// (bonus: controllate che il numero sia realmente di 4 cifre e che sia effetivamente un numero altrimenti restituite un alert)


var numer = prompt('inserisci un numero di 4 cifre');
var MaxNumer = numer.length;

if(MaxNumer !== 4){
    alert('devi inserire un numero di 4 cifre');

} 

else if (isNaN(numer)){

    alert('non è un numero');
}

else{

var result = 0;

for( var i = 0; i < MaxNumer; i++){
    result += parseInt(numer[i]);
}

document.getElementById('output').innerHTML += result;

}