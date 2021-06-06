// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


var numeri =[];

for( var x = 1; x <= 6; x++){
    var cifra= parseInt(prompt('inserisci numero'));
    if( cifra % 2 !== 0) {
        numeri.push(cifra);
    }
}

document.getElementById('output').innerHTML = numeri;