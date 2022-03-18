
function cambiarImg1() {

    document.getElementById('imgoff1').src = '../Mensajes y portada/Conceptos/control2.png';
    var im = document.getElementById("imgoff1");
    cod1 = 1;

}

function cambiarImg2() {

    document.getElementById('imgoff2').src = '../Mensajes y portada/Conceptos/planeacion2.png';
    var planeacion = document.getElementById("imgoff2");
    cod3 = 2;

}

function cambiarImg3() {

    document.getElementById('imgoff3').src = '../Mensajes y portada/Conceptos/direccion2.png';
    var direccion = document.getElementById("imgoff3");
    cod5 = 3;

}

function cambiarImg4() {
    document.getElementById('imgoff4').src = '../Mensajes y portada/Conceptos/organizacion2.png';
    var organizacion = document.getElementById("imgoff4");
    cod7 = 4;
}

function cambiarImg5() {
    document.getElementById('imgoff5').src = '../Mensajes y portada/Definición/ejecucion2.png';
    var ejecucion = document.getElementById("imgoff5");
    cod6 = 3;

    if (cod5 == cod6) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/motor-medio.mp3");
        music.play();
        document.getElementById("contador").src = '../Solucion prueba tecnica/img/Contador/30.png'
        document.getElementById("cirdun").src = '../Solucion prueba tecnica/img/Circunferencia/circunferencia4.png';

    }



}

function cambiarImg6() {

    document.getElementById('imgoff6').src = '../Mensajes y portada/Definición/division2.png';
    var division = document.getElementById("imgoff6");
    cod8 = 4;

    if (cod7 == cod8) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/motor-medio.mp3");
        music.play();
        document.getElementById("contador").src = '../Solucion prueba tecnica/img/Contador/20.png'
        document.getElementById("cirdun").src = '../Solucion prueba tecnica/img/Circunferencia/circunferencia3.png';

    }



}

function cambiarImg7() {

    document.getElementById('imgoff7').src = '../Mensajes y portada/Definición/investigacion2.png';
    var investigacion = document.getElementById("imgoff7");
    cod4 = 2;

    
    if (cod3 == cod4) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/motor-medio.mp3");
        music.play();
        document.getElementById("contador").src = '../Solucion prueba tecnica/img/Contador/10.png'
        document.getElementById("cirdun").src = '../Solucion prueba tecnica/img/Circunferencia/circunferencia2.png';
    }



}

function cambiarImg8() {

    document.getElementById('imgoff8').src = '../Mensajes y portada/Definición/evaluacion2.png';
    var im2 = document.getElementById("imgoff8");
    cod2 = 1;

    if (cod1 == cod2) {
        alert("Has Logrado llenar el tanque");
        const music = new Audio("../Solucion prueba tecnica/Sonidos/motor-inciado-completamente.mp3")
        music.play();
        document.getElementById("contador").src = '../Solucion prueba tecnica/img/Contador/40.png'
        document.getElementById("cirdun").src = '../Solucion prueba tecnica/img/Circunferencia/circunferencia5.png';


        setTimeout(function () {
            document.getElementById("cirdun").src = '../Solucion prueba tecnica/img/Mensajesyportada/felicitaciones.png';
        }, 3000);
        setTimeout(function () {
            document.getElementById("cirdun").src = '../Solucion prueba tecnica/img/Mensajesyportada/derechos.png';
        }, 6000);


    }

}

function control() {

    if (cod3 !== cod6) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function planeacion() {

    if (cod3 !== cod8) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function organizacion() {

    if (cod3 !== cod2) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function planeacion1() {

    if (cod1 !== cod8) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function control1() {

    if (cod1 !== cod6) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function direccion1() {

    if (cod1 !== cod4) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function planeacion2() {

    if (cod5 !== cod8) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function direccion2() {

    if (cod5 !== cod4) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function organizacion2() {

    if (cod5 !== cod2) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function control2() {

    if (cod7 !== cod6) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function direccion3() {

    if (cod7 !== cod4) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}

function organizacion3() {

    if (cod7 !== cod2) {

        const music = new Audio("../Solucion prueba tecnica/Sonidos/alarma-eleccion erronea.mp3")
        music.play();
        setTimeout(function () {
            alert("Vuelve a intentarlo");
        }, 1000);
        setTimeout(function () {
            location.reload();
        }, 1500);

    }

}









