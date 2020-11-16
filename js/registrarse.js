function registrarse(){
	var nombre = document.getElementById('nombre').value;    
    var apellidos = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;
    localStorage.setItem(correo,contraseña);
    alert("Registro completado, Inicie sesion!");
    document.getElementById("registrarse").reset();

    console.log(nombre);
    console.log(apellidos);
    console.log(correo);
    console.log(contraseña);
}