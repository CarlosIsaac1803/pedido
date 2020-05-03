document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    //let telefono = "";
  
    //let cliente = document.querySelector("#cliente").value;
    let tomatetexto =document.querySelector("#tomateText").value;
    let tomate     =document.querySelector("#tomateValor").value;
    let pimientotext =document.querySelector("#piminetoText").value;            
    let pimiento =document.querySelector("#pimientoValor").value;
    let cebollatext =document.querySelector("#cebollaText").value;
    let cebolla =document.querySelector("#cebollaValor").value;
    let nombre =document.querySelector("#nombre").value;
    let direccion =document.querySelector("#direccion").value;
    let horario =document.querySelector("#horario").value;
    let total =document.querySelector("#total").value;
    
    let resp = document.querySelector("#respuesta");
    console.log(tomatetexto);
    console.log(tomate);
    console.log(pimientotext);
    console.log(pimiento);
    console.log(cebollatext);
    console.log(cebolla);
    console.log(nombre);
    console.log(direccion);
    console.log(horario);
    console.log(total);
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${5491157369770}&text=
    Datos De Cliente%0A
    *Nombre*%0A
    ${nombre}%0A
    *Direccion*%0A
    ${direccion}%0A
     ............%0A
    Lista de compr%0A           
    ${tomatetexto}+%24+${tomate}%0A       
    ${pimientotext}+%24+${pimiento}%0A          
    ${cebollatext}+%24+${cebolla}%0A         
    *Total a pagar*+%24${total}%0A%0A
    *Horario de entrega*%0A
    ${horario} `; 
                
          
    if (nombre === "" || direccion === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Complete Horario de entrega, nombre, o direccion`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");    
    resp.innerHTML = `Se ha enviado su pedido`;

    //LIMPIEZA DE CAMPOS
    document.getElementById("tomateText").value=""
    document.getElementById("tomateValor").value=""
    document.getElementById("piminetoText").value=""
    document.getElementById("pimientoValor").value=""
    document.getElementById("cebollaText").value=""
    document.getElementById("cebollaValor").value=""
    document.getElementById("nombre").value=""
    document.getElementById("direccion").value=""
    document.getElementById("total").value=""

    
    window.open(url);
  });