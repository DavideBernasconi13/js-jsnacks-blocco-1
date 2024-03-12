// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.


let frutto = document.querySelector('input');
let btn = document.querySelector('button');
let result = document.getElementById('result');
result.innerHTML = '';


let frigo = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
console.log(frigo);
frigo.push('pesca');
console.log(frigo);

let trovato = false;


btn.addEventListener('click', function () {
    trovato = false;
    let valueInput = frutto.value;
    console.log('Il valore inserito è:', valueInput);

    for (let i = 0; i < frigo.length; i++) {
        if (frigo[i].toLowerCase() === valueInput.toLowerCase()) {
            trovato = true;
        }
        console.log(trovato);
    }


    if (trovato) {
        result.innerHTML = "Trovato! Devo solo preparare il cocktail.";
    } else {
        result.innerHTML = "Oh no, devo uscire a comprare il cocomero!";
    }

})



document.body.appendChild(result);



