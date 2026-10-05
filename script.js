/* =====================================================
   OBTENER ELEMENTOS DEL HTML
===================================================== */

// Pantallas

const inicio = document.getElementById("inicio");

const bienvenida =
    document.getElementById("bienvenida");

const regalo =
    document.getElementById("regalo");

const recuerdosIntro =
    document.getElementById("recuerdosIntro");

const galeria =
    document.getElementById("galeria");

const frase =
    document.getElementById("frase");

const carta =
    document.getElementById("carta");

const pastel =
    document.getElementById("pastel");

const pantallaFinal =
    document.getElementById("final");


// Input

const nombre =
    document.getElementById("nombre");

const errorNombre =
    document.getElementById("errorNombre");


// Botones

const btnComenzar =
    document.getElementById("btnComenzar");

const btnRegalo =
    document.getElementById("btnRegalo");

const btnAbrirCaja =
    document.getElementById("btnAbrirCaja");

const btnFotos =
    document.getElementById("btnFotos");

const btnCarta =
    document.getElementById("btnCarta");

const btnMensaje =
    document.getElementById("btnMensaje");

const btnPastel =
    document.getElementById("btnPastel");

const btnVelas =
    document.getElementById("btnVelas");

const btnRepetir =
    document.getElementById("btnRepetir");


// Textos

const nombreBienvenida =
    document.getElementById("nombreBienvenida");

const nombreFinal =
    document.getElementById("nombreFinal");

const cajaRegalo =
    document.getElementById("cajaRegalo");

const mensajeCaja =
    document.getElementById("mensajeCaja");

const textoVelas =
    document.getElementById("textoVelas");



/* =====================================================
   FUNCIÓN PARA CAMBIAR DE PANTALLA
===================================================== */

function cambiarPantalla(actual, siguiente) {

    actual.classList.remove("activa");

    setTimeout(() => {

        siguiente.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 250);
}



/* =====================================================
   VALIDACIÓN DEL NOMBRE
===================================================== */

btnComenzar.addEventListener(
    "click",
    function () {

        const nombreEscrito =
            nombre.value.trim();


        // Limpiar mensaje anterior

        errorNombre.textContent = "";


        // Comprobar si está vacío

        if (nombreEscrito === "") {

            errorNombre.textContent =
                "⚠️ Escribe tu nombre para continuar.";

            nombre.focus();

            return;
        }


        // Comprobar que sea Dylan

        if (
            nombreEscrito.toLowerCase()
            !== "dylan"
        ) {

            errorNombre.textContent =
                "🤭 Mmm... esta sorpresa no es para ese nombre. Intenta nuevamente.";

            nombre.focus();

            return;
        }


        // Mostrar nombre

        nombreBienvenida.textContent =
            "Dylan";

        nombreFinal.textContent =
            "Dylan";


        // Continuar

        cambiarPantalla(
            inicio,
            bienvenida
        );

    }
);



/* =====================================================
   ENTER EN EL INPUT
===================================================== */

nombre.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Enter") {

            btnComenzar.click();

        }

    }
);



/* =====================================================
   BIENVENIDA → REGALO
===================================================== */

btnRegalo.addEventListener(
    "click",
    function () {

        cambiarPantalla(
            bienvenida,
            regalo
        );

    }
);



/* =====================================================
   ABRIR CAJA DE REGALO
===================================================== */

btnAbrirCaja.addEventListener(
    "click",
    function () {

        cajaRegalo.classList.add(
            "abierta"
        );


        mensajeCaja.textContent =
            "✨ Sabía que eras tú...";


        btnAbrirCaja.textContent =
            "Continuar ✨";


        btnAbrirCaja.onclick = function () {

            cambiarPantalla(
                regalo,
                recuerdosIntro
            );

        };

    }
);



/* =====================================================
   INTRO → GALERÍA
===================================================== */

btnFotos.addEventListener(
    "click",
    function () {

        cambiarPantalla(
            recuerdosIntro,
            galeria
        );

    }
);



