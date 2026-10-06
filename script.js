/* =====================================================
   VARIABLES
===================================================== */

let nombreUsuario = "Dylan";


/* =====================================================
   CAMBIAR DE PÁGINA
===================================================== */

function siguiente(idPagina) {

    const paginaActual =
        document.querySelector(".pagina.activa");

    const paginaNueva =
        document.getElementById(idPagina);


    if (!paginaNueva) {
        return;
    }


    if (paginaActual) {
        paginaActual.classList.remove("activa");
    }


    setTimeout(() => {

        paginaNueva.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        /*
         * Cuando llegamos a determinadas páginas
         * activamos efectos especiales.
         */

        if (idPagina === "corazones") {

            iniciarCorazones();

        }


        if (idPagina === "estrellas") {

            iniciarEstrellas();

        }


        if (idPagina === "kawaii") {

            crearConfeti();

        }


        if (idPagina === "polaroids") {

            crearConfeti();

        }


        if (idPagina === "final") {

            iniciarGranFinal();

        }

    }, 150);
}


/* =====================================================
   COMENZAR
===================================================== */

function comenzar() {

    const input =
        document.getElementById("nombre");

    const error =
        document.getElementById("errorNombre");


    const nombre =
        input.value.trim();


    if (nombre === "") {

        error.classList.add("mostrar");

        input.focus();

        return;
    }


    error.classList.remove("mostrar");


    /*
     * Si escribe cualquier nombre,
     * lo guardamos.
     */

    nombreUsuario = nombre;


    const nombreFinal =
        document.getElementById("nombreFinal");


    nombreFinal.textContent =
        nombreUsuario;


    /*
     * Comenzamos.
     */

    siguiente("intro");


    crearConfeti();
}


/* =====================================================
   ENTER PARA CONTINUAR
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById("nombre");


        if (!input) {
            return;
        }


        input.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    comenzar();

                }

            }
        );

    }
);


/* =====================================================
   CREAR CONFETI
===================================================== */

function crearConfeti() {

    const contenedor =
        document.querySelector(
            ".confeti-container"
        );


    if (!contenedor) {
        return;
    }


    for (let i = 0; i < 45; i++) {

        const pieza =
            document.createElement("div");


        pieza.classList.add("confeti");


        pieza.style.left =
            Math.random() * 100 + "%";


        pieza.style.animationDelay =
            Math.random() * 1.5 + "s";


        pieza.style.animationDuration =
            2 + Math.random() * 3 + "s";


        const tamaño =
            5 + Math.random() * 7;


        pieza.style.width =
            tamaño + "px";


        pieza.style.height =
            tamaño * 1.5 + "px";


        /*
         * Variamos las formas.
         */

        if (Math.random() > .5) {

            pieza.style.borderRadius = "50%";

        }


        contenedor.appendChild(pieza);


        setTimeout(() => {

            pieza.remove();

        }, 6500);

    }
}


/* =====================================================
   CORAZONES FLOTANTES
===================================================== */

let intervaloCorazones = null;


function iniciarCorazones() {

    /*
     * Evitamos crear varios intervalos.
     */

    if (intervaloCorazones) {
        clearInterval(intervaloCorazones);
    }


    const simbolos = [
        "💗",
        "💕",
        "💖",
        "💓",
        "💞",
        "💝"
    ];


    intervaloCorazones =
        setInterval(() => {

            crearCorazon(simbolos);

        }, 280);


    /*
     * Creamos algunos inmediatamente.
     */

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            crearCorazon(simbolos);

        }, i * 120);

    }
}


function crearCorazon(simbolos) {

    const contenedor =
        document.querySelector(
            ".corazones-container"
        );


    if (!contenedor) {
        return;
    }


    const corazon =
        document.createElement("div");


    corazon.classList.add(
        "corazon-flotante"
    );


    corazon.textContent =
        simbolos[
            Math.floor(
                Math.random() *
                simbolos.length
            )
        ];


    corazon.style.left =
        Math.random() * 100 + "%";


    corazon.style.fontSize =
        18 + Math.random() * 28 + "px";


    corazon.style.animationDuration =
        4 + Math.random() * 5 + "s";


    corazon.style.animationDelay =
        Math.random() * .5 + "s";


    contenedor.appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 10000);
}


/* =====================================================
   ESTRELLAS
===================================================== */

function iniciarEstrellas() {

    const pagina =
        document.getElementById("estrellas");


    if (!pagina) {
        return;
    }


    /*
     * Pequeñas estrellas fugaces.
     */

    for (let i = 0; i < 8; i++) {

        const estrella =
            document.createElement("span");


        estrella.textContent = "✦";


        estrella.style.position =
            "absolute";


        estrella.style.color =
            "#fff4ad";


        estrella.style.fontSize =
            8 + Math.random() * 15 + "px";


        estrella.style.left =
            Math.random() * 100 + "%";


        estrella.style.top =
            Math.random() * 100 + "%";


        estrella.style.opacity =
            "0";


        estrella.style.animation =
            "parpadear 2s ease-in-out infinite";


        estrella.style.animationDelay =
            Math.random() * 3 + "s";


        pagina.querySelector(
            ".cielo"
        ).appendChild(estrella);

    }
}


/* =====================================================
   GRAN FINAL
===================================================== */

function iniciarGranFinal() {

    /*
     * Mucho confeti.
     */

    crearConfeti();

    setTimeout(
        crearConfeti,
        700
    );

    setTimeout(
        crearConfeti,
        1400
    );


    /*
     * También corazones.
     */

    iniciarCorazones();


    /*
     * Después de un rato paramos
     * los corazones para no saturar.
     */

    setTimeout(() => {

        if (intervaloCorazones) {

            clearInterval(
                intervaloCorazones
            );

            intervaloCorazones = null;

        }

    }, 12000);
}


/* =====================================================
   VOLVER AL INICIO
===================================================== */

function volverInicio() {

    /*
     * Ocultar todas las páginas.
     */

    document
        .querySelectorAll(".pagina")
        .forEach(
            pagina => {

                pagina.classList.remove(
                    "activa"
                );

            }
        );


    /*
     * Mostrar inicio.
     */

    document
        .getElementById("inicio")
        .classList.add("activa");


    /*
     * Limpiar nombre.
     */

    const input =
        document.getElementById("nombre");


    input.value = "";


    /*
     * Quitar error.
     */

    document
        .getElementById("errorNombre")
        .classList.remove(
            "mostrar"
        );


    /*
     * Confeti.
     */

    setTimeout(
        crearConfeti,
        300
    );
}


/* =====================================================
   LIMPIEZA AL CERRAR/RECARGAR
===================================================== */

window.addEventListener(
    "beforeunload",
    () => {

        if (intervaloCorazones) {

            clearInterval(
                intervaloCorazones
            );

        }

    }
);