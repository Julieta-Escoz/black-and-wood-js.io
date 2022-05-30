

const btn = document.querySelector("[data-form-btn]");

function form(nombre, apellido, mail, telefono, mensaje) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.telefono = telefono;
    this.mensaje = mensaje;
}



btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const newForm = new form(document.querySelector("[data-form-nombre]"), document.querySelector("[data-form-apellido]"), document.querySelector("[data-form-mail]"), document.querySelector("[data-form-telefono]"), document.querySelector("[data-form-mensaje]"));

    if (strValidation(newForm.nombre) && strValidation(newForm.apellido) && mailValidation(newForm.mail) && telefonoValidation(newForm.telefono) && mensajeValidation(newForm.mensaje)) {
        alert("mensaje enviado correctamente");
        location.reload();
    }
});


function strValidation(str) {

    if (str.value.length === 0) {
        alert(str.name + " se encuentra vacio.");
    }else if (!isNaN(str.value) || strHaveSpecialCharts(str.value) === 1) {
        alert("El " + str.name + " ingresado contiene carácteres incorrectos, intente nuevamente.");
    }else {
        return true;
    }

}


function strHaveSpecialCharts(str) {
    var specialCharts = "!#$%&@=*+_-,.'?¡¿";

    for (i = 0; i < str.length; i++) {
        if (specialCharts.indexOf(str.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}

function mailValidation(mail) {

    if (!/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/.test(mail.value)) {
        alert("La dirección de email es incorrecta, intente nuevamente.");
    }else{
        return true;
    }
    
}

function telefonoValidation(telefono) {

    if (telefono.value.length <= 9 || strHaveSpecialCharts(telefono.value) === 1 || isNaN(telefono.value)) {
        alert("el telefono ingresado es incorrecto, intente nuevamente");
    }
    else {
        return true;
    }
}

function mensajeValidation(mensaje) {

    if (mensaje.value.length <= 3) {
        alert("el mensaje es demaciado corto, intente nuevamente");
    }else{
        return true;
    }
}
