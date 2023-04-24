const pSaludo = document.querySelector("#saludo");
const inputSaludo = document.querySelector("#entrada");

function saludar(){
    /* document.write("hola!"); */
    pSaludo.innerHTML = "Saludo ingresado: " + inputSaludo.value;
}

/* saludar(); */