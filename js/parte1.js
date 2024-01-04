const titulo = document.querySelector("h3");

const tematica = "Juguetes";

const tematicaSpan = document.createElement("span");
tematicaSpan.textContent = `Temática elegida: ${tematica}`;

titulo.appendChild(tematicaSpan);

const paleta = ['#0074C1','#00A8FB','#FCD85E','#39B54A'];

const controlColores = document.getElementById("controlColores");

const select = document.createElement("select");

paleta.forEach((color) => {
    const option = document.createElement("option");
    option.textContent = color;
    option.value = color;
    select.appendChild(option);
});

controlColores.appendChild(select);

const checkboxModoSuperpuesto = document.createElement("input");
checkboxModoSuperpuesto.type = "checkbox";
checkboxModoSuperpuesto.id = "modoSuperpuesto";

const labelCheckbox = document.createElement("label");
labelCheckbox.textContent = "Modo superpuesto";
labelCheckbox.htmlFor = "modoSuperpuesto";

controlColores.appendChild(checkboxModoSuperpuesto);
controlColores.appendChild(labelCheckbox);

const contenedorCirculos = document.createElement("div");
contenedorCirculos.classList.add("contenedor");

const cajaContenedora = document.getElementById("cajaContenedora");
cajaContenedora.appendChild(contenedorCirculos);

const ordenColores = [];

for (let i = 0; i < 4; i++) {
    const circulo = document.createElement("div");
    const contenedorCirculo = document.querySelector(".contenedor");

    circulo.style.zIndex = 4 - i;

    circulo.classList.add("circulo");
    contenedorCirculos.appendChild(circulo);

    circulo.addEventListener("click", () => {
        const colorSeleccionado = select.value;
        const modoSuperpuesto = checkboxModoSuperpuesto.checked;

        const circulos = Array.from(
            contenedorCirculo.querySelectorAll(".circulo")
        );

        if (modoSuperpuesto) {
            const posicionCirculo = circulos.indexOf(circulo);

            for (let i = circulos.length - 1; i >= posicionCirculo; i--) {
                circulos[i].style.backgroundColor = colorSeleccionado;
                ordenColores[i] = colorSeleccionado;
            }
        } else {
            circulos.forEach((circulo, index) => {
                circulo.style.backgroundColor = ordenColores[index] || "";
            });

            circulo.style.backgroundColor = colorSeleccionado;
            ordenColores[circulos.indexOf(circulo)] = colorSeleccionado;
        }
    });

    ordenColores.push("");
}

const circulos = document.querySelectorAll(".circulo");
circulos.forEach((circulo, index) => {
    circulo.style.width = `${40 + index * 40}px`;
    circulo.style.height = `${40 + index * 40}px`;
});

const reset = document.createElement("button");
reset.textContent = "Reset";
reset.addEventListener("click", () => {
    circulos.forEach((circulo, index) => {
        circulo.style.backgroundColor = "";
        ordenColores[index] = "";
    });
});

controlColores.appendChild(reset);

window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 500) {
        circulos.forEach((circulo) => {
            circulo.style.backgroundColor = "grey";
            circulo.style.pointerEvents = "none";
        });

        select.disabled = true;
        reset.disabled = true;
        checkboxModoSuperpuesto.disabled = true;
    } else {
        circulos.forEach((circulo, index) => {
            circulo.style.backgroundColor = ordenColores[index] || "";
            circulo.style.pointerEvents = "auto";
        });

        select.disabled = false;
        reset.disabled = false;
        checkboxModoSuperpuesto.disabled = false;
    }
});
