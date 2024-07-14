async function listarCard(){
    const conexion= await fetch("http://localhost:3000/cuadros");
    //const conexion= await fetch("");
    const conexionConvertida=conexion.json();
    return conexionConvertida;
};

//Aquí debemos indicar el método y qué tipo de archivo se estará enviando
async function enviarCard(name, price, image){
    return await fetch("http://localhost:3000/cuadros",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            name:name,
            price:price,
            image:image
        })
    })
};

const borrarCard = async (id) => {
    try{
        const res= await fetch(`http://localhost:3000/cuadros${id}`,{
            method: "DELETE"
        });
        return await res.json();
    } catch(err) {
        return console.log(err);
    }
}

export const conexionApi={
    listarCard,
    enviarCard,
    borrarCard
}
