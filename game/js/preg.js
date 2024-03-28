class preg {
    constructor(p, resp, op1, op2, op3) {
        this.p = p;
        this.resp = resp;
        this.op1 = op1;
        this.op2 = op2;
        this.op3 = op3;

    }

    op() {
        return [this.resp, this.op1, this.op2, this.op3].sort((a, b) => Math.random() - 0.5);
    }
}


// Definición de preguntas
/*const preguntasCompletas = [
    new preg("¿Qué significa HTML?", "HyperText Markup Language", "HyperTool Markup Language", "Home Tool Markup Language", "HyperText Markup Leveler"),
    new preg("¿Cuál es el lenguaje de programación más utilizado en el desarrollo web?", "JavaScript", "Python", "Java", "C#"),
    new preg("¿Qué significa CSS?", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"),
    new preg("¿Qué hace la función 'console.log()' en JavaScript?", "Imprimir en la consola", "Enviar un correo electrónico", "Crear una variable", "Dibujar un gráfico"),
    new preg("¿Cuál es el resultado de '5 + '5' en JavaScript?", "55", "10", "Error", "50"),
    new preg("¿Qué es un 'array' en programación?", "Una colección de elementos", "Una variable de texto", "Una función", "Un bucle"),
    new preg("¿Qué es un 'boolean' en programación?", "Un tipo de dato que puede ser verdadero o falso", "Un tipo de bucle", "Un tipo de array", "Un tipo de función"),
    new preg("¿Cuál es el resultado de 'true && false'?", "false", "true", "Error", "null"),
    new preg("¿Qué significa 'API' en programación?", "Application Programming Interface", "Advanced Program Interaction", "Automated Programming Interface", "Application Process Interaction"),
    new preg("¿Cuál es el lenguaje de programación utilizado para hacer consultas a bases de datos?", "SQL", "JavaScript", "Python", "C++"),
    new preg("¿Cuál es la extensión de un archivo de JavaScript?", ".js", ".html", ".css", ".py"),
    new preg("¿Qué hace la función 'document.getElementById()' en JavaScript?", "Selecciona un elemento HTML por su ID", "Crea un nuevo elemento HTML", "Elimina un elemento HTML", "Cambia el color de fondo de la página"),
    new preg("¿Cuál es la estructura de control que permite repetir un bloque de código varias veces?", "Bucle (Loop)", "Condicional (if)", "Función", "Clase"),
    new preg("¿Qué hace la función 'parseInt()' en JavaScript?", "Convierte una cadena de texto a un entero", "Muestra una ventana emergente", "Cambia el estilo de un elemento HTML", "Envía una solicitud HTTP"),
    new preg("¿Qué hace la función 'Math.random()' en JavaScript?", "Genera un número aleatorio", "Realiza una operación matemática", "Crea un bucle", "Convierte una cadena de texto a un número"),
    new preg("¿Qué significa 'DOM' en programación web?", "Document Object Model", "Digital Object Model", "Data Object Model", "Document Oriented Model"),
    new preg("¿Qué hace la función 'Array.push()' en JavaScript?", "Agrega un elemento al final de un array", "Elimina un elemento de un array", "Crea un nuevo array", "Invierte el orden de los elementos de un array"),
    new preg("¿Qué es 'Git'?", "Un sistema de control de versiones", "Un lenguaje de programación", "Una base de datos", "Un editor de texto"),
    new preg("¿Cuál es el método para declarar una función en JavaScript?", "function", "method", "define", "declare"),
    new preg("¿Qué significa 'HTTP' en programación web?", "Hypertext Transfer Protocol", "Hypertext Transformation Protocol", "Hyperlink Text Transfer Protocol", "Hypertext Testing Protocol"),
    new preg("¿Qué es 'JSON'?", "JavaScript Object Notation", "JavaScript Operation Network", "JavaScript Oriented Notation", "JavaScript Ordered Notation"),
    new preg("¿Qué es 'Ajax'?", "Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Automated JavaScript and XML", "Asynchronous JavaScript and XHTML"),
    new preg("¿Qué es 'REST'?", "Representational State Transfer", "Remote State Transfer", "Representational State Transformation", "Remote State Transformation"),
    new preg("¿Qué significa 'SQL'?", "Structured Query Language", "Simple Query Language", "Standard Query Language", "Stylish Query Language"),
    new preg("¿Qué es 'Node.js'?", "Un entorno de ejecución de JavaScript en el servidor", "Una librería de JavaScript", "Un editor de código", "Un sistema operativo"),
    new preg("¿Qué significa 'URL'?", "Uniform Resource Locator", "Universal Resource Language", "Universal Repository Locator", "Uniform Reference Language"),
    new preg("¿Cuál es el significado de 'CSS' en programación web?", "Cascading Style Sheets", "Cascading Script Styles", "Computer Style Sheets", "Creative Style Sheets"),
    new preg("¿Qué es 'HTTPS'?", "Hypertext Transfer Protocol Secure", "Hypertext Transformation Protocol Secure", "Hyperlink Text Transfer Protocol Secure", "Hypertext Testing Protocol Secure"),
    new preg("¿Qué es 'SSL'?", "Secure Sockets Layer", "Simple Secure Layer", "Secure Server Layer", "Simple Server Layer"),
    new preg("¿Qué hace la función 'fetch()' en JavaScript?", "Realiza una solicitud HTTP", "Crea un nuevo elemento HTML", "Agrega un elemento al final de un array", "Convierte una cadena de texto a un entero")
];*/

// Seleccionar 15 preguntas aleatorias
function seleccionarPreguntasAleatorias(preguntas, cantidad) {
    const preguntasAleatorias = preguntas.sort(() => Math.random() - 0.5);
    return preguntasAleatorias.slice(0, cantidad);
}


