// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


function myFunction(array,numeroMinore,numeroMaggiore){
    // ciclca dal numero minore fino al numero maggiore
    for (var i = numeroMinore; i <= numeroMaggiore; i++) {
        // pusha il contatore nell'array
        array.push([i]); 
    }
    return array;
}

// var array = [];
// console.log(myFunction(array,2,8))


