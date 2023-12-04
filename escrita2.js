var texto2= "Your worst fear is coming to get you."
var result2;

var count = 0;
function digitar() {
  result2 = document.getElementById("result2");
  window.setTimeout(function() { inserir(texto2[count]) }, 70);
}

function inserir(letra) {
  result2.innerHTML += letra;
  count++;
  if(count < texto2.length)
    window.setTimeout(function() { inserir(texto2[count]) }, 70);
}

window.onload = digitar;