/* =====================================================
   GALERÍA → FRASE
===================================================== */

btnCarta.addEventListener(
    "click",
    function () {

        cambiarPantalla(
            galeria,
            frase
        );

    }
);



/* =====================================================
   FRASE → CARTA
===================================================== */

btnMensaje.addEventListener(
    "click",
    function () {

        cambiarPantalla(
            frase,
            carta
        );

    }
);



/* =====================================================
   CARTA → PASTEL
===================================================== */

btnPastel.addEventListener(
    "click",
    function () {

        cambiarPantalla(
            carta,
            pastel
        );

    }
);



/* =====================================================
   APAGAR VELAS
===================================================== */

btnVelas.addEventListener(
    "click",
    function () {

        const pastelVisual =
            document.querySelector(".pastel");


        // Apagar llamas

        pastelVisual.classList.add(
            "apagado"
        );


        textoVelas.textContent =
            "✨ Deseo concedido...";


        btnVelas.textContent =
            "Ver la sorpresa final 🎉";


        btnVelas.onclick = function () {

            cambiarPantalla(
                pastel,
                pantallaFinal
            );


            // Lanzar confeti

            setTimeout(
                crearConfeti,
                500
            );

        };

    }
);



/* =====================================================
   CREAR CONFETI
===================================================== */

function crearConfeti() {

    const cantidad = 160;


    const formas = [
        "●",
        "■",
        "◆",
        "★",
        "✦"
    ];


    const colores = [

        "#ff7eb6",

        "#9b7cff",

        "#ffd166",

        "#ffffff",

        "#7de2d1",

        "#c4b5fd"

    ];


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const pieza =
            document.createElement("div");


        pieza.classList.add(
            "confeti"
        );


        // Forma

        pieza.textContent =
            formas[
                Math.floor(
                    Math.random()
                    * formas.length
                )
            ];


        // Color

        pieza.style.color =
            colores[
                Math.floor(
                    Math.random()
                    * colores.length
                )
            ];


        // Posición

        pieza.style.left =
            Math.random() * 100 + "vw";


        // Tamaño

        const tamaño =
            7 + Math.random() * 10;


        pieza.style.fontSize =
            tamaño + "px";


        // Duración

        const duracion =
            3 + Math.random() * 5;


        pieza.style.animationDuration =
            duracion + "s";


        // Retraso

        pieza.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(
            pieza
        );


        // Eliminar después

        setTimeout(
            () => {

                pieza.remove();

            },
            8000
        );

    }

}



/* =====================================================
   BOTÓN PARA REPETIR
===================================================== */

btnRepetir.addEventListener(
    "click",
    function () {

        // Limpiar caja

        cajaRegalo.classList.remove(
            "abierta"
        );


        // Restaurar textos

        mensajeCaja.textContent = "";

        btnAbrirCaja.textContent =
            "Abrir regalo 🎁";


        // Restaurar velas

        const pastelVisual =
            document.querySelector(".pastel");


        pastelVisual.classList.remove(
            "apagado"
        );


        textoVelas.textContent =
            "Pide un deseo y apaga las velas ✨";


        btnVelas.textContent =
            "Apagar las velas 🕯️";


        // Restaurar funcionamiento

        btnAbrirCaja.onclick = null;

        btnVelas.onclick = null;


        // Volver al inicio

        cambiarPantalla(
            pantallaFinal,
            inicio
        );

    }
);



/* =====================================================
   EFECTO EXTRA:
   DOBLE CLIC EN LAS FOTOS
===================================================== */

const fotos =
    document.querySelectorAll(".foto");


fotos.forEach(
    function (foto) {

        foto.addEventListener(
            "dblclick",
            function () {

                foto.classList.add(
                    "foto-destacada"
                );


                setTimeout(
                    () => {

                        foto.classList.remove(
                            "foto-destacada"
                        );

                    },
                    1000
                );

            }
        );

    }
);