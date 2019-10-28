// Sélectionne l'élement
var myForm = document.getElementById('lastname');
// Si on clique sur une touche
myForm.onkeyup = function() {
  var lastname = document.getElementById("lastname").value;
  alert(lastname);