// Obtener preguntas del JSON almacenado en la variable preguntas
// Obtener preguntas del JSON almacenado en la variable preguntas
const preguntas1 = JSON.parse(localStorage.getItem("preguntas"));
const preguntasJSON = preguntas1.cuestionario;
// Crear objetos preg a partir de las preguntas del JSON
const preguntasCompletas = preguntasJSON.map(pregunta => {
    return new preg(pregunta.pregunta[0], pregunta.pregunta[1], pregunta.pregunta[2], pregunta.pregunta[3], pregunta.pregunta[4]);
});

//console.log(preguntasCompletas);
// Seleccionar 15 preguntas aleatorias de las preguntas creadas
const preguntasSeleccionadas = seleccionarPreguntasAleatorias(preguntasCompletas, 15);
//console.log(preguntasSeleccionadas);
preguntas = seleccionarPreguntasAleatorias(preguntasCompletas, 15);
console.log(preguntas);
//console.log(preguntas2);
// Variables y funciones para el juego
// Aquí puedes continuar con tu lógica de juego


//Funciones necesarias para el juego
function aparecer_ventana() {//ventana de comoddines y mensajes
    ventana.style.transform = "scale(1)";
    document.getElementById(identificacion).style.display = "block";
    clearInterval(intrv);
}

btn_comodin.onclick = () => {
    ventana.style.transform = "scale(0)";
    document.getElementById(identificacion).style.display = "none";
    if (identificacion == "resp_correcta") {
        cambiar_pregunta(preguntas[nivel].p, preguntas[nivel].op());
    }
    temporizador();
}

function cambiar_pregunta(p, r) { //funcion para cambiar la pregunta p=pregunta r=array con las respuestas
    pregunta.innerText = (nivel + 1) + ") " + p;
    for (var i = 0; i < 4; i++) {
        respuestas[i].innerText = r[i];
    }
    cont_tiempo = 31;
}

function felicidades() {//Mensaje Ganador
    ventana2.style.transform = "scale(1)";
    victoria.style.display = "inline-block";
    ganado.innerText = ganado.innerText + " " + dinero_ganado;
}

function perder() {//Mensaje Perdedor
    if (sonar) {
        intro.muted = true;
        m_perdiste.play();
    }
    ventana2.style.transform = "scale(1)";
    clearInterval(intrv);
    victoria.innerHTML = "¡Haz perdido! Intenta nuevamente";
    victoria.style.display = "inline-block";
    document.getElementById("img_vent").setAttribute("src", "medios/img/perder.jpg");
    ganado.innerText = ganado.innerText + " " + dinero_ganado;
}


//Cambio y corrección de las preguntas del juego
//Además, por cada pregunta correcta se acumula una recompenza
cambiar_pregunta(preguntas[nivel].p, preguntas[nivel].op());

for (let i = 0; i < respuestas.length; i++) {
    resp[i].onclick = () => {
        if (respuestas[i].innerText == preguntas[nivel].resp) {
            //console.log(preguntas[nivel].p, preguntas[nivel].resp, nivel);
            respuestasCorrectas.preguntas.push({
                nivel: nivel + 1,
                pregunta: preguntas[nivel].p,
                respuesta: preguntas[nivel].resp,
                aprueba: 1
            });
            identificacion = "resp_correcta";
            if (sonar) m_correcto.play();
            nivel++;
            pasaste.innerText = "Pasaste al nivel:" + (nivel + 1);
            aparecer_ventana();
            recompenza = recompenza + 10000 * (nivel);
            if (nivel > preguntas.length - 1) {
                dinero_ganado = recompenza;
                felicidades();
            } else {
                if ((nivel) % 5 == 0) {
                    dinero_ganado = recompenza;//cada vez supera un nivel (5preguntas)
                    dinero.innerText = dinero_ganado;

                }
            }
        }
        else {
            respuestasCorrectas.preguntas.push({
                nivel: nivel + 1,
                pregunta: preguntas[nivel].p,
                respuesta: preguntas[nivel].resp,
                aprueba: 0
            });
            perder()
        };
    }
}


cont_comodin.addEventListener("click", (e) => {

    if (e.target.classList.contains("comodines")) {
        e.target.style.backgroundColor = "gray";
    }

    if (amigo == false & e.target.classList.contains("icon-phone")) {
        amigo = true;
        identificacion = "llamar";
        aparecer_ventana();
        document.getElementById("correcto").innerText = preguntas[nivel].resp;
    } else if (publico == false & e.target.classList.contains("icon-users")) {
        publico = true;
        identificacion = "audiencia";
        aparecer_ventana();
        for (var i = 0; i < 4; i++) {

            if (respuestas[i].innerText == preguntas[nivel].resp) barra[i].value = "70";

        }

    } else if (mitad == false & e.target.classList.contains("mitad")) {
        mitad = true;
        let aux1 = 0;
        for (var i = 0; i < 4 & aux1 < 2; i++) {

            if (respuestas[i].innerText != preguntas[nivel].resp) {
                aux1++;
                respuestas[i].innerText = "";
            }
        }
    }
});

//Botones para rendirse o terminar el juego
rendirse.onclick = () => {
    ventana2.style.transform = "scale(1)";
    ganado.innerText = ganado.innerText + " " + dinero_ganado;
}


/*terminar.onclick = () => { //Una vez termina el juego se recarga la pagina y vuelve al inicio
    //location.reload();
    console.log(respuestasCorrectas);
    guardarRespuestas(respuestasCorrectas);
    //window.location.href = "../index.html";
}*/