// SNACK 12 Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var Names = ['Carlo', 'Lugi', 'Pietro', 'Temistocle', 'Alessandro', 'Enea'];

var LastNames = ['Blu', 'Verde', 'Rosso', 'Arancio', 'Nero', 'Bianchi'];

var RandomList = [''];


// Ciclo For//
// for(var i = 0; i < 3; i++){

//     var RandomNames = Names[Math.floor(Math.random() * Names.length)];
//     var RandLastNames = LastNames[Math.floor(Math.random() * LastNames.length)];

//     var NewGuest = RandomNames + '  ' + RandLastNames;

//     RandomList.includes(NewGuest);

//     RandomList.push(NewGuest);

//     document.getElementById('stampa').innerHTML += "<li>" + NewGuest + "</li>";
// }

// Ciclo While//

while(RandomList.length <= 3){

    var RandomNames = Names[Math.floor(Math.random() * Names.length)];
    var RandLastNames = LastNames[Math.floor(Math.random() * LastNames.length)];

    var NewGuest = RandomNames + '  ' + RandLastNames;

    if(!RandomList.includes(NewGuest)){

        RandomList.push(NewGuest);

        document.getElementById('stampa').innerHTML += "<li>" + NewGuest + "</li>";
    }
}















