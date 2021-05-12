// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// array di oggetti bici
var bici = [
    {
        nome:"bici da montagna",
        peso: 12
    }
    ,
    {
        nome:"bici da strada",
        peso: 10
    }
    ,
    {
        nome:"nome prova 3",
        peso: 15
    }
]

// stampa bici con peso minore
console.log("bici con peso minore",bici[0]);

var biciLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso ){
        biciLeggera = bici[i];
    }
}

console.log("bici con peso minore",biciLeggera);