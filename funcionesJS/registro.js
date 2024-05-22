// HACER: al hacer click en el boton debe saltar un alert que diga registrados con exito o similar

// debe hacer verificaciones de campos vacios y validacion de contraseñas: expresiones regex...

// si pueden implementar Sweet Alert2 seria barbaro

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contraseña");

const form = document.getElementById("registerForm");

var regexNombre = /^[A-Za-z]+$/;
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
var regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^]){8,15}$/;

form.addEventListener("submit", e=>{
    e.preventDefault();

    let msjDatos = false;
    let alerta = "";

    if(nombre.value.length == 0 || !nombre.value.match(regexNombre)){
        alerta += "Ingrese un nombre valido.\n";
        msjDatos = true;
    }

    if(!apellido.value.match(regexNombre)){
        alerta += "Ingrese un apellido valido.\n";
        msjDatos = true;
    }

    if(!regexEmail.test(email.value)){
        alerta += "Mail incorrecto, ingrese una direccion valida.\n";
        msjDatos = true;
    }

    if(!regexContrasenia.test(contrasenia.value)){
        alerta += "Reintente su contraseña,\ndebe ser de entre 8 a 15 caracteres\ny tener al menos una mayuscula, una minuscula, \nun numero y un caracter especial";
        msjDatos = true;
    }

    if(msjDatos){
        alert(alerta);
    }

})


// pal menu tipo hamburguesa
function toggleMenu() {
    var menu = document.querySelector('.nav-menu');
    var hamburger = document.querySelector('.hamburger');


    menu.classList.toggle('active');
    hamburger.classList.toggle('change');
}