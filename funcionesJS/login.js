// HACER: al hacer click en el boton debe saltar un alert que diga Bienvenido usuario o similar

// debe hacer verificaciones de campos vacios y validacion de contraseñas: expresiones regex...

// si pueden implementar Sweet Alert2 seria barbaro


document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const botonEnviar = document.querySelector('.botonEnviar');

    botonEnviar.addEventListener('click', function (event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Expresión regular para validar el formato de un correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        // Validar campos vacíos y formato de correo electrónico
        if (!email.trim() || !password.trim() || !emailRegex.test(email)) {
            showAlert('Por favor completa los campos correctamente.');
            return;
        }

        // Si todos los campos pasan las validaciones
        // Muestra un mensaje de bienvenida y redirige a la página "crud.html"
        showWelcomeMessage(email);
        setTimeout(function() {
            window.location.href = "crud.html"; // Redirección después de 2 segundos
        }, 2000);
    });

    function showAlert(message) {
        Swal.fire({
            icon: 'error',
            title: 'No se permiten campos vacios',
            text: message
        });
    }

    function showWelcomeMessage(email) {
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            text: 'Inicio de sesión exitoso como ' + email
        });
    }
});


// pal menu tipo hamburguesa
function toggleMenu() {
    var menu = document.querySelector('.nav-menu');
    var hamburger = document.querySelector('.hamburger');


    menu.classList.toggle('active');
    hamburger.classList.toggle('change');
}

