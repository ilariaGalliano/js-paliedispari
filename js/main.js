/*
* Es. 1
* Palindroma
*
*/

//Chiedere all'utente di inserire una parola
var parola = prompt('Inserire una parola').toLowerCase;
console.log(parola);

// Definisco la funzione personalizzata
function reverseString(stringa) {

}
// Uso la funzione personalizzata
var nuovaStringa = reverseString(parola);
console.log(nuovaStringa);

//Creare una funzione per invertire i caratteri di una stringa.
  function reverseString(stringa) {

  return stringa.split("").reverse().join("");
}

// Capire se la parola inserita è palindroma
if(parola == nuovaStringa){
  console.log('La parola e\' palindroma');
  document.getElementById('text').innerHTML = 'La parola e\' palindroma';
}
else{
  console.log('La parola non e\' palindroma');
  document.getElementById('text').innerHTML = 'La parola non e\' palindroma';
}

/*
* Es. 2
* Pari e Dispari
*
*/

// L'utente sceglie pari o dispari
var evenOdd = prompt('Pari o Dispari').toLowerCase().trim();
console.log('Scelta giocatore: ' + evenOdd);

// L'utente inserisce un numero da 1 a 5
var number = parseInt( prompt('Inserisci un numero da 1 a 5'));
console.log(number);

// Uso la funzione personalizzata
var newString = genRandom(1, 5);
console.log(newString);

// Generatore numeri random da 1 a 5 con una funzione
function genRandom(min,max){

  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Sommiamo i due numeri
var sum = number + newString;
console.log('La somma dei due numeri è : ' + sum);

// Uso la funzione personalizzata
var final = sumEvenOdd(sum);
//console.log(final);

// Stabiliamo se la somma dei due numeri è pari o dispari con una funzione
function sumEvenOdd(numEvenOdd) {

  if (numEvenOdd % 2 == 0) {
//    console.log('La somma dei due numeri è pari');
    return 'pari';
  }
  else{
  //  console.log('La somma dei due numeri è dispari');
    return 'dispari';
  }
}

//Dichiariamo chi ha vinto in base alla scelta pari o dispari.
if (evenOdd === final) {
  console.log('Hai vinto');
  document.getElementById('text').innerHTML = 'Hai vinto';
}
else {
  console.log('Hai perso');
  document.getElementById('text').innerHTML = 'Hai perso';
}
