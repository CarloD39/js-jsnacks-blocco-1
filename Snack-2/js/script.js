// -------------secondo snack L’utente inserisce due parole in successione, con due prompt.
//                            Il software stampa prima la parola più corta, poi la parola più lunga.

var prima = prompt('prima parola');
var seconda = prompt('seconda parola');

if(prima.length < seconda.length ){
    document.getElementById('parole').innerHTML = prima + '-----' + seconda;

}else if(prima.length > seconda.length){
    document.getElementById('parole').innerHTML = seconda + '-----' + prima;
}