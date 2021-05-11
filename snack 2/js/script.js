
// Creare un squadre di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo squadre i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// funzione numero casuale con mix e max
function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min) + min); 
  }

// array di oggetti squadre
var squadre = [
    {
        nome:"squadra 1",
        puntiFatti:0,
        falliSubiti:0
    }
    ,
    {
        nome:"squadra 2",
        puntiFatti:0,
        falliSubiti:0
    }
    , 
    {
        nome:"squadra 3",
        puntiFatti:0,
        falliSubiti:0
    }
]

// sovrascrivi le proprietà
for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = getRandomInt (0, 20);
    squadre[i].falliSubiti = getRandomInt (0, 20);
    
}
    

// stampa squadre
console.log("squadre",squadre);

// array vuoto
var squadreModificato = [];
// ciclo per inserisce nel nuovo array le squadre col nome e i falli
for (var i = 0; i < squadre.length; i++) {
    var nome = squadre[i].nome;
    var falli = squadre[i].falliSubiti;
    squadreModificato.push({nome,falli})
}

console.log("squadre con solo nomi e falli",squadreModificato);

