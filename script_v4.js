
function resetearTexto() {
  location.reload();
}

function validarTexto() {
  var texto = document.getElementById("texto-entrada").value;
  var regex = /^[a-z ,.;:/+\-]+$/; // Expresión regular para validar que el texto solo contenga letras minúsculas sin tildes y los caracteres permitidos

  if (!regex.test(texto)) { // Si el texto no cumple con la expresión regular
    alert("El texto solo puede contener letras minúsculas y sin tilde");
    return false; // Terminar la ejecución de la función
  }
  return true; // El texto es válido
}

var contenidoOriginal = document.getElementById("principal").innerHTML;

function borrar(){
  var accion = document.getElementById("principal");
  accion.innerHTML = "";
  var aux = document.getElementById("secundario");
  aux.innerHTML="";

}

function mostrar(){
  var accion = document.getElementById("principal");
  accion.innerHTML = contenidoOriginal;
  var aux = document.getElementById("secundario");
  aux.innerHTML="";
}


function encriptarTexto(){
 

  var textoValido = validarTexto();

  if (!textoValido) { // Si el texto no es válido 
    mostrar();
    return; // Terminar la ejecución de la función
  }

  borrar();

  var texto = document.getElementById("texto-entrada").value;

  var textoEncriptado = texto.replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat");

  var encriptado = document.createElement("textarea");
  encriptado.innerText = textoEncriptado;
  encriptado.classList.add("texto");
  
  var outputDiv = document.getElementById("secundario");
  outputDiv.appendChild(encriptado);

  copiar.style.display="block";

}



function desencriptarTexto(){

  borrar();


  var texto = document.getElementById("texto-entrada").value;
  var textoDesencriptado = texto.replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");

  var desencriptado = document.createElement("textarea");
  desencriptado.innerText = textoDesencriptado;
  desencriptado.classList.add("texto");

  var outputDiv = document.getElementById("secundario");
  outputDiv.appendChild(desencriptado);

  copiar.style.display="block";
}


function copiarAlPortapapeles(){
  var salida = document.getElementById("secundario");
  var rango = document.createRange();
  rango.selectNode(secundario);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(rango);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();

  document.getElementById("texto-entrada").select();

}

/*
const barra = document.getElementById("barra");

barra.addEventListener("input", function() {
  if (this.value >= 0 && this.value <= 80) {
    this.classList.remove("luna");
    this.classList.add("sol");
  } else {
    this.classList.remove("sol");
    this.classList.add("luna");
  }
});

*/
