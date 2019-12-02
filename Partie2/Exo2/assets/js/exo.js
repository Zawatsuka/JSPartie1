//declaration d'une variable nommée word liée a l'id "word"
var word = document.getElementById('word');
//le "addeventlister" ecoute l'evenement "keyup" sur la variable "word" et appelle la fonction "incredible"
word.addEventListener('keyup', incredible);
//declaration d'une fonction nommée "incredible"
function incredible() {
  //l'alert affiche la valeur de la variable "word"
   alert(word.value);
}
