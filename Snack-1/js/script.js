// -----------Primo Snack L’utente inserisce due numeri in successione, con due prompt.
//                        Il software stampa il maggiore.


var primo = parseInt(prompt('primo numero'));
var secondo = parseInt(prompt('secondo numero'));

if(primo > secondo){
    document.getElementById('numeri').innerHTML = 'il primo numero è maggiore ' + '--' +  primo ;

}else if(primo < secondo){
    document.getElementById('numeri').innerHTML = 'il secondo numero è maggiore' + '--' + secondo;
}