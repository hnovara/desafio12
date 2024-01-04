// Parte 1:

// Ejercicio 1:
let newSpan = document.createElement("span");
newSpan.textContent = "Temática elegida: Juguetes";

let contenedor = document.getElementById("container");
contenedor.appendChild(newSpan);

// Ejercicio 2:
// Sitio web de referencia:   https://www.cebra.com.ar/
// Paleta:
// Color1: #0074C1 ;
// Color2: #00A8FB ;
// Color3: #FCD85E ;
// Color4: #39B54A ;

// Ejercicio 3:
let arreglo = ['#0074C1','#00A8FB','#FCD85E','#39B54A'];
console.log(arreglo);

let selectElement = document.createElement('select');

arreglo.forEach(function(color) {
  let optionElement = document.createElement('option');

  optionElement.value = color;
  optionElement.text = color;

  selectElement.add(optionElement);
});

let contenedor2 = document.getElementById("container2");
contenedor2.appendChild(selectElement);