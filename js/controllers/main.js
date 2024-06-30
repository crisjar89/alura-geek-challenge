import { servicesProducts } from "../product.services/product.services.js";

const productos = document.querySelector("[data-cards-contenedor]");
const mensajeError = document.querySelector(".mensajes");

function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("div");
    producto.classList.add("card");
    producto.innerHTML = `
    <img class="producto" src="${imagen}" alt="${nombre}"/>
    <div class="card-info">
    <h2>${nombre}</h2>
    <div class="card-valor">
        <p>$ ${precio}</p>
        <img class="trash" src="assets/trash-icon.png" data-id="${id}" alt="trash-icon"/>
    </div>`;


    productos.appendChild(producto);
    return producto;
}

const render = async () => {
    try {
        const listarProductos = await servicesProducts.productList()
        listarProductos.forEach(producto => {
            productos.appendChild(
                crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)
            )
    });
    } catch (error) {
        const mensajeError = document.querySelector(".mensajes");
        if (mensajeError) {
            elemento.style.display = 'block';
        }
        console.log(error);
    }
}

render();