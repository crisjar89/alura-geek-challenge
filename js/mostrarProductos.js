import { conexionAPI } from "./conexion_api.js";


const productos = document.querySelector("[data-cards-contenedor]");

function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.classList.add("card");
    producto.innerHTML = 
    `<img class="producto" src="${imagen}" />
    <div class="card-info">
    <h2>${nombre}</h2>
    <div class="card-valor">
        <p>$ ${precio}</p>
        <img class="trash" src="assets/trash-icon.png" id="" />
    </div>`

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto=>productos.appendChild(crearCard(producto.nombre,producto.precio,producto.imagen)))
}

listarProductos();