// Cambio de fondo basado en la hora del día
function cambiarFondoSegunHora() {
    const horaActual = new Date().getHours();
    const login = document.querySelector('.login');
    const nube = document.querySelector('.nubes');
    const fondo = document.getElementById('background');
    const horaNocheInicio = 19; // Cambia esto a la hora en que consideras que comienza la noche
    const horaNocheFin = 6;    // Cambia esto a la hora en que consideras que termina la noche

    if (horaActual >= horaNocheInicio || horaActual < horaNocheFin) {
        fondo.style.backgroundImage = "url('img/fondomontana4.jpeg')";
        login.style.borderColor = "rgba(0, 0, 0, 0.2)";
        login.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else {
        fondo.style.backgroundImage = "url('img/fondomontana2.jpeg')";
        login.style.borderColor = "rgba(253, 197, 171, 0.4)";
        login.style.backgroundColor = "rgba(71, 87, 131, 0.5)";
        nube.style.opacity = "0.5";
    }
}

// Ejecuta la función al cargar la página
window.addEventListener('load', cambiarFondoSegunHora);
