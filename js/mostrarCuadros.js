import { conexionApi } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]"); //contenedor de los cuadros

function crearCard(name, price, image, id){
    //creamos la card que contiene el nombre, precio y url de la imagen
    const card = document.createElement("div");
    card.className="marco-card";

    //Creamos la estructura dentro del div 
    card.innerHTML=`<img src="${image}" alt="Imagen Caballero del Zodiaco" class="imagen-cuadro">
        <p class="name-card">${name}</p>
        <p class="price">${price} pesos</p>
        <button class="btn-eliminar" data-id="${id}">
            <div class="icono-papelera">
                <img src="img/btn-borrar.png" alt=" Botón eliminar">
            </div>
        </button>`;
    
    //Código para eliminar la card desde el botón papelera
    const botonEliminar =card.querySelector(".btn-eliminar");
    botonEliminar.addEventListener("click", () => {
        conexionApi.borrarCard(id)
        .then(() => {
            card.remove();
        })
        .catch(err => console.log(err));
    });

    lista.appendChild(card);
    return card;
}

const cuadro = async () => {
    try{
        const listaApi= await conexionApi.listarCard()

        listaApi.forEach(card => {
            lista.appendChild(
                crearCard(
                    
                    card.name,
                    card.price,
                    card.image),
                    card.id
                );
    });

    } catch(error) {
        console.log(error)
    };

};

cuadro()
