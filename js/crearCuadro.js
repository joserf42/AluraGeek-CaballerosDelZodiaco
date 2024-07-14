import { conexionApi } from "./conexionAPI.js";


const formulario = document.querySelector("[data-formulario]");

function esURLValida(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}

async function crearCard(evento){
    evento.preventDefault();

    const name=document.querySelector("[data-titulo]").value.trim();
    const price=document.querySelector("[data-tecnica]").value.trim();
    const image=document.querySelector("[data-imagen]").value.trim();

    if (!name || !price || !image) {
        alert("Señor usuario Complete todos los campos antes de enviar los datos.");
        return;
    }

    if (!esURLValida(image)) {
        alert("Ingresa una dirección(url) válida.");
        return;
    }

    try {
        await conexionApi.enviarCard(name,price,image);
        //Envíando los datos del nuevo cuadro
        
        //Se Limpia el formulario después del envío exitoso
        formulario.reset();
        
        //Recargar la página
        window.location.reload();
    } catch (error){
        console.log("Error al enviar los datos: ", error);
    }    
    
    
}

formulario.addEventListener("submit", crearCard);
