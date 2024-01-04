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

// Ejercicio 4:
let checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'superpuesto-checkbox';

let label = document.createElement('label');
label.htmlFor = 'superpuesto-checkbox';
label.textContent = 'Modo superpuesto';

let contenedor3 = document.getElementById("container3");
contenedor3.appendChild(checkbox);
contenedor3.appendChild(label);

// Ejercicio 5:
function changeColor(circle) {
   let selectedColor = selectElement.value;

   if (checkbox.checked) {
       let circles = document.getElementsByClassName('circle');
       for (let i = 0; i < circles.length; i++) {
           circles[i].style.backgroundColor = selectedColor;
        }
    } else {
        circle.style.backgroundColor = selectedColor;
    }
}


