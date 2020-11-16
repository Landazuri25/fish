function iniciar() {
    var correoE = document.getElementById('correo').value;
    var pass= document.getElementById('contraseña').value;

    if(!localStorage.hasOwnProperty(correoE)) {
        alert("Cuenta no registrada");
        console.log("No existe esta cuenta")
    } else if(localStorage.getItem(correoE) == pass) {
        alert("Bienvenido,Gracias por visitarnos ");
        console.log("Inicio de sesion exitoso")
        location.href="index.html";
    } else {
        alert("Contraseña incorrecta");
        console.log("Contraseña incorrecta")
    }     
}