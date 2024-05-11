const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

const form = document.getElementById("contactForm");

var regexNombre = /^[A-Za-z]+$/;
var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

form.addEventListener("submit", e=>{
    e.preventDefault();

    let msjal = false;
    let alerta = "";

    if(nombre.value.length == 0 || !nombre.value.match(regexNombre)){
        alerta += "Ingrese un nombre.\n";
        msjal = true;
    }

    if(!regexEmail.test(email.value)){
        alerta += "Ingrese un email valido.\n";
        msjal = true;
    }

    if(mensaje.value.length == 0){
        alerta += "Ingrese su consulta.\n";
        msjal = true;
    }

    if(msjal){
        alert(alerta);
    }
})