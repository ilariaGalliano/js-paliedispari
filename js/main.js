/*
* Es. 1
* Palindroma
*
*/

//Chiedere all'utente di inserire una parola
var parola = prompt('Inserire una parola');
console.log(parola);

// definisco la funzione personalizzata
function reverseString(stringa) {

}
// uso la funzione personalizzata
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
