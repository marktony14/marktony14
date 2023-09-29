// Cambio de fondo basado en la hora del día
function cambiarFondoSegunHora() {
    const horaActual = new Date().getHours();
    const login = document.querySelector('.login');
    const nube = document.querySelector('.nubes');
    const fondo = document.getElementById('background');
    const horaNocheInicio = 19;
    const horaNocheFin = 6;

    // Verifica si la pantalla es lo suficientemente ancha para mostrar el fondo de celular
    const esPantallaCelular = window.innerWidth <= 767;

    if (esPantallaCelular) {
        // Si es una pantalla de celular, ajusta el fondo y otros estilos para celular
        fondo.style.backgroundImage = horaActual >= horaNocheInicio || horaActual < horaNocheFin
            ? "url('img/fondomontana4cel.jpeg')" // Fondo para celular de noche
            : "url('img/fondomontana2cel.jpeg')"; // Fondo para celular de día
        // También puedes ajustar otros estilos específicos para celulares aquí
    } else {
        // Si no es una pantalla de celular, usa tu lógica original para cambiar fondos
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
}

// Ejecuta la función al cargar la página
window.addEventListener('load', cambiarFondoSegunHora);

// Y también ejecuta la función cuando cambie el tamaño de la ventana
window.addEventListener('resize', cambiarFondoSegunHora);
