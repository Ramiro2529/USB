

/* Login*/
document.getElementById("user").addEventListener("focusout",function(){ // funciones callback     
    console.log(document.getElementById("user").value);
      console.log(document.getElementById("user").value);
    let elementoMensaje = document.getElementById("mensajeUsuario");
    let apellido = document.getElementById("user").value;
    if(apellido.length == 0){
        elementoMensaje.innerHTML = "Debes poner tu usuario";
    }else{
        elementoMensaje.innerHTML = "";
        
    }
});











