let letrasPattern=/^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;
let letrasNumbers=/^[0-9]+$/;

var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
let email = document.getElementById("correo");

console.log(emailPattern.test(correo.value));

document.getElementById("Name").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("mensajeNombre");
    let nombre = document.getElementById("Name").value;
    if(nombre.length == 0){
        elementoMensajeN.innerHTML = "Debes de poner tu Nombre";
    }else{
        elementoMensajeN.innerHTML = "";
        let correctoNombre = letrasPattern.test(nombre);
        if(correctoNombre == false){
            elementoMensajeN.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensajeN.innerHTML = "";
        }
    }
});

document.getElementById("apellido").addEventListener("focusout",function(){    

    let elementoMensajeN1 = document.getElementById("mensajeApellido");
    let apellidos = document.getElementById("apellido").value;
    if(apellidos.length == 0){
        elementoMensajeN1.innerHTML = "Debes de poner tu Apellido";
    }else{
        elementoMensajeN1.innerHTML = "";
        let correctoNombre = letrasPattern.test(apellidos);
        if(correctoNombre == false){
            elementoMensajeN1.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensajeN1.innerHTML = "";
        }
    }
});


document.getElementById("correo").addEventListener("focusout",function(){    

    let elementoMensajeN1 = document.getElementById("mensajeCorreo");
    let correo = document.getElementById("correo").value;
    if(correo.length == 0){
        elementoMensajeN1.innerHTML = "Debes de poner tu correo";
    }else{
        elementoMensajeN1.innerHTML = "";
        
    }
});


document.getElementById("direccion").addEventListener("focusout",function(){    

    let elementoMensajeN1 = document.getElementById("mensajeDireccion");
    let dir = document.getElementById("direccion").value;
    if(dir.length == 0){
        elementoMensajeN1.innerHTML = "Debes de poner tu correo";
    }else{
        elementoMensajeN1.innerHTML = "";
        
    }
});

document.getElementById("ciudad").addEventListener("focusout",function(){    

    let elementoMensajeN1 = document.getElementById("mensajeCiudad");
    let ciu = document.getElementById("ciudad").value;
    if(ciu.length == 0){
        elementoMensajeN1.innerHTML = "Debes de poner tu ciudad";
    }else{
        elementoMensajeN1.innerHTML = "";
        
    }
});

document.getElementById("codigo").addEventListener("focusout",function(){    

    let elementoMensajeN1 = document.getElementById("mensajeCodigo");
    let cod = document.getElementById("codigo").value;
    if(cod.length == 0){
        elementoMensajeN1.innerHTML = "Debes de poner tu ciudad";
    }else{
        elementoMensajeN1.innerHTML = "";
        let correctoCod = letrasNumbers.test(cod);
        if(correctoCod == false){
            elementoMensajeN1.innerHTML = "Solo se pueden numeros";
        }else{
            elementoMensajeN1innerHTML = "";

            
        }
        
    }
});




